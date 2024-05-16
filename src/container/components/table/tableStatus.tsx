type Props = {
  status: "active" | "inactive" | "deactive" | "completed" | "pending";
};

export default function TableStatus({status}: Props) {
  return status === "active" || status === "completed" ? (
    <span className='bg-success/20 text-success-content text-sm px-sm py-1 capitalize rounded-full'>
      {status}
    </span>
  ) : status === "inactive" || status === "deactive" ? (
    <span className='bg-error/20 text-error-content text-sm px-sm py-1 capitalize rounded-full'>
      {status}
    </span>
  ) : status === "pending" ? (
    <span className='bg-warning/20 text-warning-content text-sm px-sm py-1 capitalize rounded-full'>
      {status}
    </span>
  ) : (
    status
  );
}
