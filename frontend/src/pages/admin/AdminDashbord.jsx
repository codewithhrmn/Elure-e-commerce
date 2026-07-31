import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const API = import.meta.env.VITE_API_URL || 'http://localhost:3000';

function authHeaders() {
  const token = localStorage.getItem('admin_token');
  return { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' };
}

async function apiFetch(path, opts = {}) {
  const res = await fetch(`${API}/api/admin/${path}`, {
    ...opts,
    headers: { ...authHeaders(), ...(opts.headers || {}) },
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

// ── Sidebar nav items ──
const NAV_ITEMS = [
  { view: 'products',   icon: 'inventory_2',   label: 'Products' },
  { view: 'categories', icon: 'category',      label: 'Categories' },
  { view: 'orders',     icon: 'shopping_bag',  label: 'Orders' },
  { view: 'users',      icon: 'group',         label: 'Users' },
];

const STATUS_COLORS = {
  pending:   'bg-secondary/20 text-secondary border border-secondary/30',
  paid:      'bg-green-100 text-green-700 border border-green-300',
  shipped:   'bg-blue-100 text-blue-700 border border-blue-300',
  delivered: 'bg-surface-container-high text-on-surface-variant border border-outline-variant',
  cancelled: 'bg-error/10 text-error border border-error/30',
};

// ── Stat Card ──
function StatCard({ label, value, icon, sub }) {
  return (
    <div
      className="bg-white p-8 relative overflow-hidden group cursor-default"
      style={{ borderLeft: '1px solid rgba(119,90,25,0.1)', transition: 'all 0.4s cubic-bezier(0.165,0.84,0.44,1)' }}
      onMouseEnter={e => e.currentTarget.style.borderLeft = '1px solid #775a19'}
      onMouseLeave={e => e.currentTarget.style.borderLeft = '1px solid rgba(119,90,25,0.1)'}
    >
      <div className="flex justify-between items-start mb-6">
        <div>
          <p className="font-label-caps text-on-surface-variant text-[10px] mb-2 uppercase tracking-widest">{label}</p>
          <h3 className="font-display-lg text-[38px] leading-none">{value}</h3>
        </div>
        <span className="material-symbols-outlined text-3xl text-secondary">{icon}</span>
      </div>
      {sub && <p className="font-label-caps text-[9px] text-on-surface-variant">{sub}</p>}
    </div>
  );
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState('products');
  const [stats, setStats] = useState(null);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState('');

  // Show toast message briefly
  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 3000);
  };

  // Auth guard
  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) navigate('/admin');
  }, [navigate]);

  // Load all data on mount
  useEffect(() => {
    const loadAll = async () => {
      setLoading(true);
      try {
        const [s, p, c, o, u] = await Promise.all([
          apiFetch('stats'),
          apiFetch('products'),
          apiFetch('categories'),
          apiFetch('orders'),
          apiFetch('users'),
        ]);
        setStats(s);
        setProducts(p);
        setCategories(c);
        setOrders(o);
        setUsers(u);
      } catch (err) {
        if (err.message.includes('401') || err.message.includes('403')) {
          localStorage.removeItem('admin_token');
          navigate('/admin');
        }
      } finally {
        setLoading(false);
      }
    };
    loadAll();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_user');
    navigate('/admin');
  };

  const handleDeleteProduct = async (id) => {
    if (!window.confirm('Delete this product?')) return;
    try {
      await apiFetch(`products/${id}`, { method: 'DELETE' });
      setProducts(prev => prev.filter(p => p.id !== id));
      showToast('Product deleted');
    } catch { showToast('Delete failed'); }
  };

  const handleDeleteUser = async (id) => {
    if (!window.confirm('Delete this user?')) return;
    try {
      await apiFetch(`users/${id}`, { method: 'DELETE' });
      setUsers(prev => prev.filter(u => u.id !== id));
      showToast('User deleted');
    } catch { showToast('Delete failed'); }
  };

  const handleOrderStatus = async (id, status) => {
    try {
      const updated = await apiFetch(`orders/${id}/status`, {
        method: 'PUT',
        body: JSON.stringify({ status }),
      });
      setOrders(prev => prev.map(o => o.id === id ? { ...o, status: updated.status } : o));
      showToast(`Order updated to ${status}`);
    } catch { showToast('Update failed'); }
  };

  const adminUser = JSON.parse(localStorage.getItem('admin_user') || '{}');

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 relative mx-auto mb-6">
            <div className="absolute inset-0 border-t-2 border-secondary rounded-full animate-spin" />
          </div>
          <p className="font-label-caps text-on-surface-variant tracking-widest">LOADING PORTAL...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="font-body-md bg-background min-h-screen">

      {/* Toast */}
      {toast && (
        <div className="fixed top-6 right-6 z-[200] bg-primary text-on-primary px-6 py-3 font-label-caps text-[11px] tracking-widest shadow-xl">
          {toast}
        </div>
      )}

      {/* Sidebar */}
      <aside
        className="h-screen w-64 fixed left-0 top-0 flex flex-col py-8 overflow-y-auto border-r border-secondary/20 z-50"
        style={{ backgroundColor: '#1a1c1c' }}
      >
        <div className="px-8 mb-12">
          <h1 className="text-secondary tracking-tighter uppercase" style={{ fontFamily: 'Bodoni Moda, serif', fontSize: '22px', fontWeight: 600 }}>
            ELURE ADMIN
          </h1>
          <p className="font-label-caps text-[10px] mt-1" style={{ color: 'rgba(131,132,132,0.6)' }}>Executive Portal</p>
        </div>

        <nav className="flex-1 space-y-1">
          {NAV_ITEMS.map(item => (
            <button
              key={item.view}
              onClick={() => setActiveView(item.view)}
              className="w-full flex items-center gap-4 py-3 pl-8 transition-all duration-300"
              style={{
                color: activeView === item.view ? '#ffffff' : 'rgba(131,132,132,0.6)',
                borderLeft: activeView === item.view ? '2px solid #775a19' : '2px solid transparent',
                background: activeView === item.view ? 'rgba(119,90,25,0.1)' : 'transparent',
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{ color: activeView === item.view ? '#775a19' : 'inherit' }}
              >
                {item.icon}
              </span>
              <span className="font-label-caps">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="px-8 mt-auto pt-8 border-t" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
          <button
            onClick={handleLogout}
            className="flex items-center gap-4 py-2 transition-colors duration-300"
            style={{ color: 'rgba(131,132,132,0.6)' }}
            onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(131,132,132,0.6)'}
          >
            <span className="material-symbols-outlined">logout</span>
            <span className="font-label-caps">Logout</span>
          </button>
        </div>
      </aside>

      {/* Top Header */}
      <header className="flex justify-between items-center ml-64 px-16 py-6 bg-surface/90 backdrop-blur-md sticky top-0 z-40 border-b border-secondary/10">
        <h2 className="font-display-lg text-headline-md text-primary tracking-tighter uppercase">
          {NAV_ITEMS.find(n => n.view === activeView)?.label || 'Overview'}
        </h2>
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 rounded-full bg-surface-container-high border border-secondary/20 flex items-center justify-center">
            <span className="font-label-caps text-xs text-secondary">
              {adminUser?.fullName?.[0] || 'A'}
            </span>
          </div>
          <span className="font-label-caps text-[11px] text-on-surface-variant">{adminUser?.email || 'Admin'}</span>
        </div>
      </header>

      {/* Main content */}
      <main className="ml-64 p-16 space-y-12 pb-24">

        {/* Stats row — always visible */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard label="Total Revenue" value={`$${stats.totalRevenue.toLocaleString()}`} icon="trending_up" sub="+FROM PAID ORDERS" />
            <StatCard label="Active Orders" value={stats.totalOrders} icon="shopping_bag" sub={`${stats.pendingOrders} PENDING`} />
            <StatCard label="Members" value={stats.totalUsers} icon="person_add" sub={`${stats.newMembersThisMonth} NEW THIS MONTH`} />
          </div>
        )}

        {/* ── PRODUCTS VIEW ── */}
        {activeView === 'products' && (
          <section style={{ animation: 'fadeIn 0.4s ease-out' }}>
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="font-headline-md text-primary mb-1">Curated Collection</h2>
                <p className="font-body-md text-on-surface-variant italic opacity-70">
                  {products.length} products in catalog
                </p>
              </div>
            </div>
            <div className="bg-white overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-secondary/10">
                    {['PRODUCT', 'CATEGORY', 'GENDER', 'STOCK', 'PRICE', 'ACTIONS'].map(h => (
                      <th key={h} className="p-6 font-label-caps text-[10px] text-on-surface-variant tracking-widest">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-secondary/5">
                  {products.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="p-12 text-center font-body-md text-on-surface-variant italic">
                        No products yet. Add products via the API.
                      </td>
                    </tr>
                  ) : products.map(p => (
                    <tr key={p.id} className="hover:bg-surface-container-low transition-colors group">
                      <td className="p-6">
                        <div className="flex items-center gap-4">
                          {p.imageUrl && (
                            <div className="w-14 h-18 bg-surface-variant overflow-hidden shrink-0" style={{ height: '72px' }}>
                              <img src={p.imageUrl} alt={p.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            </div>
                          )}
                          <span className="font-body-md font-medium text-primary">{p.name}</span>
                        </div>
                      </td>
                      <td className="p-6 font-label-caps text-xs">{p.category?.name || '—'}</td>
                      <td className="p-6 font-label-caps text-xs">{p.gender || '—'}</td>
                      <td className="p-6 font-label-caps text-xs">{p.stock}</td>
                      <td className="p-6 font-display-lg text-lg text-right">${Number(p.price).toLocaleString()}</td>
                      <td className="p-6">
                        <button
                          onClick={() => handleDeleteProduct(p.id)}
                          className="material-symbols-outlined transition-colors"
                          style={{ color: 'rgba(76,69,70,0.5)' }}
                          onMouseEnter={e => e.currentTarget.style.color = '#ba1a1a'}
                          onMouseLeave={e => e.currentTarget.style.color = 'rgba(76,69,70,0.5)'}
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* ── CATEGORIES VIEW ── */}
        {activeView === 'categories' && (
          <section style={{ animation: 'fadeIn 0.4s ease-out' }}>
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="font-headline-md text-primary mb-1">Departments</h2>
                <p className="font-body-md text-on-surface-variant italic opacity-70">
                  {categories.length} categories configured
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.length === 0 ? (
                <div className="col-span-3 p-12 text-center bg-white font-body-md text-on-surface-variant italic">
                  No categories yet.
                </div>
              ) : categories.map(cat => (
                <div
                  key={cat.id}
                  className="bg-white p-8 flex flex-col justify-between"
                  style={{ borderLeft: '1px solid rgba(119,90,25,0.1)', transition: 'all 0.4s' }}
                  onMouseEnter={e => e.currentTarget.style.borderLeft = '1px solid #775a19'}
                  onMouseLeave={e => e.currentTarget.style.borderLeft = '1px solid rgba(119,90,25,0.1)'}
                >
                  <h4 className="font-display-lg text-2xl text-primary">{cat.name}</h4>
                  <p className="font-label-caps text-[10px] text-on-surface-variant mt-2">ID: {cat.id}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── ORDERS VIEW ── */}
        {activeView === 'orders' && (
          <section style={{ animation: 'fadeIn 0.4s ease-out' }}>
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="font-headline-md text-primary mb-1">Order Manifest</h2>
                <p className="font-body-md text-on-surface-variant italic opacity-70">
                  Tracking {orders.length} orders
                </p>
              </div>
            </div>
            <div className="bg-white overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-secondary/10">
                    {['ORDER ID', 'CLIENT', 'STATUS', 'DELIVERY', 'UPDATE STATUS', 'TOTAL'].map(h => (
                      <th key={h} className="p-6 font-label-caps text-[10px] text-on-surface-variant tracking-widest">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-secondary/5">
                  {orders.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="p-12 text-center font-body-md text-on-surface-variant italic">
                        No orders yet.
                      </td>
                    </tr>
                  ) : orders.map(order => (
                    <tr key={order.id} className="hover:bg-surface-container-low transition-colors">
                      <td className="p-6 font-label-caps text-xs text-secondary">#{order.id}</td>
                      <td className="p-6">
                        <div className="font-body-md font-medium">{order.user?.fullName || `User #${order.userId}`}</div>
                        <div className="text-[10px] text-on-surface-variant">{order.user?.email || ''}</div>
                      </td>
                      <td className="p-6">
                        <span className={`px-3 py-1 font-label-caps text-[9px] tracking-wider ${STATUS_COLORS[order.status] || ''}`}>
                          {order.status?.toUpperCase()}
                        </span>
                      </td>
                      <td className="p-6 font-label-caps text-xs">{order.deliveryMethod || '—'}</td>
                      <td className="p-6">
                        <select
                          value={order.status}
                          onChange={e => handleOrderStatus(order.id, e.target.value)}
                          className="bg-white border border-secondary/20 font-label-caps text-[10px] px-3 py-2 focus:ring-0 focus:border-secondary cursor-pointer"
                        >
                          {['pending', 'paid', 'shipped', 'delivered', 'cancelled'].map(s => (
                            <option key={s} value={s}>{s.toUpperCase()}</option>
                          ))}
                        </select>
                      </td>
                      <td className="p-6 font-display-lg text-lg">${Number(order.totalAmount).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* ── USERS VIEW ── */}
        {activeView === 'users' && (
          <section style={{ animation: 'fadeIn 0.4s ease-out' }}>
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="font-headline-md text-primary mb-1">Members</h2>
                <p className="font-body-md text-on-surface-variant italic opacity-70">
                  {users.length} registered accounts
                </p>
              </div>
            </div>
            <div className="bg-white overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-secondary/10">
                    {['MEMBER', 'ROLE', 'JOINED', 'ACTIONS'].map(h => (
                      <th key={h} className="p-6 font-label-caps text-[10px] text-on-surface-variant tracking-widest">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-secondary/5">
                  {users.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="p-12 text-center font-body-md text-on-surface-variant italic">
                        No users yet.
                      </td>
                    </tr>
                  ) : users.map(user => (
                    <tr key={user.id} className="hover:bg-surface-container-low transition-colors group">
                      <td className="p-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-label-caps text-xs shrink-0">
                            {user.fullName?.[0]?.toUpperCase() || '?'}
                          </div>
                          <div>
                            <div className="font-body-md font-medium">{user.fullName}</div>
                            <div className="text-[11px] text-on-surface-variant">{user.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-6">
                        <span className={`px-3 py-1 font-label-caps text-[9px] tracking-wider ${
                          user.role === 'admin'
                            ? 'bg-primary text-on-primary'
                            : 'bg-secondary/10 text-secondary border border-secondary/20'
                        }`}>
                          {user.role?.toUpperCase()}
                        </span>
                      </td>
                      <td className="p-6 font-label-caps text-xs text-on-surface-variant">
                        {user.createdAt ? new Date(user.createdAt).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }) : '—'}
                      </td>
                      <td className="p-6">
                        {user.role !== 'admin' && (
                          <button
                            onClick={() => handleDeleteUser(user.id)}
                            className="material-symbols-outlined transition-colors"
                            style={{ color: 'rgba(76,69,70,0.5)' }}
                            onMouseEnter={e => e.currentTarget.style.color = '#ba1a1a'}
                            onMouseLeave={e => e.currentTarget.style.color = 'rgba(76,69,70,0.5)'}
                          >
                            delete
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}
      </main>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
