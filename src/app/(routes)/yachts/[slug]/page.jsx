async function page({params}) {
  const {slug} = await params;

  return <div>{slug}</div>;
}

export default page;
