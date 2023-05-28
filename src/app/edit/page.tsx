import Edit from "@/features/edit";
import { User } from "@/types/User";

const EditPage = () => {
	const user: User = {
		name: "John Doe",
		username: "johndoe",
		image: "https://avatars.githubusercontent.com/u/124599?v=4",
		following: 4,
		followers: 2,
		infos: {
			joinedIn: "May 2023",
			job: "",
			bio: "ouais c'est greg",
			location: "Earth",
			website: "https://lorem.ipsum.com",
			twitter: "john_doe",
			github: "JohnDoe",
			theme: "pink",
		},
		musics: [],
	};

	return <Edit user={user} />;
};

export default EditPage;
