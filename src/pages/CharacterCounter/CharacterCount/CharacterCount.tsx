import React from 'react';
import { useRecoilValue } from 'recoil';
import { textState } from '../../../recoil/counter';

function CharacterCount(): JSX.Element {
  const text = useRecoilValue<string>(textState);
  return <>글자수: {text.length}</>;
}

export default CharacterCount;
