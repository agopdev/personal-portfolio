import { CardProps } from '../components/Card';
import wallflowPic from '../assets/images/project-wallflow.png';
import simpliPic from '../assets/images/project-github-simpli.png';
import networkInterfacesInfoPic from '../assets/images/project-gnome-extension-network-interfaces-info.png';
import myApiPic from '../assets/images/project-myapi.png';
import notaria1LeonPic from '../assets/images/project-notaria.png';
import pandanotPic from '../assets/images/project-pandanot.png';

const cards: CardProps[] = [
	{
		imageUrl: wallflowPic,
		title: 'Wallflow',
		description:
			'Wallflow is a bash script that allows Linux users to change their wallpaper at regular intervals using the Wallhaven API. You can customize the search preferences.',
		buttonText: 'Visit GitHub',
		buttonLink: 'https://github.com/agopdev/wallflow',
	},
	{
		imageUrl: simpliPic,
		title: 'Simpli',
		description:
			'An open-source code editor built with Electron, supporting Python, Java, and JavaScript.',
		buttonText: 'Visit GitHub',
		buttonLink: 'https://github.com/agopdev/simpli',
	},
	{
		imageUrl: networkInterfacesInfoPic,
		title: 'Network Interfaces Info',
		description:
			'A GNOME extension that displays information about your network interfaces from the top bar.',
		buttonText: 'Visit Website',
		buttonLink:
			'https://extensions.gnome.org/extension/6331/network-interfaces-info/',
	},
	{
		imageUrl: myApiPic,
		title: 'MyAPI',
		description: 'A template for developing a complete RESTful API in PHP.',
		buttonText: 'Visit GitHub',
		buttonLink: 'https://github.com/agopdev/MyAPI',
	},
	{
		imageUrl: notaria1LeonPic,
		title: 'Notaría 1 León',
		description:
			'Informative website about Notaría 1 León, also includes the administration panel.',
		buttonText: 'Visit Website',
		buttonLink: 'https://notaria1leon.mx',
	},
	{
		imageUrl: pandanotPic,
		title: 'Pandanot',
		description:
			'A web platform that provides various tools for different tax calculations in Mexico.',
		buttonText: 'Visit Website',
		buttonLink: 'https://pandanot.com',
	},
];

export default cards;
