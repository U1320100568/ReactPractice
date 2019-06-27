const e = React.createElement;

class LikeButton extends React.Component {
	constructor(props){
		super(props);
		this.state = {liked : false};
	}

	render(){
		if(this.state.liked){
			return 'you likes this';
		}

		return e (
				'button',
				{
					onClick: () => this.setState({liked: true})
				},
				'Like'
			);
	}
}

const app = document.querySelector('#app');
ReactDOM.render(e(LikeButton), app);
