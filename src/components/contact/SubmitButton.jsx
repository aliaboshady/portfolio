export default function SubmitButton({ submittingForm = false }) {
  return (
    <button
      type="submit"
      disabled={submittingForm}
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all hover:scale-110 hover:bg-black disabled:scale-100 disabled:bg-opacity-60 disabled:bg-gray-900"
    >
      {submittingForm ? (
        <div className="animate-spin w-5 h-5 border-b-2 border-white rounded-full" />
      ) : (
        <>
          Send{' '}
          <span className="material-symbols-outlined group-hover:translate-x-4 text-lg transition-all">
            send
          </span>
        </>
      )}
    </button>
  );
}
