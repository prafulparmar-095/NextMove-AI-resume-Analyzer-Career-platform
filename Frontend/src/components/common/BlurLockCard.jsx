function BlurLockCard({
  title = "Login to Unlock",
  description = "This result is available only for logged-in users.",
  children
}) {
  return (
    <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white">
      <div className="blur-sm pointer-events-none select-none opacity-70">
        {children}
      </div>

      <div className="absolute inset-0 flex items-center justify-center bg-white/40 backdrop-blur-sm">
        <div className="text-center px-6">
          <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
          <p className="mt-2 text-gray-600 max-w-sm">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default BlurLockCard