/* eslint-disable react/prop-types */

import { Modal } from "react-bootstrap";

const VideoModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                 <Modal.Header closeButton></Modal.Header>
  
            <Modal.Body >
                <div className="rounded-3 ">
                <iframe width="100%" height="500px" 
                src={props.url} 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"          
                referrerPolicy="strict-origin-when-cross-origin" 
                allowfullscreen>

                </iframe>
                       
                    
                </div>

            </Modal.Body>
            
            </Modal>
    );
};

export default VideoModal;