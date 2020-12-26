import React from 'react';
import PropTypes from 'prop-types';

export const Modal = ({ modal, handleShowModal }) => {
    return (
        <div className="modal" style={{ display: modal ? "block" : "none" }}>
            <div className="modal-content">
                <span
                    className="close"
                    onClick={handleShowModal}
                >&times;</span>
                <p>Some text in the Modal..</p>
            </div>
        </div>
    );
};

Modal.propTypes = {
    modal          : PropTypes.bool.isRequired,
    handleShowModal: PropTypes.func.isRequired
};
