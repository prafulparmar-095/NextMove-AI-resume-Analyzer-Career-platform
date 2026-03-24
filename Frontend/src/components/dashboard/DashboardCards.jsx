function DashboardCards({ cards = [] }) {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <div key={index} className="card-ui p-5">
          <p className="text-sm text-gray-500">{card.label}</p>
          <h3 className="text-2xl font-bold mt-2">{card.value}</h3>
          {card.note && <p className="text-sm text-gray-600 mt-2">{card.note}</p>}
        </div>
      ))}
    </div>
  )
}

export default DashboardCards