import { useState, useEffect } from "react";

const url = "https://dudek.ga/api/pinned?username=mbdjj";

const fetchPinned = async () => {
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

const usePinned = () => {
  const [pinned, setPinned] = useState(new Array(0).fill({}));

  useEffect(() => {
    fetchPinned().then(setPinned);
  }, [url]);

  return { pinned };
};

function Projects() {
  const { pinned } = usePinned();
  console.log(pinned);

  return (
    <div id="projects">
      {pinned.map((repo, i) => (
        <a href={repo.link} className="card" key={i}>
          <div>
            <h3 style={{ margin: 0 }}>{repo.owner + "/" + repo.repo}</h3>
            <p style={{ margin: 0 }}>{repo.description}</p>
          </div>
          <div className="repo-bar">
            <div className="repo-language">
              <div style={{ backgroundColor: repo.color }}></div>
              {repo.language}
            </div>
            <div className="repo-stats">
              <p style={{ margin: 0 }}>{repo.forks} forks</p>
              <p style={{ margin: 0 }}>{repo.stars} stars</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Projects;
