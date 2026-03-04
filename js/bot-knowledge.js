/* ============================================================
   bot-knowledge.js  –  Gerardo Olmedo Flores Knowledge Base
   ============================================================ */

const botKnowledge = {

  /* ── Profile ── */
  profile: {
    name: 'Gerardo Olmedo Flores',
    totalYearsExperience: 15,
    devopsYears: 6,
    currentRole: {
      en: 'Cloud Engineer at TCS',
      es: 'Ingeniero Cloud en TCS',
    },
    currentRoleSince: 'Jan 2022',
    industries: {
      en: 'Energy, Electric Power Generation, Utilities, Technology, Cloud Consulting, Data Services',
      es: 'Energía, Generación Eléctrica, Utilities, Tecnología, Consultoría Cloud, Servicios de Datos',
    },
    languages: {
      en: ['Spanish (Native)', 'English (Professional)'],
      es: ['Español (Nativo)', 'Inglés (Profesional)'],
    },
    location: {
      en: 'Gerardo is based in Mexico and is open to remote opportunities globally.',
      es: 'Gerardo está basado en México y está abierto a oportunidades remotas globalmente.',
    },
    email: 'gerardo.olmedof@email.com',
    linkedin: 'https://www.linkedin.com/in/gerardo-olmedo',
  },

  /* ── Experience ── */
  experience: {
    summary: {
      en: 'Gerardo O. Flores has 15+ years of experience in IT and business. He has 6+ years of hands-on cloud and AWS expertise, working as a Cloud Engineer at TCS since January 2022. His background covers enterprise data platforms, cloud architecture, DevOps, infrastructure as code, CI/CD, and Agile project management. Prior to tech he worked in HR, administration, and finance.',
      es: 'Gerardo O. Flores tiene más de 15 años de experiencia en IT y negocios. Cuenta con más de 6 años de experiencia práctica en cloud y AWS, trabajando como Ingeniero Cloud en TCS desde enero 2022. Su trayectoria abarca plataformas de datos empresariales, arquitectura cloud, DevOps, infraestructura como código, CI/CD y gestión de proyectos Agile.',
    },

    byTechnology: {
      'aws': {
        years: 6, level: 'Expert',
        details: {
          en: 'Gerardo has 6+ years of hands-on AWS experience. He works daily with EC2, S3, Lambda, CloudWatch, CloudFormation, DynamoDB, DMS, and EMR. Currently supporting enterprise data platform operations for a major US electric power company at TCS.',
          es: 'Gerardo tiene más de 6 años de experiencia práctica en AWS. Trabaja diariamente con EC2, S3, Lambda, CloudWatch, CloudFormation, DynamoDB, DMS y EMR. Actualmente da soporte a operaciones de plataforma de datos empresarial para una importante empresa eléctrica de EE.UU. en TCS.',
        },
      },
      'cloudformation': {
        years: 5, level: 'Advanced',
        details: {
          en: 'Gerardo has 5+ years of AWS CloudFormation experience, writing and maintaining stacks for EC2, networking, databases, and application deployments in both enterprise and consulting environments.',
          es: 'Gerardo tiene más de 5 años de experiencia con AWS CloudFormation, escribiendo y manteniendo stacks para EC2, networking, bases de datos y despliegues de aplicaciones.',
        },
      },
      'terraform': {
        years: 5, level: 'Advanced',
        details: {
          en: 'Gerardo has 5+ years of Terraform experience, using it to provision and manage AWS and multi-cloud infrastructure in hybrid on-premise + cloud environments at Encodex and TCS.',
          es: 'Gerardo tiene más de 5 años de experiencia con Terraform, usándolo para aprovisionar y gestionar infraestructura AWS y multi-cloud en entornos híbridos on-premise + cloud.',
        },
      },
      'ec2': {
        years: 6, level: 'Expert',
        details: {
          en: 'Gerardo has 6+ years of EC2 experience covering instance management, auto scaling, security groups, AMI creation, and hybrid infrastructure integration.',
          es: 'Gerardo tiene más de 6 años de experiencia en EC2, incluyendo gestión de instancias, auto scaling, security groups, creación de AMIs e integración de infraestructura híbrida.',
        },
      },
      's3': {
        years: 6, level: 'Expert',
        details: {
          en: 'Gerardo has 6+ years working with AWS S3 for data storage, static hosting, lifecycle policies, versioning, and integration with data pipeline tools like EMR and Talend.',
          es: 'Gerardo tiene más de 6 años trabajando con AWS S3 para almacenamiento de datos, hosting estático, políticas de ciclo de vida, versionado e integración con herramientas de pipelines de datos.',
        },
      },
      'lambda': {
        years: 5, level: 'Advanced',
        details: {
          en: 'Gerardo has 5+ years of AWS Lambda experience building FaaS microservices, event-driven workflows, and data processing functions integrated with DynamoDB, S3, and CloudWatch.',
          es: 'Gerardo tiene más de 5 años de experiencia con AWS Lambda construyendo microservicios FaaS, flujos event-driven y funciones de procesamiento de datos integradas con DynamoDB, S3 y CloudWatch.',
        },
      },
      'dynamodb': {
        years: 5, level: 'Advanced',
        details: {
          en: 'Gerardo has 5+ years of DynamoDB experience, designing tables, managing indexes, and integrating with Lambda and CloudFormation for enterprise data applications.',
          es: 'Gerardo tiene más de 5 años de experiencia con DynamoDB, diseñando tablas, gestionando índices e integrando con Lambda y CloudFormation para aplicaciones de datos empresariales.',
        },
      },
      'cloudwatch': {
        years: 5, level: 'Advanced',
        details: {
          en: 'Gerardo has 5+ years of AWS CloudWatch experience for monitoring, alerting, log analysis, and metrics dashboards across EC2, Lambda, and application workloads.',
          es: 'Gerardo tiene más de 5 años de experiencia con AWS CloudWatch para monitoreo, alertas, análisis de logs y dashboards de métricas en cargas de trabajo EC2, Lambda y aplicaciones.',
        },
      },
      'emr': {
        years: 4, level: 'Advanced',
        details: {
          en: 'Gerardo has 4+ years of AWS EMR experience running big data processing workflows and integrating Hadoop/Spark clusters with S3 and data pipeline tools in enterprise environments.',
          es: 'Gerardo tiene más de 4 años de experiencia con AWS EMR ejecutando flujos de procesamiento de big data e integrando clústeres Hadoop/Spark con S3 y herramientas de pipelines de datos.',
        },
      },
      'dms': {
        years: 4, level: 'Advanced',
        details: {
          en: 'Gerardo has 4+ years of AWS Database Migration Service (DMS) experience migrating Oracle, MySQL, and SQL Server databases to AWS, and setting up ongoing replication tasks.',
          es: 'Gerardo tiene más de 4 años de experiencia con AWS DMS migrando bases de datos Oracle, MySQL y SQL Server a AWS y configurando tareas de replicación continua.',
        },
      },
      'linux': {
        years: 5, level: 'Advanced',
        details: {
          en: 'Gerardo has 5+ years of Linux administration experience covering server configuration, shell scripting, performance tuning, and hybrid infrastructure management.',
          es: 'Gerardo tiene más de 5 años de experiencia en administración de Linux, incluyendo configuración de servidores, shell scripting, ajuste de rendimiento y gestión de infraestructura híbrida.',
        },
      },
      'bash': {
        years: 5, level: 'Advanced',
        details: {
          en: 'Gerardo has 5+ years of Bash scripting experience automating server administration, deployments, monitoring tasks, and CI/CD pipeline steps.',
          es: 'Gerardo tiene más de 5 años de experiencia en Bash scripting automatizando administración de servidores, despliegues, tareas de monitoreo y pasos de pipelines CI/CD.',
        },
      },
      'jenkins': {
        years: 4, level: 'Advanced',
        details: {
          en: 'Gerardo has 4+ years of Jenkins experience building and maintaining CI/CD pipelines for application deployment, infrastructure automation, and integration with Nexus artifact management.',
          es: 'Gerardo tiene más de 4 años de experiencia con Jenkins construyendo y manteniendo pipelines CI/CD para despliegue de aplicaciones, automatización de infraestructura e integración con gestión de artefactos Nexus.',
        },
      },
      'cicd': {
        years: 5, level: 'Advanced',
        details: {
          en: 'Gerardo has 5+ years of CI/CD experience designing and implementing pipelines with Jenkins, Nexus, and AWS services for automated testing, building, and deployment workflows.',
          es: 'Gerardo tiene más de 5 años de experiencia en CI/CD diseñando e implementando pipelines con Jenkins, Nexus y servicios AWS para flujos automatizados de testing, build y despliegue.',
        },
      },
      'docker': {
        years: 3, level: 'Intermediate',
        details: {
          en: 'Gerardo has 3+ years of Docker experience containerizing applications for cloud-native deployments and integrating containers into CI/CD pipelines.',
          es: 'Gerardo tiene más de 3 años de experiencia con Docker contenerizando aplicaciones para despliegues cloud-native e integrando contenedores en pipelines CI/CD.',
        },
      },
      'qlik': {
        years: 4, level: 'Advanced',
        details: {
          en: 'Gerardo has 4+ years of Qlik experience including Qlik Sense and QlikView configuration, version upgrades, and integration with enterprise data platforms and AWS services.',
          es: 'Gerardo tiene más de 4 años de experiencia con Qlik, incluyendo configuración de Qlik Sense y QlikView, actualizaciones de versión e integración con plataformas de datos empresariales y servicios AWS.',
        },
      },
      'talend': {
        years: 4, level: 'Advanced',
        details: {
          en: 'Gerardo has 4+ years of Talend experience deploying ETL pipelines, managing version upgrades, and integrating Talend with AWS S3, DynamoDB, and enterprise data sources.',
          es: 'Gerardo tiene más de 4 años de experiencia con Talend desplegando pipelines ETL, gestionando actualizaciones de versión e integrando Talend con AWS S3, DynamoDB y fuentes de datos empresariales.',
        },
      },
      'oracle': {
        years: 5, level: 'Intermediate',
        details: {
          en: 'Gerardo has 5+ years of Oracle DBA experience covering database administration, performance tuning, and migration to AWS using DMS and CloudFormation.',
          es: 'Gerardo tiene más de 5 años de experiencia como DBA de Oracle, incluyendo administración de bases de datos, ajuste de rendimiento y migración a AWS usando DMS y CloudFormation.',
        },
      },
      'databases': {
        years: 6, level: 'Advanced',
        details: {
          en: 'Gerardo has 6+ years of database experience across Oracle, MySQL, SQL Server, and DynamoDB. He has performed migrations, performance tuning, and cloud-native database design.',
          es: 'Gerardo tiene más de 6 años de experiencia en bases de datos con Oracle, MySQL, SQL Server y DynamoDB. Ha realizado migraciones, ajuste de rendimiento y diseño de bases de datos cloud-native.',
        },
      },
      'sql': {
        years: 6, level: 'Advanced',
        details: {
          en: 'Gerardo has 6+ years of SQL experience for database administration, ETL pipelines, reporting, and data analysis across Oracle, MySQL, and SQL Server.',
          es: 'Gerardo tiene más de 6 años de experiencia en SQL para administración de bases de datos, pipelines ETL, reportes y análisis de datos en Oracle, MySQL y SQL Server.',
        },
      },
      'python': {
        years: 3, level: 'Intermediate',
        details: {
          en: 'Gerardo has 3+ years of Python experience writing automation scripts, Lambda functions, and data processing utilities for cloud infrastructure tasks.',
          es: 'Gerardo tiene más de 3 años de experiencia en Python escribiendo scripts de automatización, funciones Lambda y utilidades de procesamiento de datos para tareas de infraestructura cloud.',
        },
      },
      'scrum': {
        years: 6, level: 'Expert',
        details: {
          en: 'Gerardo has 6+ years of Scrum experience including PSM I certification. He has managed geographically distributed software teams, facilitated Scrum ceremonies, and implemented SAFe at scale.',
          es: 'Gerardo tiene más de 6 años de experiencia en Scrum, incluyendo certificación PSM I. Ha gestionado equipos de software distribuidos geográficamente, facilitado ceremonias Scrum e implementado SAFe a escala.',
        },
      },
      'agile': {
        years: 6, level: 'Expert',
        details: {
          en: 'Gerardo has 6+ years of Agile experience as Scrum Master and team lead, using Scrum, SAFe, Kanban, and Agile project management tools including Jira and Confluence.',
          es: 'Gerardo tiene más de 6 años de experiencia Agile como Scrum Master y líder de equipo, usando Scrum, SAFe, Kanban y herramientas de gestión de proyectos Agile como Jira y Confluence.',
        },
      },
      'gcp': {
        years: 3, level: 'Intermediate',
        details: {
          en: 'Gerardo has 3+ years of GCP experience from migrating AWS + On-Premise workloads to Google Cloud Platform at Encodex, covering compute, networking, and storage services.',
          es: 'Gerardo tiene más de 3 años de experiencia en GCP por la migración de cargas de trabajo AWS + On-Premise a Google Cloud Platform en Encodex, cubriendo servicios de cómputo, networking y almacenamiento.',
        },
      },
      'networking': {
        years: 5, level: 'Advanced',
        details: {
          en: 'Gerardo has 5+ years of cloud networking experience with advanced AWS VPC configuration, security groups, load balancers, route tables, and hybrid connectivity.',
          es: 'Gerardo tiene más de 5 años de experiencia en redes cloud con configuración avanzada de AWS VPC, security groups, load balancers, route tables y conectividad híbrida.',
        },
      },
      'devops': {
        years: 5, level: 'Advanced',
        details: {
          en: 'Gerardo has 5+ years in DevOps roles covering CI/CD, IaC with Terraform and CloudFormation, monitoring with CloudWatch and NewRelic, and hybrid infrastructure management.',
          es: 'Gerardo tiene más de 5 años en roles DevOps cubriendo CI/CD, IaC con Terraform y CloudFormation, monitoreo con CloudWatch y NewRelic, y gestión de infraestructura híbrida.',
        },
      },
      'servicenow': {
        years: 3, level: 'Intermediate',
        details: {
          en: 'Gerardo has 3+ years of ServiceNow experience for IT service management, incident tracking, and integration with enterprise data platform workflows.',
          es: 'Gerardo tiene más de 3 años de experiencia con ServiceNow para gestión de servicios IT, seguimiento de incidentes e integración con flujos de trabajo de plataformas de datos empresariales.',
        },
      },
      'monitoring': {
        years: 5, level: 'Advanced',
        details: {
          en: 'Gerardo has 5+ years of monitoring experience using AWS CloudWatch, NewRelic, and X-Ray for infrastructure and application observability across hybrid environments.',
          es: 'Gerardo tiene más de 5 años de experiencia en monitoreo usando AWS CloudWatch, NewRelic y X-Ray para observabilidad de infraestructura y aplicaciones en entornos híbridos.',
        },
      },
    },

    jobs: [
      {
        title: { en: 'Cloud Engineer', es: 'Ingeniero Cloud' },
        company: 'TCS',
        industries: { en: 'Energy, Electric Power Generation, Utilities', es: 'Energía, Generación Eléctrica, Utilities' },
        period: 'Jan 2022 – Present',
      },
      {
        title: { en: 'Cloud Engineer', es: 'Ingeniero Cloud' },
        company: 'Encodex',
        industries: { en: 'Technology, Cloud Consulting, Data Services', es: 'Tecnología, Consultoría Cloud, Servicios de Datos' },
        period: 'Apr 2020 – Jan 2022',
      },
      {
        title: { en: 'DevOps Engineer', es: 'Ingeniero DevOps' },
        company: 'Encodex',
        industries: { en: 'Technology, Cloud Consulting', es: 'Tecnología, Consultoría Cloud' },
        period: 'Mar 2019 – Apr 2020',
      },
      {
        title: { en: 'Scrum Master', es: 'Scrum Master' },
        company: 'Encodex',
        industries: { en: 'Technology, Software Development', es: 'Tecnología, Desarrollo de Software' },
        period: 'Jun 2018 – Mar 2019',
      },
      {
        title: { en: 'Head of Human Resources', es: 'Jefe de Recursos Humanos' },
        company: 'Instituto de Salud del Estado de México',
        industries: { en: 'Healthcare, Public Administration', es: 'Salud, Administración Pública' },
        period: '2015 – 2018',
      },
      {
        title: { en: 'Administrative Manager', es: 'Gerente Administrativo' },
        company: 'Instituto de Salud del Estado de México',
        industries: { en: 'Healthcare, Public Administration', es: 'Salud, Administración Pública' },
        period: '2011 – 2015',
      },
      {
        title: { en: 'General Accountant', es: 'Contador General' },
        company: 'Grupo México',
        industries: { en: 'Mining, Natural Resources, Corporate Finance', es: 'Minería, Recursos Naturales, Finanzas Corporativas' },
        period: '2009 – 2011',
      },
    ],
  },

  /* ── Certifications ── */
  certifications: {
    total: 4,
    official: 1,
    expired: 3,
    list: {
      en: 'Gerardo holds 4 certifications: AWS Solutions Architect Associate (expired Sep 2024), AWS Developer Associate (expired Jul 2025), AWS Cloud Practitioner (expired Sep 2024), and Professional Scrum Master I / PSM I (active, Nov 2020).',
      es: 'Gerardo tiene 4 certificaciones: AWS Solutions Architect Associate (expirada Sep 2024), AWS Developer Associate (expirada Jul 2025), AWS Cloud Practitioner (expirada Sep 2024), y Professional Scrum Master I / PSM I (activa, Nov 2020).',
    },
  },

  /* ── Education ── */
  education: {
    list: {
      en: 'MBA from IPN (2009–2011), Bachelor\'s in Accounting & Business Management from IPN (2004–2008), Diploma in Senior Management & Hospital Quality from UNAM (2011), and English Language Program at Kaplan International College London (2022–2023).',
      es: 'MBA en IPN (2009–2011), Licenciatura en Contaduría y Administración en IPN (2004–2008), Diplomado en Alta Dirección y Calidad Hospitalaria en UNAM (2011), y Programa de Inglés en Kaplan International College London (2022–2023).',
    },
  },

  /* ── Meta ── */
  meta: {
    greeting: {
      en: "Hello! I'm Gerardo's portfolio assistant. I can answer questions about his cloud engineering experience, AWS expertise, certifications, skills, and background. What would you like to know?",
      es: '¡Hola! Soy el asistente del portfolio de Gerardo. Puedo responder preguntas sobre su experiencia como ingeniero cloud, expertise en AWS, certificaciones, habilidades y trayectoria. ¿Qué te gustaría saber?',
    },
    contact: {
      en: 'You can reach Gerardo at gerardo.olmedof@email.com or connect on LinkedIn at linkedin.com/in/gerardo-olmedo.',
      es: 'Puedes contactar a Gerardo en gerardo.olmedof@email.com o conectar en LinkedIn en linkedin.com/in/gerardo-olmedo.',
    },
    salary: {
      en: "Gerardo's compensation expectations are not disclosed here. Please reach out directly to discuss.",
      es: 'Las expectativas salariales de Gerardo no se divulgan aquí. Por favor contacta directamente para discutirlo.',
    },
    availability: {
      en: 'Gerardo is currently employed as Cloud Engineer at TCS and is open to new remote opportunities globally. Feel free to reach out.',
      es: 'Gerardo actualmente trabaja como Ingeniero Cloud en TCS y está abierto a nuevas oportunidades remotas globalmente. No dudes en contactarle.',
    },
    visa: {
      en: 'Gerardo is based in Mexico and is open to remote opportunities globally. He is not currently seeking relocation.',
      es: 'Gerardo está basado en México y está abierto a oportunidades remotas globalmente. Actualmente no busca reubicación.',
    },
    notFound: {
      en: "I can only answer questions about Gerardo's professional profile. Ask about experience, certifications, skills, or education.",
      es: 'Solo puedo responder sobre el perfil profesional de Gerardo. Pregunta sobre experiencia, certificaciones, habilidades o educación.',
    },
  },
};
