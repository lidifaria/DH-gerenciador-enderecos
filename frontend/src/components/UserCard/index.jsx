import './userCard.css';

function UserCard({id, name, email}){
    return(
        <div>
            <span>Id: {id}</span>
            <span>Nome: {name}</span>
            <span>Email: {email}</span>
            <div>Endereços: {addresses.map(address=>{
                return(
                    <div>
                        <span>CEP: {address.postal_code}</span>
                        <span>{address.street}</span>
                    </div>
                )
            })}</div>
        </div> 
    );
}

export default UserCard;