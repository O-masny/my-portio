import Link from "next/link";

interface NavigationButtonProps {
  title: string;
  description: string;
}
const NavigationButton: React.FC<NavigationButtonProps> = ({
  title,
  description,
}) => {
  return (
    <div className="mt-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      <Link
        href={`#${title}`}
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left text-white"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          {title}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none"></span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}> {description}</p>
      </Link>
    </div>
  );
};
export default NavigationButton;
