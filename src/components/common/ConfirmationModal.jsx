import React from 'react';
import { MdClose, MdWarning } from 'react-icons/md';

const ConfirmationModal = ({
    isOpen,
    onClose,
    onConfirm,
    title = "Confirm Action",
    message = "Are you sure you want to proceed?",
    confirmText = "Proceed",
    cancelText = "Cancel",
    type = "danger" // danger, warning, info
}) => {
    if (!isOpen) return null;

    const colors = {
        danger: "from-red-600 to-rose-600 shadow-red-500/20",
        warning: "from-amber-500 to-orange-600 shadow-amber-500/20",
        info: "from-indigo-600 to-blue-600 shadow-indigo-500/20"
    };

    const icons = {
        danger: "text-red-500 bg-red-50 dark:bg-red-900/20",
        warning: "text-amber-500 bg-amber-50 dark:bg-amber-900/20",
        info: "text-indigo-500 bg-indigo-50 dark:bg-indigo-900/20"
    };

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center px-4 overflow-hidden">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm animate-in fade-in duration-300"
                onClick={onClose}
            ></div>

            {/* Modal */}
            <div className="relative w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-5 duration-300 overflow-hidden">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 transition-colors"
                >
                    <MdClose className="text-xl" />
                </button>

                <div className="p-10 space-y-8">
                    {/* Icon & Title */}
                    <div className="flex flex-col items-center text-center space-y-4">
                        <div className={`w-20 h-20 rounded-3xl flex items-center justify-center text-3xl ${icons[type]}`}>
                            <MdWarning />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                                {title}
                            </h3>
                            <p className="text-slate-500 dark:text-slate-400 font-bold leading-relaxed px-4">
                                {message}
                            </p>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-3 pt-2">
                        <button
                            onClick={() => {
                                onConfirm();
                                onClose();
                            }}
                            className={`w-full py-4 rounded-2xl bg-linear-to-r ${colors[type]} text-white font-black text-sm uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-xl`}
                        >
                            {confirmText}
                        </button>
                        <button
                            onClick={onClose}
                            className="w-full py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-black text-sm uppercase tracking-widest hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                        >
                            {cancelText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
