import styles from "./001_Styles";

export default WrappedComponent => {
  return props => {
    return WrappedComponent({
      ...props,
      styles: props.disable ? styles.disable : styles.default
    });
  };
};
