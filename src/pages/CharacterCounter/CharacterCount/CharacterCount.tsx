import React from 'react';
import { useRecoilValue } from 'recoil';
import { charCountState } from '../../../recoil/counter';

function CharacterCount(): JSX.Element {
  const count = useRecoilValue<number>(charCountState);
  return <>κΈμμ: {count}</>;
}

export default CharacterCount;
