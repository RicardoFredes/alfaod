import classNames from 'classnames'

export default ({ children, x = 3, size = 5, strong, uppercase, className, center }) => {
  const Component = `h${x}`
  const classNameComponent = classNames({
    Strong: strong,
    Uppercase: uppercase,
    TextCenter: center,
  }, `FS${size}x`, className)
  return (
    <Component className={classNameComponent}>
      {children}
    </Component>
  )
}
