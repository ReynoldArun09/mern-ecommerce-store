import { footerlinks } from "./data";

export default function FooterLinks() {
  return (
    <div className="flex flex-col items-start justify-between w-full space-y-3 sm:grid sm:grid-cols-2 sm:items-center md:grid-cols-4">
      {footerlinks.map((t) => (
        <div key={`${t.title}`}>
          <h3 className="mb-2 font-bold tracking-wider uppercase">{t.title}</h3>
          {t.items.map((i) => (
            <ul
              className="space-y-1 font-bold text-gray-400 cursor-pointer"
              key={`${i.name}`}
            >
              <li>{i.name}</li>
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
}
