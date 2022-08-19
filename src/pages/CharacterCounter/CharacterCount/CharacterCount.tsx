import React from 'react';
import { useRecoilState } from 'recoil';
import { textState } from '../../../recoil/counter';

function CharacterCount(): JSX.Element {
  const [text] = useRecoilState<string>(textState);
  return <>글자수: {text.length}</>;
}

export default CharacterCount;
