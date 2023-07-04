import axios from "axios";
import { IoTrashOutline } from "react-icons/io5";
import { useState, useRef } from "react";
import {
  ButtonsContainer,
  CancelButton,
  DeleteButton,
  ModalContainer,
  ModalContent,
  ModalTitle,
} from "./styled";

function DeletePost({ id, setIsPostDeleted }) {
  const token = localStorage.getItem("token");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const iconRef = useRef(null);

  const handleIconClick = () => {
    setIsModalOpen(true);
  };

  const handleDeleteClick = () => {
    setIsPostDeleted(true);

    const URL = `${import.meta.env.VITE_API_BASE_URL}/home/posts/${id}`;
    const header = { headers: { Authorization: `Bearer ${token}` } };

    const deletePromise = axios.delete(URL, header);

    deletePromise
      .then((success) => {
        setIsPostDeleted(false);
        setIsModalOpen(!isModalOpen);
      })
      .catch((error) => {
        alert(error.message);
        console.log(error);
        setIsModalOpen(!isModalOpen);
      });
  };

  return (
    <>
      <IoTrashOutline
        ref={iconRef}
        onClick={handleIconClick}
        className="cursor-pointer text-[#FFFFFF]"
      />
      {isModalOpen && (
        <ModalContainer
          role="dialog"
          aria-modal="true"
          aria-labelledby="delete-post-dialog"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setIsModalOpen(false);
            }
          }}
        >
          <ModalContent>
            <ModalTitle>
              Tem certeza que deseja deletar essa postagem?
            </ModalTitle>
            <ButtonsContainer>
              <CancelButton onClick={() => setIsModalOpen(false)}>
                Não, quero manter
              </CancelButton>
              <DeleteButton onClick={handleDeleteClick} data-test="confirm">
                Sim, quero deletar
              </DeleteButton>
            </ButtonsContainer>
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
}

export default DeletePost;
