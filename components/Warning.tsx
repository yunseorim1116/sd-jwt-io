export const Warning = () => {
  return (
    <div className="bg-yellow-100 p-8 rounded-md text-sm my-10">
      <span className="font-bold">Warning: </span>
      SD JWTs are credentials, which might have personal data. Be careful where
      you paste them! We do not record tokens, all validation and debugging is
      done on the client side.
    </div>
  );
};
