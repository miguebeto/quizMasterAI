import { Category, Question, Quiz } from "./types";

export const categories: Category[] = [
  {
    id: 1,
    name: "aws",
    description: "AWS",
    image: "https://via.placeholder.com/150",
    quizzes: [],
  },
  {
    id: 2,
    name: "react",
    description: "React",
    image: "https://via.placeholder.com/150",
    quizzes: [],
  },
  {
    id: 3,
    name: "english",
    description: "English",
    image: "https://via.placeholder.com/150",
    quizzes: [],
  },
  {
    id: 4,
    name: "nodejs",
    description: "Node.js",
    image: "https://via.placeholder.com/150",
    quizzes: [],
  },
];

export const exam1: Question[] = [
  {
    id: 1,
    text: "Which service runs containerized applications on AWS?",
    options: [
      "Amazon SageMaker",
      "Amazon EKS",
      "Amazon Redshift",
      "Amazon Aurora",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon Elastic Kubernetes Service (EKS) is designed to run containerized applications on AWS. The other services are for machine learning (SageMaker), data warehousing (Redshift), and relational databases (Aurora).",
  },
  {
    id: 2,
    text: "Which of the following are storage classes in Amazon S3? (Select all that apply)",
    options: [
      "S3 Standard",
      "S3 Intelligent-Tiering",
      "S3 Glacier",
      "S3 Express",
    ],
    correctAnswers: [0, 1, 2],
    explanation:
      "S3 Standard, S3 Intelligent-Tiering, and S3 Glacier are valid storage classes in Amazon S3. S3 Express is not a real storage class.",
  },
  {
    id: 3,
    text: "AWS allows users to manage their resources using a web-based user interface. What is the name of this interface?",
    options: ["AWS CLI", "AWS API", "AWS SDK", "AWS Management Console"],
    correctAnswers: [3],
    explanation:
      "The AWS Management Console is a web-based interface that allows users to manage their AWS resources visually and interactively. The CLI, API, and SDK provide programmatic and command-line access to AWS services.",
  },
  {
    id: 4,
    text: "Which of the following is an example of horizontal scaling in the AWS Cloud?",
    options: [
      "Replacing an existing EC2 instance with a larger, more powerful one.",
      "Increasing the compute capacity of a single EC2 instance to address the growing demands of an application.",
      "Adding more RAM capacity to an EC2 instance.",
      "Adding more EC2 instances of the same size to handle an increase in traffic.",
    ],
    correctAnswers: [3],
    explanation:
      "Horizontal scaling refers to adding more instances of the same type to distribute the workload, which increases overall capacity. Vertical scaling, in contrast, involves upgrading the capacity of a single instance.",
  },
  {
    id: 5,
    text: "You have noticed that several critical Amazon EC2 instances have been terminated. Which of the following AWS services would help you determine who took this action?",
    options: [
      "Amazon Inspector",
      "AWS CloudTrail",
      "AWS Trusted Advisor",
      "EC2 Instance Usage Report",
    ],
    correctAnswers: [1],
    explanation:
      "AWS CloudTrail logs all API calls made in your account, allowing you to track who made changes to your resources, including the termination of EC2 instances.",
  },
  {
    id: 6,
    text: "Which of the below options are related to the reliability of AWS? (Choose TWO)",
    options: [
      "Applying the principle of least privilege to all AWS resources.",
      "Automatically provisioning new resources to meet demand.",
      "All AWS services are considered Global Services, and this design helps customers serve their international users.",
      "Providing compensation to customers if issues occur.",
      "Ability to recover quickly from failures.",
    ],
    correctAnswers: [1, 4],
    explanation:
      "AWS reliability includes the ability to automatically scale resources to meet demand and the ability to recover quickly from failures. These features help ensure service uptime and business continuity.",
  },
  {
    id: 7,
    text: "Which of the following is a benefit of using AWS Lambda?",
    options: [
      "Automatic infrastructure provisioning.",
      "Allows for manual server management.",
      "Requires upfront server purchase.",
      "Enables developers to run code on virtual servers for an indefinite amount of time.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Lambda automatically manages the infrastructure needed to run your code, removing the need for manual server management or upfront server purchases. Code runs in response to events and is executed only for the time required.",
  },
  {
    id: 8,
    text: "In which pricing model are customers charged for compute capacity by the hour or second, with no long-term commitments or upfront payments?",
    options: [
      "On-Demand Instances",
      "Reserved Instances",
      "Spot Instances",
      "Dedicated Hosts",
    ],
    correctAnswers: [0],
    explanation:
      "On-Demand Instances charge customers for compute capacity by the hour or second without long-term commitments, allowing flexibility in scaling resources based on current demand.",
  },
  {
    id: 9,
    text: "Which AWS service is a fully managed NoSQL database that supports document and key-value store models?",
    options: [
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon ElastiCache",
      "Amazon Redshift",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon DynamoDB is a fully managed NoSQL database service that supports both document and key-value store models, offering high performance for applications that require low-latency access to large amounts of data.",
  },
  {
    id: 10,
    text: "What does the AWS Well-Architected Framework recommend to ensure high availability and fault tolerance?",
    options: [
      "Using a single Availability Zone.",
      "Scaling vertically rather than horizontally.",
      "Distributing resources across multiple Availability Zones.",
      "Avoiding the use of Elastic Load Balancing.",
    ],
    correctAnswers: [2],
    explanation:
      "The AWS Well-Architected Framework recommends distributing resources across multiple Availability Zones to ensure high availability and fault tolerance in the event of a failure in one zone.",
  },
  {
    id: 11,
    text: "Which AWS service is best suited for caching frequently accessed data to improve application performance?",
    options: [
      "Amazon RDS",
      "Amazon S3",
      "Amazon ElastiCache",
      "AWS CloudFront",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon ElastiCache is a caching service that helps improve application performance by caching frequently accessed data in memory, reducing the load on primary databases and storage services.",
  },
  {
    id: 12,
    text: "What is the primary function of Amazon CloudFront?",
    options: [
      "To store objects in a secure and durable way.",
      "To cache content at edge locations for faster delivery.",
      "To manage and orchestrate containers at scale.",
      "To monitor resource utilization in AWS environments.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon CloudFront is a Content Delivery Network (CDN) service that caches content at edge locations around the world, providing faster delivery of content to users by reducing latency.",
  },
  {
    id: 13,
    text: "Which of the following helps ensure that AWS users follow security best practices by enforcing password policies, MFA, and user permissions?",
    options: ["AWS WAF", "AWS Config", "AWS IAM", "Amazon GuardDuty"],
    correctAnswers: [2],
    explanation:
      "AWS Identity and Access Management (IAM) helps enforce security best practices by managing user permissions, enforcing password policies, and requiring multi-factor authentication (MFA) where necessary.",
  },
  {
    id: 14,
    text: "Which service helps you manage and deploy AWS infrastructure as code?",
    options: [
      "AWS CloudFormation",
      "AWS X-Ray",
      "Amazon CloudWatch",
      "AWS Trusted Advisor",
    ],
    correctAnswers: [0],
    explanation:
      "AWS CloudFormation allows users to define and provision AWS infrastructure using code, making it easier to manage and deploy resources in a consistent, repeatable manner.",
  },
  {
    id: 15,
    text: "Which of the following is a serverless event bus service that can be used to connect different AWS services, SaaS apps, and custom applications?",
    options: ["Amazon SQS", "Amazon SNS", "AWS Lambda", "Amazon EventBridge"],
    correctAnswers: [3],
    explanation:
      "Amazon EventBridge is a serverless event bus service that allows you to connect different AWS services, SaaS apps, and custom applications, enabling event-driven architectures.",
  },
  {
    id: 16,
    text: "Which service enables you to run containerized applications without managing the underlying infrastructure?",
    options: ["Amazon EC2", "Amazon ECS", "AWS Fargate", "AWS Lambda"],
    correctAnswers: [2],
    explanation:
      "AWS Fargate is a serverless compute engine for containers, allowing users to run containerized applications without needing to manage the underlying infrastructure, which is handled automatically by AWS.",
  },
  {
    id: 17,
    text: "Which AWS service allows you to deploy, monitor, and scale web applications automatically based on demand?",
    options: [
      "Amazon CloudFront",
      "Amazon RDS",
      "AWS Elastic Beanstalk",
      "Amazon EC2 Auto Scaling",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Elastic Beanstalk provides an easy-to-use platform for deploying, monitoring, and scaling web applications, automatically managing the underlying infrastructure and scaling based on demand.",
  },
  {
    id: 18,
    text: "Which service is used to organize and group AWS resources for billing, access control, and compliance purposes?",
    options: [
      "AWS Config",
      "AWS Organizations",
      "Amazon CloudTrail",
      "AWS CloudFormation",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Organizations helps users centrally manage multiple AWS accounts and group resources, enabling better control over access, compliance, and billing across an organization.",
  },
  {
    id: 19,
    text: "Which AWS service is a fully managed message queuing service that decouples and scales microservices, distributed systems, and serverless applications?",
    options: ["Amazon SNS", "Amazon SQS", "AWS Step Functions", "Amazon MQ"],
    correctAnswers: [1],
    explanation:
      "Amazon SQS is a fully managed message queuing service that helps decouple and scale microservices, distributed systems, and serverless applications by allowing components to communicate asynchronously.",
  },
  {
    id: 20,
    text: "What is the purpose of AWS CloudTrail?",
    options: [
      "To provide real-time monitoring of AWS resources.",
      "To cache frequently accessed data at edge locations.",
      "To record and log all API calls made within your AWS account.",
      "To automatically scale applications based on demand.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS CloudTrail records and logs all API calls made within your AWS account, providing visibility into user activity for security and auditing purposes.",
  },
  {
    id: 21,
    text: "Which service allows you to monitor and receive alerts for AWS resource metrics such as CPU utilization, memory usage, and network traffic?",
    options: [
      "AWS CloudFormation",
      "Amazon CloudWatch",
      "AWS X-Ray",
      "AWS Trusted Advisor",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon CloudWatch is a monitoring service for AWS resources and applications, allowing users to set alarms and receive alerts based on metrics like CPU utilization, memory usage, and network traffic.",
  },
  {
    id: 22,
    text: "Which AWS service provides managed private networks and secure connections between on-premises environments and AWS?",
    options: [
      "AWS Direct Connect",
      "Amazon VPC",
      "Amazon CloudFront",
      "AWS Transit Gateway",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Direct Connect enables users to establish a dedicated private network connection between their on-premises environments and AWS, providing greater security and reliability than using the public internet.",
  },
  {
    id: 23,
    text: "What is the primary function of AWS Shield?",
    options: [
      "To manage and orchestrate containers.",
      "To protect against Distributed Denial of Service (DDoS) attacks.",
      "To cache content at edge locations.",
      "To automate the scaling of resources based on demand.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Shield is a managed service that protects applications running on AWS from Distributed Denial of Service (DDoS) attacks, ensuring the availability and security of your applications.",
  },
  {
    id: 24,
    text: "Which service is used to securely manage access to AWS services and resources for individual users or groups?",
    options: ["AWS IAM", "AWS WAF", "Amazon Inspector", "AWS Config"],
    correctAnswers: [0],
    explanation:
      "AWS Identity and Access Management (IAM) allows users to securely manage access to AWS services and resources by defining permissions for individual users or groups.",
  },
  {
    id: 25,
    text: "Which AWS service allows you to create and manage cryptographic keys to control access to your data?",
    options: ["AWS KMS", "AWS IAM", "Amazon S3", "AWS Shield"],
    correctAnswers: [0],
    explanation:
      "AWS Key Management Service (KMS) allows you to create and manage cryptographic keys to secure and control access to your data, ensuring its confidentiality and integrity.",
  },
  {
    id: 26,
    text: "Which service would you use to manage and automate the deployment of machine learning models in AWS?",
    options: [
      "Amazon SageMaker",
      "AWS Lambda",
      "Amazon Comprehend",
      "AWS Glue",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon SageMaker is a fully managed service that provides tools to build, train, and deploy machine learning models, streamlining the entire machine learning workflow.",
  },
  {
    id: 27,
    text: "Which AWS service allows you to run real-time applications, such as media streaming and gaming, at the edge of the AWS network?",
    options: [
      "Amazon EC2",
      "AWS Lambda@Edge",
      "Amazon CloudFront",
      "AWS Outposts",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Lambda@Edge enables the execution of code closer to users, at the edge of the AWS network, improving the performance of real-time applications like media streaming and gaming.",
  },
  {
    id: 28,
    text: "What is the primary purpose of Amazon Aurora?",
    options: [
      "To monitor and manage databases.",
      "To provide a high-performance relational database compatible with MySQL and PostgreSQL.",
      "To manage data lakes.",
      "To automatically replicate data across multiple AWS regions.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon Aurora is a high-performance, fully managed relational database engine that is compatible with MySQL and PostgreSQL, offering enhanced speed and reliability.",
  },
  {
    id: 29,
    text: "Which service helps you move petabyte-scale data to AWS quickly and cost-effectively?",
    options: ["AWS Snowball", "AWS Storage Gateway", "Amazon S3", "AWS DMS"],
    correctAnswers: [0],
    explanation:
      "AWS Snowball is a petabyte-scale data transfer service that allows you to move large volumes of data to AWS securely and cost-effectively, without relying on network bandwidth.",
  },
  {
    id: 30,
    text: "Which service helps secure your web applications by filtering and monitoring HTTP requests?",
    options: [
      "AWS Shield",
      "AWS WAF",
      "AWS Firewall Manager",
      "Amazon GuardDuty",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Web Application Firewall (WAF) helps secure web applications by filtering and monitoring HTTP requests, providing protection against common web exploits.",
  },
  {
    id: 31,
    text: "Which AWS service provides recommendations on cost optimization, security, performance, and fault tolerance?",
    options: [
      "AWS CloudTrail",
      "AWS Trusted Advisor",
      "AWS Config",
      "Amazon Inspector",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Trusted Advisor provides real-time guidance to help you optimize your AWS environment across four categories: cost optimization, security, fault tolerance, and performance.",
  },
  {
    id: 32,
    text: "What is the main function of Amazon ElastiCache?",
    options: [
      "To cache frequently accessed data to reduce load on databases.",
      "To provide a scalable email delivery service.",
      "To store and analyze large datasets.",
      "To replicate data across AWS regions.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon ElastiCache is a managed service that improves application performance by allowing you to retrieve data from fast, managed, in-memory caches instead of relying on slower disk-based databases.",
  },
  {
    id: 33,
    text: "Which AWS service can be used to process and analyze real-time streaming data?",
    options: ["Amazon S3", "Amazon Redshift", "Amazon Kinesis", "AWS Glue"],
    correctAnswers: [2],
    explanation:
      "Amazon Kinesis allows you to collect, process, and analyze real-time streaming data, enabling use cases such as real-time analytics, machine learning, and log analysis.",
  },
  {
    id: 34,
    text: "What is the primary purpose of AWS CloudFormation?",
    options: [
      "To provide a service for application deployment.",
      "To manage and provision infrastructure as code.",
      "To monitor and manage application performance.",
      "To automate security auditing of AWS environments.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS CloudFormation enables you to model and set up your AWS resources using infrastructure as code, allowing you to automate and manage your infrastructure.",
  },
  {
    id: 35,
    text: "Which AWS service is best suited for performing extract, transform, and load (ETL) operations on large datasets?",
    options: ["AWS Lambda", "Amazon Redshift", "AWS Glue", "Amazon RDS"],
    correctAnswers: [2],
    explanation:
      "AWS Glue is a fully managed ETL (extract, transform, and load) service that makes it easy to prepare and load your data for analytics, especially for large datasets.",
  },
  {
    id: 36,
    text: "Which AWS service enables you to run containerized applications on a serverless infrastructure?",
    options: [
      "Amazon EC2",
      "AWS Lambda",
      "Amazon ECS with Fargate",
      "AWS Batch",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon ECS with Fargate allows you to run containers without managing servers or clusters, providing a serverless infrastructure for containerized applications.",
  },
  {
    id: 37,
    text: "Which AWS service provides a virtual private network (VPN) solution for securely connecting your on-premises network to AWS?",
    options: [
      "AWS Direct Connect",
      "AWS VPN",
      "Amazon VPC",
      "AWS Transit Gateway",
    ],
    correctAnswers: [1],
    explanation:
      "AWS VPN enables secure communication between your on-premises network and AWS by providing a fully managed virtual private network (VPN) connection.",
  },
  {
    id: 38,
    text: "What is the purpose of Amazon CloudWatch?",
    options: [
      "To host static websites.",
      "To deliver content to users globally with low latency.",
      "To monitor and log metrics and events for AWS resources and applications.",
      "To manage network traffic across AWS resources.",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon CloudWatch is a monitoring and management service that provides data and actionable insights for AWS resources, applications, and services through metrics, logs, and alarms.",
  },
  {
    id: 39,
    text: "Which AWS service allows you to analyze big data using SQL queries?",
    options: ["Amazon S3", "AWS Glue", "Amazon Athena", "Amazon EMR"],
    correctAnswers: [2],
    explanation:
      "Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon S3 using SQL queries without needing to set up or manage infrastructure.",
  },
  {
    id: 40,
    text: "Which AWS service helps improve the security of your AWS environment by identifying vulnerabilities and potential threats?",
    options: ["AWS Shield", "AWS GuardDuty", "AWS WAF", "AWS IAM"],
    correctAnswers: [1],
    explanation:
      "AWS GuardDuty is a threat detection service that continuously monitors for malicious activity and unauthorized behavior to help protect your AWS accounts and workloads.",
  },
  {
    id: 41,
    text: "Which AWS service allows you to run code without provisioning or managing servers?",
    options: ["Amazon EC2", "AWS Lambda", "Amazon ECS", "AWS Batch"],
    correctAnswers: [1],
    explanation:
      "AWS Lambda is a serverless computing service that lets you run code without having to provision or manage servers. You only pay for the compute time that your code actually uses.",
  },
  {
    id: 42,
    text: "What does AWS S3 stand for?",
    options: [
      "Secure Storage Service",
      "Simple Storage Service",
      "Serverless Storage Service",
      "System Storage Service",
    ],
    correctAnswers: [1],
    explanation:
      "AWS S3 stands for Simple Storage Service, a scalable object storage service that allows you to store and retrieve large amounts of data from anywhere on the web.",
  },
  {
    id: 43,
    text: "Which AWS service is used to automate infrastructure management using code?",
    options: ["AWS CloudFormation", "AWS Lambda", "Amazon RDS", "Amazon S3"],
    correctAnswers: [0],
    explanation:
      "AWS CloudFormation enables you to use infrastructure as code, allowing you to model and automate the setup of your AWS resources in a safe, repeatable manner.",
  },
  {
    id: 44,
    text: "What is the primary use case for Amazon Redshift?",
    options: [
      "Real-time data streaming",
      "Data warehousing and analytics",
      "Content delivery",
      "Object storage",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon Redshift is primarily used for data warehousing and analytics, allowing you to run complex queries on structured and semi-structured data efficiently.",
  },
  {
    id: 45,
    text: "Which AWS service provides distributed denial-of-service (DDoS) protection?",
    options: ["AWS GuardDuty", "AWS WAF", "AWS Shield", "AWS Trusted Advisor"],
    correctAnswers: [2],
    explanation:
      "AWS Shield is a managed Distributed Denial of Service (DDoS) protection service that helps protect your applications against DDoS attacks.",
  },
  {
    id: 46,
    text: "Which AWS service is designed to help you set up and manage a hybrid cloud architecture?",
    options: [
      "AWS Direct Connect",
      "AWS Snowball",
      "AWS Outposts",
      "AWS CloudFront",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Outposts enables you to run AWS infrastructure on-premises, offering a hybrid cloud solution where you can extend AWS services to your data center.",
  },
  {
    id: 47,
    text: "Which AWS service allows you to scale relational databases easily?",
    options: [
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon ElastiCache",
      "Amazon S3",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon RDS (Relational Database Service) simplifies the setup, operation, and scaling of relational databases in the cloud, supporting multiple database engines.",
  },
  {
    id: 48,
    text: "What is the function of AWS Route 53?",
    options: [
      "To manage DNS routing",
      "To provide content delivery",
      "To host static websites",
      "To manage virtual private clouds",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Route 53 is a scalable Domain Name System (DNS) web service designed to route users to your application by translating human-readable names into IP addresses.",
  },
  {
    id: 49,
    text: "Which AWS service allows you to securely store and manage access to secrets like API keys and database passwords?",
    options: ["AWS IAM", "AWS Secrets Manager", "AWS KMS", "AWS CloudHSM"],
    correctAnswers: [1],
    explanation:
      "AWS Secrets Manager helps you securely store and manage access to sensitive information like API keys, database passwords, and other credentials.",
  },
  {
    id: 50,
    text: "Which AWS service provides machine learning-based predictions?",
    options: [
      "AWS Rekognition",
      "Amazon Polly",
      "Amazon SageMaker",
      "AWS Translate",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon SageMaker is a fully managed service that provides developers and data scientists the ability to build, train, and deploy machine learning models quickly.",
  },
];

export const exam2: Question[] = [
  {
    id: 1,
    text: "A global company with a large number of AWS accounts is seeking a way in which they can centrally manage billing and security policies across all accounts. Which AWS Service will assist them in meeting these goals?",
    options: [
      "AWS Organizations",
      "AWS Trusted Advisor",
      "IAM User Groups",
      "AWS Config",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Organizations helps centrally manage multiple AWS accounts, providing consolidated billing and centralized control over policies and security settings.",
  },
  {
    id: 2,
    text: "Which service provides object-level storage in AWS?",
    options: ["Amazon EBS", "Amazon Instance Store", "Amazon EFS", "Amazon S3"],
    correctAnswers: [3],
    explanation:
      "Amazon S3 is an object storage service that provides scalable, secure, and durable storage for data in various formats, including media files, backups, and archives.",
  },
  {
    id: 3,
    text: "A company is concerned that they are spending money on underutilized compute resources in AWS. Which AWS feature will help ensure that their applications are automatically adding/removing EC2 compute capacity to closely match the required demand?",
    options: [
      "AWS Elastic Load Balancer",
      "AWS Budgets",
      "AWS Auto Scaling",
      "AWS Cost Explorer",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Auto Scaling automatically adjusts the EC2 compute capacity based on demand, ensuring that you have enough capacity to meet traffic spikes without overspending on unused resources.",
  },
  {
    id: 4,
    text: "Which S3 storage class is best for data with unpredictable access patterns?",
    options: [
      "Amazon S3 Intelligent-Tiering",
      "Amazon S3 Glacier Flexible Retrieval",
      "Amazon S3 Standard",
      "Amazon S3 Standard-Infrequent Access",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon S3 Intelligent-Tiering automatically moves data between two access tiers based on changing access patterns, making it ideal for data with unpredictable access.",
  },
  {
    id: 5,
    text: "What is the AWS database service that allows you to upload data structured in key-value format?",
    options: [
      "Amazon DynamoDB",
      "Amazon Aurora",
      "Amazon Redshift",
      "Amazon RDS",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon DynamoDB is a fully managed NoSQL database service that provides fast and flexible key-value and document storage for applications that require consistent, single-digit millisecond latency.",
  },
  {
    id: 6,
    text: "Which of the following is NOT correct regarding Amazon EC2 On-demand instances?",
    options: [
      "You have to pay a start-up fee when launching a new instance for the first time.",
      "The on-demand instances follow the AWS pay-as-you-go pricing model.",
      "With on-demand instances, no longer-term commitments or upfront payments are needed.",
      "When using on-demand Linux instances, you are charged per second based on an hourly rate.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon EC2 On-demand instances do not require any upfront start-up fees; instead, you pay for compute capacity by the hour or second, with no long-term commitments.",
  },
  {
    id: 7,
    text: "A company has moved to AWS recently. Which of the following AWS Services will help ensure that they have the proper security settings? (Choose TWO)",
    options: [
      "AWS Trusted Advisor",
      "Amazon Inspector",
      "Amazon SNS",
      "Amazon CloudWatch",
      "Concierge Support Team",
    ],
    correctAnswers: [0, 1],
    explanation:
      "AWS Trusted Advisor and Amazon Inspector are AWS services that can help identify and improve security settings. Trusted Advisor provides best-practice checks, while Inspector assesses the security of EC2 instances.",
  },
  {
    id: 8,
    text: "What is the AWS feature that provides an additional level of security above the default authentication mechanism of usernames and passwords?",
    options: ["Encrypted keys", "Email verification", "AWS KMS", "AWS MFA"],
    correctAnswers: [3],
    explanation:
      "AWS Multi-Factor Authentication (MFA) adds an extra layer of protection by requiring a second form of authentication, like a one-time code, in addition to a password.",
  },
  {
    id: 9,
    text: "A company is introducing a new product to their customers, and is expecting a surge in traffic to their web application. As part of their Enterprise Support plan, which of the following provides the company with architectural and scaling guidance?",
    options: [
      "AWS Knowledge Center",
      "AWS Health Dashboard",
      "Infrastructure Event Management",
      "AWS Support Concierge Service",
    ],
    correctAnswers: [2],
    explanation:
      "Infrastructure Event Management is a feature of the AWS Enterprise Support plan that provides architectural and scaling guidance to ensure systems can handle anticipated spikes in demand.",
  },
  {
    id: 10,
    text: "You work as an on-premises MySQL DBA. The work of database configuration, backups, patching, and DR can be time-consuming and repetitive. Your company has decided to migrate to the AWS Cloud. Which of the following can help save time on database maintenance so you can focus on data architecture and performance?",
    options: [
      "Amazon RDS",
      "Amazon Redshift",
      "Amazon DynamoDB",
      "Amazon CloudWatch",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon RDS is a managed relational database service that automates common database tasks like backups, patching, and recovery, freeing DBAs to focus on optimizing data architecture and performance.",
  },
  {
    id: 11,
    text: "Which of the below is a best-practice when designing solutions on AWS?",
    options: [
      "Invest heavily in architecting your environment, as it is not easy to change your design later.",
      "Use AWS reservations to reduce costs when testing your production environment.",
      "Automate wherever possible to make architectural experimentation easier.",
      "Provision a large compute capacity to handle any spikes in load",
    ],
    correctAnswers: [2],
    explanation:
      "Automating as much as possible is an AWS best-practice to enable faster and more flexible architectural experimentation, reducing manual interventions and improving scalability.",
  },
  {
    id: 12,
    text: "According to the AWS Acceptable Use Policy, which of the following statements is true regarding penetration testing of EC2 instances?",
    options: [
      "Penetration testing is not allowed in AWS.",
      "Penetration testing is performed automatically by AWS to determine vulnerabilities in your AWS infrastructure.",
      "Penetration testing can be performed by the customer on their own instances without prior authorization from AWS.",
      "The AWS customers are only allowed to perform penetration testing on services managed by AWS.",
    ],
    correctAnswers: [2],
    explanation:
      "Customers are allowed to conduct penetration tests on their own EC2 instances without prior authorization from AWS, as long as they follow AWS’s penetration testing guidelines.",
  },
  {
    id: 13,
    text: "Which service is used to ensure that messages between software components are not lost if one or more components fail?",
    options: [
      "Amazon SQS",
      "Amazon SES",
      "AWS Direct Connect",
      "Amazon Connect",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon Simple Queue Service (SQS) is a message queuing service that ensures messages are not lost between distributed components, providing a reliable way to handle failures and load balancing.",
  },
  {
    id: 14,
    text: "The principle 'design for failure and nothing will fail' is very important when designing your AWS Cloud architecture. Which of the following would help adhere to this principle? (Choose TWO)",
    options: [
      "Multi-factor authentication",
      "Availability Zones",
      "Elastic Load Balancing",
      "Penetration testing",
      "Vertical Scaling",
    ],
    correctAnswers: [1, 2],
    explanation:
      "Using Availability Zones and Elastic Load Balancing helps distribute resources across multiple locations and ensure that traffic is balanced, minimizing the impact of any single point of failure.",
  },
  {
    id: 15,
    text: "What is the AWS service that provides a virtual network dedicated to your AWS account?",
    options: ["AWS VPN", "AWS Subnets", "AWS Dedicated Hosts", "Amazon VPC"],
    correctAnswers: [3],
    explanation:
      "Amazon Virtual Private Cloud (VPC) allows you to launch AWS resources in a virtual network that you define, providing full control over your network configuration and isolation.",
  },
  {
    id: 16,
    text: "According to the AWS Shared responsibility model, which of the following are the responsibility of the customer? (Choose TWO)",
    options: [
      "Managing environmental events of AWS data centers",
      "Protecting the confidentiality of data in transit in Amazon S3",
      "Controlling physical access to AWS Regions",
      "Ensuring that the underlying EC2 host is configured properly",
      "Patching applications installed on Amazon EC2",
    ],
    correctAnswers: [1, 4],
    explanation:
      "Under the AWS Shared Responsibility Model, customers are responsible for securing their data in transit and patching the applications they install on EC2 instances.",
  },
  {
    id: 17,
    text: "Which of the following AWS services can be used as a compute resource? (Choose TWO)",
    options: [
      "Amazon VPC",
      "Amazon CloudWatch",
      "Amazon S3",
      "Amazon EC2",
      "AWS Lambda",
    ],
    correctAnswers: [3, 4],
    explanation:
      "Amazon EC2 and AWS Lambda are compute services. EC2 provides scalable computing capacity, while Lambda offers a serverless compute service for running code without provisioning servers.",
  },
  {
    id: 18,
    text: "Your company is designing a new application that will store and retrieve photos and videos. Which of the following services should you recommend as the underlying storage mechanism?",
    options: ["Amazon EBS", "Amazon SQS", "Amazon S3", "Amazon Instance Store"],
    correctAnswers: [2],
    explanation:
      "Amazon S3 is an object storage service suitable for storing and retrieving large quantities of data, including photos and videos, with scalability and high durability.",
  },
  {
    id: 19,
    text: "Which of the following is equivalent to a user name and password and is used to authenticate your programmatic access to AWS services and APIs?",
    options: ["Instance Password", "Key pairs", "Access Keys", "MFA"],
    correctAnswers: [2],
    explanation:
      "Access Keys consist of an access key ID and a secret access key, and are used to authenticate programmatic requests to AWS services, much like a user name and password for your AWS account.",
  },
  {
    id: 20,
    text: "What does Amazon ElastiCache provide?",
    options: [
      "In-memory caching for read-heavy applications",
      "An Ehcache compatible in-memory data store",
      "An online software store that allows Customers to launch pre-configured software with just a few clicks",
      "A domain name system in the cloud",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon ElastiCache provides in-memory caching to improve the performance of web applications, enabling fast retrieval of data for read-heavy applications.",
  },
  {
    id: 21,
    text: "What is the AWS service that enables you to manage all of your AWS accounts from a single master account?",
    options: [
      "AWS WAF",
      "AWS Trusted Advisor",
      "AWS Organizations",
      "Amazon Config",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Organizations helps you centrally manage billing, control access, compliance, and security across multiple AWS accounts.",
  },
  {
    id: 22,
    text: "Which of the following EC2 instance purchasing options supports the Bring Your Own License (BYOL) model for almost every BYOL scenario?",
    options: [
      "Dedicated Instances",
      "Dedicated Hosts",
      "On-demand Instances",
      "Reserved Instances",
    ],
    correctAnswers: [1],
    explanation:
      "Dedicated Hosts provide physical servers for your exclusive use, allowing you to use your own licenses for software that is tied to specific physical hardware.",
  },
  {
    id: 23,
    text: "Which of the following is one of the benefits of moving infrastructure from an on-premises data center to AWS?",
    options: [
      "Free support for all enterprise customers",
      "Automatic data protection",
      "Reduced Capital Expenditure (CapEx)",
      "AWS holds responsibility for managing customer applications",
    ],
    correctAnswers: [2],
    explanation:
      "Moving to AWS reduces upfront capital expenditure (CapEx) as it removes the need for investing in physical hardware and data centers, shifting to an operational expenditure (OpEx) model.",
  },
  {
    id: 24,
    text: "Which of the following are important design principles you should adopt when designing systems on AWS? (Choose TWO)",
    options: [
      "Always use Global Services in your architecture rather than Regional Services",
      "Always choose to pay as you go",
      "Treat servers as fixed resources",
      "Automate wherever possible",
      "Remove single points of failure",
    ],
    correctAnswers: [3, 4],
    explanation:
      "When designing on AWS, it is essential to automate tasks wherever possible to reduce manual intervention, and remove single points of failure to increase system resilience.",
  },
  {
    id: 25,
    text: "Which AWS Service can be used to establish a dedicated, private network connection between AWS and your datacenter?",
    options: [
      "AWS Direct Connect",
      "Amazon CloudFront",
      "AWS Snowball",
      "Amazon Route 53",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Direct Connect allows you to create a dedicated network connection from your on-premises data center to AWS, bypassing the public internet for a more secure and consistent experience.",
  },
  {
    id: 26,
    text: "You are working on two projects that require completely different network configurations. Which AWS service or feature will allow you to isolate resources and network configurations?",
    options: [
      "Internet gateways",
      "Virtual Private Cloud",
      "Security Groups",
      "Amazon CloudFront",
    ],
    correctAnswers: [1],
    explanation:
      "A Virtual Private Cloud (VPC) allows you to create isolated network environments within AWS, ensuring that your resources and network configurations are separate for different projects.",
  },
  {
    id: 27,
    text: "Which of the following services can help protect your web applications from SQL injection and other vulnerabilities in your application code?",
    options: ["Amazon Cognito", "AWS IAM", "Amazon Aurora", "AWS WAF"],
    correctAnswers: [3],
    explanation:
      "AWS WAF (Web Application Firewall) helps protect your web applications by filtering out malicious traffic and preventing vulnerabilities such as SQL injection and cross-site scripting (XSS).",
  },
  {
    id: 28,
    text: "An organization needs to analyze and process a large number of data sets. Which AWS service should they use?",
    options: ["Amazon EMR", "Amazon MQ", "Amazon SNS", "Amazon SQS"],
    correctAnswers: [0],
    explanation:
      "Amazon EMR (Elastic MapReduce) is a service that allows you to process vast amounts of data using popular frameworks such as Apache Hadoop and Apache Spark, ideal for large-scale data analysis.",
  },
  {
    id: 29,
    text: "Based on the AWS Shared Responsibility Model, which of the following are the sole responsibility of AWS? (Choose TWO)",
    options: [
      "Monitoring network performance",
      "Installing software on EC2 instances",
      "Creating hypervisors",
      "Configuring Access Control Lists (ACLs)",
      "Hardware maintenance",
    ],
    correctAnswers: [2, 4],
    explanation:
      "Under the AWS Shared Responsibility Model, AWS is responsible for managing and maintaining the underlying infrastructure, which includes creating hypervisors and maintaining hardware.",
  },
  {
    id: 30,
    text: "What is the AWS service that provides you the highest level of control over the underlying virtual infrastructure?",
    options: ["Amazon Redshift", "Amazon DynamoDB", "Amazon EC2", "Amazon RDS"],
    correctAnswers: [2],
    explanation:
      "Amazon EC2 (Elastic Compute Cloud) provides the highest level of control over the virtualized infrastructure, allowing you to configure instances, storage, networking, and more.",
  },
  {
    id: 31,
    text: "What are the default security credentials that are required to access the AWS management console for an IAM user account?",
    options: [
      "MFA",
      "Security tokens",
      "A user name and password",
      "Access keys",
    ],
    correctAnswers: [2],
    explanation:
      "To access the AWS Management Console, an IAM user must log in with a username and password. These credentials provide the required access to the console.",
  },
  {
    id: 32,
    text: "In your on-premises environment, you can create as many virtual servers as you need from a single template. What can you use to perform the same in AWS?",
    options: ["IAM", "An internet gateway", "EBS Snapshot", "AMI"],
    correctAnswers: [3],
    explanation:
      "An Amazon Machine Image (AMI) is a template that contains a software configuration (e.g., OS, application server, and applications), allowing you to launch new instances based on the same setup.",
  },
  {
    id: 33,
    text: "What are two advantages of using Cloud Computing over using traditional data centers? (Choose TWO)",
    options: [
      "Reserved Compute capacity",
      "Eliminating Single Points of Failure (SPOFs)",
      "Distributed infrastructure",
      "Virtualized compute resources",
      "Dedicated hosting",
    ],
    correctAnswers: [1, 2],
    explanation:
      "Cloud computing eliminates SPOFs by leveraging distributed infrastructure, providing greater reliability. Additionally, cloud providers use globally distributed infrastructure, ensuring fault tolerance and redundancy.",
  },
  {
    id: 34,
    text: "Which of the following aspects of security are managed by AWS? (Choose TWO)",
    options: [
      "Encryption of EBS volumes",
      "VPC security",
      "Access permissions",
      "Hardware patching",
      "Securing global physical infrastructure",
    ],
    correctAnswers: [3, 4],
    explanation:
      "According to the AWS Shared Responsibility Model, AWS manages and secures the underlying physical infrastructure, which includes hardware patching and maintaining global physical infrastructure.",
  },
  {
    id: 35,
    text: "Which statement best describes the operational excellence pillar of the AWS Well-Architected Framework?",
    options: [
      "The ability of a system to recover gracefully from failure",
      "The efficient use of computing resources to meet requirements",
      "The ability to monitor systems and improve supporting processes and procedures",
      "The ability to manage datacenter operations more efficiently",
    ],
    correctAnswers: [2],
    explanation:
      "Operational excellence in the AWS Well-Architected Framework emphasizes monitoring and continuously improving operational procedures to ensure the best outcomes.",
  },
  {
    id: 36,
    text: "AWS has created a large number of Edge Locations as part of its Global Infrastructure. Which of the following is NOT a benefit of using Edge Locations?",
    options: [
      "Edge locations are used by CloudFront to cache the most recent responses",
      "Edge locations are used by CloudFront to improve your end users’ experience when uploading files",
      "Edge locations are used by CloudFront to distribute traffic across multiple instances to reduce latency",
      "Edge locations are used by CloudFront to distribute content to global users with low latency",
    ],
    correctAnswers: [2],
    explanation:
      "Edge Locations help improve content delivery and reduce latency for users globally by caching content closer to end users. They do not distribute traffic across multiple instances.",
  },
  {
    id: 37,
    text: "What are the change management tools that help AWS customers audit and monitor all resource changes in their AWS environment? (Choose TWO)",
    options: [
      "AWS CloudTrail",
      "Amazon Comprehend",
      "AWS Transit Gateway",
      "AWS X-Ray",
      "AWS Config",
    ],
    correctAnswers: [0, 4],
    explanation:
      "AWS CloudTrail provides visibility into user activity by recording actions taken on your account. AWS Config enables continuous monitoring of your AWS resources, making sure they comply with predefined configurations.",
  },
  {
    id: 38,
    text: "Which of the following services allows you to run containerized applications on a cluster of EC2 instances?",
    options: [
      "Amazon ECS",
      "AWS Data Pipeline",
      "AWS Cloud9",
      "AWS Personal Health Dashboard",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon Elastic Container Service (ECS) is a fully managed container orchestration service that allows you to run, scale, and secure Docker containers on a cluster of EC2 instances.",
  },
  {
    id: 39,
    text: "Which of the following services will help businesses ensure compliance in AWS?",
    options: [
      "CloudFront",
      "CloudEndure Migration",
      "CloudWatch",
      "CloudTrail",
    ],
    correctAnswers: [3],
    explanation:
      "AWS CloudTrail helps businesses with governance, compliance, and risk auditing by recording all AWS API calls.",
  },
  {
    id: 40,
    text: "Which of the following procedures will help reduce your Amazon S3 costs?",
    options: [
      "Use the Import/Export feature to move old files automatically to Amazon Glacier",
      "Use the right combination of storage classes based on different use cases",
      "Pick the right Availability Zone for your S3 bucket",
      "Move all the data stored in S3 standard to EBS",
    ],
    correctAnswers: [1],
    explanation:
      "Choosing the appropriate S3 storage class (Standard, Intelligent-Tiering, Glacier, etc.) based on access patterns helps reduce costs by storing infrequently accessed data in lower-cost storage.",
  },
  {
    id: 41,
    text: "What are the AWS services/features that can help you maintain a highly available and fault-tolerant architecture in AWS? (Choose TWO)",
    options: [
      "AWS Direct Connect",
      "Amazon EC2 Auto Scaling",
      "Elastic Load Balancer",
      "CloudFormation",
      "Network ACLs",
    ],
    correctAnswers: [1, 2],
    explanation:
      "Amazon EC2 Auto Scaling ensures that the right number of EC2 instances are running to handle the load, while Elastic Load Balancer distributes incoming application traffic across multiple instances to prevent overloading.",
  },
  {
    id: 42,
    text: "Which of the following activities may help reduce your AWS monthly costs?",
    options: [
      "Enabling Amazon EC2 Auto Scaling for all of your workloads",
      "Using the AWS Network Load Balancer (NLB) to load balance the incoming HTTP requests",
      "Removing all of your Cost Allocation Tags",
      "Deploying your AWS resources across multiple Availability Zones",
    ],
    correctAnswers: [0],
    explanation:
      "Enabling EC2 Auto Scaling ensures that you're only paying for the resources you need, automatically adjusting capacity to maintain performance and reduce costs.",
  },
  {
    id: 43,
    text: "What is the AWS service/feature that takes advantage of Amazon CloudFront’s globally distributed edge locations to transfer files to S3 with higher upload speeds?",
    options: [
      "S3 Transfer Acceleration",
      "AWS WAF",
      "AWS Snowmobile",
      "AWS Snowball",
    ],
    correctAnswers: [0],
    explanation:
      "S3 Transfer Acceleration enables fast, easy, and secure file uploads to Amazon S3 using the nearest edge location provided by Amazon CloudFront.",
  },
  {
    id: 44,
    text: "Which of the following AWS security features is associated with an EC2 instance and functions to filter incoming traffic requests?",
    options: ["AWS X-Ray", "Network ACL", "Security Groups", "VPC Flow logs"],
    correctAnswers: [2],
    explanation:
      "Security Groups act as a virtual firewall for your EC2 instances to control inbound and outbound traffic.",
  },
  {
    id: 45,
    text: "Which AWS services can be used to improve the performance of a global application and reduce latency for its users? (Choose TWO)",
    options: [
      "AWS KMS",
      "AWS Global Accelerator",
      "AWS Direct Connect",
      "AWS Glue",
      "Amazon CloudFront",
    ],
    correctAnswers: [1, 4],
    explanation:
      "AWS Global Accelerator optimizes traffic routes and speeds up content delivery, while Amazon CloudFront caches content at edge locations to reduce latency.",
  },
  {
    id: 46,
    text: "Using Amazon RDS falls under the shared responsibility model. Which of the following are customer responsibilities? (Choose TWO)",
    options: [
      "Building the relational database schema",
      "Performing backups",
      "Managing the database settings",
      "Patching the database software",
      "Installing the database software",
    ],
    correctAnswers: [0, 2],
    explanation:
      "In the shared responsibility model, AWS handles tasks like patching, while customers are responsible for the database schema and configuration.",
  },
  {
    id: 47,
    text: "A company has a large amount of structured data stored in their on-premises data center. They are planning to migrate all the data to AWS, what is the most appropriate AWS database option?",
    options: [
      "Amazon DynamoDB",
      "Amazon SNS",
      "Amazon RDS",
      "Amazon ElastiCache",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon RDS is a managed relational database service that is ideal for migrating structured data from on-premises to the cloud.",
  },
  {
    id: 48,
    text: "A company has created a solution that helps AWS customers improve their architectures on AWS. Which AWS program may support this company?",
    options: [
      "APN Consulting Partners",
      "AWS TAM",
      "APN Technology Partners",
      "AWS Professional Services",
    ],
    correctAnswers: [0],
    explanation:
      "APN Consulting Partners are professional services firms that help customers design, architect, build, and manage their AWS solutions.",
  },
  {
    id: 49,
    text: "What is the AWS serverless service that allows you to run your applications without any administrative burden?",
    options: [
      "Amazon LightSail",
      "AWS Lambda",
      "Amazon RDS instances",
      "Amazon EC2 instances",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Lambda allows you to run code without provisioning or managing servers, making it ideal for serverless applications.",
  },
  {
    id: 50,
    text: "Jessica is managing an e-commerce web application in AWS. The application is hosted on six EC2 instances. One day, three of the instances crashed; but none of her customers were affected. What has Jessica done correctly in this scenario?",
    options: [
      "She has properly built an elastic system",
      "She has properly built a fault-tolerant system",
      "She has properly built an encrypted system",
      "She has properly built a scalable system",
    ],
    correctAnswers: [1],
    explanation:
      "A fault-tolerant system can continue to operate even when some of its components fail, ensuring no disruption in service.",
  },
];

export const exam3: Question[] = [
  {
    id: 1,
    text: "Where can you store files in AWS? (Choose TWO)",
    options: [
      "Amazon EFS",
      "Amazon SNS",
      "Amazon EBS",
      "Amazon ECS",
      "Amazon EMR",
    ],
    correctAnswers: [0, 2],
    explanation:
      "Amazon EFS and Amazon EBS are designed for file storage, with EFS providing a scalable file system and EBS offering block storage suitable for databases and other applications needing individual, unshared volumes.",
  },
  {
    id: 2,
    text: "Which AWS service can be used to store and reliably deliver messages across distributed systems?",
    options: [
      "Amazon Simple Queue Service",
      "AWS Storage Gateway",
      "Amazon Simple Email Service",
      "Amazon Simple Storage Service",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon Simple Queue Service (SQS) is specifically designed for message queuing, allowing developers to decouple and scale microservices, distributed systems, and serverless applications.",
  },
  {
    id: 3,
    text: "Which of the following describes the payment model that AWS makes available for customers that can commit to using Amazon EC2 over a one or 3-year term to reduce their total computing costs?",
    options: [
      "Pay less as AWS grows",
      "Pay as you go",
      "Pay less by using more",
      "Save when you reserve",
    ],
    correctAnswers: [3],
    explanation:
      "The 'Save when you reserve' model offers significant cost savings on the condition that customers commit to a specified usage (one or three years), which is ideal for predictable workloads.",
  },
  {
    id: 4,
    text: "A company is migrating its on-premises database to Amazon RDS. What should the company do to ensure Amazon RDS costs are kept to a minimum?",
    options: [
      "Right-size before and after migration",
      "Use a Multi-Region Active-Passive architecture",
      "Combine On-demand Capacity Reservations with Saving Plans",
      "Use a Multi-Region Active-Active architecture",
    ],
    correctAnswers: [0],
    explanation:
      "Right-sizing ensures that you choose the most cost-effective resources that match your workload requirements, preventing overprovisioning and excessive costs.",
  },
  {
    id: 5,
    text: "What is the primary storage service used by Amazon RDS database instances?",
    options: ["Amazon Glacier", "Amazon EBS", "Amazon EFS", "Amazon S3"],
    correctAnswers: [1],
    explanation:
      "Amazon RDS primarily utilizes Amazon EBS (Elastic Block Store) to provide persistent block storage for database instances.",
  },
  {
    id: 6,
    text: "A company is developing a new application using a microservices framework. The new application is having performance and latency issues. Which AWS Service should be used to troubleshoot these issues?",
    options: [
      "AWS CodePipeline",
      "AWS X-Ray",
      "Amazon Inspector",
      "AWS CloudTrail",
    ],
    correctAnswers: [1],
    explanation:
      "AWS X-Ray helps developers analyze and debug production, distributed applications, such as those built using a microservices architecture.",
  },
  {
    id: 7,
    text: "Which of the following AWS services is designed with native Multi-AZ fault tolerance in mind? (Choose TWO)",
    options: [
      "Amazon Redshift",
      "AWS Snowball",
      "Amazon Simple Storage Service",
      "Amazon EBS",
      "Amazon DynamoDB",
    ],
    correctAnswers: [2, 4],
    explanation:
      "Amazon S3 and Amazon DynamoDB are designed to automatically distribute data across multiple Availability Zones to ensure high availability and durability.",
  },
  {
    id: 8,
    text: "What are the Amazon RDS features that can be used to improve the availability of your database? (Choose TWO)",
    options: [
      "AWS Regions",
      "Multi-AZ Deployment",
      "Automatic patching",
      "Read Replicas",
      "Edge Locations",
    ],
    correctAnswers: [1, 3],
    explanation:
      "Multi-AZ Deployments provide high availability and failover support for DB instances, while Read Replicas provide increased performance for read-heavy database workloads.",
  },
  {
    id: 9,
    text: "Sarah has deployed an application in the Northern California (us-west-1) region. After examining the application’s traffic, she notices that about 30% of the traffic is coming from Asia. What can she do to reduce latency for the users in Asia?",
    options: [
      "Replicate the current resources across multiple Availability Zones within the same region",
      "Migrate the application to a hosting provider in Asia",
      "Recreate the website content",
      "Create a CDN using CloudFront, so that content is cached at Edge Locations close to and in Asia",
    ],
    correctAnswers: [3],
    explanation:
      "Using Amazon CloudFront as a CDN (Content Delivery Network) allows content to be delivered from Edge Locations closer to users, significantly reducing latency.",
  },
  {
    id: 10,
    text: "An organization runs many systems and uses many AWS products. Which of the following services enables them to control how each developer interacts with these products?",
    options: [
      "AWS Identity and Access Management",
      "Amazon RDS",
      "Network Access Control Lists",
      "Amazon EMR",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Identity and Access Management (IAM) allows organizations to manage access to AWS services and resources securely.",
  },
  {
    id: 11,
    text: "Using Amazon EC2 falls under which of the following cloud computing models?",
    options: ["Iaas & SaaS", "IaaS", "SaaS", "PaaS"],
    correctAnswers: [1],
    explanation:
      "Amazon EC2 is an example of Infrastructure as a Service (IaaS), providing virtual servers in the cloud on which users can run applications.",
  },
  {
    id: 12,
    text: "Which of the below is a best-practice when building applications on AWS?",
    options: [
      "Strengthen physical security by applying the principle of least privilege",
      "Ensure that the application runs on hardware from trusted vendors",
      "Use IAM policies to maintain performance",
      "Decouple the components of the application so that they run independently",
    ],
    correctAnswers: [3],
    explanation:
      "Decoupling application components allows them to operate independently, improving fault tolerance and scalability, which are key aspects of cloud-native architecture.",
  },
  {
    id: 13,
    text: "Your company is designing a new application that will store and retrieve photos and videos. Which of the following services should you recommend as the underlying storage mechanism?",
    options: ["Amazon EBS", "Amazon SQS", "Amazon Instance store", "Amazon S3"],
    correctAnswers: [3],
    explanation:
      "Amazon S3 is ideal for storing and retrieving any amount of data, such as photos and videos, at any time from anywhere on the web, making it perfect for such applications.",
  },
  {
    id: 14,
    text: "Amazon Glacier is an Amazon S3 storage class that is suitable for storing [...] & [...]. (Choose TWO)",
    options: [
      "Active archives",
      "Dynamic websites’ assets",
      "Long-term analytic data",
      "Active databases",
      "Cached data",
    ],
    correctAnswers: [0, 2],
    explanation:
      "Amazon Glacier, now known as Amazon S3 Glacier, is a storage solution designed for secure, durable, and extremely low-cost storage for data archiving and long-term backup.",
  },
  {
    id: 15,
    text: "What does Amazon Elastic Beanstalk provide?",
    options: [
      "A PaaS solution to automate application deployment",
      "A compute engine for Amazon ECS",
      "A scalable file storage solution for use with AWS and on-premises servers",
      "A NoSQL database service",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon Elastic Beanstalk is an easy-to-use service for deploying and scaling web applications and services, managing all the underlying infrastructure.",
  },
  {
    id: 16,
    text: "What is the AWS service that performs automated network assessments of Amazon EC2 instances to check for vulnerabilities?",
    options: [
      "Amazon Kinesis",
      "Security groups",
      "Amazon Inspector",
      "AWS Network Access Control Lists",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon Inspector is an automated security assessment service that helps improve the security and compliance of applications deployed on AWS.",
  },
  {
    id: 17,
    text: "Under the Shared Responsibility Model, which of the following controls do customers fully inherit from AWS? (Choose TWO)",
    options: [
      "Patch management controls",
      "Database controls",
      "Awareness & Training",
      "Environmental controls",
      "Physical controls",
    ],
    correctAnswers: [3, 4],
    explanation:
      "Customers inherit physical and environmental controls from AWS, as AWS is responsible for the infrastructure that runs all of the services offered in the AWS Cloud.",
  },
  {
    id: 18,
    text: "A company needs to host a database in Amazon RDS for at least three years. Which of the following options would be the most cost-effective solution?",
    options: [
      "Reserved instances - No Upfront",
      "Reserved instances - Partial Upfront",
      "On-Demand instances",
      "Spot Instances",
    ],
    correctAnswers: [1],
    explanation:
      "Reserved instances with partial upfront payment offer a significant discount over the full term and require only part of the cost to be paid upfront, making it cost-effective for long-term commitments like three years.",
  },
  {
    id: 19,
    text: "Your application has recently experienced significant global growth, and international users are complaining of high latency. What is the AWS characteristic that can help improve your international users’ experience?",
    options: [
      "Elasticity",
      "Global reach",
      "Data durability",
      "High availability",
    ],
    correctAnswers: [1],
    explanation:
      "AWS's global reach, with regions and availability zones all over the world, helps reduce latency for international users by allowing applications to be hosted closer to the user base.",
  },
  {
    id: 20,
    text: "Savings Plans are available for which of the following AWS compute services? (Choose TWO)",
    options: [
      "AWS Batch",
      "AWS Outposts",
      "Amazon Lightsail",
      "Amazon EC2",
      "AWS Lambda",
    ],
    correctAnswers: [3, 4],
    explanation:
      "Savings Plans can be applied to usage across Amazon EC2, AWS Lambda, and some usage in AWS Fargate, offering flexibility and cost savings on compute usage.",
  },
  {
    id: 21,
    text: "A company has business-critical workloads hosted on AWS and they are unwilling to accept any downtime. Which of the following is a recommended best practice to protect their workloads in the event of an unexpected natural disaster?",
    options: [
      "Replicate data across multiple Edge Locations worldwide and use Amazon CloudFront to perform automatic failover in the event of an outage.",
      "Deploy AWS resources across multiple Availability Zones within the same AWS Region.",
      "Create point-in-time backups in another subnet and recover this data when a disaster occurs.",
      "Deploy AWS resources to another AWS Region and implement an Active-Active disaster recovery strategy.",
    ],
    correctAnswers: [3],
    explanation:
      "Deploying AWS resources to another AWS Region and implementing an Active-Active disaster recovery strategy provides a high level of resilience and minimizes downtime in case of a regional failure, making it suitable for critical workloads.",
  },
  {
    id: 22,
    text: "Which statement is correct with regards to AWS service limits? (Choose TWO)",
    options: [
      "You can contact AWS support to increase the service limits.",
      "Each IAM user has the same service limit.",
      "There are no service limits on AWS.",
      "You can use the AWS Trusted Advisor to monitor your service limits.",
      "The Amazon Simple Email Service is responsible for sending email notifications when usage approaches a service limit.",
    ],
    correctAnswers: [0, 3],
    explanation:
      "AWS service limits are predefined but can be increased by contacting AWS support. AWS Trusted Advisor provides insights into service limits and helps you monitor them to avoid service disruptions.",
  },
  {
    id: 23,
    text: "What is the AWS tool that enables you to use scripts to manage all AWS services and resources?",
    options: ["AWS Console", "AWS Service Catalog", "AWS OpsWorks", "AWS CLI"],
    correctAnswers: [3],
    explanation:
      "AWS CLI (Command Line Interface) allows users to manage AWS services and resources via scripts, providing a powerful way to automate tasks across different AWS services.",
  },
  {
    id: 24,
    text: "What are the connectivity options that can be used to build hybrid cloud architectures? (Choose TWO)",
    options: [
      "AWS Artifact",
      "AWS Cloud9",
      "AWS Direct Connect",
      "AWS CloudTrail",
      "AWS VPN",
    ],
    correctAnswers: [2, 4],
    explanation:
      "AWS Direct Connect and AWS VPN provide secure, low-latency connections between on-premises infrastructure and AWS, which are essential for hybrid cloud architectures.",
  },
  {
    id: 25,
    text: "A company has deployed a new web application on multiple Amazon EC2 instances. Which of the following should they use to ensure that the incoming HTTP traffic is distributed evenly across the instances?",
    options: [
      "AWS EC2 Auto Recovery",
      "AWS Auto Scaling",
      "AWS Network Load Balancer",
      "AWS Application Load Balancer",
    ],
    correctAnswers: [3],
    explanation:
      "The AWS Application Load Balancer is designed to distribute incoming HTTP/S traffic across multiple EC2 instances, ensuring efficient traffic distribution for web applications.",
  },
  {
    id: 26,
    text: "Which of the following AWS offerings is a MySQL-compatible relational database service that can scale capacity automatically based on demand?",
    options: [
      "Amazon Neptune",
      "Amazon Aurora",
      "Amazon RDS for SQL Server",
      "Amazon RDS for PostgreSQL",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon Aurora is a MySQL-compatible, highly performant relational database that can automatically scale storage based on the workload's demand, making it suitable for dynamic database needs.",
  },
  {
    id: 27,
    text: "Which of the following can help protect your EC2 instances from DDoS attacks? (Choose TWO)",
    options: [
      "AWS CloudHSM",
      "Security Groups",
      "AWS Batch",
      "AWS IAM",
      "Network Access Control Lists (Network ACLs)",
    ],
    correctAnswers: [1, 4],
    explanation:
      "Security Groups and Network Access Control Lists (NACLs) act as virtual firewalls, controlling inbound and outbound traffic to EC2 instances, and are important for mitigating DDoS attacks.",
  },
  {
    id: 28,
    text: "What is the AWS data warehouse service that supports a high level of query performance on large amounts of datasets?",
    options: [
      "Amazon Redshift",
      "Amazon Kinesis",
      "Amazon DynamoDB",
      "Amazon RDS",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon Redshift is a fully managed data warehouse service that provides fast query performance on large datasets, making it ideal for analytical workloads.",
  },
  {
    id: 29,
    text: "Which of the following should be considered when performing a TCO analysis to compare the costs of running an application on AWS instead of on-premises?",
    options: [
      "Application development",
      "Market research",
      "Business analysis",
      "Physical hardware",
    ],
    correctAnswers: [3],
    explanation:
      "In a TCO (Total Cost of Ownership) analysis, it's essential to consider the costs of physical hardware for on-premises infrastructure, which AWS can help reduce by providing cloud-based resources.",
  },
  {
    id: 30,
    text: "How are AWS customers billed for Linux-based Amazon EC2 usage?",
    options: [
      "EC2 instances will be billed on one second increments, with a minimum of one minute.",
      "EC2 instances will be billed on one hour increments, with a minimum of one day.",
      "EC2 instances will be billed on one minute increments, with a minimum of one hour.",
      "EC2 instances will be billed on one day increments, with a minimum of one month.",
    ],
    correctAnswers: [0],
    explanation:
      "For Linux-based Amazon EC2 instances, billing is calculated per second with a minimum of one minute, providing flexibility and cost savings when shutting down instances quickly.",
  },
  {
    id: 31,
    text: "Which of the following will impact the price paid for an EC2 instance? (Choose TWO)",
    options: [
      "Instance type",
      "The Availability Zone where the instance is provisioned",
      "Load balancing",
      "Number of buckets",
      "Number of private IPs",
    ],
    correctAnswers: [0, 1],
    explanation:
      "The price of an EC2 instance is determined by its instance type (such as general-purpose or compute-optimized) and the Availability Zone chosen, which can vary in cost due to regional demand.",
  },
  {
    id: 32,
    text: "A customer spent a lot of time configuring a newly deployed Amazon EC2 instance. After the workload increases, the customer decides to provision another EC2 instance with an identical configuration. How can the customer achieve this?",
    options: [
      "By creating an AWS Config template from the old instance and launching a new instance from it",
      "By creating an EBS Snapshot of the old instance",
      "By installing Aurora on EC2 and launching a new instance from it",
      "By creating an AMI from the old instance and launching a new instance from it",
    ],
    correctAnswers: [3],
    explanation:
      "Creating an Amazon Machine Image (AMI) from the configured instance allows the customer to quickly launch new instances with identical settings, saving time and ensuring consistency.",
  },
  {
    id: 33,
    text: "A company uses AWS Organizations to manage all of its AWS accounts. Which of the following allows the company to restrict what services and actions are allowed in each individual account?",
    options: [
      "IAM Principals",
      "AWS Service Control Policies (SCPs)",
      "IAM policies",
      "AWS Fargate",
    ],
    correctAnswers: [1],
    explanation:
      "Service Control Policies (SCPs) in AWS Organizations allow administrators to centrally control the permissions and actions that can be performed within the organization's AWS accounts.",
  },
  {
    id: 34,
    text: "Which of the following statements describes the AWS Cloud’s agility?",
    options: [
      "AWS allows you to host your applications in multiple regions around the world",
      "AWS provides customizable hardware at the lowest possible cost",
      "AWS allows you to provision resources in minutes",
      "AWS allows you to pay upfront to reduce costs",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Cloud’s agility refers to the ability to quickly provision and manage cloud resources in minutes, enabling businesses to scale and adapt faster.",
  },
  {
    id: 35,
    text: "What are the benefits of using the Amazon Relational Database Service? (Choose TWO)",
    options: [
      "Lower administrative burden",
      "Complete control over the underlying host",
      "Resizable compute capacity",
      "Scales automatically to larger or smaller instance types",
      "Supports the document and key-value data structure",
    ],
    correctAnswers: [0, 2],
    explanation:
      "Amazon RDS offers a lower administrative burden by handling common database tasks, and it provides resizable compute capacity to adjust based on workload demands.",
  },
  {
    id: 36,
    text: "What is the connectivity option that uses Internet Protocol Security (IPSec) to establish encrypted connectivity between an on-premises network and the AWS Cloud?",
    options: [
      "Internet Gateway",
      "AWS IQ",
      "AWS Direct Connect",
      "AWS Site-to-Site VPN",
    ],
    correctAnswers: [3],
    explanation:
      "AWS Site-to-Site VPN uses IPSec to securely connect an on-premises network to the AWS Cloud over the public internet, providing encrypted communication.",
  },
  {
    id: 37,
    text: "What is the minimum level of AWS support that provides 24x7 access to technical support engineers via phone and chat?",
    options: [
      "Enterprise Support",
      "Developer Support",
      "Basic Support",
      "Business Support",
    ],
    correctAnswers: [3],
    explanation:
      "AWS Business Support provides 24x7 access to technical support via phone and chat, along with other benefits like AWS Trusted Advisor checks.",
  },
  {
    id: 38,
    text: "Which of the following is used to control network traffic in AWS? (Choose TWO)",
    options: [
      "Network Access Control Lists (NACLs)",
      "Key Pairs",
      "Access Keys",
      "IAM Policies",
      "Security Groups",
    ],
    correctAnswers: [0, 4],
    explanation:
      "Security Groups and Network Access Control Lists (NACLs) are AWS tools used to control and filter traffic at the instance and subnet levels, respectively.",
  },
  {
    id: 39,
    text: "A company has developed a media transcoding application in AWS. The application is designed to recover quickly from hardware failures. Which one of the following types of instance would be the most cost-effective choice to use?",
    options: [
      "Reserved instances",
      "Spot Instances",
      "On-Demand instances",
      "Dedicated instances",
    ],
    correctAnswers: [1],
    explanation:
      "Spot Instances offer unused EC2 capacity at a significant discount, making them ideal for applications that can tolerate interruptions, such as media transcoding.",
  },
  {
    id: 40,
    text: "Which AWS Service provides the current status of all AWS Services in all AWS Regions?",
    options: [
      "AWS Service Health Dashboard",
      "AWS Management Console",
      "Amazon CloudWatch",
      "AWS Personal Health Dashboard",
    ],
    correctAnswers: [0],
    explanation:
      "The AWS Service Health Dashboard provides real-time information on the status and availability of AWS services across all regions, helping users monitor service outages.",
  },
  {
    id: 41,
    text: "Which AWS service or feature can be used to call AWS Services from different programming languages?",
    options: [
      "AWS Software Development Kit",
      "AWS Command Line Interface",
      "AWS CodeDeploy",
      "AWS Management Console",
    ],
    correctAnswers: [0],
    explanation:
      "The AWS Software Development Kit (SDK) allows developers to use various programming languages to interact with and manage AWS services programmatically.",
  },
  {
    id: 42,
    text: "Which AWS Service can be used to register a new domain name?",
    options: ["Amazon Personalize", "Amazon Route 53", "AWS KMS", "AWS Config"],
    correctAnswers: [1],
    explanation:
      "Amazon Route 53 is AWS’s scalable Domain Name System (DNS) service that can also be used to register and manage domain names.",
  },
  {
    id: 43,
    text: "App development companies move their business to AWS to reduce time-to-market and improve customer satisfaction, what are the AWS automation tools that help them deploy their applications faster? (Choose TWO)",
    options: [
      "AWS CloudFormation",
      "AWS Migration Hub",
      "AWS IAM",
      "AWS Elastic Beanstalk",
      "Amazon Macie",
    ],
    correctAnswers: [0, 3],
    explanation:
      "AWS CloudFormation automates the provisioning of infrastructure as code, while AWS Elastic Beanstalk simplifies application deployment by handling infrastructure setup and management.",
  },
  {
    id: 44,
    text: "Which AWS service provides cost-optimization recommendations?",
    options: [
      "AWS Trusted Advisor",
      "AWS Pricing Calculator",
      "Amazon QuickSight",
      "AWS X-Ray",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Trusted Advisor offers real-time recommendations on how to optimize your AWS infrastructure, including cost savings opportunities.",
  },
  {
    id: 45,
    text: "A company has hundreds of VPCs in multiple AWS Regions worldwide. What service does AWS offer to simplify the connection management among the VPCs?",
    options: [
      "VPC Peering",
      "AWS Transit Gateway",
      "Amazon Connect",
      "Security Groups",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Transit Gateway helps simplify management by acting as a central hub that enables VPCs and on-premises networks to connect to one another in a scalable manner.",
  },
  {
    id: 46,
    text: "What is one benefit and one drawback of buying a reserved EC2 instance? (Select TWO)",
    options: [
      "Instances can be shut down by AWS at any time with no notification",
      "Reserved instances require at least a one-year pricing commitment",
      "There is no additional charge for using dedicated instances",
      "Reserved instances provide a significant discount compared to on-demand instances",
      "Reserved instances are best suited for periodic workloads",
    ],
    correctAnswers: [1, 3],
    explanation:
      "Reserved instances provide cost savings for long-term workloads but require at least a one-year commitment, making them ideal for consistent usage but less flexible than On-Demand instances.",
  },
  {
    id: 47,
    text: "Why does every AWS Region contain multiple Availability Zones?",
    options: [
      "Multiple Availability Zones allows you to build resilient and highly available architectures",
      "Multiple Availability Zones results in lower total cost compared to deploying in a single Availability Zone",
      "Multiple Availability Zones allows for data replication and global reach",
      "Multiple Availability Zones within a region increases the storage capacity available in that region",
    ],
    correctAnswers: [0],
    explanation:
      "By utilizing multiple Availability Zones, AWS provides the ability to build highly available and fault-tolerant architectures that can withstand data center failures.",
  },
  {
    id: 48,
    text: "What is the most cost-effective purchasing option for running a set of EC2 instances that must always be available for a period of two months?",
    options: [
      "On-Demand Instances",
      "Spot Instances",
      "Reserved Instances - All Upfront",
      "Reserved Instances - No Upfront",
    ],
    correctAnswers: [0],
    explanation:
      "On-Demand Instances provide the flexibility to run instances without a long-term commitment, making them ideal for short-term workloads that need guaranteed availability, such as two months.",
  },
  {
    id: 49,
    text: "Which of the following is a benefit of running an application in multiple Availability Zones?",
    options: [
      "Allows you to exceed AWS service limits",
      "Reduces application response time between servers and global users",
      "Increases available compute capacity",
      "Increases the availability of your application",
    ],
    correctAnswers: [3],
    explanation:
      "Running applications in multiple Availability Zones increases the availability of your application by mitigating the risk of an entire data center failure.",
  },
  {
    id: 50,
    text: "Data security is one of the top priorities of AWS. How does AWS deal with old storage devices that have reached the end of their useful life?",
    options: [
      "AWS sells the old devices to other hosting providers",
      "AWS destroys the old devices in accordance with industry-standard practices",
      "AWS sends the old devices for remanufacturing",
      "AWS stores the old devices in a secure place",
    ],
    correctAnswers: [1],
    explanation:
      "AWS follows industry-standard practices to securely destroy old storage devices that are no longer in use, ensuring that sensitive data cannot be recovered from them.",
  },
];

export const quizzes: Quiz[] = [
  {
    id: 1,
    title: "AWS Fundamentals",
    slug: "aws",
    subtitle: `${exam1.length} Questions`,
    description: "Test your knowledge of AWS fundamentals.",
    categoryId: "aws-fundamentals",
    category: "AWS Fundamentals",
    exam: exam1,
  },
  {
    id: 2,
    title: "AWS Security",
    slug: "aws",
    subtitle: `${exam2.length} Questions`,
    description: "Test your knowledge of AWS security best practices.",
    categoryId: "aws-security",
    category: "AWS Security",
    exam: exam2,
  },
  {
    id: 3,
    title: "AWS Compute",
    slug: "aws",
    subtitle: `${exam3.length} Questions`,
    description: "Test your knowledge of AWS compute services.",
    categoryId: "aws-compute",
    category: "AWS Compute",
    exam: exam3,
  },
];
