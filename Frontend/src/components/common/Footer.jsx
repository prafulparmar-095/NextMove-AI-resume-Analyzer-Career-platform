function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-16">
      <div className="container-custom px-4 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold">NextMove</h3>
          <p className="mt-3 text-gray-300">
            AI Resume Analyzer and Career Platform for smarter career growth.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Features</h4>
          <ul className="space-y-2 text-gray-300">
            <li>AI Resume Analysis</li>
            <li>ATS Score</li>
            <li>Resume Builder</li>
            <li>Career Suggestions</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Project</h4>
          <p className="text-gray-300">
            Major Project by NextMove team. Built using React, Tailwind, Node.js, Express, MongoDB, and AI APIs.
          </p>
        </div>
      </div>

      <div className="border-t border-slate-700 py-4 text-center text-sm text-gray-400">
        © 2026 NextMove. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer