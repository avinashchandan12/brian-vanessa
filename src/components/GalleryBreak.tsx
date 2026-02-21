const GalleryBreak = () => {
  return (
    <section className="flex flex-col md:flex-row w-full" style={{ height: '70vh' }}>
      <div
        className="flex-1 parallax-photo"
        style={{ backgroundImage: `url('/images/couple4.jpeg')` }}
      />
      <div className="w-px md:w-1 bg-parchment flex-shrink-0" />
      <div
        className="flex-1 parallax-photo"
        style={{ backgroundImage: `url('/images/couple5.jpeg')` }}
      />
    </section>
  );
};

export default GalleryBreak;
