import { useEffect, useRef } from "react";
import _isEqual from "lodash/isEqual";

export const useDeepEffect = (effectRun: Function, deps: any): void => {
  const isFirst = useRef(true);
  const prevDeps = useRef(deps);

  useEffect(() => {
    const isSame = prevDeps.current.every((item: any, i: any) => _isEqual(item, deps[i]));
    if (isFirst.current || !isSame) effectRun();
    isFirst.current = false;
    prevDeps.current = deps;
  }, deps);
};
