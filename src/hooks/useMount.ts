import { useEffect } from "react"

// A hook that runs one time only after render

const useMount = (callback: Function) => {
    useEffect(() => {
        callback();
    }, [])
};

export default useMount;