import classNames from 'classnames'

export default ({ children, x = 3, size = 5, strong, uppercase, className }) => {
  const Component = `h${x}`
  return (
    <Component className={classNames({ Strong: strong, Uppercase: uppercase }, `FS${size}x`, className)}>
      {children}
    </Component>
  )
}