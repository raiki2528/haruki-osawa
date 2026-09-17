import Link from "next/link";

type ArrowLinkProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
};

export function ArrowLink({ href, children, external = false }: ArrowLinkProps) {
  const content = (
    <>
      <span>{children}</span>
      <span aria-hidden="true">↗</span>
    </>
  );

  if (external) {
    return (
      <a className="arrow-link" href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link className="arrow-link" href={href}>
      {content}
    </Link>
  );
}
