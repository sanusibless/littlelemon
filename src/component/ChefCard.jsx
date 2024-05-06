

export default function ChefCard({ img, name, designation}) {
    return (
        <div className="chef-card">
            <div className="chef-avatar">
                <img className="chef-img" src={img} />
                <div className="chef-details">
                    <h3 className="">{name}</h3>
                    <p>{designation}</p>
                </div>
            </div>
        </div>
    )
}