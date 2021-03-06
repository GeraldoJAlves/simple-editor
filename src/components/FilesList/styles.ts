import styled, { css } from "styled-components";

import {
  FaImage,
  FaStepForward,
  FaStepBackward,
  FaTrash,
  FaFastForward,
  FaFastBackward,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* grid-auto-columns: 1fr;
  grid-auto-rows: 1fr; */
  /* grid: 150px / auto auto auto; */
  height: 100vh;
  width: 100vw;
  /* grid-gap: 10px; */
  @media (min-width: 600px) {
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  align-items: stretch;
  width: 100vw;
  & > .image-skeleton {
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const ToolBar = styled.div`
  cursor: pointer;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  background: black;
  & > span {
    color: white;
    text-align: center;
    font-weight: bold;
  }
`;

const cssIcons = css`
  color: white;
  width: 25px;
  height: 25px;
  transition: transform 0.5s, opacity 0.2s;
  &.disable {
    opacity: 0.5;
    &:hover {
      transform: scale(1);
    }
  }
  &:hover {
    transform: scale(1.2);
  }
  &:active {
    opacity: 0.7;
  }
`;

export const DeleteIcon = styled(FaTrash)`
  ${cssIcons}
`;

export const PreviewIconOpen = styled(FaChevronUp)`
  ${cssIcons}
`;

export const PreviewIconClose = styled(FaChevronDown)`
  ${cssIcons}
`;

export const LastIcon = styled(FaFastForward)`
  ${cssIcons}
`;

export const FirstIcon = styled(FaFastBackward)`
  ${cssIcons}
`;

export const NextIcon = styled(FaStepForward)`
  ${cssIcons}
`;

export const PrevIcon = styled(FaStepBackward)`
  ${cssIcons}
`;

export const Video = styled.video`
  object-fit: contain;
  width: 100%;
  height: 60vh;
  flex: 1;
  background: black;
  border: none;
  outline: 0;
`;

export const ImgFile = styled.img`
  /* object-fit: contain; */
  object-fit: contain;
  width: 100%;
  height: 80vh;
  flex: 1;
`;

export const IframeFile = styled.iframe`
  object-fit: contain;
  width: 100%;

  height: 80vh;
  flex: 1;
  overflow-x: hidden;
  overflow-y: hidden;
`;

export const TextFile = styled.textarea`
  padding: 10px;
  flex: 1;
  resize: none;
  text-align: start;
  background: black;
  border: none;
  color: white;
  outline: 0;
`;

export const LoadImageIcon = styled(FaImage)`
  width: 30px;
  height: 30px;
  fill: #bbb;
`;
