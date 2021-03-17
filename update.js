var execShPromise = require("exec-sh").promise;

const projects = [
  { name: "202112_Equipo_01" },
  { name: "202112_Equipo_02" },
  { name: "202112_Equipo_03" },
  { name: "202112_Equipo_04" },
  { name: "202112_Equipo_05" },
  { name: "202112_Equipo_06" },
  { name: "202112_Equipo_07" },
  { name: "202112_Equipo_08" },
  { name: "202112_Equipo_09" },

  { name: "202112_Equipo_10" },
  { name: "202112_Equipo_11" },
  { name: "202112_Equipo_12" },
  { name: "202112_Equipo_13" },
  { name: "202112_Equipo_14" },
  { name: "202112_Equipo_15" },
  { name: "202112_Equipo_16" },
  { name: "202112_Equipo_17" },
  { name: "202112_Equipo_18" },
  { name: "202112_Equipo_19" },

  { name: "202112_Equipo_20" },
  { name: "202112_Equipo_21" },
  { name: "202112_Equipo_22" },
  { name: "202112_Equipo_23" },
  { name: "202112_Equipo_24" },
  { name: "202112_Equipo_25" },
  { name: "202112_Equipo_26" },
  { name: "202112_Equipo_27" },
  { name: "202112_Equipo_28" },
  { name: "202112_Equipo_29" },

  { name: "202112_Equipo_30" },
];

const updateRepos = async () => {
  let out;

  try {
    for (const project of projects) {
      let command = `
       git remote rm origin &&
       git remote add origin git@github.com:MISW-4104-Web/${project.name}.git &&
       echo "dummy${Date.now()}" > reports/.dummyfile &&
       git add . &&
       git commit -m "Add sonar properties" &&
       git push origin master`;

      // let command = `sed -i "s/2021.*/${project.name}\\/reports\\/)/g" README.md &&
      //  sed -i 's/projectKey=.*/projectKey=${project.name}:sonar/g' sonar-project.properties &&
      //  sed -i 's/projectName=.*/projectName=${project.name}/g' sonar-project.properties &&
      //  sed -i "s/GIT_REPO\\s=.*/GIT_REPO = '${project.name}'/g" Jenkinsfile &&
      //  git remote rm origin &&
      //  git remote add origin git@github.com:MISW-4104-Web/${project.name}.git &&
      //  git add Jenkinsfile README.md sonar-project.properties  &&
      //  git commit -m "Add sonar properties" &&
      //  git push origin master`;

      out = await execShPromise(command, true);
    }
  } catch (e) {
    console.log("Error: ", e);
    console.log("Stderr: ", e.stderr);
    console.log("Stdout: ", e.stdout);
    return e;
  }

  console.log("out: ", out.stdout, out.stderr);
};

const createRepos = async () => {
  let out;

  try {
    for (const project of projects) {
      let command = `hub create MISW-4104-Web/${project.name} &&
      git remote rm origin &&
      git remote add origin git@github.com:MISW-4104-Web/${project.name}.git &&
      git push origin master`;

      out = await execShPromise(command, true);
    }
  } catch (e) {
    console.log("Error: ", e);
    console.log("Stderr: ", e.stderr);
    console.log("Stdout: ", e.stdout);
    return e;
  }

  console.log("out: ", out.stdout, out.stderr);
};

//createRepos();
updateRepos();
