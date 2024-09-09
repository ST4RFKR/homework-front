import {CurrentUser} from './CurrentUser';



type AddressType = {
	street: string
	city: string
};

type UserType = {
	id: number,
	name: string,
	age: number,
	address: AddressType,
};

type UserList2PropsType = {
	users: any;
	filterUsers: () => void

};


export const UserList2 = (props: UserList2PropsType) => {
	console.log(props)
	return (
		<div id={'hw02-users'}>
			<h2>User List:</h2>

			<button id={'hw02-filter-button'} onClick={props.filterUsers}>SHOW ME FRIENDS FROM LA</button>

			<ul>
			  {props.users.myFriends.map((user: UserType) => (
			    <CurrentUser user={user} />
			  ))}
			</ul>
		</div>
	);
};
