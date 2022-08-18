import React from 'react';
import TextArea from './TextArea/TextArea';
import CharacterCount from './CharacterCount/CharacterCount';
import css from './CharacterCounter.module.scss';

function CharacterCounter(): JSX.Element {
  return (
    <div className={css.container}>
      <h1>글자수 세기</h1>
      <TextArea />
      <CharacterCount />
    </div>
  );
}

export default CharacterCounter;
