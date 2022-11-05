import { useMemo } from "react"

const useBeforeMount = (callback) => {
    useMemo(() => {
        callback();
    }, [callback]);
};

export default useBeforeMount;