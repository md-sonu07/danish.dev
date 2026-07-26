import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMessages, deleteMessage, markAsRead } from '../../../store/message/messageThunks';
import { resetStatus } from '../../../store/message/messageSlice';
import { toast } from 'react-hot-toast';
import ConfirmationModal from '../../common/ConfirmationModal';
import { MdEmail, MdDelete, MdMarkEmailRead, MdMarkEmailUnread, MdOutlineAnnouncement, MdAccessTime, MdPerson } from 'react-icons/md';

const MessageIndex = () => {
    const dispatch = useDispatch();
    const { messages, loading, success, error } = useSelector((state) => state.message);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [msgToDelete, setMsgToDelete] = useState(null);

    useEffect(() => {
        dispatch(getAllMessages());
    }, [dispatch]);

    useEffect(() => {
        if (success) {
            toast.success("Directive neutralized successfully.");
            dispatch(resetStatus());
        }
        if (error) {
            toast.error(error.message || "Neutralization failed.");
        }
    }, [success, error, dispatch]);

    const handleDelete = (id) => {
        setMsgToDelete(id);
        setIsModalOpen(true);
    };

    const confirmDelete = () => {
        if (msgToDelete) {
            dispatch(deleteMessage(msgToDelete));
            setMsgToDelete(null);
        }
    };

    const handleToggleRead = (id) => {
        dispatch(markAsRead(id));
    };

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-1000">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-2">
                    <div className="flex items-center gap-3 text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase text-xs">
                        <MdEmail className="text-lg" />
                        <span>Communications Hub</span>
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                        Inbox <span className="bg-linear-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Directives</span>
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 text-lg">
                        Manage incoming inquiries and connect with your audience.
                    </p>
                </div>
            </div>

            {loading && messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-32 space-y-4">
                    <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent animate-spin rounded-full"></div>
                    <p className="font-black text-slate-400 uppercase tracking-widest text-[10px]">Retrieving Communications...</p>
                </div>
            ) : messages.length === 0 ? (
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-4xl p-20 text-center space-y-6">
                    <div className="w-24 h-24 bg-slate-50 dark:bg-slate-800/50 rounded-full flex items-center justify-center mx-auto">
                        <MdOutlineAnnouncement className="text-5xl text-slate-300 dark:text-slate-700" />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white">Radios Are Silent</h3>
                        <p className="text-slate-500 font-medium">No messages have arrived in your inbox yet.</p>
                    </div>
                </div>
            ) : (
                <div className="grid gap-6">
                    {messages.map((msg) => (
                        <div
                            key={msg._id}
                            className={`group relative bg-white dark:bg-slate-900 border ${msg.status === 'unread'
                                ? 'border-indigo-200 dark:border-indigo-900/50 shadow-xl shadow-indigo-500/5 bg-indigo-50/10 dark:bg-indigo-900/10'
                                : 'border-slate-200 dark:border-slate-800'
                                } rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl`}
                        >
                            {/* Unread Indicator */}
                            {msg.status === 'unread' && (
                                <div className="absolute top-8 right-8 w-3 h-3 bg-indigo-600 rounded-full animate-pulse shadow-lg shadow-indigo-500/50"></div>
                            )}

                            <div className="flex flex-col lg:flex-row gap-8">
                                {/* Meta Info */}
                                <div className="lg:w-1/4 space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center">
                                            <MdPerson className="text-2xl text-slate-500" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Sender</p>
                                            <h4 className="font-black text-slate-900 dark:text-white truncate">{msg.name}</h4>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 text-slate-500">
                                        <MdEmail className="text-lg shrink-0" />
                                        <span className="text-sm font-bold truncate">{msg.email}</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-slate-400">
                                        <MdAccessTime className="text-lg shrink-0" />
                                        <span className="text-[10px] font-black uppercase tracking-widest">
                                            {new Date(msg.createdAt).toLocaleDateString(undefined, {
                                                month: 'short',
                                                day: 'numeric',
                                                year: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })}
                                        </span>
                                    </div>
                                </div>

                                {/* Message Content */}
                                <div className="lg:w-2/3 space-y-4">
                                    <div>
                                        <p className="text-[10px] font-black text-indigo-500 uppercase tracking-widest mb-1">Subject Directive</p>
                                        <h3 className="text-xl font-black text-slate-900 dark:text-white">{msg.subject}</h3>
                                    </div>
                                    <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-100 dark:border-slate-700/50">
                                        <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed whitespace-pre-wrap">
                                            {msg.message}
                                        </p>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="lg:w-1/12 flex flex-row lg:flex-col justify-center items-center gap-4 border-t lg:border-t-0 lg:border-l border-slate-100 dark:border-slate-800 pt-6 lg:pt-0 lg:pl-6">
                                    <button
                                        onClick={() => handleToggleRead(msg._id)}
                                        className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${msg.status === 'unread'
                                            ? 'bg-indigo-600 text-white hover:scale-110 shadow-lg shadow-indigo-500/30'
                                            : 'bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-indigo-600'
                                            }`}
                                        title={msg.status === 'unread' ? "Mark as Read" : "Mark as Unread"}
                                    >
                                        {msg.status === 'unread' ? <MdMarkEmailUnread className="text-xl" /> : <MdMarkEmailRead className="text-xl" />}
                                    </button>
                                    <button
                                        onClick={() => handleDelete(msg._id)}
                                        className="w-12 h-12 rounded-2xl bg-red-50 dark:bg-red-900/10 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all hover:scale-110 shadow-lg shadow-red-500/10"
                                        title="Delete Message"
                                    >
                                        <MdDelete className="text-xl" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <ConfirmationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={confirmDelete}
                title="Dismiss Directive?"
                message="Are you sure you want to permanently neutralize this communication? This action cannot be revoked."
                confirmText="Neutralize Message"
            />
        </div>
    );
};

export default MessageIndex;
