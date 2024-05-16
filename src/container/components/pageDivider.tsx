import ClassNameHelper from "../helpers/classNameHelper";

type Props = {className?: string};

export default function PageDivider({className}: Props) {
  return <div className={ClassNameHelper.clsn("border-t", className)}></div>;
}
