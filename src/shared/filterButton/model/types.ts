export interface IFilterButtonProps {
  name: string
  onChangeCallBack: (onChangeValue: string) => void
  children: React.ReactElement<HTMLOptionElement> | React.ReactElement<HTMLOptionElement>[]
}