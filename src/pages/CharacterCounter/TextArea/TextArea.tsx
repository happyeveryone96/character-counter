import React, { useRef, useEffect, useCallback, ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import { textState } from '../../../recoil/counter';
import css from './TextArea.module.scss';

function TextArea(): JSX.Element {
  const ref = useRef<HTMLTextAreaElement>(null);
  const handleHeight = (): void => {
    if (ref === null || ref.current === null) {
      return;
    }
    ref.current.style.height = '16px';
    ref.current.style.height = ref.current.scrollHeight + 'px';
  };

  const handleResizeHeight = useCallback((): void => {
    handleHeight();
  }, []);

  const [text, setText] = useRecoilState<string>(textState);
  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    handleResizeHeight();
  };

  useEffect(() => {
    handleHeight();
  }, []);

  return (
    <div className={css.container}>
      <textarea
        className={css.textArea}
        value={text}
        onChange={onChange}
        ref={ref}
        spellCheck={false}
      />
    </div>
  );
}

export default TextArea;
