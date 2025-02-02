import { CButton } from '@coreui/react';
import React from 'react';
import ChatBody from 'src/components/UI/Email/ChatBody';
import ChatList from 'src/components/UI/Email/Chats';
import Input from 'src/components/UI/Input';
import { conversations } from '../Chats/chatList';
import './style.css';

export default function ChatDetails(props) {
	// const [ messages, setMessages ] = useState(msgs);

	const contact = conversations.find((contact) => contact.id === props.location.pathname.split('/')[3]);

	// console.log(`From ChatDetails`, { contacts });
	// console.log({ contact });

	return (
		<React.Fragment>
			<div className="flexRowChat darkerBg">
				<ChatList contacts={conversations} />
				<div className="rightHand ml-2 normalBg outline">
					{contact ? (
						<div className="chat-container">
							<div className="user-container d-flex black">
								<div className="image-container m-3 avatar-one">
									<img src={contact.avatr} alt="" className="avatar-one-img" />
								</div>
								<span className="user mt-3 ft2 bold">{contact.name}</span>
							</div>
							<div className="user-status d-flex">
								<span className={`avatar-status ${contact.status ? contact.status : 'danger'}`} />
								<span className="connection-string">
									&nbsp;{contact.connect ? contact.connect : `hors ligne`}
								</span>
							</div>
							{/* <div className="c-avatar flexRow">
								<CImg src={contact.avatar} className="c-avatar-img-one" alt={contact.avatar} />
								<span className="user ml-2 ft2 bold">{contact.name}</span>
								<span className="c-avatar-status avatus bg-danger" />
							</div> */}
							<div className="chat-messages mb-1">
								<ChatBody msgs={contact.messages} />
							</div>
						</div>
					) : (
						<p className="vcenter light p-3">Selectioner une Conversation pour continuer</p>
					)}

					<div className="dark flexRow chatapp">
						<Input type="text" placeholder="écrire un méssage" />
						<CButton className="chat-send" variant="outline">
							Envoyer
						</CButton>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
