import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function NewModal(props) {
	return (
		<Modal  size={props.size} show={props.show} onHide={props.handleClose} btnTitle={props.btnTitle}>
			<Modal.Header closeButton>
				<Modal.Title>{props.modalTitle}</Modal.Title>
			</Modal.Header>
			<Modal.Body>{props.children}</Modal.Body>
			<Modal.Footer>
				{props.buttons ? (
					props.buttons.map((btn, index) => (
						<Button key={index} variant={btn.color} onClick={btn.onClick}>
							{btn.label}
						</Button>
					))
				) : (
					<div>
						<Button variant="secondary" onClick={props.handleClose}>
							Annuler
						</Button>
						<Button className="infoButton" onClick={props.handleSubmit}>
							{props.btnTitle ? props.btnTitle : 'Sauvegarder' }
						</Button>
					</div>
				)}
			</Modal.Footer>
		</Modal>
	);
}
