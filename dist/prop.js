import curry from "./curry/index";
const prop = (path, target) => {
    /* eslint no-new-func: "off" */
    try {
        return (new Function('x', `return x${/^\[/.test(path) ? '' : '.'}${path}`))(target);
    }
    catch (_a) { }
};
export default curry(prop);
