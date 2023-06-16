import { faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav() {
  return (
    <div className="w-full bg-primary text-center nav text-white text-xl">
      <div>
        <a href="/">
          <img
            src="/argo-sm.png"
            alt=""
            className="w-10 h-auto absolute top-9 left-5 cursor-pointer"
          />
        </a>
      </div>
      <div className="p-3">
        <a className="mr-4 ml-4 hover:text-secondary duration-300" href="/">
          Home
        </a>
        <a className="mr-4 ml-4 hover:text-secondary duration-300" href="/mods">
          Mods
        </a>
        <a
          className="mr-4 ml-4 hover:text-secondary duration-300"
          href="/settings"
        >
          Settings
        </a>
      </div>
      <div className="p-3 absolute top-8 right-0">
        <a
          className="mr-4 ml-4 hover:text-secondary duration-300 cursor-pointer"
          onClick={() => {
            window.open("https://github.com/aapelix/argonium");
          }}
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          className="mr-4 ml-4 hover:text-secondary duration-300 cursor-pointer"
          onClick={() => {
            window.open("https://discord.gg/YNxENEYJJP");
          }}
        >
          <FontAwesomeIcon icon={faDiscord} />
        </a>
      </div>
    </div>
  );
}

export default Nav;
