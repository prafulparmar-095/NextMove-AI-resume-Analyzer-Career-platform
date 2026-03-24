function UserTable({ users = [] }) {
  return (
    <div className="card-ui p-6 overflow-x-auto">
      <h3 className="text-xl font-bold mb-4">Registered Users</h3>

      <table className="w-full min-w-[700px] border-collapse">
        <thead>
          <tr className="border-b border-slate-200 text-left">
            <th className="py-3 px-2">Name</th>
            <th className="py-3 px-2">Email</th>
            <th className="py-3 px-2">Role</th>
            <th className="py-3 px-2">Joined</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={index} className="border-b border-slate-100">
                <td className="py-3 px-2 font-medium">{user.name}</td>
                <td className="py-3 px-2 text-gray-600">{user.email}</td>
                <td className="py-3 px-2 capitalize">{user.role}</td>
                <td className="py-3 px-2 text-gray-500">{user.joinedAt}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="py-4 px-2 text-gray-500">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default UserTable