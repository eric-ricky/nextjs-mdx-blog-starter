const YouTube = ({ id }: { id: string }) => {
  return (
    <div className="relative pb-[56.25%] h-0 overflow-hidden max-w-full my-10 rounded-lg">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        allow="autoplay; encrypted-media"
        title="Embedded YouTube video"
        className="absolute top-0 left-0 w-full h-full border-0"
      />
    </div>
  );
};

export default YouTube;
