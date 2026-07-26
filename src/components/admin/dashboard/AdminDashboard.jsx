import { useSelector, useDispatch } from "react-redux";
import { MdWork, MdTrendingUp, MdPeople, MdOutlineRocketLaunch, MdArrowForward, MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getAllMessages } from "../../../store/message/messageThunks";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => state.projects);
  const { messages } = useSelector((state) => state.message);

  useEffect(() => {
    dispatch(getAllMessages());
  }, [dispatch]);

  const unreadCount = messages.filter(m => m.status === 'unread').length;

  const stats = [
    {
      title: "Total Projects",
      value: projects.length,
      icon: MdWork,
      color: "blue",
      description: "Portfolio projects",
      to: "/admin/projects"
    },
    {
      title: "Recent Updates",
      value: "3",
      icon: MdTrendingUp,
      color: "emerald",
      description: "Updated this week",
      to: "/admin/home"
    },
    {
      title: "Direct Messages",
      value: messages.length,
      icon: MdEmail,
      color: unreadCount > 0 ? "indigo" : "blue",
      description: unreadCount > 0 ? `${unreadCount} unread messages` : "No new messages",
      to: "/admin/messages"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "from-blue-600 to-blue-400 text-white",
      emerald: "from-emerald-600 to-emerald-400 text-white",
      indigo: "from-indigo-600 to-indigo-400 text-white"
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-1000">
      {/* Hero Welcome */}
      <div className="relative overflow-hidden bg-slate-900 rounded-2xl p-10 text-white shadow-2xl">
        <div className="absolute top-0 right-0 -m-20 w-80 h-80 bg-blue-600/20 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 -m-20 w-60 h-60 bg-indigo-600/20 rounded-full blur-[80px]"></div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-blue-400 font-bold tracking-widest uppercase text-xs">
              <MdOutlineRocketLaunch className="text-lg" />
              <span>Admin Control Center</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight">
              Welcome back, <span className="bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Developer</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-xl">
              Your portfolio is currently live and receiving traffic. Manage your content and check your stats below.
            </p>
          </div>
          <Link to="/admin/projects" className="group flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold transition-all hover:bg-blue-50 hover:scale-105 shadow-lg">
            Manage Projects
            <MdArrowForward className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Link
              key={index}
              to={stat.to}
              className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-4">
                  <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    {stat.title}
                  </p>
                  <p className="text-5xl font-black text-slate-900 dark:text-white">
                    {stat.value}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                    {stat.description}
                  </p>
                </div>
                <div className={`p-4 rounded-2xl bg-linear-to-br shadow-lg shadow-blue-500/20 ${getColorClasses(stat.color)}`}>
                  <Icon className="text-3xl" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              Recent Activity
            </h2>
            <button className="text-sm font-bold text-blue-600 hover:text-blue-700">View All</button>
          </div>
          <div className="space-y-6">
            {[
              { title: "Portfolio database synced", time: "2 hours ago", color: "blue", dot: "bg-blue-600" },
              { title: "New project: AI Dashboard added", time: "1 day ago", color: "emerald", dot: "bg-emerald-600" },
              { title: "Education details updated", time: "3 days ago", color: "indigo", dot: "bg-indigo-600" },
              { title: "About section modified", time: "1 week ago", color: "purple", dot: "bg-purple-600" }
            ].map((activity, i) => (
              <div key={i} className="group flex items-center gap-5 p-4 rounded-3xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 transition-colors border border-transparent hover:border-slate-200 cursor-pointer">
                <div className={`w-3 h-3 ${activity.dot} rounded-full shadow-[0_0_12px_rgba(37,99,235,0.4)]`}></div>
                <div className="flex-1">
                  <p className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                    {activity.title}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Health / Quick Info */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-linear-to-br from-indigo-700 to-blue-900 rounded-2xl p-8 text-white shadow-xl">
            <h2 className="text-xl font-bold mb-2">System Status</h2>
            <p className="text-indigo-100 text-sm mb-6 font-medium">Server and Database are responding normally.</p>
            <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl backdrop-blur-md">
              <div className="w-10 h-10 rounded-full bg-emerald-400 animate-pulse flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-emerald-600"></div>
              </div>
              <span className="font-bold tracking-wide">All Services Operational</span>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Quick Links</h2>
            <div className="grid grid-cols-2 gap-4">
              {['Contact', 'Settings', 'Log Log', 'Support'].map(link => (
                <button key={link} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 font-bold text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white transition-all text-sm">
                  {link}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
