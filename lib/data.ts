import { Category, Question, Quiz } from "./types";
const { v5: uuidv5 } = require("uuid");

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
      "Amazon DynamoDB is a fully managed NoSQL database service that provides fast and flexible key-value and document storage for applications that require consistent, single-digit millisecond latency.",
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
      "To deliver content to users globally with low latency.",
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
      "AWS CloudFormation enables you to use infrastructure as code, allowing you to automate and manage your infrastructure.",
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
      "Amazon ElastiCache provides in-memory caching to improve application performance by allowing you to retrieve data from fast, managed, in-memory caches instead of relying on slower disk-based databases.",
  },
  {
    id: 33,
    text: "Which of the following services can help process and analyze real-time streaming data?",
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
      "AWS CloudFormation enables you to use infrastructure as code, allowing you to automate and manage your infrastructure.",
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
    id: 16,
    text: "According to the AWS Shared responsibility model, which of the following are the responsibility of the customer? (Choose TWO)",
    options: [
      "Monitoring network performance",
      "Installing software on EC2 instances",
      "Creating hypervisors",
      "Configuring Access Control Lists (ACLs)",
      "Hardware maintenance",
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
    text: "Which AWS security feature is associated with an EC2 instance and functions to filter incoming traffic requests?",
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
      "Replicate data across multiple Edge Locations worldwide and use Amazon CloudFront to perform automatic failover in the event of an outage.",
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
      "Amazon Route 53 is AWS’s scalable Domain Name System (DNS) web service that can also be used to register and manage domain names.",
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

const exam4: Question[] = [
  {
    id: uuidv5("aws-question-197", uuidv5.URL),
    text: "A developer needs to set up an SSL security certificate for a client's eCommerce website in order to use the HTTPS protocol. Which of the following AWS services can be used to deploy the required SSL server certificates? (Choose TWO)",
    options: [
      "Amazon Route 53.",
      "AWS ACM.",
      "AWS Directory Service.",
      "AWS Identity & Access Management.",
      "AWS Data Pipeline.",
    ],
    correctAnswers: [0, 1],
    explanation:
      "AWS ACM (AWS Certificate Manager) helps deploy SSL/TLS certificates easily. Route 53 manages DNS but can also be used to configure SSL for domain names. IAM can manage SSL certificates but is not primarily used for deployment.",
  },
  {
    id: uuidv5("aws-question-198", uuidv5.URL),
    text: "Which of the following AWS services scale automatically without your intervention? (Choose TWO)",
    options: [
      "Amazon EC2.",
      "Amazon S3.",
      "AWS Lambda.",
      "Amazon EMR.",
      "Amazon EBS.",
    ],
    correctAnswers: [1, 2],
    explanation:
      "Amazon S3 and AWS Lambda automatically scale to handle increased workloads. EC2 requires manual configuration for scaling, while EBS and EMR do not inherently scale automatically without intervention.",
  },
  {
    id: uuidv5("aws-question-199", uuidv5.URL),
    text: "A company is planning to migrate an application from Amazon EC2 to AWS Lambda to use a serverless architecture. Which of the following will be the responsibility of AWS after migration? (Choose TWO)",
    options: [
      "Application management.",
      "Capacity management.",
      "Access control.",
      "Operating system maintenance.",
      "Data management.",
    ],
    correctAnswers: [1, 3],
    explanation:
      "With AWS Lambda, AWS manages capacity and the underlying operating system maintenance. Application management and access control remain the user's responsibility.",
  },
  {
    id: uuidv5("aws-question-200", uuidv5.URL),
    text: "How do ELBs improve the reliability of your application?",
    options: [
      "By distributing traffic across multiple S3 buckets.",
      "By replicating data to multiple availability zones.",
      "By creating database Read Replicas.",
      "By ensuring that only healthy targets receive traffic.",
    ],
    correctAnswers: [3],
    explanation:
      "ELBs (Elastic Load Balancers) distribute traffic across healthy instances or targets, improving the reliability and availability of applications by avoiding unhealthy targets.",
  },
  {
    id: uuidv5("aws-question-201", uuidv5.URL),
    text: "A company needs to migrate their database with high read/write activity to AWS. What is the best storage option to use?",
    options: [
      "AWS Storage Gateway.",
      "Amazon S3.",
      "Amazon EBS.",
      "Amazon Glacier.",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon EBS is the best option for storage that requires high read/write performance, making it suitable for databases with high activity. S3 and Glacier are not optimized for such use cases.",
  },
  {
    id: uuidv5("aws-question-202", uuidv5.URL),
    text: "A customer is planning to move billions of images and videos to be stored on Amazon S3. The customer has approximately 60 Petabytes of data to move. Which of the following AWS Services is the best choice to transfer the data to AWS?",
    options: [
      "Snowball.",
      "S3 Transfer Acceleration.",
      "Snowmobile.",
      "Amazon VPC.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Snowmobile is designed for transferring very large amounts of data (exceeding petabytes), making it the best solution for transferring 60PB of data. Snowball and S3 Transfer Acceleration are suitable for smaller data transfers.",
  },
  {
    id: uuidv5("aws-question-203", uuidv5.URL),
    text: "A company plans to migrate a large amount of archived data to AWS. The archived data must be maintained for a period of 5 years and must be retrievable within 5 hours of a request. What is the most cost-effective AWS storage service to use?",
    options: [
      "Amazon S3 Glacier.",
      "Amazon EFS.",
      "Amazon S3 Standard.",
      "Amazon EBS.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon S3 Glacier offers a cost-effective storage solution for archived data that is infrequently accessed but must be retrievable within hours.",
  },
  {
    id: uuidv5("aws-question-204", uuidv5.URL),
    text: "Which AWS Service is used to manage user permissions?",
    options: ["Security Groups.", "Amazon ECS.", "AWS IAM.", "AWS Support."],
    correctAnswers: [2],
    explanation:
      "AWS IAM (Identity and Access Management) is the service used to manage user permissions and control access to AWS services and resources.",
  },
  {
    id: uuidv5("aws-question-205", uuidv5.URL),
    text: "Which support plan includes AWS Support Concierge Service?",
    options: [
      "Premium Support.",
      "Business Support.",
      "Enterprise Support.",
      "Standard Support.",
    ],
    correctAnswers: [2],
    explanation:
      "The AWS Support Concierge Service, which provides personalized billing and account management, is included with the Enterprise Support plan.",
  },
  {
    id: uuidv5("aws-question-206", uuidv5.URL),
    text: "A company needs to track resource changes using the API call history. Which AWS service can help the company achieve this goal?",
    options: [
      "AWS Config.",
      "Amazon CloudWatch.",
      "AWS CloudTrail.",
      "AWS CloudFormation.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS CloudTrail helps track API call history and monitor AWS account activity for governance, compliance, and operational purposes.",
  },
  {
    id: uuidv5("aws-question-207", uuidv5.URL),
    text: "What are the benefits of using an AWS-managed service? (Choose TWO)",
    options: [
      "Provides complete control over the virtual infrastructure.",
      "Allows customers to deliver new solutions faster.",
      "Lowers operational complexity.",
      "Eliminates the need to encrypt data.",
      "Allows developers to control all patching related activities.",
    ],
    correctAnswers: [1, 2],
    explanation:
      "AWS-managed services lower operational complexity and allow customers to deliver new solutions faster by offloading infrastructure management to AWS. Customers do not have complete control over the virtual infrastructure, as AWS manages certain aspects.",
  },
  {
    id: uuidv5("aws-question-208", uuidv5.URL),
    text: "Which of the following are use cases for Amazon S3? (Choose TWO)",
    options: [
      "Hosting static websites.",
      "Hosting websites that require sustained high CPU utilization.",
      "Cost-effective database and log storage.",
      "A media store for the CloudFront service.",
      "Processing data streams at any scale.",
    ],
    correctAnswers: [0, 3],
    explanation:
      "Amazon S3 can be used to host static websites and as a media store for CloudFront. It is not designed for high CPU usage or data stream processing, which are better suited for other services like EC2 and Kinesis.",
  },
  {
    id: uuidv5("aws-question-209", uuidv5.URL),
    text: "What is the AWS’ recommendation regarding access keys?",
    options: [
      "Delete all access keys and use passwords instead.",
      "Only share them with trusted people.",
      "Rotate them regularly.",
      "Save them within your application code.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS recommends rotating access keys regularly to improve security. Sharing access keys is discouraged, and saving them within the application code is a bad practice.",
  },
  {
    id: uuidv5("aws-question-210", uuidv5.URL),
    text: "What is the AWS IAM feature that provides an additional layer of security on top of user-name and password authentication?",
    options: ["Key Pair.", "Access Keys.", "SDK.", "MFA."],
    correctAnswers: [3],
    explanation:
      "Multi-Factor Authentication (MFA) provides an additional layer of security beyond just username and password authentication, requiring users to provide a second form of identification.",
  },
  {
    id: uuidv5("aws-question-211", uuidv5.URL),
    text: "What is the benefit of using an API to access AWS Services?",
    options: [
      "It improves the performance of AWS resources.",
      "It reduces the time needed to provision AWS resources.",
      "It reduces the number of developers necessary.",
      "It allows for programmatic management of AWS resources.",
    ],
    correctAnswers: [3],
    explanation:
      "APIs allow developers to programmatically manage AWS resources, which is a key benefit for automation and integration with other systems.",
  },
  {
    id: uuidv5("aws-question-212", uuidv5.URL),
    text: "A company needs to migrate their database with high read/write activity to AWS. What is the best storage option to use?",
    options: [
      "AWS Storage Gateway.",
      "Amazon S3.",
      "Amazon EBS.",
      "Amazon Glacier.",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon EBS is the best option for storage that requires high read/write performance, making it suitable for databases with high activity. S3 and Glacier are not optimized for such use cases.",
  },
  {
    id: uuidv5("aws-question-213", uuidv5.URL),
    text: "How can AWS customers track and avoid over-spending on underutilized reserved instances?",
    options: [
      "Customers can add all AWS accounts to an AWS Organization, enable Consolidated Billing, and turn off Reserved Instance sharing.",
      "Customers can use Amazon Neptune to track and analyze their usage patterns, detect underutilized reserved instances, and then sell them on the Amazon EC2 Reserved Instance Marketplace.",
      "Customers can use the AWS Budgets service to track the reserved instances usage and set up alert notifications when their utilization drops below the threshold that they define.",
      "Customers can use Amazon CloudTrail to automatically check for unused reservations and get recommendations to reduce their bill.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Budgets can track reserved instance usage and set up alerts to notify customers when utilization drops, helping them optimize costs.",
  },
  {
    id: uuidv5("aws-question-214", uuidv5.URL),
    text: "What is the AWS service that provides five times the performance of a standard MySQL database?",
    options: [
      "Amazon Aurora.",
      "Amazon Redshift.",
      "Amazon DynamoDB.",
      "Amazon Neptune.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon Aurora is a MySQL and PostgreSQL-compatible relational database that offers performance improvements of up to five times over standard MySQL databases.",
  },
  {
    id: uuidv5("aws-question-215", uuidv5.URL),
    text: "What does AWS Service Catalog provide?",
    options: [
      "It enables customers to quickly find descriptions and use cases for AWS services.",
      "It enables customers to explore the different catalogs of AWS services.",
      "It simplifies organizing and governing commonly deployed IT services.",
      "It allows developers to deploy infrastructure on AWS using familiar programming languages.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Service Catalog allows organizations to centrally manage commonly deployed IT services and govern them to ensure compliance.",
  },
  {
    id: uuidv5("aws-question-216", uuidv5.URL),
    text: "For managed services like Amazon DynamoDB, which of the below is AWS responsible for? (Choose TWO)",
    options: [
      "Protecting credentials.",
      "Logging access activity.",
      "Patching the database software.",
      "Operating system maintenance.",
      "Creating access policies.",
    ],
    correctAnswers: [2, 3],
    explanation:
      "For managed services like DynamoDB, AWS is responsible for tasks such as patching the database software and maintaining the underlying operating system, while the customer is responsible for tasks like protecting credentials and creating access policies.",
  },
  {
    id: uuidv5("aws-question-217", uuidv5.URL),
    text: "Which of the following AWS Services helps with planning application migration to the AWS Cloud?",
    options: [
      "AWS Snowball Migration Service.",
      "AWS Application Discovery Service.",
      "AWS DMS.",
      "AWS Migration Hub.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Application Discovery Service helps customers gather information about their on-premises data centers to plan application migrations.",
  },
  {
    id: uuidv5("aws-question-218", uuidv5.URL),
    text: "A company is trying to analyze the costs applied to their AWS account recently. Which of the following provides them the most granular data about their AWS costs and usage?",
    options: [
      "Amazon Machine Image.",
      "AWS Cost Explorer.",
      "AWS Cost & Usage Report.",
      "Amazon CloudWatch.",
    ],
    correctAnswers: [2],
    explanation:
      "The AWS Cost & Usage Report provides the most detailed, granular information about AWS usage and costs.",
  },
  {
    id: uuidv5("aws-question-219", uuidv5.URL),
    text: "Which statement best describes the concept of an AWS region?",
    options: [
      "An AWS Region is a geographical location with a collection of Edge locations.",
      "An AWS Region is a virtual network dedicated only to a single AWS customer.",
      "An AWS Region is a geographical location with a collection of Availability Zones.",
      "An AWS Region represents the country where the AWS infrastructure exist.",
    ],
    correctAnswers: [2],
    explanation:
      "An AWS Region is a geographical area that contains a collection of Availability Zones, which are isolated locations within a region.",
  },
  {
    id: uuidv5("aws-question-220", uuidv5.URL),
    text: "A company has discovered that multiple S3 buckets were deleted, but it is unclear who deleted the buckets. Which of the following can the company use to determine the identity that deleted the buckets?",
    options: ["SNS logs.", "SQS logs.", "CloudWatch Logs.", "CloudTrail logs."],
    correctAnswers: [3],
    explanation:
      "CloudTrail logs provide detailed logs of API calls and actions taken on AWS services, including who deleted the S3 buckets.",
  },
  {
    id: uuidv5("aws-question-221", uuidv5.URL),
    text: "Which of the following aspects of security are factors in determining the appropriate database technology to use for a specific workload? (Choose TWO)",
    options: [
      "Availability Zones.",
      "Data sovereignty.",
      "The number of reads and writes per second.",
      "The nature of the queries.",
      "Software bugs.",
    ],
    correctAnswers: [2, 3],
    explanation:
      "The number of reads/writes and the nature of the queries are key factors in selecting the appropriate database technology for a workload.",
  },
  {
    id: uuidv5("aws-question-222", uuidv5.URL),
    text: "What are the benefits of implementing a tagging strategy for AWS resources? (Choose TWO)",
    options: [
      "Quickly identify resources that belong to a specific project.",
      "Quickly identify software solutions on AWS.",
      "Track API calls in your AWS account.",
      "Quickly identify deleted resources and their metadata.",
      "Track AWS spending across multiple resources.",
    ],
    correctAnswers: [0, 4],
    explanation:
      "Tagging AWS resources allows for easier identification of resources for projects and enables cost tracking across multiple resources.",
  },
  {
    id: uuidv5("aws-question-223", uuidv5.URL),
    text: "What are AWS shared controls?",
    options: [
      "Controls that are solely the responsibility of the customer based on the application they are deploying within AWS services.",
      "Controls that a customer inherits from AWS.",
      "Controls that apply to both the infrastructure layer and customer layers.",
      "Controls that the customer and AWS collaborate together upon to secure the infrastructure.",
    ],
    correctAnswers: [3],
    explanation:
      "AWS shared controls are those responsibilities that AWS and the customer share, such as ensuring the security of the infrastructure.",
  },
  {
    id: uuidv5("aws-question-224", uuidv5.URL),
    text: "Which design principles relate to performance efficiency in AWS? (Choose TWO)",
    options: [
      "Build multi-region architectures to better serve global customers.",
      "Apply security at all layers.",
      "Implement strong Identity and Access controls.",
      "Use serverless architectures.",
      "Enable audit logging.",
    ],
    correctAnswers: [0, 3],
    explanation:
      "Building multi-region architectures and using serverless architectures are key principles for improving performance efficiency in AWS.",
  },
  {
    id: uuidv5("aws-question-225", uuidv5.URL),
    text: "Which of the following are responsibilities of the customer when using Amazon EC2? (Choose TWO)",
    options: [
      "Protecting sensitive data.",
      "Patching of the underlying infrastructure.",
      "Setup and operation of managed databases.",
      "Maintaining consistent hardware components.",
      "Installing and configuring third-party software.",
    ],
    correctAnswers: [0, 4],
    explanation:
      "When using Amazon EC2, customers are responsible for protecting their data and configuring any third-party software they choose to run on the instance.",
  },
  {
    id: uuidv5("aws-question-226", uuidv5.URL),
    text: "Why would an organization decide to use AWS over an on-premises data center? (Choose TWO)",
    options: [
      "Free commercial software licenses.",
      "Free technical support.",
      "Elastic resources.",
      "On-site visits for auditing.",
      "Cost Savings.",
    ],
    correctAnswers: [2, 4],
    explanation:
      "AWS provides elastic resources that can scale with demand, as well as cost savings compared to traditional on-premises data centers.",
  },
  {
    id: uuidv5("aws-question-227", uuidv5.URL),
    text: "Which of the following AWS services can help you perform security analysis and regulatory compliance auditing? (Choose TWO)",
    options: [
      "Amazon Inspector.",
      "AWS Virtual Private Gateway.",
      "AWS Batch.",
      "Amazon ECS.",
      "AWS Config.",
    ],
    correctAnswers: [0, 4],
    explanation:
      "Amazon Inspector and AWS Config help with security analysis and auditing for compliance by analyzing configurations and detecting vulnerabilities.",
  },
  {
    id: uuidv5("aws-question-228", uuidv5.URL),
    text: "Which of the following is NOT a characteristic of Amazon Elastic Compute Cloud (Amazon EC2)?",
    options: [
      "Amazon EC2 is considered a Serverless Web Service.",
      "Amazon EC2 eliminates the need to invest in hardware upfront.",
      "Amazon EC2 can launch as many or as few virtual servers as needed.",
      "Amazon EC2 offers scalable computing.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon EC2 is not a serverless service. It requires provisioning of servers, which is contrary to the serverless model.",
  },
  {
    id: uuidv5("aws-question-229", uuidv5.URL),
    text: "What is the AWS Compute service that executes code only when triggered by events?",
    options: [
      "AWS Lambda.",
      "Amazon CloudWatch.",
      "AWS Transit Gateway.",
      "Amazon EC2.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Lambda is a serverless compute service that executes code in response to events, without the need for provisioning or managing servers.",
  },
  {
    id: uuidv5("aws-question-230", uuidv5.URL),
    text: "Both AWS and traditional IT distributors provide a wide range of virtual servers to meet their customers’ requirements. What is the name of these virtual servers in AWS?",
    options: [
      "Amazon EBS Snapshots.",
      "Amazon VPC.",
      "AWS Managed Servers.",
      "Amazon EC2 Instances.",
    ],
    correctAnswers: [3],
    explanation:
      "In AWS, virtual servers are called Amazon EC2 instances, providing scalable computing capacity in the cloud.",
  },
  {
    id: uuidv5("aws-question-231", uuidv5.URL),
    text: "What is the framework created by AWS Professional Services that helps organizations design a road map to successful cloud adoption?",
    options: ["AWS Secrets Manager.", "AWS WAF.", "AWS CAF.", "Amazon EFS."],
    correctAnswers: [2],
    explanation:
      "The AWS Cloud Adoption Framework (CAF) helps organizations design and follow a strategy for adopting the AWS cloud.",
  },
  {
    id: uuidv5("aws-question-232", uuidv5.URL),
    text: "TYMO Cloud Corp is looking forward to migrating their entire on-premises data center to AWS. What tool can they use to perform a cost-benefit analysis of moving to the AWS Cloud?",
    options: [
      "AWS Cost Explorer.",
      "AWS TCO Calculator.",
      "AWS Budgets.",
      "AWS Pricing Calculator.",
    ],
    correctAnswers: [1],
    explanation:
      "The AWS Total Cost of Ownership (TCO) Calculator helps compare the cost of on-premises infrastructure with AWS services.",
  },
  {
    id: uuidv5("aws-question-233", uuidv5.URL),
    text: "Which of the following activities supports the Operational Excellence pillar of the AWS Well-Architected Framework?",
    options: [
      "Using AWS Trusted Advisor to find underutilized resources.",
      "Using AWS CloudTrail to record user activities.",
      "Using AWS CloudFormation to manage infrastructure as code.",
      "Deploying an application in multiple Availability Zones.",
    ],
    correctAnswers: [2],
    explanation:
      "Using AWS CloudFormation to manage infrastructure as code supports operational excellence by automating tasks and enabling consistent infrastructure management.",
  },
  {
    id: uuidv5("aws-question-234", uuidv5.URL),
    text: "Why do many startup companies prefer AWS over traditional on-premises solutions? (Choose TWO)",
    options: [
      "AWS allows them to pay later when their business succeed.",
      "AWS can build complete data centers faster than any other Cloud provider.",
      "Using AWS, they can reduce time-to-market by focusing on business activities rather than on building and managing data centers.",
      "AWS removes the need to invest in operational expenditure.",
      "Using AWS allows companies to replace large capital expenditure with low variable costs.",
    ],
    correctAnswers: [2, 4],
    explanation:
      "Startups prefer AWS because it allows them to focus on business activities instead of managing infrastructure and replace large capital expenditures with scalable, low variable costs.",
  },
  {
    id: uuidv5("aws-question-235", uuidv5.URL),
    text: "What are the benefits of using DynamoDB? (Choose TWO)",
    options: [
      "Automatically scales to meet required throughput capacity.",
      "Provides resizable instances to match the current demand.",
      "Supports both relational and non-relational data models.",
      "Offers extremely low (single-digit millisecond) latency.",
      "Supports the most popular NoSQL database engines such as CouchDB and MongoDB.",
    ],
    correctAnswers: [0, 3],
    explanation:
      "DynamoDB automatically scales to meet demand and offers low latency, making it ideal for high-performance applications.",
  },
  {
    id: uuidv5("aws-question-236", uuidv5.URL),
    text: "Which of the following can be used to protect data at rest on Amazon S3? (Choose TWO)",
    options: [
      "Versioning.",
      "Deduplication.",
      "Permissions.",
      "Decryption.",
      "Conversion.",
    ],
    correctAnswers: [0, 2],
    explanation:
      "Versioning and permissions are effective strategies to protect data at rest on Amazon S3.",
  },
  {
    id: uuidv5("aws-question-237", uuidv5.URL),
    text: "As part of the AWS Migration Acceleration Program (MAP), what does AWS provide to accelerate Enterprise adoption of AWS? (Choose TWO)",
    options: [
      "AWS Partners.",
      "AWS Artifact.",
      "AWS Professional Services.",
      "Amazon Athena.",
      "Amazon PinPoint.",
    ],
    correctAnswers: [0, 2],
    explanation:
      "AWS provides AWS Partners and AWS Professional Services to help enterprises with the migration and adoption of AWS as part of the AWS Migration Acceleration Program (MAP).",
  },
  {
    id: uuidv5("aws-question-238", uuidv5.URL),
    text: "Which of the following is NOT one of the practices that AWS recommends to help organizations avoid unexpected charges on their bill?",
    options: [
      "Deleting unused EBS volumes after terminating an EC2 instance.",
      "Deleting unused AutoScaling launch configuration.",
      "Deleting unused Elastic Load Balancers.",
      "Releasing unused Elastic IPs after terminating an EC2 instance.",
    ],
    correctAnswers: [1],
    explanation:
      "Deleting unused AutoScaling launch configurations is not recommended as a practice to avoid charges, while the other actions help to reduce unnecessary costs.",
  },
  {
    id: uuidv5("aws-question-239", uuidv5.URL),
    text: "What is the AWS tool that can help a company visualize their AWS spending in the last few months?",
    options: [
      "AWS Cost Explorer.",
      "AWS Pricing Calculator.",
      "AWS Budgets.",
      "AWS Consolidated Billing.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Cost Explorer is the tool designed to help companies visualize and understand their AWS spending over time.",
  },
  {
    id: uuidv5("aws-question-240", uuidv5.URL),
    text: "When running a workload in AWS, the customer is NOT responsible for: (Select TWO)",
    options: [
      "Running penetration tests.",
      "Reserving capacity.",
      "Data center operations.",
      "Auditing and regulatory compliance.",
      "Infrastructure security.",
    ],
    correctAnswers: [2, 4],
    explanation:
      "Data center operations and infrastructure security are handled by AWS under the Shared Responsibility Model, while customers are responsible for the application-level security.",
  },
  {
    id: uuidv5("aws-question-241", uuidv5.URL),
    text: "Which AWS service can be used to send promotional text messages (SMS) to more than 200 countries worldwide?",
    options: [
      "Amazon Simple Email Service (Amazon SES).",
      "Amazon Simple Storage Service (Amazon S3).",
      "Amazon Simple Notification Service (Amazon SNS).",
      "Amazon Simple Queue Service (Amazon SQS).",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon SNS is the AWS service that can send SMS text messages to users across the world in more than 200 countries.",
  },
  {
    id: uuidv5("aws-question-242", uuidv5.URL),
    text: "Which of the following allows you to create new RDS instances? (Choose TWO)",
    options: [
      "AWS CodeDeploy.",
      "AWS Quick Starts.",
      "AWS CloudFormation.",
      "AWS DMS.",
      "AWS Management Console.",
    ],
    correctAnswers: [2, 4],
    explanation:
      "AWS CloudFormation and AWS Management Console can both be used to create and manage new RDS instances.",
  },
  {
    id: uuidv5("aws-question-243", uuidv5.URL),
    text: "One of the major advantages of using AWS is cost savings. What does AWS provide to reduce the cost of running Amazon EC2 instances?",
    options: [
      "Low monthly instance maintenance costs.",
      "Low-cost instance tagging.",
      "Per-second instance billing.",
      "Low instance start-up fees.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS offers per-second billing for EC2 instances, which can significantly reduce costs for workloads with short-duration tasks.",
  },
  {
    id: uuidv5("aws-question-244", uuidv5.URL),
    text: "Which AWS Group assists customers in achieving their desired business outcomes?",
    options: [
      "AWS Security Team.",
      "AWS Professional Services.",
      "AWS Trusted Advisor.",
      "AWS Concierge Support Team.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Professional Services work with customers to help them achieve their desired business outcomes by leveraging AWS solutions.",
  },
  {
    id: uuidv5("aws-question-245", uuidv5.URL),
    text: "Which AWS service or feature is used to manage the keys used to encrypt customer data?",
    options: [
      "AWS KMS.",
      "AWS Service Control Policies (SCPs).",
      "Multi-Factor Authentication (MFA).",
      "Amazon Macie.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Key Management Service (KMS) is used to create and control the encryption keys that protect data stored in AWS services.",
  },
  {
    id: uuidv5("aws-question-246", uuidv5.URL),
    text: "Which AWS Service allows customers to download AWS SOC & PCI reports?",
    options: [
      "AWS Well-Architected Tool.",
      "AWS Artifact.",
      "AWS Glue.",
      "Amazon Chime.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Artifact provides access to AWS's compliance reports, including SOC and PCI, to help customers meet their regulatory requirements.",
  },
];

const exam5: Question[] = [
  {
    id: uuidv5("aws-question-247", uuidv5.URL),
    text: "A company is using EC2 Instances to run their e-commerce site on the AWS platform. If the site becomes unavailable, the company will lose a significant amount of money for each minute the site is unavailable. Which design principle should the company use to minimize the risk of an outage?",
    options: [
      "Least Privilege.",
      "Pilot Light.",
      "Fault Tolerance.",
      "Multi-threading.",
    ],
    correctAnswers: [2],
    explanation:
      "Fault Tolerance ensures that the application remains operational even in the face of failures.",
  },
  {
    id: uuidv5("aws-question-248", uuidv5.URL),
    text: "You decide to buy a reserved instance for a term of one year. Which option provides the largest total discount?",
    options: [
      "All up-front reservation.",
      "All reserved instance payment options provide the same discount level.",
      "Partial up-front reservation.",
      "No up-front reservation.",
    ],
    correctAnswers: [0],
    explanation:
      "All up-front reservation offers the largest discount because it provides a significant upfront payment in exchange for a lower overall price.",
  },
  {
    id: uuidv5("aws-question-249", uuidv5.URL),
    text: "What features does AWS offer to help protect your data in the Cloud? (Choose TWO)",
    options: [
      "Access control.",
      "Physical MFA devices.",
      "Data encryption.",
      "Unlimited storage.",
      "Load balancing.",
    ],
    correctAnswers: [0, 2],
    explanation:
      "Access control and Data encryption are fundamental features for data protection in the cloud.",
  },
  {
    id: uuidv5("aws-question-250", uuidv5.URL),
    text: "An AWS customer has used one Amazon Linux instance for 2 hours, 5 minutes and 9 seconds, and one CentOS instance for 4 hours, 23 minutes and 7 seconds. How much time will the customer be billed for?",
    options: [
      "3 hours for the Linux instance and 5 hours for the CentOS instance.",
      "2 hours, 5 minutes and 9 seconds for the Linux instance and 4 hours, 23 minutes and 7 seconds for the CentOS instance.",
      "2 hours, 5 minutes and 9 seconds for the Linux instance and 5 hours for the CentOS instance.",
      "3 hours for the Linux instance and 4 hours, 23 minutes and 7 seconds for the CentOS instance.",
    ],
    correctAnswers: [2],
    explanation:
      "Pricing is per instance-hour consumed for each instance, and the Linux instance will be billed for the full hour.",
  },
  {
    id: uuidv5("aws-question-251", uuidv5.URL),
    text: "What is the AWS Support feature that allows customers to manage support cases programmatically?",
    options: [
      "AWS Trusted Advisor.",
      "AWS Operations Support.",
      "AWS Support API.",
      "AWS Personal Health Dashboard.",
    ],
    correctAnswers: [2],
    explanation:
      "The AWS Support API allows customers to programmatically create, manage, and retrieve AWS Support cases.",
  },
  {
    id: uuidv5("aws-question-252", uuidv5.URL),
    text: "Which methods can be used by customers to interact with AWS Identity and Access Management (IAM)? (Choose TWO)",
    options: [
      "AWS CLI.",
      "AWS Security Groups.",
      "AWS SDKs.",
      "AWS Network Access Control Lists.",
      "AWS CodeCommit.",
    ],
    correctAnswers: [0, 2],
    explanation: "Customers can use AWS CLI and AWS SDKs to interact with IAM.",
  },
  {
    id: uuidv5("aws-question-253", uuidv5.URL),
    text: "Which of the following are types of AWS Identity and Access Management (IAM) identities? (Choose TWO)",
    options: [
      "AWS Resource Groups.",
      "IAM Policies.",
      "IAM Roles.",
      "IAM Users.",
      "AWS Organizations.",
    ],
    correctAnswers: [2, 3],
    explanation:
      "IAM Roles and IAM Users are both types of identities that can be created in AWS IAM.",
  },
  {
    id: uuidv5("aws-question-254", uuidv5.URL),
    text: "Which of the following Amazon RDS features facilitates offloading of database read activity?",
    options: [
      "Database Snapshots.",
      "Multi-AZ Deployments.",
      "Automated Backups.",
      "Read Replicas.",
    ],
    correctAnswers: [3],
    explanation:
      "Read Replicas in Amazon RDS allow you to offload read queries from the primary database.",
  },
  {
    id: uuidv5("aws-question-255", uuidv5.URL),
    text: "How does AWS notify customers about security and privacy events pertaining to AWS services?",
    options: [
      "Using the AWS ACM service.",
      "Using Security Bulletins.",
      "Using the AWS Management Console.",
      "Using Compliance Resources.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS notifies customers about security and privacy events through Security Bulletins.",
  },
  {
    id: uuidv5("aws-question-256", uuidv5.URL),
    text: "Which IAM entity can best be used to grant temporary access to your AWS resources?",
    options: ["IAM Users.", "Key Pair.", "IAM Roles.", "IAM Groups."],
    correctAnswers: [2],
    explanation:
      "IAM Roles are designed to provide temporary access to AWS resources for users or services.",
  },
  {
    id: uuidv5("aws-question-257", uuidv5.URL),
    text: "What is the purpose of AWS Lambda?",
    options: [
      "To run servers in a managed environment.",
      "To provide scalable storage solutions.",
      "To execute code in response to events.",
      "To manage network traffic.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Lambda allows you to run code in response to events without provisioning or managing servers.",
  },
  {
    id: uuidv5("aws-question-258", uuidv5.URL),
    text: "Which AWS service can be used to monitor and manage resources in real-time?",
    options: [
      "AWS CloudTrail.",
      "AWS CloudWatch.",
      "AWS Config.",
      "AWS Trusted Advisor.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS CloudWatch provides monitoring and management capabilities for AWS resources in real-time.",
  },
  {
    id: uuidv5("aws-question-259", uuidv5.URL),
    text: "In Amazon S3, what does it mean when an object is versioned?",
    options: [
      "The object can be replicated across multiple regions.",
      "The object can be restored from previous versions.",
      "The object can be stored in multiple formats.",
      "The object can be encrypted.",
    ],
    correctAnswers: [1],
    explanation:
      "Versioning allows you to preserve, retrieve, and restore every version of every object stored in an Amazon S3 bucket.",
  },
  {
    id: uuidv5("aws-question-260", uuidv5.URL),
    text: "What is the AWS service that provides serverless computing for event-driven applications?",
    options: ["Amazon EC2.", "AWS Lambda.", "Amazon ECS.", "AWS Fargate."],
    correctAnswers: [1],
    explanation:
      "AWS Lambda is the service designed for running code in response to events in a serverless architecture.",
  },
  {
    id: uuidv5("aws-question-261", uuidv5.URL),
    text: "What is the main benefit of using Amazon Route 53?",
    options: [
      "To manage DNS routing",
      "To provide content delivery",
      "To host static websites",
      "To manage virtual private clouds",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon Route 53 is primarily used for domain registration and DNS (Domain Name System) services.",
  },
  {
    id: uuidv5("aws-question-262", uuidv5.URL),
    text: "Which AWS service would you use to automate the deployment of applications in the cloud?",
    options: [
      "AWS CodeDeploy.",
      "AWS CloudFormation.",
      "AWS CloudTrail.",
      "AWS CodePipeline.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS CloudFormation automates the deployment and management of AWS resources through code.",
  },
  {
    id: uuidv5("aws-question-263", uuidv5.URL),
    text: "Which of the following AWS services is used to create and manage a relational database?",
    options: ["Amazon DynamoDB.", "Amazon RDS.", "Amazon S3.", "Amazon EC2."],
    correctAnswers: [1],
    explanation:
      "Amazon RDS (Relational Database Service) is designed specifically for creating and managing relational databases.",
  },
  {
    id: uuidv5("aws-question-264", uuidv5.URL),
    text: "What does Amazon CloudFront provide?",
    options: [
      "Backup services.",
      "A content delivery network.",
      "Data encryption.",
      "Identity management.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data with low latency.",
  },
  {
    id: uuidv5("aws-question-265", uuidv5.URL),
    text: "What is the purpose of AWS Elastic Beanstalk?",
    options: [
      "To provide serverless architecture.",
      "To deploy and manage applications without worrying about the infrastructure.",
      "To run Docker containers.",
      "To provide database solutions.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Elastic Beanstalk is designed to deploy and manage applications in the cloud without the complexity of infrastructure management.",
  },
  {
    id: uuidv5("aws-question-266", uuidv5.URL),
    text: "Which AWS service can help you analyze big data?",
    options: ["Amazon Athena.", "AWS Lambda.", "Amazon EC2.", "Amazon S3."],
    correctAnswers: [0],
    explanation:
      "Amazon Athena allows you to query data directly from Amazon S3 using standard SQL.",
  },
  {
    id: uuidv5("aws-question-267", uuidv5.URL),
    text: "What is the primary use of AWS Identity and Access Management (IAM)?",
    options: [
      "To manage security groups.",
      "To provide backup solutions.",
      "To manage user access and permissions.",
      "To monitor resource usage.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS IAM allows you to manage user access and permissions to AWS services and resources securely.",
  },
  {
    id: uuidv5("aws-question-268", uuidv5.URL),
    text: "Which AWS service provides a fully managed NoSQL database?",
    options: [
      "Amazon RDS.",
      "Amazon DynamoDB.",
      "Amazon Aurora.",
      "Amazon Redshift.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance.",
  },
  {
    id: uuidv5("aws-question-269", uuidv5.URL),
    text: "What is AWS CloudTrail used for?",
    options: [
      "To monitor AWS resources.",
      "To manage networking services.",
      "To provide backup solutions.",
      "To log and track API calls in your AWS account.",
    ],
    correctAnswers: [3],
    explanation:
      "AWS CloudTrail records AWS API calls for your account, allowing you to track user activity and changes.",
  },
  {
    id: uuidv5("aws-question-270", uuidv5.URL),
    text: "What does Amazon EC2 provide?",
    options: [
      "Serverless computing.",
      "Virtual servers in the cloud.",
      "Content delivery network services.",
      "Relational database services.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon EC2 (Elastic Compute Cloud) provides virtual servers in the cloud for various applications.",
  },
  {
    id: uuidv5("aws-question-271", uuidv5.URL),
    text: "Which AWS service is used for scalable object storage?",
    options: ["Amazon EBS.", "Amazon S3.", "Amazon RDS.", "Amazon Glacier."],
    correctAnswers: [1],
    explanation:
      "Amazon S3 (Simple Storage Service) is used for storing and retrieving any amount of data, at any time, from anywhere on the web.",
  },
  {
    id: uuidv5("aws-question-272", uuidv5.URL),
    text: "What is the AWS service/feature that takes advantage of Amazon CloudFront’s globally distributed edge locations to transfer files to S3 with higher upload speeds?",
    options: [
      "S3 Transfer Acceleration.",
      "AWS WAF.",
      "AWS Snowmobile.",
      "AWS Snowball.",
    ],
    correctAnswers: [0],
    explanation:
      "S3 Transfer Acceleration enables fast, easy, and secure file uploads to Amazon S3 using the nearest edge location provided by Amazon CloudFront.",
  },
  {
    id: uuidv5("aws-question-273", uuidv5.URL),
    text: "What is the AWS service that provides a managed environment for running serverless applications?",
    options: ["AWS Lambda.", "Amazon EC2.", "Amazon RDS.", "AWS CodePipeline."],
    correctAnswers: [0],
    explanation:
      "AWS Lambda lets you run code without provisioning or managing servers, providing a serverless environment.",
  },
  {
    id: uuidv5("aws-question-274", uuidv5.URL),
    text: "What is the primary purpose of Amazon DynamoDB?",
    options: [
      "A serverless database service.",
      "A fully managed relational database.",
      "A relational database compatible with MySQL and PostgreSQL.",
      "A file storage solution.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance.",
  },
  {
    id: uuidv5("aws-question-275", uuidv5.URL),
    text: "Which service is used to run containerized applications?",
    options: ["AWS Lambda.", "Amazon RDS.", "Amazon ECS.", "AWS Fargate."],
    correctAnswers: [2],
    explanation:
      "Amazon ECS (Elastic Container Service) allows you to run and manage containerized applications.",
  },
  {
    id: uuidv5("aws-question-276", uuidv5.URL),
    text: "What type of storage does Amazon EBS provide?",
    options: [
      "Object storage.",
      "Block storage.",
      "File storage.",
      "Data warehouse.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon EBS (Elastic Block Store) provides block storage volumes for use with Amazon EC2 instances.",
  },
  {
    id: uuidv5("aws-question-277", uuidv5.URL),
    text: "What is AWS Lambda primarily used for?",
    options: [
      "Running virtual machines.",
      "Running serverless applications.",
      "Providing load balancing.",
      "Managing databases.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Lambda is a serverless compute service that runs your code in response to events without provisioning or managing servers.",
  },
  {
    id: uuidv5("aws-question-278", uuidv5.URL),
    text: "Which service can you use to automate the deployment of applications to AWS?",
    options: [
      "AWS CodeDeploy.",
      "Amazon CloudWatch.",
      "AWS CloudFormation.",
      "AWS Lambda.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS CodeDeploy automates the deployment of applications to a variety of compute services such as EC2 and Lambda.",
  },
  {
    id: uuidv5("aws-question-279", uuidv5.URL),
    text: "What is the maximum duration for a single AWS Lambda execution?",
    options: ["5 minutes.", "15 minutes.", "30 minutes.", "60 minutes."],
    correctAnswers: [1],
    explanation:
      "The maximum execution duration for a single AWS Lambda function is 15 minutes.",
  },
  {
    id: uuidv5("aws-question-280", uuidv5.URL),
    text: "Which AWS service can be used for real-time data processing?",
    options: [
      "Amazon S3.",
      "Amazon Kinesis.",
      "Amazon RDS.",
      "Amazon Glacier.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon Kinesis is designed for real-time data processing and analytics.",
  },
  {
    id: uuidv5("aws-question-281", uuidv5.URL),
    text: "What is the primary use of Amazon Route 53?",
    options: [
      "Database management.",
      "Domain name system (DNS) services.",
      "Load balancing.",
      "Content delivery.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon Route 53 provides scalable domain name system (DNS) services and domain registration.",
  },
  {
    id: uuidv5("aws-question-282", uuidv5.URL),
    text: "Which of the following is a benefit of using AWS CloudFormation?",
    options: [
      "Manual resource provisioning.",
      "Infrastructure as code.",
      "Increased resource costs.",
      "Single region deployment.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS CloudFormation allows you to model and set up your AWS resources using infrastructure as code.",
  },
  {
    id: uuidv5("aws-question-283", uuidv5.URL),
    text: "What is the purpose of Amazon CloudWatch?",
    options: [
      "To create backups of data.",
      "To monitor AWS resources and applications.",
      "To provide security for applications.",
      "To deploy applications.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon CloudWatch monitors AWS resources and applications in real time.",
  },
  {
    id: uuidv5("aws-question-284", uuidv5.URL),
    text: "Which AWS service can automatically scale resources based on demand?",
    options: [
      "Amazon EC2.",
      "Amazon S3.",
      "AWS Auto Scaling.",
      "AWS CloudFormation.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Auto Scaling automatically adjusts capacity to maintain steady, predictable performance at the lowest possible cost.",
  },
  {
    id: uuidv5("aws-question-285", uuidv5.URL),
    text: "What is the primary benefit of using Amazon VPC?",
    options: [
      "Increased data redundancy.",
      "Enhanced security through isolated networks.",
      "Automated resource provisioning.",
      "Improved database performance.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon VPC (Virtual Private Cloud) allows you to create isolated networks for enhanced security.",
  },
  {
    id: uuidv5("aws-question-286", uuidv5.URL),
    text: "Which service provides an easy way to set up a virtual private network (VPN) connection?",
    options: [
      "Amazon VPC.",
      "AWS Direct Connect.",
      "AWS VPN.",
      "Amazon Route 53.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS VPN allows you to create a secure connection between your on-premises network and your AWS environment.",
  },
  {
    id: uuidv5("aws-question-287", uuidv5.URL),
    text: "What type of storage does Amazon S3 provide?",
    options: [
      "Block storage.",
      "Object storage.",
      "File storage.",
      "Database storage.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon S3 (Simple Storage Service) provides object storage for storing and retrieving any amount of data.",
  },
  {
    id: uuidv5("aws-question-288", uuidv5.URL),
    text: "Which AWS service is best suited for serverless application development?",
    options: ["Amazon EC2.", "AWS Lambda.", "Amazon RDS.", "Amazon S3."],
    correctAnswers: [1],
    explanation:
      "AWS Lambda is designed for serverless application development, allowing you to run code without provisioning servers.",
  },
  {
    id: uuidv5("aws-question-289", uuidv5.URL),
    text: "Which service allows you to run containers in AWS?",
    options: [
      "AWS Lambda.",
      "Amazon RDS.",
      "Amazon ECS.",
      "AWS CloudFormation.",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon ECS (Elastic Container Service) allows you to run and manage Docker containers on AWS.",
  },
  {
    id: uuidv5("aws-question-290", uuidv5.URL),
    text: "What is the primary function of AWS IAM?",
    options: [
      "Monitoring resources.",
      "Managing access and permissions.",
      "Creating backups.",
      "Deploying applications.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS IAM (Identity and Access Management) is used to manage access and permissions for AWS services and resources.",
  },
  {
    id: uuidv5("aws-question-291", uuidv5.URL),
    text: "Which service can be used for content delivery and caching?",
    options: [
      "Amazon CloudFront.",
      "AWS Lambda.",
      "Amazon RDS.",
      "AWS Direct Connect.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon CloudFront is a content delivery network (CDN) that caches content closer to users for faster delivery.",
  },
  {
    id: uuidv5("aws-question-292", uuidv5.URL),
    text: "Which of the following is a key benefit of using AWS Global Infrastructure?",
    options: [
      "Reduced latency through geographic distribution.",
      "Increased hardware costs.",
      "Limited data transfer options.",
      "Single point of failure.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Global Infrastructure allows you to deploy resources in multiple regions to reduce latency and improve availability.",
  },
  {
    id: uuidv5("aws-question-293", uuidv5.URL),
    text: "What is Amazon EBS primarily used for?",
    options: [
      "Long-term data archiving.",
      "Temporary storage of objects.",
      "Block storage for EC2 instances.",
      "Content delivery.",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon EBS (Elastic Block Store) provides block storage for Amazon EC2 instances.",
  },
  {
    id: uuidv5("aws-question-294", uuidv5.URL),
    text: "What is AWS CloudTrail used for?",
    options: [
      "Creating backups.",
      "Monitoring network traffic.",
      "Logging API calls and user activity.",
      "Deploying applications.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS CloudTrail logs API calls and user activity within your AWS account for auditing and compliance.",
  },
  {
    id: uuidv5("aws-question-295", uuidv5.URL),
    text: "Which AWS service provides a managed NoSQL database?",
    options: [
      "Amazon RDS.",
      "Amazon DynamoDB.",
      "Amazon Aurora.",
      "Amazon Redshift.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance.",
  },
  {
    id: uuidv5("aws-question-296", uuidv5.URL),
    text: "What is the primary purpose of AWS Direct Connect?",
    options: [
      "To connect on-premises data centers to AWS using dedicated lines.",
      "To create VPN connections.",
      "To manage IAM roles.",
      "To deploy applications.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Direct Connect allows you to establish a dedicated network connection from your premises to AWS.",
  },
];

const exam6: Question[] = [
  {
    id: uuidv5("aws-question-297", uuidv5.URL),
    text: "Which of the following is true regarding the AWS availability zones and edge locations?",
    options: [
      "Edge locations are located in separate Availability Zones worldwide to serve global customers.",
      "An availability zone exists within an edge location to distribute content globally with low latency.",
      "An Availability Zone is a geographic location where AWS provides multiple, physically separated and isolated edge locations.",
      "An AWS Availability Zone is an isolated location within an AWS Region, however edge locations are located in multiple cities worldwide.",
    ],
    correctAnswers: [3],
    explanation:
      "An AWS Availability Zone is an isolated location within an AWS Region, while edge locations serve content and are located in multiple cities worldwide.",
  },
  {
    id: uuidv5("aws-question-298", uuidv5.URL),
    text: "Which of the following features are included in the AWS Business Support Plan? (Choose TWO)",
    options: [
      "24x7 access to customer service.",
      "Access to Cloud Support Engineers via email only during business hours.",
      "Access to the Infrastructure Event Management (IEM) feature for additional fee.",
      "24x7 access to the TAM feature.",
      "Partial access to the core Trusted Advisor checks.",
    ],
    correctAnswers: [0, 2],
    explanation:
      "The AWS Business Support Plan includes 24x7 access to customer service and the Infrastructure Event Management feature for an additional fee.",
  },
  {
    id: uuidv5("aws-question-299", uuidv5.URL),
    text: "A company is developing a mobile application and wants to allow users to use their Amazon, Apple, Facebook, or Google identities to authenticate to the application. Which AWS Service should the company use for this purpose?",
    options: [
      "Amazon GuardDuty.",
      "Amazon Personalize.",
      "Amazon Cognito.",
      "AWS IAM.",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon Cognito allows users to authenticate using their social identities such as Amazon, Apple, Facebook, and Google.",
  },
  {
    id: uuidv5("aws-question-300", uuidv5.URL),
    text: "Which AWS Service allows customers to create a template that programmatically defines policies and configurations of all AWS resources as code and so that the same template can be reused among multiple projects?",
    options: [
      "AWS CloudFormation.",
      "AWS Config.",
      "AWS CloudTrail.",
      "AWS Auto Scaling.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS CloudFormation allows users to create templates to define AWS resources as code.",
  },
  {
    id: uuidv5("aws-question-301", uuidv5.URL),
    text: "Which of the following are advantages of using AWS as a cloud computing provider? (Choose TWO)",
    options: [
      "Eliminates the need to monitor servers and applications.",
      "Manages all the compliance and auditing tasks.",
      "Provides custom hardware to meet any specification.",
      "Eliminates the need to guess on infrastructure capacity needs.",
      "Enables customers to trade their capital expenses for operational expenses.",
    ],
    correctAnswers: [3, 4],
    explanation:
      "Using AWS allows customers to eliminate the need to guess on infrastructure capacity needs and trade capital expenses for operational expenses.",
  },
  {
    id: uuidv5("aws-question-302", uuidv5.URL),
    text: "A customer is planning to migrate their Microsoft SQL Server databases to AWS. Which AWS Services can the customer use to run their Microsoft SQL Server database on AWS? (Choose TWO)",
    options: [
      "AWS Fargate.",
      "Amazon Elastic Compute Cloud.",
      "Amazon RDS.",
      "AWS Database Migration service (DMS).",
      "AWS Lambda.",
    ],
    correctAnswers: [1, 2],
    explanation:
      "Amazon RDS and Amazon EC2 can be used to run Microsoft SQL Server databases on AWS.",
  },
  {
    id: uuidv5("aws-question-303", uuidv5.URL),
    text: "Which AWS Service can perform health checks on Amazon EC2 instances?",
    options: [
      "AWS CloudFormation.",
      "Amazon Route 53.",
      "Amazon Chime.",
      "Amazon Aurora.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon Route 53 can perform health checks on Amazon EC2 instances.",
  },
  {
    id: uuidv5("aws-question-304", uuidv5.URL),
    text: "A company is developing an application that will leverage facial recognition to automate photo tagging. Which AWS Service should the company use for facial recognition?",
    options: [
      "Amazon Comprehend.",
      "AWS IAM.",
      "Amazon Polly.",
      "Amazon Rekognition.",
    ],
    correctAnswers: [3],
    explanation: "Amazon Rekognition provides facial recognition capabilities.",
  },
  {
    id: uuidv5("aws-question-305", uuidv5.URL),
    text: "Which of the following are examples of AWS-managed databases? (Choose TWO)",
    options: [
      "Amazon Neptune.",
      "Amazon CloudSearch.",
      "Microsoft SQL Server on Amazon EC2.",
      "MySQL on Amazon EC2.",
      "Amazon RDS for MySQL.",
    ],
    correctAnswers: [0, 4],
    explanation:
      "Amazon Neptune and Amazon RDS for MySQL are examples of AWS-managed databases.",
  },
  {
    id: uuidv5("aws-question-306", uuidv5.URL),
    text: "A company’s AWS workflow requires that it periodically perform large-scale image and video processing jobs. The customer is seeking to minimize cost and has stated that the amount of time it takes to process these jobs is not critical, but that cost minimization is the most important factor in designing the solution. Which EC2 instance class is best suited for this processing?",
    options: [
      "EC2 On-Demand Instances.",
      "EC2 Reserved Instances - No Upfront",
      "EC2 Spot Instances.",
      "EC2 Reserved Instances - All Upfront.",
    ],
    correctAnswers: [2],
    explanation:
      "EC2 Spot Instances allow customers to take advantage of unused EC2 capacity at reduced rates.",
  },
  {
    id: 'uuidv5("aws-question-307", uuidv5.URL)',
    text: "Which AWS service provides a dedicated environment for running serverless applications?",
    options: [
      "AWS Lambda.",
      "AWS Elastic Beanstalk.",
      "Amazon EC2.",
      "AWS Fargate.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Lambda is a serverless compute service that allows you to run code without provisioning or managing servers.",
  },
  {
    id: 'uuidv5("aws-question-308", uuidv5.URL)',
    text: "What is the primary benefit of using Amazon CloudFront?",
    options: [
      "To automatically scale web applications.",
      "To accelerate the distribution of content globally.",
      "To host web applications.",
      "To manage user identities.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon CloudFront is a content delivery network (CDN) that accelerates the distribution of content globally.",
  },
  {
    id: 'uuidv5("aws-question-309", uuidv5.URL)',
    text: "Which of the following services is a serverless service that allows you to run containers without managing servers?",
    options: ["Amazon ECS.", "AWS Batch.", "AWS Lambda.", "AWS Fargate."],
    correctAnswers: [3],
    explanation:
      "AWS Fargate allows users to run containers without managing the underlying servers.",
  },
  {
    id: 'uuidv5("aws-question-310", uuidv5.URL)',
    text: "What is AWS CloudTrail used for?",
    options: [
      "To monitor the performance of AWS services.",
      "To track user activity and API usage in AWS.",
      "To automate resource provisioning.",
      "To manage IAM users.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS CloudTrail records user activity and API usage across AWS infrastructure.",
  },
  {
    id: 'uuidv5("aws-question-311", uuidv5.URL)',
    text: "Which AWS service provides the ability to manage and deploy application code in a serverless manner?",
    options: [
      "AWS Elastic Beanstalk.",
      "AWS CodeDeploy.",
      "AWS Lambda.",
      "Amazon EC2.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Lambda allows you to run code in response to events without provisioning or managing servers.",
  },
  {
    id: 'uuidv5("aws-question-312", uuidv5.URL)',
    text: "Which of the following services can be used to manage AWS resources through automation? (Choose TWO)",
    options: [
      "AWS CloudFormation.",
      "Amazon Route 53.",
      "AWS OpsWorks.",
      "AWS Direct Connect.",
      "AWS Config.",
    ],
    correctAnswers: [0, 2],
    explanation:
      "AWS CloudFormation and AWS OpsWorks allow users to manage AWS resources through automation.",
  },
  {
    id: 'uuidv5("aws-question-313", uuidv5.URL)',
    text: "What is the primary purpose of Amazon S3?",
    options: [
      "To run virtual servers in the cloud.",
      "To store and retrieve any amount of data at any time.",
      "To manage databases.",
      "To provide compute capacity.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon S3 is designed for storing and retrieving any amount of data at any time.",
  },
  {
    id: 'uuidv5("aws-question-314", uuidv5.URL)',
    text: "What is the use of Amazon Elastic Load Balancing?",
    options: [
      "To automatically scale instances based on demand.",
      "To distribute incoming application traffic across multiple targets.",
      "To provide DNS services for domain names.",
      "To store data in a scalable way.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon Elastic Load Balancing distributes incoming application traffic across multiple targets, such as EC2 instances.",
  },
  {
    id: 'uuidv5("aws-question-315", uuidv5.URL)',
    text: "Which AWS service can help improve application performance by automatically scaling resources?",
    options: [
      "Amazon CloudFront.",
      "AWS Lambda.",
      "AWS Auto Scaling.",
      "Amazon RDS.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Auto Scaling automatically adjusts capacity to maintain steady, predictable performance at the lowest possible cost.",
  },
  {
    id: 'uuidv5("aws-question-316", uuidv5.URL)',
    text: "What is the function of AWS IAM?",
    options: [
      "To manage application deployments.",
      "To provide identity and access management for AWS services.",
      "To monitor application performance.",
      "To analyze big data.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS IAM (Identity and Access Management) provides identity and access management for AWS services.",
  },
  {
    id: 'uuidv5("aws-question-317", uuidv5.URL)',
    text: "What does Amazon RDS stand for?",
    options: [
      "Relational Database Service.",
      "Redundant Data Storage.",
      "Remote Database Service.",
      "Rapid Data Synchronization.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon RDS stands for Relational Database Service, which makes it easier to set up, operate, and scale a relational database in the cloud.",
  },
  {
    id: 'uuidv5("aws-question-318", uuidv5.URL)',
    text: "Which AWS service is best for managing IoT devices?",
    options: ["AWS IoT Core.", "Amazon EC2.", "AWS Lambda.", "Amazon S3."],
    correctAnswers: [0],
    explanation:
      "AWS IoT Core is a managed cloud service that allows connected devices to interact easily and securely with cloud applications.",
  },
  {
    id: 'uuidv5("aws-question-319", uuidv5.URL)',
    text: "What is Amazon DynamoDB?",
    options: [
      "A serverless compute service.",
      "A fully managed NoSQL database service.",
      "A cloud file storage service.",
      "A service for running virtual machines.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance.",
  },
  {
    id: 'uuidv5("aws-question-320", uuidv5.URL)',
    text: "Which AWS service provides a secure way to manage and store credentials?",
    options: ["AWS Secrets Manager.", "Amazon S3.", "AWS Lambda.", "AWS IAM."],
    correctAnswers: [0],
    explanation:
      "AWS Secrets Manager helps you protect access to your applications, services, and IT resources without the upfront investment and on-going maintenance costs.",
  },
  {
    id: 'uuidv5("aws-question-321", uuidv5.URL)',
    text: "What is the main purpose of AWS Elastic Beanstalk?",
    options: [
      "To manage application deployment.",
      "To provide a serverless computing environment.",
      "To store large datasets.",
      "To implement continuous integration.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Elastic Beanstalk is an easy-to-use service for deploying and scaling web applications and services.",
  },
  {
    id: 'uuidv5("aws-question-322", uuidv5.URL)',
    text: "What type of storage does Amazon EBS provide?",
    options: [
      "Object storage.",
      "Block storage.",
      "File storage.",
      "Data warehouse.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon EBS (Elastic Block Store) provides block storage volumes for use with Amazon EC2 instances.",
  },
  {
    id: 'uuidv5("aws-question-323", uuidv5.URL)',
    text: "Which AWS service can be used for monitoring AWS resources and applications?",
    options: [
      "AWS CloudTrail.",
      "Amazon CloudWatch.",
      "AWS Config.",
      "AWS X-Ray.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon CloudWatch is a monitoring and observability service for AWS cloud resources and applications.",
  },
  {
    id: 'uuidv5("aws-question-324", uuidv5.URL)',
    text: "What is AWS CodePipeline used for?",
    options: [
      "To manage cloud infrastructure.",
      "To automate the build and deployment process.",
      "To store code repositories.",
      "To monitor application performance.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS CodePipeline is a continuous integration and continuous delivery (CI/CD) service for fast and reliable application updates.",
  },
  {
    id: 'uuidv5("aws-question-325", uuidv5.URL)',
    text: "Which AWS service is a managed service for deploying, operating, and scaling containerized applications?",
    options: [
      "Amazon ECS.",
      "AWS Lambda.",
      "Amazon S3.",
      "AWS Elastic Beanstalk.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon ECS (Elastic Container Service) is a fully managed container orchestration service that makes it easy to run, stop, and manage Docker containers.",
  },
  {
    id: 'uuidv5("aws-question-326", uuidv5.URL)',
    text: "What is the function of AWS Config?",
    options: [
      "To manage database connections.",
      "To provide an inventory of AWS resources.",
      "To monitor application performance.",
      "To automate the deployment process.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Config provides a detailed inventory of your AWS resources and their configurations.",
  },
  {
    id: 'uuidv5("aws-question-327", uuidv5.URL)',
    text: "What does AWS CloudFormation do?",
    options: [
      "Manages security credentials.",
      "Automates infrastructure provisioning.",
      "Monitors application performance.",
      "Creates backup and recovery plans.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS CloudFormation provides a common language for describing and provisioning all infrastructure resources in your cloud environment.",
  },
  {
    id: 'uuidv5("aws-question-328", uuidv5.URL)',
    text: "Which service is used for real-time data streaming?",
    options: ["Amazon Kinesis.", "Amazon S3.", "AWS Glue.", "AWS Batch."],
    correctAnswers: [0],
    explanation:
      "Amazon Kinesis is a platform for streaming data on AWS, allowing you to process and analyze data in real-time.",
  },
  {
    id: 'uuidv5("aws-question-329", uuidv5.URL)',
    text: "What is AWS Lambda?",
    options: [
      "A serverless compute service.",
      "A data warehousing service.",
      "A storage service.",
      "A database management service.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Lambda is a serverless compute service that lets you run code without provisioning or managing servers.",
  },
  {
    id: 'uuidv5("aws-question-330", uuidv5.URL)',
    text: "Which AWS service allows you to deploy and manage virtual private servers?",
    options: [
      "Amazon EC2.",
      "Amazon RDS.",
      "AWS Lambda.",
      "AWS Elastic Beanstalk.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon EC2 (Elastic Compute Cloud) provides resizable compute capacity in the cloud.",
  },
  {
    id: 'uuidv5("aws-question-331", uuidv5.URL)',
    text: "What is Amazon S3 primarily used for?",
    options: [
      "Object storage.",
      "Relational database management.",
      "Virtual machine hosting.",
      "Content delivery.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon S3 (Simple Storage Service) is used for storing and retrieving any amount of data, at any time, from anywhere on the web.",
  },
  {
    id: 'uuidv5("aws-question-332", uuidv5.URL)',
    text: "Which AWS service is designed for automating the process of building, testing, and deploying applications?",
    options: [
      "AWS CodeBuild.",
      "AWS CloudFormation.",
      "AWS Lambda.",
      "AWS CodePipeline.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS CodeBuild is a fully managed build service that compiles source code, runs tests, and produces software packages.",
  },
  {
    id: 'uuidv5("aws-question-333", uuidv5.URL)',
    text: "What is the purpose of Amazon CloudFront?",
    options: [
      "To serve content from a CDN.",
      "To store large datasets.",
      "To manage virtual private servers.",
      "To monitor resource utilization in AWS environments.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally.",
  },
  {
    id: 'uuidv5("aws-question-334", uuidv5.URL)',
    text: "Which service provides distributed denial-of-service (DDoS) protection?",
    options: ["AWS Shield.", "AWS WAF.", "AWS GuardDuty.", "AWS IAM."],
    correctAnswers: [0],
    explanation:
      "AWS Shield is a managed DDoS protection service that safeguards applications running on AWS.",
  },
  {
    id: 'uuidv5("aws-question-335", uuidv5.URL)',
    text: "What does Amazon Aurora offer?",
    options: [
      "A serverless database service.",
      "A fully managed relational database.",
      "A relational database compatible with MySQL and PostgreSQL.",
      "A file storage solution.",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon Aurora is a relational database service that offers high performance and availability, and is compatible with MySQL and PostgreSQL.",
  },
  {
    id: 'uuidv5("aws-question-336", uuidv5.URL)',
    text: "What is AWS Identity and Access Management (IAM) used for?",
    options: [
      "To manage user access to AWS services.",
      "To monitor AWS costs.",
      "To configure network security.",
      "To manage compute resources.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Identity and Access Management (IAM) enables you to manage access to AWS services and resources securely.",
  },
  {
    id: 'uuidv5("aws-question-337", uuidv5.URL)',
    text: "What is the primary purpose of AWS CloudTrail?",
    options: [
      "To monitor AWS costs.",
      "To enable governance, compliance, and risk auditing.",
      "To automate resource provisioning.",
      "To manage IAM users.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS CloudTrail enables governance, compliance, and risk auditing by logging AWS API calls and resource changes.",
  },
  {
    id: 'uuidv5("aws-question-338", uuidv5.URL)',
    text: "Which AWS service is used for running containerized applications?",
    options: [
      "AWS Lambda.",
      "Amazon ECS.",
      "AWS CloudFormation.",
      "AWS Batch.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon Elastic Container Service (ECS) is a fully managed container orchestration service that helps you run containerized applications.",
  },
  {
    id: 'uuidv5("aws-question-339", uuidv5.URL)',
    text: "What is the AWS service/feature that takes advantage of Amazon CloudFront’s globally distributed edge locations to transfer files to S3 with higher upload speeds?",
    options: [
      "S3 Transfer Acceleration.",
      "AWS WAF.",
      "AWS Snowmobile.",
      "AWS Snowball.",
    ],
    correctAnswers: [0],
    explanation:
      "S3 Transfer Acceleration enables fast, easy, and secure file uploads to Amazon S3 using the nearest edge location provided by Amazon CloudFront.",
  },
  {
    id: 'uuidv5("aws-question-340", uuidv5.URL)',
    text: "Which AWS service provides a managed environment for running serverless applications?",
    options: ["AWS Lambda.", "Amazon EC2.", "Amazon RDS.", "AWS CodePipeline."],
    correctAnswers: [0],
    explanation:
      "AWS Lambda lets you run code without provisioning or managing servers, providing a serverless environment.",
  },
  {
    id: 'uuidv5("aws-question-341", uuidv5.URL)',
    text: "What is Amazon DynamoDB?",
    options: [
      "A fully managed relational database service.",
      "A fully managed NoSQL database service.",
      "A cloud file storage service.",
      "A service for running virtual machines.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance.",
  },
  {
    id: 'uuidv5("aws-question-342", uuidv5.URL)',
    text: "Which service can be used to orchestrate workflows across multiple AWS services?",
    options: [
      "AWS Step Functions.",
      "AWS CloudFormation.",
      "AWS Lambda.",
      "Amazon SNS.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Step Functions is a serverless orchestration service that lets you coordinate multiple AWS services into serverless workflows.",
  },
  {
    id: 'uuidv5("aws-question-343", uuidv5.URL)',
    text: "What is the primary use case for AWS Glue?",
    options: [
      "To store data in a data lake.",
      "To run machine learning models.",
      "To automate the extract, transform, load (ETL) process.",
      "To host web applications.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Glue is a fully managed extract, transform, load (ETL) service that makes it easy to prepare data for analytics.",
  },
  {
    id: 'uuidv5("aws-question-344", uuidv5.URL)',
    text: "What does Amazon Redshift do?",
    options: [
      "Provides a relational database.",
      "Serves as a data warehouse service.",
      "Is a NoSQL database service.",
      "Offers a data lake solution.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon Redshift is a fast, simple, cost-effective data warehousing service that makes it easy to analyze data using SQL.",
  },
  {
    id: 'uuidv5("aws-question-345", uuidv5.URL)',
    text: "What is AWS Auto Scaling used for?",
    options: [
      "To automate resource provisioning.",
      "To manage application performance.",
      "To automatically adjust capacity to maintain steady, predictable performance.",
      "To deploy applications.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Auto Scaling helps you automatically adjust capacity to maintain steady, predictable performance at the lowest possible cost.",
  },
  {
    id: 'uuidv5("aws-question-346", uuidv5.URL)',
    text: "What service is designed to help you analyze security vulnerabilities in your AWS environment?",
    options: [
      "AWS Shield.",
      "Amazon GuardDuty.",
      "AWS WAF.",
      "Amazon Inspector.",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon Inspector is an automated security assessment service to help improve the security and compliance of applications deployed on AWS.",
  },
];

const exam7: Question[] = [
  {
    id: uuidv5("aws-question-701", uuidv5.URL),
    text: "Which of the following can help secure your sensitive data in Amazon S3? (Choose TWO)",
    options: [
      "Delete the encryption keys once your data is encrypted",
      "With AWS you do not need to worry about encryption",
      "Enable S3 Encryption",
      "Encrypt the data prior to uploading it",
      "Delete all IAM users that have access to S3",
    ],
    correctAnswers: [2, 3],
    explanation:
      "Amazon S3 provides multiple ways to protect your data. Server-side encryption (Enable S3 Encryption) is a feature that encrypts your data at rest in S3. Additionally, you can encrypt your data before uploading it to S3 (client-side encryption) for an extra layer of security. The other options are either incorrect or could be harmful to your security posture.",
  },
  {
    id: uuidv5("aws-question-702", uuidv5.URL),
    text: "Which AWS service helps developers compile and test their code?",
    options: [
      "AWS CodeDeploy",
      "AWS CodeCommit",
      "CloudEndure",
      "AWS CodeBuild",
    ],
    correctAnswers: [3],
    explanation:
      "AWS CodeBuild is a fully managed continuous integration service that compiles source code, runs tests, and produces software packages that are ready to deploy. It eliminates the need to provision, manage, and scale your own build servers.",
  },
  {
    id: uuidv5("aws-question-703", uuidv5.URL),
    text: "Which of the following will affect how much you are charged for storing objects in S3? (Choose TWO)",
    options: [
      "Using default encryption for any number of S3 buckets",
      "The number of EBS volumes attached to your instances",
      "The storage class used for the objects stored",
      "Creating and deleting S3 buckets",
      "The total size in gigabytes of all objects stored",
    ],
    correctAnswers: [2, 4],
    explanation:
      "S3 pricing is primarily based on two factors: the storage class you choose (like Standard, Intelligent-Tiering, Glacier, etc.) and the amount of data stored in gigabytes. Other factors like bucket creation/deletion or default encryption don't affect the cost. EBS volumes are a separate service and don't affect S3 pricing.",
  },
  {
    id: uuidv5("aws-question-704", uuidv5.URL),
    text: "What does the Amazon CloudFront service provide? (Choose TWO)",
    options: [
      "Tracks user activity and APl usage",
      "Increases application availability by caching at the edge",
      "Enables faster disaster recovery",
      "Stores archived data at very low costs",
      "Delivers content to end users with low latency",
    ],
    correctAnswers: [1, 4],
    explanation:
      "Amazon CloudFront is a content delivery network (CDN) service that increases application availability through edge caching and delivers content to end users with low latency by using a global network of edge locations.",
  },
  {
    id: uuidv5("aws-question-705", uuidv5.URL),
    text: "You are facing a lot of problems with your current contact center. Which service provides a cloud-based contact center that can deliver a better service for your customers?",
    options: [
      "Amazon Lightsail",
      "Amazon Connect",
      "AWS Direct Connect",
      "AWS Elastic Beanstalk",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon Connect is a cloud-based contact center service that makes it easy to set up and manage a customer contact center and provide reliable customer engagement at any scale. It's an omnichannel cloud contact center designed to provide superior customer service at a lower cost.",
  },
  {
    id: uuidv5("aws-question-706", uuidv5.URL),
    text: "You have migrated your application to AWS recently. How can you view the AWS costs applied to your account?",
    options: [
      "Using the AWS Cost & Usage Report",
      "Using the AWS Total Cost of Ownership (TCO) dashboard",
      "Using the AWS CloudWatch logs dashboard",
      "Using the Amazon VPC dashboard",
    ],
    correctAnswers: [0],
    explanation:
      "The AWS Cost & Usage Report is the most comprehensive set of AWS cost and usage data available. It provides detailed information about your AWS costs, including the ability to break down costs by service, resource tags, and time period.",
  },
  {
    id: uuidv5("aws-question-707", uuidv5.URL),
    text: "Which of the following are valid Amazon EC2 Reserved Instance types? (Choose TWO)",
    options: ["Convertible", "Expedited", "Bulk", "Spot", "Standard"],
    correctAnswers: [0, 4],
    explanation:
      "Amazon EC2 offers two types of Reserved Instances: Standard and Convertible. Standard RIs provide the highest discount but can only be modified within the same instance family. Convertible RIs provide more flexibility to change the instance family, OS, tenancy, and payment option. Spot and other options listed are not valid RI types.",
  },
  {
    id: uuidv5("aws-question-708", uuidv5.URL),
    text: "Which service gives you access to all AWS auditor-issued reports and certifications?",
    options: [
      "AWS Artifact",
      "AWS Config",
      "Amazon CloudWatch",
      "AWS CloudTrail",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Artifact provides access to AWS's compliance reports, including SOC and PCI, to help customers meet their regulatory requirements.",
  },
  {
    id: uuidv5("aws-question-709", uuidv5.URL),
    text: "You manage a blog on AWS that has different environments: development, testing, and production. What can you use to create a custom console for each environment to view and manage your resources easily?",
    options: [
      "AWS Resource Groups",
      "AWS Placement Groups",
      "AWS Management Console",
      "AWS Tag Editor",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Resource Groups let you organize AWS resources such as EC2 instances, databases, or S3 buckets into groups using tags. This makes it easier to manage, monitor, and automate tasks on large numbers of resources at once. You can create custom consoles for different environments by grouping resources based on their environment tags.",
  },
  {
    id: uuidv5("aws-question-710", uuidv5.URL),
    text: "Which AWS service collects metrics from running EC2 instances?",
    options: [
      "Amazon Inspector",
      "Amazon CloudWatch",
      "AWS CloudFormation",
      "AWS CloudTrail",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon CloudWatch is a monitoring and observability service that provides data and actionable insights for AWS resources. It collects monitoring and operational data in the form of logs, metrics, and events from EC2 instances and other AWS resources, allowing you to detect anomalous behavior in your environments.",
  },
  {
    id: uuidv5("aws-question-711", uuidv5.URL),
    text: "Your web application currently faces performance issues and suffers from long load times. Which of the following AWS services could help fix these issues and improve performance?",
    options: [
      "Amazon Detective",
      "AWS X-Ray",
      "AWS Security Hub",
      "AWS Shield",
    ],
    correctAnswers: [1],
    explanation:
      "AWS X-Ray helps developers analyze and debug production, distributed applications. It provides an end-to-end view of requests as they travel through your application, and shows a map of your application's underlying components, helping you identify and troubleshoot the root cause of performance issues and errors.",
  },
  {
    id: uuidv5("aws-question-712", uuidv5.URL),
    text: "Which of the following compute resources are serverless? (Choose TWO)",
    options: [
      "Amazon EC2",
      "AWS Fargate",
      "AWS Lambda",
      "Amazon ECS",
      "Amazon EMR",
    ],
    correctAnswers: [1, 2],
    explanation:
      "Both AWS Fargate and AWS Lambda are serverless compute services. Fargate is a serverless compute engine for containers that works with ECS and EKS. The other options require you to manage servers or instances in some capacity.",
  },
  {
    id: uuidv5("aws-question-713", uuidv5.URL),
    text: "For compliance and regulatory purposes, a government agency requires that their applications must run on hardware that is dedicated to them only. How can you meet this requirement?",
    options: [
      "Use EC2 Dedicated Hosts",
      "Use EC2 Reserved Instances",
      "Use EC2 Spot Instances",
      "Use EC2 On-demand Instances",
    ],
    correctAnswers: [0],
    explanation:
      "EC2 Dedicated Hosts provide physical servers dedicated for your use. They can help you meet compliance requirements and reduce costs by allowing you to use your existing server-bound software licenses. This is ideal for regulatory requirements that may require you to use dedicated hardware.",
  },
  {
    id: uuidv5("aws-question-714", uuidv5.URL),
    text: "Which AWS Cost Governance best practice recommends refining workloads regularly to make the most of existing AWS resources and reduce costs?",
    options: [
      "Tagging Enforcement",
      "Architecture Optimization",
      "Budgeting Processes",
      "Resource Controls",
    ],
    correctAnswers: [1],
    explanation:
      "Architecture Optimization is a best practice that involves regularly reviewing and refining your workloads to ensure they're using AWS resources efficiently. This includes right-sizing resources, choosing the right pricing models, and implementing architectural patterns that maximize efficiency and minimize costs.",
  },
  {
    id: uuidv5("aws-question-715", uuidv5.URL),
    text: "An organization needs to build a financial application that requires support for ACID transactions. Which AWS database service is most appropriate in this case?",
    options: ["RedShift", "RDS", "CloudHSM", "DMS"],
    correctAnswers: [1],
    explanation:
      "Amazon RDS (Relational Database Service) is the most appropriate choice for applications requiring ACID (Atomicity, Consistency, Isolation, Durability) transactions. RDS supports various relational database engines like MySQL, PostgreSQL, and Oracle, which all provide ACID compliance necessary for financial applications.",
  },
  {
    id: uuidv5("aws-question-716", uuidv5.URL),
    text: "What can you assign permissions directly to an IAM user?",
    options: ["IAM Identity", "IAM Group", "IAM Role", "IAM Policy"],
    correctAnswers: [3],
    explanation:
      "IAM Policies are JSON documents that define permissions and can be attached directly to IAM users, groups, or roles. They are the primary way to define and assign permissions in AWS, specifying what actions are allowed or denied on what AWS resources.",
  },
  {
    id: uuidv5("aws-question-717", uuidv5.URL),
    text: "The owner of an E-Commerce application notices that the compute capacity requirements vary heavily from time to time. What makes AWS more economical than traditional data centers for this type of application?",
    options: [
      "AWS allows customers to launch powerful EC2 instances to handle spikes in load",
      "AWS allows customers to pay upfront to get bigger discounts",
      "AWS allows customers to launch and terminate EC2 instances based on demand",
      "AWS allows customers to choose cheaper types of EC2 instances that best fit their needs",
    ],
    correctAnswers: [2],
    explanation:
      "One of the main benefits of AWS is the ability to scale resources up and down based on demand (elasticity). For an E-Commerce application with varying workloads, being able to launch instances when traffic is high and terminate them when traffic is low helps optimize costs compared to traditional data centers where you need to provision for peak capacity.",
  },
  {
    id: uuidv5("aws-question-718", uuidv5.URL),
    text: "Which of the following is not one of the database engines supported by Amazon RDS?",
    options: ["PostgreSQL", "Oracle", "Microsoft SQL Server", "Teradata"],
    correctAnswers: [3],
    explanation:
      "Amazon RDS supports six database engines: MySQL, PostgreSQL, MariaDB, Oracle, Microsoft SQL Server, and Amazon Aurora. Teradata is not supported on Amazon RDS. If you need to run a custom or unsupported database engine, EC2 is the appropriate choice.",
  },
  {
    id: uuidv5("aws-question-719", uuidv5.URL),
    text: "Which AWS service would help you migrate on-premise databases to AWS?",
    options: [
      "AWS DMS",
      "Amazon S3 Transfer Acceleration",
      "AWS Directory Service",
      "AWS Transit Gateway",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Database Migration Service (DMS) helps you migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database. It supports homogeneous migrations (same database engine) and heterogeneous migrations (different database engines).",
  },
  {
    id: uuidv5("aws-question-720", uuidv5.URL),
    text: "For new AWS customers, what is the EASIEST way to launch a simple WordPress website on AWS?",
    options: [
      "Run WordPress on an Amazon Lightsail instance",
      "Install WordPress on an Amazon EC2 instance",
      "Use the Amazon S3 Web hosting feature",
      "Host the website directly on AWS Cloud Development Kit (AWS CDK)",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon Lightsail is the easiest way to get started with AWS for developers, small businesses, students, and other users who need a simple virtual private server (VPS) solution. Lightsail provides everything you need to launch a WordPress website, including a virtual machine, SSD-based storage, data transfer, DNS management, and a static IP address.",
  },
  {
    id: uuidv5("aws-question-721", uuidv5.URL),
    text: "Which of the following would you use to manage your encryption keys in the AWS Cloud? (Choose TWO)",
    options: [
      "AWS KMS",
      "AWS Certificate Manager",
      "AWS CodeDeploy",
      "AWS CodeCommit",
      "CloudHSM",
    ],
    correctAnswers: [0, 4],
    explanation:
      "AWS Key Management Service (KMS) and CloudHSM are both services for managing encryption keys in AWS. KMS is a managed service that makes it easy to create and control encryption keys, while CloudHSM provides hardware security modules (HSMs) for generating and managing cryptographic keys. The other services are not related to encryption key management.",
  },
  {
    id: uuidv5("aws-question-722", uuidv5.URL),
    text: "Which service allows you to install and run custom relational database software?",
    options: ["Amazon EC2", "Amazon Cognito", "Amazon RDS", "Amazon Inspector"],
    correctAnswers: [0],
    explanation:
      "Amazon EC2 (Elastic Compute Cloud) provides virtual servers where you can install and run any software, including custom relational database software. While RDS is a managed database service, it only supports specific database engines. If you need to run a custom or unsupported database engine, EC2 is the appropriate choice.",
  },
  {
    id: uuidv5("aws-question-723", uuidv5.URL),
    text: "Your application requirements for CPU and RAM are changing in an unpredictable way. Which service can be used to dynamically adjust these resources based on load?",
    options: [
      "Auto Scaling",
      "ELB",
      "Amazon Route53",
      "Amazon Elastic Container Service",
    ],
    correctAnswers: [0],
    explanation:
      "Auto Scaling helps you maintain application availability and allows you to automatically add or remove EC2 instances according to conditions you define. It's perfect for applications with varying load patterns as it can automatically adjust your compute capacity to maintain steady, predictable performance at the lowest possible cost.",
  },
  {
    id: uuidv5("aws-question-724", uuidv5.URL),
    text: "A company has infrastructure hosted in an on-premises data center. They currently have an operations team that takes care of identity management. If they decide to migrate to the AWS cloud, which of the following services would help them perform the same role in AWS?",
    options: ["AWS IAM", "AWS Outposts", "AWS Federation", "Amazon Redshift"],
    correctAnswers: [0],
    explanation:
      "AWS Identity and Access Management (IAM) allows users to securely manage access to AWS services and resources by defining permissions for individual users or groups.",
  },
  {
    id: uuidv5("aws-question-725", uuidv5.URL),
    text: "What are some key design principles for designing public cloud systems? (Choose TWO)",
    options: [
      "Reserved capacity instead of on demand",
      "Loose coupling over tight coupling",
      "Servers instead of managed services",
      "Disposable resources instead of fixed servers",
      "Multi-AZ deployments instead of multi-region deployments",
    ],
    correctAnswers: [1, 3],
    explanation:
      "Two key design principles for cloud systems are loose coupling (which increases flexibility and reduces interdependencies) and treating servers as disposable resources (enabling automation and reducing the impact of failures). These principles align with cloud-native best practices and help create more resilient and scalable systems.",
  },
  {
    id: uuidv5("aws-question-726", uuidv5.URL),
    text: "Where can AWS account owners get a list of all users in their account, including the status of their AWS credentials?",
    options: [
      "AWS CloudTrail Trails",
      "IAM Credential Report",
      "AWS Artifact reports",
      "AWS Cost and Usage Report",
    ],
    correctAnswers: [1],
    explanation:
      "The IAM Credential Report lists all users in your AWS account and the status of their various credentials, including passwords, access keys, and MFA devices. This report helps you audit and comply with your security requirements by providing information about the state of your users' credentials.",
  },
  {
    id: uuidv5("aws-question-727", uuidv5.URL),
    text: "Which service enables you to easily generate and use your own encryption keys in the AWS Cloud?",
    options: [
      "AWS Shield",
      "AWS Certificate Manager",
      "AWS CloudHSM",
      "AWS WAF",
    ],
    correctAnswers: [2],
    explanation:
      "AWS CloudHSM provides hardware security modules (HSMs) in the AWS Cloud. It enables you to easily generate and use your own encryption keys on the AWS Cloud. CloudHSM helps you meet corporate, contractual, and regulatory compliance requirements for data security by using dedicated HSM instances within the AWS cloud.",
  },
  {
    id: uuidv5("aws-question-728", uuidv5.URL),
    text: "Which of the following resources can an AWS customer use to learn more about prohibited uses of the services offered by AWS?",
    options: [
      "AWS Service Control Policies (SCPs)",
      "AWS Artifact",
      "AWS Budgets",
      "AWS Acceptable Use Policy",
    ],
    correctAnswers: [3],
    explanation:
      "The AWS Acceptable Use Policy describes prohibited uses of the web services offered by Amazon Web Services. This policy is part of the AWS Customer Agreement and outlines what customers can and cannot do with AWS services.",
  },
  {
    id: uuidv5("aws-question-729", uuidv5.URL),
    text: "Which of the following security resources are available to any user for free? (Choose TWO)",
    options: [
      "AWS Bulletins",
      "AWS TAM",
      "AWS Support APl",
      "AWS Security Blog",
      "AWS Classroom Training",
    ],
    correctAnswers: [0, 3],
    explanation:
      "AWS Security Bulletins and the AWS Security Blog are free resources available to all AWS users. They provide important security information and best practices. Other options like Technical Account Manager (TAM), Support API access, and classroom training typically require paid subscriptions or additional fees.",
  },
  {
    id: uuidv5("aws-question-730", uuidv5.URL),
    text: "How can you protect data stored on Amazon S3 from accidental deletion?",
    options: [
      "By enabling S3 Versioning",
      "By configuring S3 Bucket Policies",
      "By configuring S3 Lifecycle Policies",
      "By disabling S3 Cross-Region Replication (CRR)",
    ],
    correctAnswers: [0],
    explanation:
      "S3 Versioning is the feature that helps protect against accidental deletion of objects in S3 buckets. When versioning is enabled, instead of deleting an object, Amazon S3 inserts a delete marker, which becomes the current version of the object. Previous versions can be restored if needed.",
  },
  {
    id: uuidv5("aws-question-734", uuidv5.URL),
    text: "How does AWS help customers achieve compliance in the cloud?",
    options: [
      "It's not possible to meet regulatory compliance requirements in the Cloud",
      "AWS applies the most common Cloud security standards, and is responsible for complying with customers' applicable laws and regulations",
      "AWS has many common assurance certifications such as ISO 9001 and HIPAA",
      "Many AWS services are assessed regularly to comply with local laws and regulations",
    ],
    correctAnswers: [2],
    explanation:
      "AWS maintains many certifications and assurance programs (such as ISO 9001, HIPAA, and others) that help customers achieve their compliance requirements. However, compliance is a shared responsibility, and customers must ensure their specific use of AWS services meets their compliance needs.",
  },
  {
    id: uuidv5("aws-question-735", uuidv5.URL),
    text: "Who is responsible for scaling a DynamoDB database in the AWS Shared Responsibility Model?",
    options: [
      "Your security team",
      "Your development team",
      "AWS",
      "Your internal DevOps team",
    ],
    correctAnswers: [2],
    explanation:
      "Under the AWS Shared Responsibility Model, AWS is responsible for managing and scaling DynamoDB. This is one of the key benefits of using managed services like DynamoDB - AWS handles the underlying infrastructure and scaling operations automatically.",
  },
  {
    id: uuidv5("aws-question-736", uuidv5.URL),
    text: "You are working as a web app developer. You are currently facing issues in media playback for mobile devices because your media format is not supported. Which of the following AWS services can help you convert your media into another format?",
    options: [
      "Amazon Elastic Transcoder",
      "Amazon Pinpoint",
      "AmazonS3",
      "Amazon Rekognition",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon Elastic Transcoder is designed specifically for converting media files from their source format into versions that will play on various devices. It's the ideal service for converting media formats for compatibility with different playback devices.",
  },
  {
    id: uuidv5("aws-question-742", uuidv5.URL),
    text: "What are the benefits of the AWS Organizations service? (Choose TWO)",
    options: [
      "Control access to AWS services",
      "Help organizations design and maintain an accelerated path to successful cloud adoption",
      "Manage your organization's payment methods",
      "Help organization achieve their desired business outcomes with AWS",
      "Consolidate billing across multiple AWS accounts",
    ],
    correctAnswers: [0, 4],
    explanation:
      "AWS Organizations provides two main benefits: centralized management of access to AWS services through Service Control Policies (SCPs) and consolidated billing across multiple AWS accounts, which helps organizations better manage and optimize their AWS costs.",
  },
  {
    id: uuidv5("aws-question-743", uuidv5.URL),
    text: "Which AWS service allows you to build a data warehouse in the cloud?",
    options: [
      "AWS Shield",
      "Amazon Redshift",
      "Amazon RDS",
      "Amazon Comprehend",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon Redshift is AWS's fully managed data warehouse service that allows you to run complex queries on structured and semi-structured data efficiently.",
  },
  {
    id: uuidv5("aws-question-744", uuidv5.URL),
    text: "Which of the following AWS services can help you buy third-party software solutions and services that run on AWS resources?",
    options: [
      "AWS Application Discovery service",
      "Amazon DevPay",
      "AWS Marketplace",
      "Resource Groups",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Marketplace is a digital catalog with thousands of software listings from independent software vendors that makes it easy to find, test, buy, and deploy software that runs on AWS.",
  },
  {
    id: uuidv5("aws-question-745", uuidv5.URL),
    text: "Which of the following is NOT a characteristic of Amazon EC2?",
    options: [
      "Amazon EC2 is considered a Serverless Web Service.",
      "Amazon EC2 eliminates the need to invest in hardware upfront.",
      "Amazon EC2 can launch as many or as few virtual servers as needed.",
      "Amazon EC2 offers scalable computing.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon EC2 is not a serverless service. It requires provisioning of servers, which is contrary to the serverless model.",
  },
  {
    id: uuidv5("aws-question-746", uuidv5.URL),
    text: "Which service can help you register a new domain name?",
    options: ["Amazon Personalize", "Amazon Route 53", "AWS KMS", "AWS Config"],
    correctAnswers: [1],
    explanation:
      "Amazon Route 53 is AWS’s scalable Domain Name System (DNS) web service that can also be used to register and manage domain names.",
  },
  {
    id: uuidv5("aws-question-747", uuidv5.URL),
    text: "Which of the following services can help you perform security analysis and regulatory compliance auditing?",
    options: [
      "Amazon Inspector.",
      "AWS Virtual Private Gateway.",
      "AWS Batch.",
      "Amazon ECS.",
      "AWS Config.",
    ],
    correctAnswers: [0, 4],
    explanation:
      "Amazon Inspector and AWS Config help with security analysis and auditing for compliance by analyzing configurations and detecting vulnerabilities.",
  },
  {
    id: uuidv5("aws-question-748", uuidv5.URL),
    text: "Which of the following is NOT one of the database engines supported by Amazon RDS?",
    options: ["PostgreSQL", "Oracle", "Microsoft SQL Server", "Teradata"],
    correctAnswers: [3],
    explanation:
      "Amazon RDS supports six database engines: MySQL, PostgreSQL, MariaDB, Oracle, Microsoft SQL Server, and Amazon Aurora. Teradata is not supported on Amazon RDS. If you need to run a custom or unsupported database engine, EC2 is the appropriate choice.",
  },
  {
    id: uuidv5("aws-question-749", uuidv5.URL),
    text: "Which of the following services can help you migrate on-premise databases to AWS?",
    options: [
      "AWS DMS",
      "Amazon S3 Transfer Acceleration",
      "AWS Directory Service",
      "AWS Transit Gateway",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Database Migration Service (DMS) helps you migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database. It supports homogeneous migrations (same database engine) and heterogeneous migrations (different database engines).",
  },
  {
    id: uuidv5("aws-question-750", uuidv5.URL),
    text: "For new AWS customers, what is the EASIEST way to launch a simple WordPress website on AWS?",
    options: [
      "Run WordPress on an Amazon Lightsail instance",
      "Install WordPress on an Amazon EC2 instance",
      "Use the Amazon S3 Web hosting feature",
      "Host the website directly on AWS Cloud Development Kit (AWS CDK)",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon Lightsail is the easiest way to get started with AWS for developers, small businesses, students, and other users who need a simple virtual private server (VPS) solution. Lightsail provides everything you need to launch a WordPress website, including a virtual machine, SSD-based storage, data transfer, DNS management, and a static IP address.",
  },
  {
    id: uuidv5("aws-question-751", uuidv5.URL),
    text: "Which of the following would you use to manage your encryption keys in the AWS Cloud? (Choose TWO)",
    options: [
      "AWS KMS",
      "AWS Certificate Manager",
      "AWS CodeDeploy",
      "AWS CodeCommit",
      "CloudHSM",
    ],
    correctAnswers: [0, 4],
    explanation:
      "AWS Key Management Service (KMS) and CloudHSM are both services for managing encryption keys in AWS. KMS is a managed service that makes it easy to create and control encryption keys, while CloudHSM provides hardware security modules (HSMs) for generating and managing cryptographic keys. The other services are not related to encryption key management.",
  },
  {
    id: uuidv5("aws-question-752", uuidv5.URL),
    text: "Which service enables you to run containerized applications on a serverless infrastructure?",
    options: [
      "Amazon EC2",
      "AWS Lambda",
      "Amazon ECS with Fargate",
      "AWS Batch",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Lambda is a serverless compute service that allows you to run code without provisioning or managing servers.",
  },
  {
    id: uuidv5("aws-question-753", uuidv5.URL),
    text: "Which AWS service helps developers compile and test their code?",
    options: [
      "AWS CodeDeploy",
      "AWS CodeCommit",
      "CloudEndure",
      "AWS CodeBuild",
    ],
    correctAnswers: [3],
    explanation:
      "AWS CodeBuild is a fully managed continuous integration service that compiles source code, runs tests, and produces software packages that are ready to deploy.",
  },
  {
    id: uuidv5("aws-question-754", uuidv5.URL),
    text: "What does the Amazon CloudFront service provide? (Choose TWO)",
    options: [
      "Tracks user activity and APl usage",
      "Increases application availability by caching at the edge",
      "Enables faster disaster recovery",
      "Stores archived data at very low costs",
      "Delivers content to end users with low latency",
    ],
    correctAnswers: [1, 4],
    explanation:
      "Amazon CloudFront is a content delivery network (CDN) service that increases application availability through edge caching and delivers content to end users with low latency by using a global network of edge locations.",
  },
  {
    id: uuidv5("aws-question-755", uuidv5.URL),
    text: "You are facing a lot of problems with your current contact center. Which service provides a cloud-based contact center that can deliver a better service for your customers?",
    options: [
      "Amazon Lightsail",
      "Amazon Connect",
      "AWS Direct Connect",
      "AWS Elastic Beanstalk",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon Connect is a cloud-based contact center service that makes it easy to set up and manage a customer contact center and provide reliable customer engagement at any scale.",
  },
  {
    id: uuidv5("aws-question-756", uuidv5.URL),
    text: "You manage a blog on AWS that has different environments: development, testing, and production. What can you use to create a custom console for each environment to view and manage your resources easily?",
    options: [
      "AWS Resource Groups",
      "AWS Placement Groups",
      "AWS Management Console",
      "AWS Tag Editor",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Resource Groups is a feature that allows you to create groups of AWS resources and manage them together, making it easier to view and manage your resources in the AWS Management Console.",
  },
  {
    id: uuidv5("aws-question-757", uuidv5.URL),
    text: "Which AWS service collects metrics from running EC2 instances?",
    options: [
      "Amazon Inspector",
      "Amazon CloudWatch",
      "AWS CloudFormation",
      "AWS CloudTrail",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon CloudWatch is a monitoring and logging service that provides visibility into your AWS resources and applications. It collects metrics from running EC2 instances, such as CPU usage, network traffic, and disk usage, and provides real-time data to help you troubleshoot and optimize your applications.",
  },
  {
    id: uuidv5("aws-question-758", uuidv5.URL),
    text: "Which of the following services allows you to install and run custom relational database software?",
    options: [
      "Amazon EC2.",
      "Amazon Cognito.",
      "Amazon RDS.",
      "Amazon Inspector.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon EC2 is a service that provides scalable computing capacity in the cloud. You can install and run custom relational database software on an EC2 instance, giving you full control over your database environment.",
  },
];

const exam8: Question[] = [
  {
    id: uuidv5("aws-question-759", uuidv5.URL),
    text: "What is the main benefit of attaching security groups to an Amazon RDS instance?",
    options: [
      "Manages user access and encryption keys.",
      "Controls what IP address ranges can connect to your database instance.",
      "Deploys SSL/TLS certificates for use with your database instance.",
      "Distributes incoming traffic across multiple targets.",
    ],
    correctAnswers: [1],
    explanation:
      "Security Groups act as a virtual firewall for your Amazon RDS instance, allowing you to control inbound and outbound traffic by specifying allowed IP ranges and ports. The other options are incorrect: user access and encryption keys are managed differently (A), SSL/TLS certificates are not deployed by security groups (C), and distributing traffic is related to load balancers, not security groups (D).",
  },
  {
    id: uuidv5("aws-question-760", uuidv5.URL),
    text: "A company wants to use Amazon Elastic Container Service (Amazon ECS) to run its containerized applications. For compliance reasons, the company wants to retain complete visibility and control over the underlying server cluster. Which Amazon ECS launch type will satisfy these requirements?",
    options: [
      "EC2 launch type.",
      "Fargate launch type.",
      "Lightsail launch type.",
      "Lambda launch type.",
    ],
    correctAnswers: [0],
    explanation:
      "The EC2 launch type allows the company to manage the underlying EC2 instances that host the containers, providing full visibility and control over the infrastructure. The Fargate launch type abstracts the underlying servers (B), Lightsail is not used for ECS (C), and Lambda is a serverless compute service, not a container hosting solution (D).",
  },
  {
    id: uuidv5("aws-question-761", uuidv5.URL),
    text: "You have multiple standalone AWS accounts and you want to decrease your AWS monthly charges. What should you do?",
    options: [
      "Try to remove unnecessary AWS accounts.",
      "Add the accounts to an AWS Organization and use Consolidated Billing.",
      "Track the AWS charges that are incurred by the member accounts.",
      "Enable AWS tiered-pricing before provisioning resources.",
    ],
    correctAnswers: [1],
    explanation:
      "Using AWS Organizations with Consolidated Billing allows you to combine usage across multiple accounts to benefit from volume pricing discounts and simplify billing. Removing accounts (A) doesn't directly reduce charges, tracking costs (C) doesn't reduce them either, and there is no such feature as enabling 'tiered-pricing' manually (D).",
  },
  {
    id: uuidv5("aws-question-762", uuidv5.URL),
    text: "You have been tasked with auditing the security of your VPC. As part of this process, you need to start by analyzing what inbound and outbound traffic is allowed on your EC2 instances. What two parts of the VPC do you need to check to accomplish this task?",
    options: [
      "Network ACLs and Traffic Manager.",
      "Network ACLs and Subnets.",
      "Security Groups and Internet Gateways.",
      "Security Groups and Network ACLs.",
    ],
    correctAnswers: [3],
    explanation:
      "To analyze allowed inbound and outbound traffic, you need to check both Security Groups and Network ACLs. Security Groups operate at the instance level and control traffic specifically for that instance. Network ACLs operate at the subnet level and provide another layer of traffic control. The other options include components not directly related to traffic rules, such as Traffic Manager (A), or incorrectly combine unrelated items (B, C).",
  },
  {
    id: uuidv5("aws-question-763", uuidv5.URL),
    text: "What does the AWS 'Business' support plan provide? (Choose TWO)",
    options: [
      "Access to the full set of Trusted Advisor checks.",
      "Support Concierge Service.",
      "Less than 15 minutes response-time support if your business critical system goes down.",
      "AWS Support API.",
      "Proactive Technical Account Management.",
    ],
    correctAnswers: [0, 3],
    explanation:
      "The AWS 'Business' support plan provides access to the full set of Trusted Advisor checks and the AWS Support API. The other options, such as Concierge Service (B) and Proactive Technical Account Management (E), are part of the 'Enterprise' support plan. Less than 15-minute response time (C) is also exclusive to the 'Enterprise' support plan.",
  },
  {
    id: uuidv5("aws-question-764", uuidv5.URL),
    text: "You have just finished writing your application code. Which service can be used to automate the deployment and scaling of your application?",
    options: [
      "Amazon Simple Storage Service.",
      "AWS Elastic Beanstalk.",
      "AWS CodeCommit.",
      "Amazon Elastic File System.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Elastic Beanstalk provides an easy way to deploy and scale web applications and services. It automates the deployment process, including provisioning the necessary resources and scaling. S3 (A) is for storage, CodeCommit (C) is for version control, and EFS (D) is for file storage.",
  },
  {
    id: uuidv5("aws-question-765", uuidv5.URL),
    text: "Which statement is true in relation to security in AWS?",
    options: [
      "AWS manages everything related to EC2 operating systems.",
      "AWS customers are responsible for patching any database software running on Amazon EC2.",
      "Server side encryption is the responsibility of AWS.",
      "AWS is responsible for the security of your application.",
    ],
    correctAnswers: [1],
    explanation:
      "According to AWS's Shared Responsibility Model, customers are responsible for managing and patching the database software on their EC2 instances. AWS manages the infrastructure, but the application and its related security are the customer's responsibility. The other options misrepresent the division of responsibilities.",
  },
  {
    id: uuidv5("aws-question-766", uuidv5.URL),
    text: "Amazon EC2 instances are conceptually very similar to traditional servers. However, using Amazon EC2 server instances in the same manner as traditional hardware server instances is only a starting point. What are the main benefits of using the AWS EC2 instances instead of traditional servers? (Choose TWO)",
    options: [
      "Improves Fault-Tolerance.",
      "Provides your business with a seamless remote accessibility.",
      "Prevents unauthorized users from getting into your network.",
      "Provides automatic data backups.",
      "Can be scaled manually in a shorter period of time.",
    ],
    correctAnswers: [0, 4],
    explanation:
      "Amazon EC2 improves fault-tolerance by allowing the use of multiple Availability Zones and can be scaled up or down quickly as needed. While seamless remote accessibility (B) and automatic backups (D) are features of other AWS services, they are not unique to EC2. Network security (C) is managed by Security Groups and not specifically tied to EC2’s benefits.",
  },
  {
    id: uuidv5("aws-question-767", uuidv5.URL),
    text: "Which statement is true regarding AWS pricing? (Choose TWO)",
    options: [
      "With the AWS pay-as-you-go pricing model, you don't have to pay any upfront fee.",
      "You have no responsibility for third-party software license costs.",
      "You only pay for the individual services that you need with no long-term contracts.",
      "For some services, you have to pay a startup fee in order to get the service running.",
      "There are no reservations on AWS, you only pay for what you use.",
    ],
    correctAnswers: [0, 2],
    explanation:
      "AWS's pricing model includes pay-as-you-go, meaning no upfront fees, and you only pay for the services you use without long-term contracts. However, some third-party software (B) and reserved instances (E) can involve additional costs or commitments, and there are no 'startup fees' for AWS services (D).",
  },
  {
    id: uuidv5("aws-question-768", uuidv5.URL),
    text: "Which AWS service provides the EASIEST way to set up and manage a secure, well-architected, multi-account AWS environment?",
    options: [
      "AWS Control Tower.",
      "Amazon Macie.",
      "AWS Systems Manager Patch Manager.",
      "AWS Security Hub.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Control Tower simplifies the process of setting up and managing a multi-account AWS environment by providing pre-configured best practices. Macie (B) is for data security and privacy, Patch Manager (C) handles patching, and Security Hub (D) centralizes security alerts but doesn’t directly manage multi-account setups.",
  },
  {
    id: uuidv5("aws-question-769", uuidv5.URL),
    text: "A company is running a large web application that needs to always be available. The application tends to slow down when CPU usage is greater than 60%. How can they track when CPU usage goes above 60% for any of the EC2 Instances in their account?",
    options: [
      "Use CloudFront to monitor the CPU usage.",
      "Set the AWS Config CPU threshold to 60% to receive a notification when EC2 usage exceeds that value.",
      "Use CloudWatch Alarms to monitor the CPU and alert when the CPU usage is >= 60%.",
      "Use SNS to monitor the utilization of the server.",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon CloudWatch Alarms allow you to monitor specific metrics, such as CPU usage, and set thresholds to trigger notifications or automated actions. CloudFront (A) is for content delivery, AWS Config (B) tracks configuration changes but doesn’t monitor CPU usage, and SNS (D) is a notification service that doesn’t monitor metrics directly.",
  },
  {
    id: uuidv5("aws-question-770", uuidv5.URL),
    text: "What is the recommended storage option when hosting an often-changing database on an Amazon EC2 instance?",
    options: [
      "Amazon EBS.",
      "Amazon RDS.",
      "You can't run a database inside an Amazon EC2 instance.",
      "Amazon DynamoDB.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon EBS (Elastic Block Store) is the recommended storage option for hosting databases on EC2 instances due to its high performance, durability, and ability to handle frequent data changes. RDS (B) and DynamoDB (D) are managed database services, but they are not used directly with EC2-hosted databases. Option C is incorrect because you can run databases inside EC2 instances.",
  },
  {
    id: uuidv5("aws-question-771", uuidv5.URL),
    text: "You are working as a site reliability engineer (SRE) in an AWS environment, which of the following services helps monitor your applications?",
    options: [
      "Amazon CloudWatch.",
      "Amazon CloudSearch.",
      "Amazon Elastic MapReduce.",
      "Amazon CloudHSM.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon CloudWatch is a monitoring service that provides metrics and logs to track application performance and resource utilization. CloudSearch (B) is for search capabilities, Elastic MapReduce (C) is for big data processing, and CloudHSM (D) is for hardware security modules, not monitoring.",
  },
  {
    id: uuidv5("aws-question-772", uuidv5.URL),
    text: "What factors determine how you are charged when using AWS Lambda? (Choose TWO)",
    options: [
      "Storage consumed.",
      "Number of requests to your functions.",
      "Number of volumes.",
      "Placement groups.",
      "Compute time consumed.",
    ],
    correctAnswers: [1, 4],
    explanation:
      "AWS Lambda charges are based on the number of requests to your functions and the compute time consumed (measured in GB-seconds). Storage (A), number of volumes (C), and placement groups (D) are unrelated to Lambda pricing.",
  },
  {
    id: uuidv5("aws-question-773", uuidv5.URL),
    text: "What are the main differences between an IAM user and an IAM role in AWS? (Choose TWO)",
    options: [
      "An IAM user is uniquely associated with only one person, however a role is intended to be assumable by anyone who needs it.",
      "An IAM user has permanent credentials associated with it, however a role has temporary credentials associated with it.",
      "IAM users are more cost effective than IAM roles.",
      "A role is uniquely associated with only one person, however an IAM user is intended to be assumable by anyone who needs it.",
      "An IAM user has temporary credentials associated with it, however a role has permanent credentials associated with it.",
    ],
    correctAnswers: [0, 1],
    explanation:
      "IAM users are associated with a single person and have permanent credentials. IAM roles, on the other hand, are designed to be assumable by multiple entities and use temporary credentials for enhanced security. Options C, D, and E misrepresent the functionality of IAM users and roles.",
  },
  {
    id: uuidv5("aws-question-774", uuidv5.URL),
    text: "Which of the following actions may reduce Amazon EBS costs? (Choose TWO)",
    options: [
      "Deleting unused buckets.",
      "Using reservations.",
      "Deleting unnecessary snapshots.",
      "Changing the type of the volume.",
      "Distributing requests to multiple volumes.",
    ],
    correctAnswers: [2, 3],
    explanation:
      "Deleting unnecessary snapshots reduces costs because EBS snapshots consume storage, and changing the volume type to a cheaper option (e.g., from 'Provisioned IOPS' to 'General Purpose') can also lower expenses. Deleting unused buckets (A) applies to S3, not EBS. Reservations (B) are not applicable to EBS, and distributing requests (E) is irrelevant to cost reduction.",
  },
  {
    id: uuidv5("aws-question-775", uuidv5.URL),
    text: "What does Amazon GuardDuty do to protect AWS accounts and workloads?",
    options: [
      "Notifies AWS customers about abuse events once they are reported.",
      "Continuously monitors AWS infrastructure and helps detect threats such as attacker reconnaissance or account compromise.",
      "Helps AWS customers identify the root cause of potential security issues.",
      "Checks security groups for rules that allow unrestricted access to AWS resources.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon GuardDuty is a threat detection service that continuously monitors AWS accounts and workloads for malicious activity, such as attacker reconnaissance or account compromise. It does not handle abuse notifications (A), root cause analysis (C), or specific security group configurations (D).",
  },
  {
    id: uuidv5("aws-question-776", uuidv5.URL),
    text: 'Which database service should you use if your application and data schema require "joins" or complex transactions?',
    options: [
      "Amazon RDS.",
      "AWS Outposts.",
      "Amazon DocumentDB.",
      "Amazon DynamoDB.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon RDS is designed for relational databases that support joins and complex transactions, making it suitable for this scenario. AWS Outposts (B) extends AWS infrastructure on-premises but isn't a database service. DocumentDB (C) is a document database, and DynamoDB (D) is a NoSQL service that doesn’t natively support joins or complex transactions.",
  },
  {
    id: uuidv5("aws-question-777", uuidv5.URL),
    text: "Which of the following makes it easier for you to categorize, manage and filter your resources?",
    options: [
      "Amazon CloudWatch.",
      "AWS Service Catalog.",
      "AWS Directory Service.",
      "AWS Tagging.",
    ],
    correctAnswers: [3],
    explanation:
      "AWS Tagging allows you to categorize resources by assigning metadata (tags) to them, enabling better organization, management, and filtering. CloudWatch (A) is for monitoring, Service Catalog (B) manages IT services, and Directory Service (C) is for managing directories like Microsoft Active Directory.",
  },
  {
    id: uuidv5("aws-question-778", uuidv5.URL),
    text: "What should you consider when storing data in Amazon Glacier?",
    options: [
      "Amazon Glacier only accepts data in a compressed format.",
      "Glacier can only be used to store frequently accessed data and data archives.",
      "Amazon Glacier does not provide immediate retrieval of data.",
      "Attach Glacier to an EC2 Instance to be able to store data.",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon Glacier is designed for long-term data archival with low cost but does not provide immediate data retrieval, as retrieval can take minutes to hours depending on the retrieval type. Option A is false, as Glacier accepts any data format. Option B is incorrect because it’s meant for infrequent access. Option D is irrelevant, as Glacier doesn’t attach directly to EC2.",
  },
  {
    id: uuidv5("aws-question-779", uuidv5.URL),
    text: "Engineers are wasting a lot of time and effort managing batch computing software in traditional data centers. Which of the following AWS services allows them to easily run thousands of batch computing jobs?",
    options: ["Amazon EC2.", "AWS Batch.", "Lambda@Edge.", "AWS Fargate."],
    correctAnswers: [1],
    explanation:
      "AWS Batch is a managed service that enables efficient running of batch computing jobs, eliminating the need to install and manage batch processing software. Amazon EC2 (A) is a compute service but requires manual management. Lambda@Edge (C) is designed for low-latency serverless computing at edge locations, and AWS Fargate (D) is a serverless compute engine for containers, not for batch jobs.",
  },
  {
    id: uuidv5("aws-question-780", uuidv5.URL),
    text: "How can you increase your application’s fault-tolerance while it is being hosted in AWS?",
    options: [
      "Deploy your application across multiple EC2 instances.",
      "Deploy your application across multiple Availability Zones.",
      "Host your application on one powerful EC2 instance type instead of multiple smaller instances.",
      "Deploy the underlying application resources across multiple subnets.",
    ],
    correctAnswers: [1],
    explanation:
      "Deploying your application across multiple Availability Zones (AZs) ensures that if one AZ fails, the others can continue serving the application. Running multiple EC2 instances (A) improves availability but does not protect against AZ failure. Using a single powerful instance (C) creates a single point of failure, and deploying across subnets (D) does not inherently increase fault-tolerance unless combined with multiple AZs.",
  },
  {
    id: uuidv5("aws-question-781", uuidv5.URL),
    text: "Which of the following AWS Support Plans gives you 24/7 access to Cloud Support Engineers via email & phone? (Choose TWO)",
    options: [
      "Developer.",
      "Premium.",
      "Enterprise.",
      "Standard.",
      "Business.",
    ],
    correctAnswers: [2, 4],
    explanation:
      "The 'Enterprise' and 'Business' support plans offer 24/7 access to AWS Cloud Support Engineers via email and phone. The 'Developer' plan (A) only provides business hours support. 'Premium' (B) is not an AWS Support Plan, and the 'Standard' plan (D) does not exist.",
  },
  {
    id: uuidv5("aws-question-782", uuidv5.URL),
    text: "Which of the following requires an access key ID and a secret access key to get long-lived programmatic access to AWS resources? (Choose TWO)",
    options: [
      "IAM group.",
      "IAM user.",
      "IAM role.",
      "AWS account root user.",
      "TAM.",
    ],
    correctAnswers: [1, 3],
    explanation:
      "IAM users and AWS account root users both require an access key ID and a secret access key for long-lived programmatic access. IAM groups (A) do not have credentials; they are used to group users. IAM roles (C) use temporary credentials instead. TAM (E) refers to a Technical Account Manager, not an entity that needs programmatic access.",
  },
  {
    id: uuidv5("aws-question-783", uuidv5.URL),
    text: 'Which of the following is a benefit of the "Loose Coupling" architecture principle?',
    options: [
      "It eliminates the need for change management.",
      "It allows for Cross-Region Replication.",
      "It helps AWS customers reduce Privileged Access to AWS resources.",
      "It allows individual application components or services to be modified without affecting other components.",
    ],
    correctAnswers: [3],
    explanation:
      "Loose Coupling ensures that application components are independent, allowing one component to be modified without affecting others, improving flexibility and scalability. It does not eliminate change management (A), enable Cross-Region Replication (B), or directly reduce privileged access (C).",
  },
  {
    id: uuidv5("aws-question-784", uuidv5.URL),
    text: "A company needs to host a big data application on AWS using EC2 instances. Which of the following AWS Storage services would they choose to automatically get high throughput to multiple compute nodes?",
    options: [
      "Amazon Elastic Block Store.",
      "AWS Storage Gateway.",
      "Amazon Elastic File System.",
      "S3.",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon Elastic File System (EFS) provides scalable, high-throughput storage that can be shared across multiple EC2 instances, making it ideal for big data applications. Amazon Elastic Block Store (A) is attached to individual EC2 instances. AWS Storage Gateway (B) is for hybrid cloud storage, and Amazon S3 (D) is an object storage service, not optimized for compute node access.",
  },
  {
    id: uuidv5("aws-question-785", uuidv5.URL),
    text: "Which of the following Cloud Computing deployment models eliminates the need to run and maintain physical data centers?",
    options: ["On-premises.", "IaaS.", "PaaS.", "Cloud."],
    correctAnswers: [3],
    explanation:
      "The Cloud deployment model allows customers to host applications and services without the need for physical data centers. On-premises (A) relies on local hardware, IaaS (B) and PaaS (C) are service models within the cloud but not deployment models themselves.",
  },
  {
    id: uuidv5("aws-question-786", uuidv5.URL),
    text: "What are the benefits of the AWS Marketplace service? (Choose TWO)",
    options: [
      "Protects customers by performing periodic security checks on listed products.",
      "Per-second billing.",
      "Provides cheaper options for purchasing Amazon EC2 on-demand instances.",
      "Provides flexible pricing options that suit most customer needs.",
      "Provides software solutions that run on AWS or any other Cloud vendor.",
    ],
    correctAnswers: [3, 4],
    explanation:
      "AWS Marketplace offers flexible pricing options and software solutions that can run on AWS or other cloud vendors. However, it does not provide periodic security checks (A), per-second billing (B), or discounts on EC2 on-demand instances (C).",
  },
  {
    id: uuidv5("aws-question-787", uuidv5.URL),
    text: "What is the benefit of Amazon EBS volumes being automatically replicated within the same availability zone?",
    options: ["Elasticity.", "Durability.", "Traceability.", "Accessibility."],
    correctAnswers: [1],
    explanation:
      "Amazon EBS volumes are automatically replicated within the same Availability Zone to prevent data loss due to hardware failure, ensuring durability. Elasticity (A) refers to scaling, Traceability (C) relates to monitoring, and Accessibility (D) is about availability, not replication.",
  },
  {
    id: uuidv5("aws-question-788", uuidv5.URL),
    text: "You are planning to launch an advertising campaign over the coming weekend to promote a new digital product. It is expected that there will be heavy spikes in load during the campaign period, and you can’t afford any downtime. You need additional compute resources to handle the additional load. What is the most cost-effective EC2 instance purchasing option for this job?",
    options: [
      "Savings Plans.",
      "Spot Instances.",
      "Reserved Instances.",
      "On-Demand Instances.",
    ],
    correctAnswers: [3],
    explanation:
      "On-Demand Instances are the most cost-effective and flexible option for handling short-term, unpredictable workloads like traffic spikes during an advertising campaign. Spot Instances (B) are cheaper but may be interrupted, Savings Plans (A) and Reserved Instances (C) require long-term commitments.",
  },
  {
    id: uuidv5("aws-question-789", uuidv5.URL),
    text: "Which of the following AWS services integrates with AWS Shield and AWS Web Application Firewall (AWS WAF) to protect against network and application layer DDoS attacks?",
    options: [
      "Amazon EFS.",
      "AWS Secrets Manager.",
      "AWS Systems Manager.",
      "Amazon CloudFront.",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon CloudFront integrates with AWS Shield and AWS WAF to provide protection against DDoS attacks at the network and application layers. Amazon EFS (A) is a storage service, AWS Secrets Manager (B) handles secrets, and AWS Systems Manager (C) is for operational management.",
  },
  {
    id: uuidv5("aws-question-790", uuidv5.URL),
    text: "Which of the following services is used when encrypting EBS volumes?",
    options: ["AWS WAF.", "AWS KMS.", "Amazon Macie.", "Amazon GuardDuty."],
    correctAnswers: [1],
    explanation:
      "AWS Key Management Service (KMS) is used for managing encryption keys and encrypting EBS volumes. AWS WAF (A) protects web applications, Amazon Macie (C) identifies sensitive data, and Amazon GuardDuty (D) detects threats.",
  },
  {
    id: uuidv5("aws-question-791", uuidv5.URL),
    text: "The AWS account administrator of your company has been fired. With the permissions granted to him as an administrator, he was able to create multiple IAM user accounts and access keys. Additionally, you are not sure whether he has access to the AWS root account or not. What should you do immediately to protect your AWS infrastructure? (Choose TWO)",
    options: [
      "Download all the attached policies in a safe place.",
      "Delete all IAM accounts and recreate them.",
      "Use the CloudWatch service to check all API calls that have been made in your account since the administrator was fired.",
      "Rotate all access keys.",
      "Change the email address and password of the root user account and enable MFA.",
    ],
    correctAnswers: [3, 4],
    explanation:
      "To secure your account, rotate all access keys (D) and change the email address, password, and enable MFA for the root account (E). Deleting all IAM accounts (B) would disrupt operations, and downloading policies (A) is not an immediate security action.",
  },
  {
    id: uuidv5("aws-question-792", uuidv5.URL),
    text: "What is the Amazon ElastiCache service used for? (Choose TWO)",
    options: [
      "Provide an in-memory data storage service.",
      "Reduce delivery costs using Edge Locations.",
      "Improve web application performance.",
      "Provide a Chef-compatible cache to speed up application response.",
      "Distribute requests to multiple instances.",
    ],
    correctAnswers: [0, 2],
    explanation:
      "Amazon ElastiCache provides an in-memory data storage service (A) and improves web application performance (C) by caching frequently accessed data. It does not reduce delivery costs (B), provide a Chef-compatible cache (D), or distribute requests (E).",
  },
  {
    id: uuidv5("aws-question-793", uuidv5.URL),
    text: "The elasticity of the AWS Cloud enables customers to save costs when compared to traditional hosting providers. What can AWS customers do to benefit from the elasticity of the AWS Cloud? (Choose TWO)",
    options: [
      "Deploy your resources across multiple Availability Zones.",
      "Use Amazon EC2 Auto Scaling.",
      "Deploy your resources in another region.",
      "Use Elastic Load Balancing.",
      "Use Serverless Computing whenever possible.",
    ],
    correctAnswers: [1, 4],
    explanation:
      "Using Amazon EC2 Auto Scaling (B) and Serverless Computing (E) allows customers to automatically adjust resources to match demand, reducing costs. Deploying across Availability Zones (A) or regions (C) improves availability but doesn't directly utilize elasticity.",
  },
  {
    id: uuidv5("aws-question-794", uuidv5.URL),
    text: "What are some of the benefits of using On-Demand EC2 instances? (Choose TWO)",
    options: [
      "They provide free capacity when testing your new applications.",
      "They are cheaper than all other EC2 options.",
      "They remove the need to buy 'safety net' capacity to handle periodic traffic spikes.",
      "They only require 1-2 days for setup and configuration.",
      "You can increase or decrease your compute capacity depending on the demands of your application.",
    ],
    correctAnswers: [2, 4],
    explanation:
      "On-Demand EC2 instances allow you to scale capacity up or down based on demand (E) and avoid the need to maintain 'safety net' capacity for traffic spikes (C). They are not free (A), cheaper than all other options (B), or limited to specific setup times (D).",
  },
  {
    id: uuidv5("aws-question-795", uuidv5.URL),
    text: "Each AWS Region is composed of multiple Availability Zones. Which of the following best describes what an Availability Zone is?",
    options: [
      "It is a data center designed to be completely isolated from other data centers in the same region.",
      "It is a collection of data centers distributed in multiple countries.",
      "It is a logically isolated network of the AWS Cloud.",
      "It is a distinct location within a region that is insulated from failures in other Availability Zones.",
    ],
    correctAnswers: [3],
    explanation:
      "An Availability Zone is a distinct location within a region designed to be insulated from failures in other zones (D). It is not an individual data center (A), a multi-country collection (B), or a logically isolated network (C).",
  },
  {
    id: uuidv5("aws-question-796", uuidv5.URL),
    text: "AWS provides disaster recovery capability by allowing customers to deploy infrastructure into multiple [...].",
    options: [
      "Regions.",
      "Transportation devices.",
      "Support plans.",
      "Edge locations.",
    ],
    correctAnswers: [0],
    explanation:
      "Deploying infrastructure across multiple AWS Regions (A) enables disaster recovery by ensuring availability in case of regional failures. Transportation devices (B), support plans (C), and edge locations (D) are unrelated to disaster recovery.",
  },
  {
    id: uuidv5("aws-question-797", uuidv5.URL),
    text: "A financial services company decides to migrate one of its applications to AWS. The application deals with sensitive data, such as credit card information, and must run on a PCI-compliant environment. Which of the following is the company’s responsibility when building a PCI-compliant environment in AWS? (Choose TWO)",
    options: [
      "Start the migration process immediately as all AWS services are PCI compliant.",
      "Ensure that AWS services are configured properly to meet all PCI DSS standards.",
      "Restrict any access to cardholder data and create a policy that addresses information security for all personnel.",
      "Configure the underlying infrastructure of AWS services to meet all PCI DSS requirements.",
      "Ensure that all PCI DSS physical security requirements are met.",
    ],
    correctAnswers: [1, 2],
    explanation:
      "The company must configure AWS services to meet PCI DSS standards (B) and restrict access to cardholder data while creating security policies (C). AWS handles physical security (E), and not all services are PCI compliant by default (A). Customers do not configure underlying AWS infrastructure (D).",
  },
  {
    id: uuidv5("aws-question-798", uuidv5.URL),
    text: "What is the maximum amount of data that can be stored in S3 in a single AWS account?",
    options: [
      "100 PetaBytes.",
      "Virtually unlimited storage.",
      "5 TeraBytes.",
      "10 Exabytes.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon S3 provides virtually unlimited storage for objects. The size limit for a single object is 5 TB (C), but overall storage is not capped (B). Other options like 100 PB (A) or 10 EB (D) are incorrect.",
  },
  {
    id: uuidv5("aws-question-799", uuidv5.URL),
    text: "Which pillar of the AWS Well-Architected Framework provides recommendations to help customers select the right compute resources based on workload requirements?",
    options: [
      "Operational Excellence.",
      "Security.",
      "Performance Efficiency.",
      "Reliability.",
    ],
    correctAnswers: [2],
    explanation:
      "The Performance Efficiency pillar of the AWS Well-Architected Framework focuses on selecting the right compute resources for workloads, optimizing performance and scalability. Operational Excellence (A) addresses operational processes, Security (B) emphasizes data protection, and Reliability (D) focuses on system recovery and resiliency.",
  },
  {
    id: uuidv5("aws-question-800", uuidv5.URL),
    text: "Which AWS service delivers data, videos, applications, and APIs to users globally with low latency and high transfer speeds?",
    options: [
      "Amazon Route 53.",
      "Amazon Connect.",
      "Amazon CloudFront.",
      "Amazon EC2.",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon CloudFront is a content delivery network (CDN) service that provides low latency and high transfer speeds for delivering data, videos, and applications globally. Amazon Route 53 (A) is a DNS service, Amazon Connect (B) is a contact center solution, and Amazon EC2 (D) provides virtual servers.",
  },
  {
    id: uuidv5("aws-question-801", uuidv5.URL),
    text: "Which of the following steps should be taken by a customer when conducting penetration testing on AWS?",
    options: [
      "Conduct penetration testing using Amazon Inspector, and then notify AWS support.",
      "Request and wait for approval from the customer’s internal security team, and then conduct testing.",
      "Notify AWS support, and then conduct testing immediately.",
      "Request and wait for approval from AWS support, and then conduct testing.",
    ],
    correctAnswers: [3],
    explanation:
      "Customers must request and wait for approval from AWS support before conducting penetration testing. AWS has specific guidelines for permitted testing to ensure compliance and avoid service interruptions.",
  },
  {
    id: uuidv5("aws-question-802", uuidv5.URL),
    text: "Which AWS Cost Management tool allows you to view the most granular data about your AWS bill?",
    options: [
      "AWS Cost Explorer.",
      "AWS Budgets.",
      "AWS Cost and Usage report.",
      "AWS Billing dashboard.",
    ],
    correctAnswers: [2],
    explanation:
      "The AWS Cost and Usage Report provides the most granular billing data, including detailed information about usage and costs. AWS Cost Explorer (A) offers visualization tools, AWS Budgets (B) sets cost alerts, and the AWS Billing dashboard (D) provides a summary of billing details.",
  },
  {
    id: uuidv5("aws-question-803", uuidv5.URL),
    text: "Which element of the AWS global infrastructure consists of one or more discrete data centers each with redundant power networking and connectivity which are housed in separate facilities?",
    options: [
      "AWS Regions.",
      "Availability Zones.",
      "Edge locations.",
      "Amazon CloudFront.",
    ],
    correctAnswers: [1],
    explanation:
      "Availability Zones consist of one or more discrete data centers with redundant power, networking, and connectivity, housed in separate facilities. AWS Regions (A) are geographical areas, Edge locations (C) are used for content delivery, and Amazon CloudFront (D) is a CDN service.",
  },
  {
    id: uuidv5("aws-question-804", uuidv5.URL),
    text: "How many Availability Zones should compute resources be provisioned across to achieve high availability?",
    options: [
      "A minimum of one.",
      "A minimum of two.",
      "A minimum of three.",
      "A minimum of four or more.",
    ],
    correctAnswers: [1],
    explanation:
      "Provisioning compute resources across a minimum of two Availability Zones ensures high availability. This configuration provides redundancy and fault tolerance in case one AZ fails.",
  },
  {
    id: uuidv5("aws-question-805", uuidv5.URL),
    text: "The AWS Cloud’s multiple Regions are an example of:",
    options: [
      "Agility.",
      "Global infrastructure.",
      "Elasticity.",
      "Pay-as-you-go pricing.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Regions represent the global infrastructure, enabling customers to deploy resources in multiple geographical locations for redundancy, compliance, and performance.",
  },
  {
    id: uuidv5("aws-question-806", uuidv5.URL),
    text: "Which AWS service can be used to manually launch instances based on resource requirements?",
    options: ["Amazon EBS.", "Amazon S3.", "Amazon EC2.", "Amazon ECS."],
    correctAnswers: [2],
    explanation:
      "Amazon EC2 is the service that allows customers to manually launch virtual servers (instances) based on their resource needs. Amazon EBS (A) provides storage, Amazon S3 (B) is for object storage, and Amazon ECS (D) is used for containerized applications.",
  },
  {
    id: uuidv5("aws-question-807", uuidv5.URL),
    text: "Which is a recommended pattern for designing a highly available architecture on AWS?",
    options: [
      "Ensure that components have low-latency network connectivity.",
      "Run enough Amazon EC2 instances to operate at peak load.",
      "Ensure that the application is designed to accommodate failure of any single component.",
      "Use a monolithic application that handles all operations.",
    ],
    correctAnswers: [2],
    explanation:
      "Designing applications to handle the failure of any single component ensures high availability. This includes redundancy and failover mechanisms, which are crucial in distributed systems.",
  },
  {
    id: uuidv5("aws-question-808", uuidv5.URL),
    text: "Which AWS characteristics make AWS cost effective for a workload with dynamic user demand? (Select TWO)",
    options: [
      "High availability.",
      "Shared security model.",
      "Elasticity.",
      "Pay-as-you-go pricing.",
      "Reliability.",
    ],
    correctAnswers: [2, 3],
    explanation:
      "Elasticity allows AWS to scale resources up or down based on demand, while pay-as-you-go pricing ensures customers only pay for the resources they use, making it cost-effective for workloads with dynamic demand.",
  },
];

const exam9: Question[] = [
  {
    id: uuidv5("aws-question-809", uuidv5.URL),
    text: "An administrator needs to rapidly deploy a popular IT solution and start using it immediately. Where can the administrator find assistance?",
    options: [
      "AWS Well-Architected Framework documentation.",
      "Amazon CloudFront.",
      "AWS CodeCommit.",
      "AWS Quick Start reference deployments.",
    ],
    correctAnswers: [3],
    explanation:
      "AWS Quick Start reference deployments provide pre-configured templates and architectural guidance to help deploy popular IT solutions quickly and easily.",
  },
  {
    id: uuidv5("aws-question-810", uuidv5.URL),
    text: "What is one of the advantages of the Amazon Relational Database Service (Amazon RDS)?",
    options: [
      "It simplifies relational database administration tasks.",
      "It provides 99.99999999999% reliability and durability.",
      "It automatically scales databases for loads.",
      "It enables users to dynamically adjust CPU and RAM resources.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon RDS simplifies tasks such as backups, patch management, and scaling, enabling users to focus on their applications rather than database management. While it is reliable, durability and automatic scaling are not the primary features of RDS.",
  },
  {
    id: uuidv5("aws-question-811", uuidv5.URL),
    text: "Which of the following AWS Cloud services can be used to run a customer-managed relational database?",
    options: [
      "Amazon EC2.",
      "Amazon Route 53.",
      "Amazon ElastiCache.",
      "Amazon DynamoDB.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon EC2 allows customers to run relational database software of their choice and manage it entirely. Other services like ElastiCache and DynamoDB are not intended for customer-managed relational databases.",
  },
  {
    id: uuidv5("aws-question-812", uuidv5.URL),
    text: "A user is planning to launch two additional Amazon EC2 instances to increase availability. Which action should the user take?",
    options: [
      "Launch the instances across multiple Availability Zones in a single AWS Region.",
      "Launch the instances as EC2 Reserved Instances in the same AWS Region and the same Availability Zone.",
      "Launch the instances in multiple AWS Regions but in the same Availability Zone.",
      "Launch the instances as EC2 Spot Instances in the same AWS Region but in different Availability Zones.",
    ],
    correctAnswers: [0],
    explanation:
      "Launching EC2 instances across multiple Availability Zones within the same region improves availability and fault tolerance. This ensures redundancy without needing to manage cross-region replication.",
  },
  {
    id: uuidv5("aws-question-813", uuidv5.URL),
    text: "Which of the following can limit Amazon Simple Storage Service (Amazon S3) bucket access to specific users?",
    options: [
      "A public and private key-pair.",
      "Amazon Inspector.",
      "AWS Identity and Access Management (IAM) policies.",
      "Security Groups.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Identity and Access Management (IAM) policies are used to control access to S3 buckets and objects. Public-private key pairs (A) are used for encryption and authentication, not access control. Security Groups (D) control network-level access, not S3 bucket permissions.",
  },
  {
    id: uuidv5("aws-question-814", uuidv5.URL),
    text: "Which AWS service allows companies to connect an Amazon VPC to an on-premises data center? (Select TWO)",
    options: [
      "AWS VPN.",
      "Amazon Redshift.",
      "API Gateway.",
      "Amazon Direct Connect.",
    ],
    correctAnswers: [0, 3],
    explanation:
      "AWS VPN and Amazon Direct Connect both allow companies to connect an Amazon VPC to their on-premises data centers. AWS VPN establishes secure tunnels, while Direct Connect provides a dedicated network connection.",
  },
  {
    id: uuidv5("aws-question-815", uuidv5.URL),
    text: "Which AWS service or feature can be used to monitor CPU usage?",
    options: [
      "AWS CloudTrail.",
      "VPC Flow Logs.",
      "Amazon CloudWatch.",
      "AWS Config.",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon CloudWatch collects and monitors metrics such as CPU usage, memory, and other operational data for AWS resources.",
  },
  {
    id: uuidv5("aws-question-816", uuidv5.URL),
    text: "Which task is AWS responsible for in the shared responsibility model for security and compliance?",
    options: [
      "Granting access to individuals and services.",
      "Encrypting data in transit.",
      "Updating Amazon EC2 host firmware.",
      "Updating operating systems.",
    ],
    correctAnswers: [2],
    explanation:
      "In the shared responsibility model, AWS is responsible for maintaining and updating the infrastructure, including host firmware. Customers are responsible for securing their own operating systems and data.",
  },
  {
    id: uuidv5("aws-question-817", uuidv5.URL),
    text: "Which of the following security-related actions are available at no cost?",
    options: [
      "Calling AWS Support.",
      "Contacting AWS Professional Services to request a workshop.",
      "Accessing forums, blogs, and whitepapers.",
      "Attending AWS classes at a local university.",
    ],
    correctAnswers: [2],
    explanation:
      "Access to forums, blogs, and AWS whitepapers is free of charge, offering resources to help users enhance security and best practices.",
  },
  {
    id: uuidv5("aws-question-818", uuidv5.URL),
    text: "Which storage service can be used as a low-cost option for hosting static websites?",
    options: [
      "Amazon Glacier.",
      "Amazon DynamoDB.",
      "Amazon Elastic File System (Amazon EFS).",
      "Amazon Simple Storage Service (Amazon S3).",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon S3 is ideal for hosting static websites because it offers low-cost storage, scalability, and the ability to serve content directly via HTTP.",
  },
  {
    id: uuidv5("aws-question-819", uuidv5.URL),
    text: "According to the AWS shared responsibility model what is the sole responsibility of AWS?",
    options: [
      "Application security.",
      "Edge location management.",
      "Patch management.",
      "Client-side data.",
    ],
    correctAnswers: [1],
    explanation:
      "In the shared responsibility model, AWS is responsible for managing the physical infrastructure, including edge locations, regions, and availability zones. Application security, patch management, and client-side data are the customer's responsibilities.",
  },
  {
    id: uuidv5("aws-question-820", uuidv5.URL),
    text: "Which of the following are pillars of the AWS Well-Architected Framework? (Select TWO)",
    options: [
      "Multiple Availability Zones.",
      "Performance efficiency.",
      "Security.",
      "Encryption usage.",
      "High availability.",
    ],
    correctAnswers: [1, 2],
    explanation:
      "The AWS Well-Architected Framework includes Performance Efficiency and Security as two of its five pillars. The other three are Operational Excellence, Reliability, and Cost Optimization.",
  },
  {
    id: uuidv5("aws-question-821", uuidv5.URL),
    text: "Which AWS service identifies security groups that allow unrestricted access to a user’s AWS resources?",
    options: [
      "AWS Trusted Advisor.",
      "Amazon Inspector.",
      "Amazon CloudWatch.",
      "AWS CloudTrail.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Trusted Advisor checks for security vulnerabilities, including overly permissive security group rules, and provides recommendations to improve resource configuration.",
  },
  {
    id: uuidv5("aws-question-822", uuidv5.URL),
    text: "Which design principles for cloud architecture are recommended when re-architecting a large monolithic application? (Select TWO)",
    options: [
      "Use manual monitoring.",
      "Use fixed servers.",
      "Implement loose coupling.",
      "Rely on individual components.",
      "Design for scalability.",
    ],
    correctAnswers: [2, 4],
    explanation:
      "Implementing loose coupling and designing for scalability are key cloud architecture principles, enabling better flexibility, fault tolerance, and performance in distributed applications.",
  },
  {
    id: uuidv5("aws-question-823", uuidv5.URL),
    text: "When architecting cloud applications, which of the following are a key design principle?",
    options: [
      "Use the largest instance possible.",
      "Provision capacity for peak load.",
      "Use the Scrum development process.",
      "Implement elasticity.",
    ],
    correctAnswers: [3],
    explanation:
      "Implementing elasticity ensures that resources automatically scale up or down based on demand, optimizing costs and performance, which is a fundamental design principle for cloud-native applications.",
  },
  {
    id: uuidv5("aws-question-824", uuidv5.URL),
    text: "A company has deployed several relational databases on Amazon EC2 instances. Every month the database software vendor releases new security patches that need to be applied to the databases. What is the MOST efficient way to apply the security patches?",
    options: [
      "Connect to each database instance on a monthly basis and download and apply the necessary security patches from the vendor.",
      "Enable automate patching for the instances using the Amazon RDS console.",
      "In AWS Config. configure a rule for the instances and the required patch level.",
      "Use AWS Systems Manager to automate database patching according to a schedule.",
    ],
    correctAnswers: [3],
    explanation:
      "AWS Systems Manager allows for automation of repetitive tasks like patch management, enabling administrators to schedule and deploy patches efficiently across multiple EC2 instances.",
  },
  {
    id: uuidv5("aws-question-825", uuidv5.URL),
    text: "Which mechanism allows developers to access AWS services from application code?",
    options: [
      "AWS Software Development Kit.",
      "AWS Management Console.",
      "AWS CodePipeline.",
      "AWS Config.",
    ],
    correctAnswers: [0],
    explanation:
      "The AWS Software Development Kit (SDK) provides APIs for developers to integrate AWS services into their application code, supporting various programming languages.",
  },
  {
    id: uuidv5("aws-question-826", uuidv5.URL),
    text: "Which AWS feature will reduce the customer’s total cost of ownership (TCO)?",
    options: [
      "Shared responsibility security model.",
      "Single tenancy.",
      "Elastic computing.",
      "Encryption.",
    ],
    correctAnswers: [2],
    explanation:
      "Elastic computing enables resources to scale up or down based on demand, ensuring that customers only pay for what they use, thus reducing TCO.",
  },
  {
    id: uuidv5("aws-question-827", uuidv5.URL),
    text: "Which of the following is a benefit of using the AWS Cloud?",
    options: [
      "Permissive security removes the administrative burden.",
      "Ability to focus on revenue-generating activities.",
      "Control over cloud network hardware.",
      "Choice of specific cloud hardware vendors.",
    ],
    correctAnswers: [1],
    explanation:
      "By offloading infrastructure management to AWS, businesses can concentrate on activities that directly impact their revenue, such as innovation and product development.",
  },
  {
    id: uuidv5("aws-question-828", uuidv5.URL),
    text: "Which of the following are categories of AWS Trusted Advisor? (Select TWO)",
    options: [
      "Fault Tolerance.",
      "Instance Usage.",
      "Infrastructure.",
      "Performance.",
      "Storage Capacity.",
    ],
    correctAnswers: [0, 3],
    explanation:
      "AWS Trusted Advisor provides insights into areas like Fault Tolerance and Performance to optimize the usage of AWS resources and improve the application's reliability.",
  },
  {
    id: uuidv5("aws-question-829", uuidv5.URL),
    text: "What is Amazon CloudWatch?",
    options: [
      "A code repository with customizable build and team commit features.",
      "A metrics repository with customizable notification thresholds and channels.",
      "A security configuration repository with threat analytics.",
      "A rule repository of a web application firewall with automated vulnerability prevention features.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon CloudWatch is a monitoring service for AWS resources and applications. It allows users to collect and track metrics, set alarms, and automatically react to changes in AWS environments.",
  },
  {
    id: uuidv5("aws-question-830", uuidv5.URL),
    text: "Under the AWS shared responsibility model, which of the following activities are the customer’s responsibility? (Select TWO)",
    options: [
      "Patching operating system components for Amazon Relational Database Server (Amazon RDS).",
      "Encrypting data on the client-side.",
      "Training the data center staff.",
      "Configuring Network Access Control Lists (ACL).",
      "Maintaining environmental controls within a data center.",
    ],
    correctAnswers: [1, 3],
    explanation:
      "Under the shared responsibility model, customers are responsible for data encryption and access management (e.g., configuring Network ACLs), while AWS manages the underlying infrastructure.",
  },
  {
    id: uuidv5("aws-question-831", uuidv5.URL),
    text: "Under the shared responsibility model, which of the following is a shared control between a customer and AWS?",
    options: [
      "Physical controls.",
      "Patch management.",
      "Zone security.",
      "Data center auditing.",
    ],
    correctAnswers: [1],
    explanation:
      "Patch management is a shared responsibility. AWS manages patches for the infrastructure, while customers handle patches for their operating systems and applications.",
  },
  {
    id: uuidv5("aws-question-832", uuidv5.URL),
    text: "Which AWS service is used to pay AWS bills, and monitor usage and budget costs?",
    options: [
      "AWS Billing and Cost Management.",
      "Consolidated billing.",
      "Amazon CloudWatch.",
      "Amazon QuickSight.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Billing and Cost Management provides tools to view AWS bills, monitor usage, and create budgets to manage costs.",
  },
  {
    id: uuidv5("aws-question-833", uuidv5.URL),
    text: "How do customers benefit from Amazon’s massive economies of scale?",
    options: [
      "Periodic price reductions as the result of Amazon’s operational efficiencies.",
      "New Amazon EC2 instance types providing the latest hardware.",
      "The ability to scale up and down when needed.",
      "Increased reliability in the underlying hardware of Amazon EC2 instances.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon passes on savings to customers through periodic price reductions, leveraging its massive economies of scale to operate efficiently.",
  },
  {
    id: uuidv5("aws-question-834", uuidv5.URL),
    text: "Which AWS feature allows a company to take advantage of usage tiers for services across multiple member accounts?",
    options: [
      "Service control policies (SCPs).",
      "Consolidated billing.",
      "All Upfront Reserved Instances.",
      "AWS Cost Explorer.",
    ],
    correctAnswers: [1],
    explanation:
      "Consolidated billing allows companies to combine usage across multiple accounts and take advantage of aggregated usage tiers for services.",
  },
  {
    id: uuidv5("aws-question-835", uuidv5.URL),
    text: "Which AWS services provide a way to extend an on-premises architecture to the AWS cloud? (Select TWO)",
    options: [
      "Amazon EBS.",
      "Amazon Connect.",
      "AWS Storage Gateway.",
      "Amazon CloudFront.",
      "AWS Direct Connect.",
    ],
    correctAnswers: [2, 4],
    explanation:
      "AWS Storage Gateway and AWS Direct Connect provide ways to extend on-premises infrastructure to the AWS Cloud, with Storage Gateway offering hybrid cloud storage and Direct Connect offering dedicated network connections.",
  },
  {
    id: uuidv5("aws-question-836", uuidv5.URL),
    text: "Which of the following services will automatically scale with an expected increase in web traffic?",
    options: [
      "AWS CodePipeline.",
      "Elastic Load Balancing.",
      "Amazon EBS.",
      "AWS Direct Connect.",
    ],
    correctAnswers: [1],
    explanation:
      "Elastic Load Balancing automatically scales to distribute incoming web traffic to multiple instances based on demand, ensuring high availability and fault tolerance.",
  },
  {
    id: uuidv5("aws-question-837", uuidv5.URL),
    text: "Which service provides a virtually unlimited amount of online highly durable object storage?",
    options: [
      "Amazon Redshift.",
      "Amazon Elastic File System (Amazon EFS).",
      "Amazon Elastic Container Service (Amazon ECS).",
      "Amazon S3.",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon S3 (Simple Storage Service) offers virtually unlimited storage with high durability, making it suitable for storing large amounts of data in the cloud.",
  },
  {
    id: uuidv5("aws-question-838", uuidv5.URL),
    text: "Which AWS feature should a customer leverage to achieve high availability of an application?",
    options: [
      "AWS Direct Connect.",
      "Availability Zones.",
      "Data centers.",
      "Amazon Virtual Private Cloud (Amazon VPC).",
    ],
    correctAnswers: [1],
    explanation:
      "Availability Zones are designed to provide high availability by isolating applications across different physical locations, ensuring applications remain operational even during failures in one zone.",
  },
  {
    id: uuidv5("aws-question-839", uuidv5.URL),
    text: "Which AWS service or feature can enhance network security by blocking requests from a particular network for a web application on AWS? (Select TWO)",
    options: [
      "AWS WAF.",
      "AWS Trusted Advisor.",
      "AWS Direct Connect.",
      "AWS Organizations.",
      "Network ACLs.",
    ],
    correctAnswers: [0, 4],
    explanation:
      "AWS WAF (Web Application Firewall) can block requests from specific IPs or networks, and Network ACLs (Access Control Lists) can provide a layer of security by controlling inbound and outbound traffic at the subnet level.",
  },
  {
    id: uuidv5("aws-question-840", uuidv5.URL),
    text: "Which of the following is a cloud architectural design principle?",
    options: [
      "Scale up not out.",
      "Loosely couple components.",
      "Build monolithic systems.",
      "Use commercial database software.",
    ],
    correctAnswers: [1],
    explanation:
      "Loosely coupling components allows each component to be independent, enhancing flexibility, scalability, and fault tolerance in cloud architectures.",
  },
  {
    id: uuidv5("aws-question-841", uuidv5.URL),
    text: "Which service enables risk auditing by continuously monitoring and logging account activity, including user actions in the AWS Management Console and AWS SDKs?",
    options: [
      "Amazon CloudWatch.",
      "AWS CloudTrail.",
      "AWS Config.",
      "AWS Health.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS CloudTrail records user activity and API usage, enabling auditing and tracking of events across AWS services.",
  },
  {
    id: uuidv5("aws-question-842", uuidv5.URL),
    text: "Where can AWS compliance and certification reports be downloaded?",
    options: [
      "AWS Artifact.",
      "AWS Concierge.",
      "AWS Certificate Manager.",
      "AWS Trusted Advisor.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Artifact is the service that provides access to AWS compliance and certification reports, including SOC reports, ISO certifications, and other industry standards.",
  },
  {
    id: uuidv5("aws-question-843", uuidv5.URL),
    text: "The financial benefits of using AWS are: (Select TWO)",
    options: [
      "Reduced Total Cost of Ownership (TCO).",
      "Increased capital expenditure (capex).",
      "Reduced operational expenditure (opex).",
      "Deferred payment plans for startups.",
      "Business credit lines for startups.",
    ],
    correctAnswers: [0, 2],
    explanation:
      "AWS reduces TCO by eliminating the need for on-premises hardware and associated maintenance costs, while reducing opex with pay-as-you-go pricing and elastic scalability.",
  },
  {
    id: uuidv5("aws-question-844", uuidv5.URL),
    text: "Which AWS service can serve a static website?",
    options: [
      "Amazon S3.",
      "Amazon Route 53.",
      "Amazon QuickSight.",
      "AWS X-Ray.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon S3 (Simple Storage Service) can be used to host static websites by enabling static website hosting in the S3 bucket settings.",
  },
  {
    id: uuidv5("aws-question-845", uuidv5.URL),
    text: "What are the benefits of using the AWS Cloud for companies with customers in many countries around the world? (Select TWO)",
    options: [
      "Companies can deploy applications in multiple AWS Regions to reduce latency.",
      "Amazon Translate automatically translates third-party website interfaces into multiple languages.",
      "Amazon CloudFront has multiple edge locations around the world to reduce latency.",
      "Amazon Comprehend allows users to build applications that can respond to user requests in many languages.",
      "Elastic Load Balancing can distribute application web traffic to multiple AWS Regions around the world which reduces latency.",
    ],
    correctAnswers: [0, 2],
    explanation:
      "Deploying in multiple AWS Regions and using Amazon CloudFront with its edge locations help reduce latency for users globally by delivering content from locations closer to them.",
  },
  {
    id: uuidv5("aws-question-846", uuidv5.URL),
    text: "Which of the following are main components of the AWS global infrastructure? (Select TWO)",
    options: [
      "Resource groups.",
      "Availability Zones.",
      "Security groups.",
      "Regions.",
      "Amazon Machine Images (AMIs).",
    ],
    correctAnswers: [1, 3],
    explanation:
      "AWS global infrastructure consists of Regions, which are geographical locations, and Availability Zones, which are isolated data centers within those regions.",
  },
  {
    id: uuidv5("aws-question-847", uuidv5.URL),
    text: "What is the AWS customer responsible for according to the AWS shared responsibility model?",
    options: [
      "Physical access controls.",
      "Data encryption.",
      "Secure disposal of storage devices.",
      "Environmental risk management.",
    ],
    correctAnswers: [1],
    explanation:
      "In the shared responsibility model, customers are responsible for data encryption, both at rest and in transit, within their environment.",
  },
  {
    id: uuidv5("aws-question-848", uuidv5.URL),
    text: "If each department within a company has its own AWS account, what is one way to enable consolidated billing?",
    options: [
      "Use AWS Budgets on each account to pay only to budget.",
      "Contact AWS Support for a monthly bill.",
      "Create an AWS Organization from the payer account and invite the other accounts to join.",
      "Put all invoices into one Amazon Simple Storage Service (Amazon S3) bucket, load data into Amazon Redshift, and then run a billing report.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Organizations allows you to consolidate billing by linking multiple AWS accounts into one master payer account, enabling centralized billing.",
  },
  {
    id: uuidv5("aws-question-849", uuidv5.URL),
    text: "What costs are included when comparing AWS Total Cost of Ownership (TCO) with on-premises TCO?",
    options: [
      "Project management.",
      "Antivirus software licensing.",
      "Data center security.",
      "Software development.",
    ],
    correctAnswers: [2],
    explanation:
      "When comparing AWS TCO with on-premises TCO, data center security is included in the cost, as it encompasses the physical security of the infrastructure in a data center.",
  },
  {
    id: uuidv5("aws-question-850", uuidv5.URL),
    text: "What is the benefit of using AWS managed services, such as Amazon ElastiCache and Amazon Relational Database Service (Amazon RDS)?",
    options: [
      "They require the customer to monitor and replace failing instances.",
      "They have better performance than customer-managed services.",
      "They simplify patching and updating underlying OSs.",
      "They do not require the customer to optimize instance type or size selections.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Managed Services simplify patching and updating underlying operating systems, ensuring that critical security patches and updates are applied consistently.",
  },
  {
    id: uuidv5("aws-question-851", uuidv5.URL),
    text: "Which services can be used across hybrid AWS Cloud architectures? (Select TWO)",
    options: [
      "Amazon Route 53.",
      "Virtual Private Gateway.",
      "Classic Load Balancer.",
      "Auto Scaling.",
      "Amazon CloudWatch default metrics.",
    ],
    correctAnswers: [0, 1],
    explanation:
      "Amazon Route 53 can be used for DNS management in hybrid architectures, and Virtual Private Gateway allows secure connectivity between an on-premises network and AWS.",
  },
  {
    id: uuidv5("aws-question-852", uuidv5.URL),
    text: "Which statement best describes Elastic Load Balancing?",
    options: [
      "It translates a domain name into an IP address using DNC.",
      "It distributes incoming application traffic across one or more Amazon EC2 instances.",
      "It collects metrics on connected Amazon EC2 instances.",
      "It automatically adjusts the number of Amazon EC2 instances to support incoming traffic.",
    ],
    correctAnswers: [1],
    explanation:
      "Elastic Load Balancing (ELB) distributes incoming traffic across multiple Amazon EC2 instances to ensure high availability and fault tolerance.",
  },
  {
    id: uuidv5("aws-question-853", uuidv5.URL),
    text: "Which of the following is a fast and reliable NoSQL database service?",
    options: [
      "Amazon Redshift.",
      "Amazon RDS.",
      "Amazon DynamoDB.",
      "Amazon S3.",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon DynamoDB is a fast, fully managed NoSQL database service designed for applications that require low-latency data access at any scale.",
  },
  {
    id: uuidv5("aws-question-854", uuidv5.URL),
    text: "Which AWS service would you use to obtain compliance reports and certificates?",
    options: [
      "AWS Artifact.",
      "AWS Lambda.",
      "Amazon Inspector.",
      "AWS Certificate Manager.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Artifact is a service that provides on-demand access to AWS compliance reports and certificates.",
  },
  {
    id: uuidv5("aws-question-855", uuidv5.URL),
    text: "Which AWS services are defined as global instead of regional? (Select TWO)",
    options: [
      "Amazon Route 53.",
      "Amazon EC2.",
      "Amazon S3.",
      "Amazon CloudFront.",
      "Amazon DynamoDB.",
    ],
    correctAnswers: [0, 3],
    explanation:
      "Amazon Route 53 and Amazon CloudFront are global services, meaning they are available across all regions for DNS and content delivery, respectively.",
  },
  {
    id: uuidv5("aws-question-856", uuidv5.URL),
    text: "How would an AWS customer easily apply common access controls to a large set of users?",
    options: [
      "Apply an IAM policy to an IAM group.",
      "Apply an IAM policy to an IAM role.",
      "Apply the same IAM policy to all IAM users with access to the same workload.",
      "Apply an IAM policy to an Amazon Cognito user pool.",
    ],
    correctAnswers: [0],
    explanation:
      "By applying an IAM policy to an IAM group, an AWS customer can efficiently manage access controls for multiple users belonging to the same group.",
  },
  {
    id: uuidv5("aws-question-857", uuidv5.URL),
    text: "Which of the following is an important architectural design principle when designing cloud applications?",
    options: [
      "Use multiple Availability Zones.",
      "Use tightly coupled components.",
      "Use open source software.",
      "Provision extra capacity.",
    ],
    correctAnswers: [0],
    explanation:
      "Using multiple Availability Zones is a key design principle to ensure high availability and fault tolerance in cloud applications.",
  },
  {
    id: uuidv5("aws-question-858", uuidv5.URL),
    text: "Which service allows a company with multiple AWS accounts to combine its usage to obtain volume discounts?",
    options: [
      "AWS Server Migration Service.",
      "AWS Organizations.",
      "AWS Budgets.",
      "AWS Trusted Advisor.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Organizations enables companies with multiple AWS accounts to combine their usage for volume discounts and centralized billing management.",
  },
];

const exam10: Question[] = [
  {
    id: uuidv5("aws-question-859", uuidv5.URL),
    text: "An administrator needs to rapidly deploy a popular IT solution and start using it immediately. Where can the administrator find assistance?",
    options: [
      "AWS Well-Architected Framework documentation.",
      "Amazon CloudFront.",
      "AWS CodeCommit.",
      "AWS Quick Start reference deployments.",
    ],
    correctAnswers: [3],
    explanation:
      "AWS Quick Start reference deployments help administrators deploy popular IT solutions quickly by providing pre-configured templates.",
  },
  {
    id: uuidv5("aws-question-860", uuidv5.URL),
    text: "What is one of the advantages of the Amazon Relational Database Service (Amazon RDS)?",
    options: [
      "It simplifies relational database administration tasks.",
      "It provides 99.99999999999% reliability and durability.",
      "It automatically scales databases for loads.",
      "It enables users to dynamically adjust CPU and RAM resources.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon RDS simplifies relational database administration tasks such as patching, backups, and scaling, allowing users to focus on applications.",
  },
  {
    id: uuidv5("aws-question-861", uuidv5.URL),
    text: "Which of the following AWS Cloud services can be used to run a customer-managed relational database?",
    options: [
      "Amazon EC2.",
      "Amazon Route 53.",
      "Amazon ElastiCache.",
      "Amazon DynamoDB.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon EC2 allows customers to run their own relational database software and manage it, including installation, patching, and scaling.",
  },
  {
    id: uuidv5("aws-question-862", uuidv5.URL),
    text: "A user is planning to launch two additional Amazon EC2 instances to increase availability. Which action should the user take?",
    options: [
      "Launch the instances across multiple Availability Zones in a single AWS Region.",
      "Launch the instances as EC2 Reserved Instances in the same AWS Region and the same Availability Zone.",
      "Launch the instances in multiple AWS Regions but in the same Availability Zone.",
      "Launch the instances as EC2 Spot Instances in the same AWS Region but in different Availability Zones.",
    ],
    correctAnswers: [0],
    explanation:
      "Launching instances across multiple Availability Zones in a single AWS Region ensures high availability and fault tolerance.",
  },
  {
    id: uuidv5("aws-question-863", uuidv5.URL),
    text: "Which of the following can limit Amazon Simple Storage Service (Amazon S3) bucket access to specific users?",
    options: [
      "A public and private key-pair.",
      "Amazon Inspector.",
      "AWS Identity and Access Management (IAM) policies.",
      "Security Groups.",
    ],
    correctAnswers: [2],
    explanation:
      "IAM policies provide fine-grained control over access to Amazon S3 buckets, ensuring that only authorized users can access specific resources.",
  },
  {
    id: uuidv5("aws-question-864", uuidv5.URL),
    text: "Which AWS service allows companies to connect an Amazon VPC to an on-premises data center? (Select TWO)",
    options: [
      "AWS VPN.",
      "Amazon Redshift.",
      "API Gateway.",
      "Amazon Direct Connect.",
    ],
    correctAnswers: [0, 3],
    explanation:
      "AWS VPN and AWS Direct Connect are both services that allow secure connections between an Amazon VPC and an on-premises data center.",
  },
  {
    id: uuidv5("aws-question-865", uuidv5.URL),
    text: "Which AWS service or feature can be used to monitor CPU usage?",
    options: [
      "AWS CloudTrail.",
      "VPC Flow Logs.",
      "Amazon CloudWatch.",
      "AWS Config.",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon CloudWatch provides metrics to monitor CPU usage, memory, disk activity, and other system-level performance indicators.",
  },
  {
    id: uuidv5("aws-question-866", uuidv5.URL),
    text: "Which task is AWS responsible for in the shared responsibility model for security and compliance?",
    options: [
      "Granting access to individuals and services.",
      "Encrypting data in transit.",
      "Updating Amazon EC2 host firmware.",
      "Updating operating systems.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS is responsible for updating Amazon EC2 host firmware as part of maintaining the security and operation of the cloud infrastructure.",
  },
  {
    id: uuidv5("aws-question-867", uuidv5.URL),
    text: "Which of the following security-related actions are available at no cost?",
    options: [
      "Calling AWS Support.",
      "Contacting AWS Professional Services to request a workshop.",
      "Accessing forums, blogs, and whitepapers.",
      "Attending AWS classes at a local university.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS provides free access to forums, blogs, and whitepapers to help users understand and implement security best practices.",
  },
  {
    id: uuidv5("aws-question-868", uuidv5.URL),
    text: "Which storage service can be used as a low-cost option for hosting static websites?",
    options: [
      "Amazon Glacier.",
      "Amazon DynamoDB.",
      "Amazon Elastic File System (Amazon EFS).",
      "Amazon Simple Storage Service (Amazon S3).",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon S3 offers a cost-effective solution for hosting static websites by storing and serving static content like HTML, CSS, and JavaScript.",
  },
  {
    id: uuidv5("aws-question-869", uuidv5.URL),
    text: "According to the AWS shared responsibility model what is the sole responsibility of AWS?",
    options: [
      "Application security.",
      "Edge location management.",
      "Patch management.",
      "Client-side data.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS is responsible for the management of edge locations as part of its global infrastructure.",
  },
  {
    id: uuidv5("aws-question-870", uuidv5.URL),
    text: "Which of the following are pillars of the AWS Well-Architected Framework? (Select TWO)",
    options: [
      "Multiple Availability Zones.",
      "Performance efficiency.",
      "Security.",
      "Encryption usage.",
      "High availability.",
    ],
    correctAnswers: [1, 2],
    explanation:
      "Performance efficiency and security are two of the five pillars of the AWS Well-Architected Framework.",
  },
  {
    id: uuidv5("aws-question-871", uuidv5.URL),
    text: "Which AWS service identifies security groups that allow unrestricted access to a user’s AWS resources?",
    options: [
      "AWS Trusted Advisor.",
      "Amazon Inspector.",
      "Amazon CloudWatch.",
      "AWS CloudTrail.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Trusted Advisor checks security groups for overly permissive rules, such as unrestricted access.",
  },
  {
    id: uuidv5("aws-question-872", uuidv5.URL),
    text: "Which design principles for cloud architecture are recommended when re-architecting a large monolithic application? (Select TWO)",
    options: [
      "Use manual monitoring.",
      "Use fixed servers.",
      "Implement loose coupling.",
      "Rely on individual components.",
      "Design for scalability.",
    ],
    correctAnswers: [2, 4],
    explanation:
      "Implementing loose coupling and designing for scalability are key principles to improve flexibility and efficiency when re-architecting applications.",
  },
  {
    id: uuidv5("aws-question-873", uuidv5.URL),
    text: "When architecting cloud applications, which of the following are a key design principle?",
    options: [
      "Use the largest instance possible.",
      "Provision capacity for peak load.",
      "Use the Scrum development process.",
      "Implement elasticity.",
    ],
    correctAnswers: [3],
    explanation:
      "Elasticity allows applications to scale resources dynamically based on demand, ensuring cost efficiency and performance.",
  },
  {
    id: uuidv5("aws-question-874", uuidv5.URL),
    text: "A company has deployed several relational databases on Amazon EC2 instances. Every month the database software vendor releases new security patches that need to be applied to the databases. What is the MOST efficient way to apply the security patches?",
    options: [
      "Connect to each database instance on a monthly basis and download and apply the necessary security patches from the vendor.",
      "Enable automate patching for the instances using the Amazon RDS console.",
      "In AWS Config, configure a rule for the instances and the required patch level.",
      "Use AWS Systems Manager to automate database patching according to a schedule.",
    ],
    correctAnswers: [3],
    explanation:
      "AWS Systems Manager provides automation capabilities to manage patches across multiple EC2 instances, ensuring efficiency and reducing manual effort.",
  },
  {
    id: uuidv5("aws-question-875", uuidv5.URL),
    text: "Which mechanism allows developers to access AWS services from application code?",
    options: [
      "AWS Software Development Kit.",
      "AWS Management Console.",
      "AWS CodePipeline.",
      "AWS Config.",
    ],
    correctAnswers: [0],
    explanation:
      "The AWS SDK provides libraries for various programming languages, enabling developers to integrate AWS services directly into their applications.",
  },
  {
    id: uuidv5("aws-question-876", uuidv5.URL),
    text: "Which AWS feature will reduce the customer’s total cost of ownership (TCO)?",
    options: [
      "Shared responsibility security model.",
      "Single tenancy.",
      "Elastic computing.",
      "Encryption.",
    ],
    correctAnswers: [2],
    explanation:
      "Elastic computing allows users to scale resources dynamically, optimizing usage and reducing costs by only paying for what is used.",
  },
  {
    id: uuidv5("aws-question-877", uuidv5.URL),
    text: "Which of the following is a benefit of using the AWS Cloud?",
    options: [
      "Permissive security removes the administrative burden.",
      "Ability to focus on revenue-generating activities.",
      "Control over cloud network hardware.",
      "Choice of specific cloud hardware vendors.",
    ],
    correctAnswers: [1],
    explanation:
      "Using AWS Cloud allows businesses to focus on innovation and revenue-generating activities by offloading operational tasks to AWS.",
  },
  {
    id: uuidv5("aws-question-878", uuidv5.URL),
    text: "Which of the following are categories of AWS Trusted Advisor? (Select TWO)",
    options: [
      "Fault Tolerance.",
      "Instance Usage.",
      "Infrastructure.",
      "Performance.",
      "Storage Capacity.",
    ],
    correctAnswers: [0, 3],
    explanation:
      "AWS Trusted Advisor provides insights into key categories such as Fault Tolerance and Performance, helping customers optimize and secure their AWS environment.",
  },
  {
    id: uuidv5("aws-question-879", uuidv5.URL),
    text: "Which AWS feature allows a company to take advantage of usage tiers for services across multiple member accounts?",
    options: [
      "Service control policies (SCPs).",
      "Consolidated billing.",
      "All Upfront Reserved Instances.",
      "AWS Cost Explorer.",
    ],
    correctAnswers: [1],
    explanation:
      "Consolidated billing allows companies to combine usage from multiple accounts to benefit from volume pricing tiers across AWS services.",
  },
  {
    id: uuidv5("aws-question-880", uuidv5.URL),
    text: "Which AWS services provide a way to extend an on-premises architecture to the AWS Cloud? (Select TWO)",
    options: [
      "Amazon EBS.",
      "Amazon Connect.",
      "AWS Storage Gateway.",
      "Amazon CloudFront.",
      "AWS Direct Connect.",
    ],
    correctAnswers: [2, 4],
    explanation:
      "AWS Storage Gateway integrates on-premises environments with AWS storage, while AWS Direct Connect provides a dedicated network connection between on-premises data centers and AWS.",
  },
  {
    id: uuidv5("aws-question-881", uuidv5.URL),
    text: "Which of the following services will automatically scale with an expected increase in web traffic?",
    options: [
      "AWS CodePipeline.",
      "Elastic Load Balancing.",
      "Amazon EBS.",
      "AWS Direct Connect.",
    ],
    correctAnswers: [1],
    explanation:
      "Elastic Load Balancing distributes incoming traffic across multiple targets, scaling automatically to handle increased web traffic.",
  },
  {
    id: uuidv5("aws-question-882", uuidv5.URL),
    text: "Which service provides a virtually unlimited amount of online highly durable object storage?",
    options: [
      "Amazon Redshift.",
      "Amazon Elastic File System (Amazon EFS).",
      "Amazon Elastic Container Service (Amazon ECS).",
      "Amazon S3.",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon S3 offers virtually unlimited storage with high durability and availability, making it ideal for storing a wide range of data types.",
  },
  {
    id: uuidv5("aws-question-883", uuidv5.URL),
    text: "Which AWS feature should a customer leverage to achieve high availability of an application?",
    options: [
      "AWS Direct Connect.",
      "Availability Zones.",
      "Data centers.",
      "Amazon Virtual Private Cloud (Amazon VPC).",
    ],
    correctAnswers: [1],
    explanation:
      "Availability Zones provide isolated locations within a region to deploy resources, ensuring high availability by minimizing the impact of failures.",
  },
  {
    id: uuidv5("aws-question-884", uuidv5.URL),
    text: "Which AWS service or feature can enhance network security by blocking requests from a particular network for a web application on AWS? (Select TWO)",
    options: [
      "AWS WAF.",
      "AWS Trusted Advisor.",
      "AWS Direct Connect.",
      "AWS Organizations.",
      "Network ACLs.",
    ],
    correctAnswers: [0, 4],
    explanation:
      "AWS WAF (Web Application Firewall) allows users to block specific web requests based on conditions, while Network ACLs (Access Control Lists) provide control over inbound and outbound traffic for subnets.",
  },
  {
    id: uuidv5("aws-question-885", uuidv5.URL),
    text: "Which of the following is a cloud architectural design principle?",
    options: [
      "Scale up not out.",
      "Loosely couple components.",
      "Build monolithic systems.",
      "Use commercial database software.",
    ],
    correctAnswers: [1],
    explanation:
      "Loosely coupling components ensures resilience, scalability, and flexibility in cloud applications, which aligns with best practices in cloud architecture.",
  },
  {
    id: uuidv5("aws-question-886", uuidv5.URL),
    text: "Which service enables risk auditing by continuously monitoring and logging account activity, including user actions in the AWS Management Console and AWS SDKs?",
    options: [
      "Amazon CloudWatch.",
      "AWS CloudTrail.",
      "AWS Config.",
      "AWS Health.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS CloudTrail logs all API calls and account activity, providing a comprehensive audit trail to monitor and track changes for compliance purposes.",
  },
  {
    id: uuidv5("aws-question-887", uuidv5.URL),
    text: "Where can AWS compliance and certification reports be downloaded?",
    options: [
      "AWS Artifact.",
      "AWS Concierge.",
      "AWS Certificate Manager.",
      "AWS Trusted Advisor.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Artifact provides on-demand access to AWS compliance reports and certification documentation.",
  },
  {
    id: uuidv5("aws-question-888", uuidv5.URL),
    text: "The financial benefits of using AWS are: (Select TWO)",
    options: [
      "Reduced Total Cost of Ownership (TCO).",
      "Increased capital expenditure (capex).",
      "Reduced operational expenditure (opex).",
      "Deferred payment plans for startups.",
      "Business credit lines for startups.",
    ],
    correctAnswers: [0, 2],
    explanation:
      "Using AWS reduces both Total Cost of Ownership (TCO) by eliminating upfront infrastructure investments and operational expenditure (opex) by enabling pay-as-you-go models.",
  },
  {
    id: uuidv5("aws-question-889", uuidv5.URL),
    text: "Which AWS service can serve a static website?",
    options: [
      "Amazon S3.",
      "Amazon Route 53.",
      "Amazon QuickSight.",
      "AWS X-Ray.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon S3 is designed to store and retrieve any amount of data, making it ideal for hosting static websites by serving HTML, CSS, and JavaScript files.",
  },
  {
    id: uuidv5("aws-question-890", uuidv5.URL),
    text: "What are the benefits of using the AWS Cloud for companies with customers in many countries around the world? (Select TWO)",
    options: [
      "Companies can deploy applications in multiple AWS Regions to reduce latency.",
      "Amazon Translate automatically translates third-party website interfaces into multiple languages.",
      "Amazon CloudFront has multiple edge locations around the world to reduce latency.",
      "Amazon Comprehend allows users to build applications that can respond to user requests in many languages.",
      "Elastic Load Balancing can distribute application web traffic to multiple AWS Regions around the world which reduces latency.",
    ],
    correctAnswers: [0, 2],
    explanation:
      "Deploying applications in multiple AWS Regions reduces latency for global users, and Amazon CloudFront's global network of edge locations ensures fast delivery of content.",
  },
  {
    id: uuidv5("aws-question-891", uuidv5.URL),
    text: "Which of the following are main components of the AWS global infrastructure? (Select TWO)",
    options: [
      "Resource groups.",
      "Availability Zones.",
      "Security groups.",
      "Regions.",
      "Amazon Machine Images (AMIS).",
    ],
    correctAnswers: [1, 3],
    explanation:
      "Regions are geographically isolated areas where AWS operates, and each Region contains multiple Availability Zones to provide redundancy and fault tolerance.",
  },
  {
    id: uuidv5("aws-question-892", uuidv5.URL),
    text: "What is the AWS customer responsible for according to the AWS shared responsibility model?",
    options: [
      "Physical access controls.",
      "Data encryption.",
      "Secure disposal of storage devices.",
      "Environmental risk management.",
    ],
    correctAnswers: [1],
    explanation:
      "Under the AWS shared responsibility model, customers are responsible for securing their data, including encryption and access management, while AWS manages the infrastructure's physical and environmental security.",
  },
  {
    id: uuidv5("aws-question-893", uuidv5.URL),
    text: "If each department within a company has its own AWS account, what is one way to enable consolidated billing?",
    options: [
      "Use AWS Budgets on each account to pay only to budget.",
      "Contact AWS Support for a monthly bill.",
      "Create an AWS Organization from the payer account and invite the other accounts to join.",
      "Put all invoices into one Amazon Simple Storage Service (Amazon S3) bucket, load data into Amazon Redshift, and then run a billing report.",
    ],
    correctAnswers: [2],
    explanation:
      "Creating an AWS Organization enables consolidated billing, allowing the payer account to manage and combine costs for all member accounts for better financial control.",
  },
  {
    id: uuidv5("aws-question-894", uuidv5.URL),
    text: "What costs are included when comparing AWS Total Cost of Ownership (TCO) with on-premises TCO?",
    options: [
      "Project management.",
      "Antivirus software licensing.",
      "Data center security.",
      "Software development.",
    ],
    correctAnswers: [2],
    explanation:
      "When calculating TCO, AWS includes costs such as data center security, which are often overlooked in on-premises calculations but are covered by AWS as part of its shared responsibility model.",
  },
  {
    id: uuidv5("aws-question-895", uuidv5.URL),
    text: "What is the benefit of using AWS managed services, such as Amazon ElastiCache and Amazon Relational Database Service (Amazon RDS)?",
    options: [
      "They require the customer to monitor and replace failing instances.",
      "They have better performance than customer-managed services.",
      "They simplify patching and updating underlying OSs.",
      "They do not require the customer to optimize instance type or size selections.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Managed Services handle tasks like patching and updating the operating systems, ensuring resources remain secure and minimizing operational overhead for customers.",
  },
  {
    id: uuidv5("aws-question-896", uuidv5.URL),
    text: "Which services can be used across hybrid AWS Cloud architectures? (Select TWO)",
    options: [
      "Amazon Route 53.",
      "Virtual Private Gateway.",
      "Classic Load Balancer.",
      "Auto Scaling.",
      "Amazon CloudWatch default metrics.",
    ],
    correctAnswers: [0, 1],
    explanation:
      "Amazon Route 53 provides DNS services that can route traffic between on-premises and AWS environments, and Virtual Private Gateway enables secure connections for hybrid architectures.",
  },
  {
    id: uuidv5("aws-question-897", uuidv5.URL),
    text: "Which statement best describes Elastic Load Balancing?",
    options: [
      "It translates a domain name into an IP address using DNC.",
      "It distributes incoming application traffic across one or more Amazon EC2 instances.",
      "It collects metrics on connected Amazon EC2 instances.",
      "It automatically adjusts the number of Amazon EC2 instances to support incoming traffic.",
    ],
    correctAnswers: [1],
    explanation:
      "Elastic Load Balancing automatically distributes incoming application traffic across multiple targets, such as EC2 instances, containers, and IP addresses, improving fault tolerance.",
  },
  {
    id: uuidv5("aws-question-898", uuidv5.URL),
    text: "Which of the following is a fast and reliable NoSQL database service?",
    options: [
      "Amazon Redshift.",
      "Amazon RDS.",
      "Amazon DynamoDB.",
      "Amazon S3.",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon DynamoDB is a fully managed NoSQL database service known for its speed, scalability, and reliability, making it ideal for applications requiring low-latency access to data.",
  },
  {
    id: uuidv5("aws-question-899", uuidv5.URL),
    text: "Which AWS service would you use to obtain compliance reports and certificates?",
    options: [
      "AWS Artifact.",
      "AWS Lambda.",
      "Amazon Inspector.",
      "AWS Certificate Manager.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Artifact is a service that provides on-demand access to AWS compliance reports and certificates, helping users meet regulatory and compliance requirements.",
  },
  {
    id: uuidv5("aws-question-900", uuidv5.URL),
    text: "Which AWS services are defined as global instead of regional? (Select TWO)",
    options: [
      "Amazon Route 53.",
      "Amazon EC2.",
      "Amazon S3.",
      "Amazon CloudFront.",
      "Amazon DynamoDB.",
    ],
    correctAnswers: [0, 3],
    explanation:
      "Amazon Route 53 and Amazon CloudFront are global services. Route 53 provides DNS routing globally, and CloudFront delivers content through a global network of edge locations.",
  },
  {
    id: uuidv5("aws-question-901", uuidv5.URL),
    text: "How would an AWS customer easily apply common access controls to a large set of users?",
    options: [
      "Apply an IAM policy to an IAM group.",
      "Apply an IAM policy to an IAM role.",
      "Apply the same IAM policy to all IAM users with access to the same workload.",
      "Apply an IAM policy to an Amazon Cognito user pool.",
    ],
    correctAnswers: [0],
    explanation:
      "By applying an IAM policy to an IAM group, users in the group inherit the permissions defined in the policy, simplifying management of access controls.",
  },
  {
    id: uuidv5("aws-question-902", uuidv5.URL),
    text: "Which of the following is an important architectural design principle when designing cloud applications?",
    options: [
      "Use multiple Availability Zones.",
      "Use tightly coupled components.",
      "Use open source software.",
      "Provision extra capacity.",
    ],
    correctAnswers: [0],
    explanation:
      "Using multiple Availability Zones improves the availability and resilience of cloud applications by distributing workloads across physically separate locations.",
  },
  {
    id: uuidv5("aws-question-903", uuidv5.URL),
    text: "Which service allows a company with multiple AWS accounts to combine its usage to obtain volume discounts?",
    options: [
      "AWS Server Migration Service.",
      "AWS Organizations.",
      "AWS Budgets.",
      "AWS Trusted Advisor.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Organizations enables consolidated billing, allowing a company to combine usage across multiple accounts to achieve volume discounts.",
  },
  {
    id: uuidv5("aws-question-904", uuidv5.URL),
    text: "Which AWS service or feature can enhance network security by blocking requests from a particular network for a web application on AWS? (Select TWO)",
    options: [
      "AWS WAF.",
      "AWS Trusted Advisor.",
      "AWS Direct Connect.",
      "AWS Organizations.",
      "Network ACLs.",
    ],
    correctAnswers: [0, 4],
    explanation:
      "AWS WAF provides application layer protection by blocking specific patterns of requests, while Network ACLs (Access Control Lists) block or allow traffic based on IP addresses at the subnet level.",
  },
  {
    id: uuidv5("aws-question-905", uuidv5.URL),
    text: "Which of the following is a cloud architectural design principle?",
    options: [
      "Scale up not out.",
      "Loosely couple components.",
      "Build monolithic systems.",
      "Use commercial database software.",
    ],
    correctAnswers: [1],
    explanation:
      "Loosely coupling components improves system reliability, scalability, and flexibility, as changes in one part of the system do not directly impact others.",
  },
  {
    id: uuidv5("aws-question-906", uuidv5.URL),
    text: "Which service enables risk auditing by continuously monitoring and logging account activity, including user actions in the AWS Management Console and AWS SDKs?",
    options: [
      "Amazon CloudWatch.",
      "AWS CloudTrail.",
      "AWS Config.",
      "AWS Health.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS CloudTrail provides a detailed log of account activity, including actions taken via the AWS Management Console, SDKs, and APIs, supporting compliance and auditing efforts.",
  },
  {
    id: uuidv5("aws-question-907", uuidv5.URL),
    text: "The financial benefits of using AWS are: (Select TWO)",
    options: [
      "Reduced Total Cost of Ownership (TCO).",
      "Increased capital expenditure (capex).",
      "Reduced operational expenditure (opex).",
      "Deferred payment plans for startups.",
      "Business credit lines for startups.",
    ],
    correctAnswers: [0, 2],
    explanation:
      "AWS reduces both TCO and operational expenditure by eliminating upfront hardware costs and allowing pay-as-you-go pricing for services.",
  },
  {
    id: uuidv5("aws-question-908", uuidv5.URL),
    text: "Which AWS service is used to store data in the cloud?",
    options: [
      "Amazon S3.",
      "Amazon Redshift.",
      "Amazon DynamoDB.",
      "Amazon RDS.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon S3 is a fully managed object storage service that provides a simple way to store and retrieve any amount of data at any time, from anywhere on the web.",
  },
];

const exam11: Question[] = [
  {
    id: uuidv5("aws-question-910", uuidv5.URL),
    text: "Which of the following can an AWS customer use to launch a new Amazon Relational Database Service (Amazon RDS) cluster? (Select TWO)",
    options: [
      "AWS Concierge.",
      "AWS CloudFormation.",
      "Amazon Simple Storage Service (Amazon S3).",
      "Amazon EC2 Auto Scaling.",
      "AWS Management Console.",
    ],
    correctAnswers: [1, 4],
    explanation:
      "AWS CloudFormation can automate the provisioning of resources, including RDS clusters, while the AWS Management Console allows users to launch and manage services manually.",
  },
  {
    id: uuidv5("aws-question-911", uuidv5.URL),
    text: "Which of the following Reserved Instance (RI) pricing models provides the highest average savings compared to On-Demand pricing?",
    options: [
      "One-year, No Upfront, Standard RI pricing.",
      "One-year, All Upfront, Convertible RI pricing.",
      "Three-year, All Upfront, Standard RI pricing.",
      "Three-year, No Upfront, Convertible RI pricing.",
    ],
    correctAnswers: [2],
    explanation:
      "The Three-year, All Upfront, Standard RI pricing model offers the highest savings because it combines a long commitment period with full upfront payment.",
  },
  {
    id: uuidv5("aws-question-912", uuidv5.URL),
    text: "Which of the following are features of Amazon CloudWatch Logs? (Select TWO)",
    options: [
      "Summaries by Amazon Simple Notification Service (Amazon SNS).",
      "Free Amazon Elasticsearch Service analytics.",
      "Provided at no charge.",
      "Real-time monitoring.",
      "Adjustable retention.",
    ],
    correctAnswers: [3, 4],
    explanation:
      "Amazon CloudWatch Logs provides real-time monitoring of log data and allows users to set adjustable retention periods for log data storage.",
  },
  {
    id: uuidv5("aws-question-913", uuidv5.URL),
    text: "Which of the following is an AWS-managed compute service?",
    options: ["Amazon SWF.", "Amazon EC2.", "AWS Lambda.", "Amazon Aurora."],
    correctAnswers: [2],
    explanation:
      "AWS Lambda is a managed serverless compute service that allows users to run code without provisioning or managing servers.",
  },
  {
    id: uuidv5("aws-question-914", uuidv5.URL),
    text: "A company wants to reduce the physical compute footprint that developers use to run code. Which service would meet that need by enabling serverless architectures?",
    options: [
      "Amazon Elastic Compute Cloud (Amazon EC2).",
      "AWS Lambda.",
      "Amazon DynamoDB.",
      "AWS CodeCommit.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Lambda is a serverless compute service that enables developers to run code without provisioning physical or virtual servers, thereby reducing the compute footprint.",
  },
  {
    id: uuidv5("aws-question-915", uuidv5.URL),
    text: "Which of the following is the customer’s responsibility under the AWS shared responsibility model?",
    options: [
      "Patching underlying infrastructure.",
      "Physical security.",
      "Patching Amazon EC2 instances.",
      "Patching network infrastructure.",
    ],
    correctAnswers: [2],
    explanation:
      "Under the AWS shared responsibility model, customers are responsible for managing and patching the operating systems and applications on their Amazon EC2 instances.",
  },
  {
    id: uuidv5("aws-question-916", uuidv5.URL),
    text: "According to the AWS shared responsibility model who is responsible for configuration management?",
    options: [
      "It is solely the responsibility of the customer.",
      "It is solely the responsibility of AWS.",
      "It is shared between AWS and the customer.",
      "It is not part of the AWS shared responsibility model.",
    ],
    correctAnswers: [2],
    explanation:
      "Configuration management is a shared responsibility. AWS manages the infrastructure configuration, while customers are responsible for configuring their applications and systems.",
  },
  {
    id: uuidv5("aws-question-917", uuidv5.URL),
    text: "Which security service automatically recognizes and classifies sensitive data or intellectual property on AWS?",
    options: [
      "Amazon GuardDuty.",
      "Amazon Macie.",
      "Amazon Inspector.",
      "AWS Shield.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon Macie automatically discovers, classifies, and protects sensitive data using machine learning.",
  },
  {
    id: uuidv5("aws-question-918", uuidv5.URL),
    text: "Which of the following BEST describe the AWS pricing model? (Select TWO)",
    options: [
      "Fixed-term.",
      "Pay-as-you-go.",
      "Colocation.",
      "Planned.",
      "Variable cost.",
    ],
    correctAnswers: [1, 4],
    explanation:
      "AWS operates on a pay-as-you-go pricing model with variable costs based on actual usage, eliminating upfront commitments.",
  },
  {
    id: uuidv5("aws-question-919", uuidv5.URL),
    text: "Under the shared responsibility model, which of the following tasks are the responsibility of the AWS customer? (Select TWO)",
    options: [
      "Ensuring that application data is encrypted at rest.",
      "Ensuring that AWS NTP servers are set to the correct time.",
      "Ensuring that users have received security training in the use of AWS services.",
      "Ensuring that access to data centers is restricted.",
      "Ensuring that hardware is disposed of properly.",
    ],
    correctAnswers: [0, 2],
    explanation:
      "Customers are responsible for securing their data, including encryption, and ensuring their teams are trained to use AWS securely. AWS handles physical security and hardware disposal.",
  },
  {
    id: uuidv5("aws-question-920", uuidv5.URL),
    text: "A customer is using multiple AWS accounts with separate billing. How can the customer take advantage of volume discounts with minimal impact to the AWS resources?",
    options: [
      "Create one global AWS account and move all AWS resources to that account.",
      "Sign up for three years of Reserved Instance pricing up front.",
      "Use the consolidated billing feature from AWS Organizations.",
      "Sign up for the AWS Enterprise support plan to get volume discounts.",
    ],
    correctAnswers: [2],
    explanation:
      "Consolidated billing through AWS Organizations allows multiple accounts to combine usage to benefit from volume discounts while maintaining separate resources.",
  },
  {
    id: uuidv5("aws-question-921", uuidv5.URL),
    text: "Which Amazon EC2 pricing model offers the MOST significant discount when compared to On-Demand Instances?",
    options: [
      "A Partial Upfront Reserved Instances for a 1-year term.",
      "All Upfront Reserved instances for a 1-year term.",
      "All Upfront Reserved Instances for a 3-year term.",
      "No Upfront Reserved Instances for a 3-year term.",
    ],
    correctAnswers: [2],
    explanation:
      "The All Upfront Reserved Instances for a 3-year term provides the highest discount because it combines a long commitment period with full upfront payment.",
  },
  {
    id: uuidv5("aws-question-922", uuidv5.URL),
    text: "Which AWS services should be used for read/write of constantly changing data? (Select TWO)",
    options: [
      "Amazon Glacier.",
      "Amazon RDS.",
      "AWS Snowball.",
      "Amazon Redshift.",
      "Amazon EFS.",
    ],
    correctAnswers: [1, 4],
    explanation:
      "Amazon RDS provides a managed relational database service for constantly changing transactional data, while Amazon EFS is a scalable file storage service suitable for concurrent access and updates.",
  },
  {
    id: uuidv5("aws-question-923", uuidv5.URL),
    text: "Which AWS service allows users to identify the changes made to a resource over time?",
    options: [
      "Amazon Inspector.",
      "AWS Config.",
      "AWS Service Catalog.",
      "AWS IAM.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Config provides a detailed view of the configuration changes and history of AWS resources over time, enabling compliance auditing and change management.",
  },
  {
    id: uuidv5("aws-question-924", uuidv5.URL),
    text: "According to best practices, how should an application be designed to run in the AWS Cloud?",
    options: [
      "Use tightly coupled components.",
      "Use loosely coupled components.",
      "Use infrequently coupled components.",
      "Use frequently coupled components.",
    ],
    correctAnswers: [1],
    explanation:
      "Applications in the AWS Cloud should use loosely coupled components to improve scalability, reliability, and fault tolerance.",
  },
  {
    id: uuidv5("aws-question-925", uuidv5.URL),
    text: "Which benefits are included with the AWS Business Support plan? (Select TWO)",
    options: [
      "24/7 assistance by way of live chat or a telephone call.",
      "Support from a dedicated AWS Technical Account Manager.",
      "An unlimited number of cases and contacts.",
      "15-minute response time for production system interruption cases.",
      "Annual operational reviews with AWS Solutions Architects.",
    ],
    correctAnswers: [0, 2],
    explanation:
      "The AWS Business Support plan offers 24/7 technical assistance and an unlimited number of cases and contacts, providing flexible support options.",
  },
  {
    id: uuidv5("aws-question-926", uuidv5.URL),
    text: "Which of the following is an AWS managed Domain Name System (DNS) web service?",
    options: [
      "Amazon Route 53.",
      "Amazon Neptune.",
      "Amazon SageMaker.",
      "Amazon Lightsail.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon Route 53 is a managed DNS web service that provides domain registration, traffic routing, and health checks.",
  },
  {
    id: uuidv5("aws-question-927", uuidv5.URL),
    text: "A user must meet compliance and software licensing requirements that state a workload must be hosted on a physical server. When Amazon EC2 instance pricing option will meet these requirements?",
    options: [
      "Dedicated Hosts.",
      "Dedicated Instances.",
      "Spot Instances.",
      "Reserved Instances.",
    ],
    correctAnswers: [0],
    explanation:
      "Dedicated Hosts provide physical servers fully dedicated to the user's use, which is ideal for meeting compliance and software licensing requirements.",
  },
  {
    id: uuidv5("aws-question-928", uuidv5.URL),
    text: "Which of the Reserved Instance (RI) pricing models can change the attributes of the RI as long as the exchange results in the creation of RIs of equal or greater value?",
    options: [
      "Dedicated RIs.",
      "Scheduled RIs.",
      "Convertible RIs.",
      "Standard RIs.",
    ],
    correctAnswers: [2],
    explanation:
      "Convertible Reserved Instances allow customers to modify the instance attributes as long as the new RIs are of equal or greater value.",
  },
  {
    id: uuidv5("aws-question-929", uuidv5.URL),
    text: "Which service is best for storing common database query results, which helps to alleviate database access load?",
    options: [
      "Amazon Machine Learning.",
      "Amazon SQS.",
      "Amazon ElastiCache.",
      "Amazon EC2 Instance Store.",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon ElastiCache is an in-memory data store that can cache frequently accessed data, such as common database query results, to improve application performance and reduce database load.",
  },
  {
    id: uuidv5("aws-question-930", uuidv5.URL),
    text: "When should a company consider using Amazon EC2 Spot Instances? (Select TWO)",
    options: [
      "For non-production applications.",
      "For stateful workloads.",
      "For applications that cannot have interruptions.",
      "For fault-tolerant flexible applications.",
      "For sensitive database applications.",
    ],
    correctAnswers: [0, 3],
    explanation:
      "EC2 Spot Instances are suitable for applications that are flexible and fault-tolerant, such as non-production applications or workloads that can tolerate interruptions.",
  },
  {
    id: uuidv5("aws-question-931", uuidv5.URL),
    text: "Which AWS tools assist with estimating costs? (Select three)",
    options: [
      "Detailed billing report.",
      "Cost allocation tags.",
      "AWS Simple Monthly Calculator.",
      "AWS Total Cost of Ownership (TCO) Calculator.",
      "Cost Estimator.",
    ],
    correctAnswers: [1, 2, 3],
    explanation:
      "The Cost Allocation tags, AWS Simple Monthly Calculator, and AWS Total Cost of Ownership (TCO) Calculator are helpful tools for estimating and managing AWS costs.",
  },
  {
    id: uuidv5("aws-question-932", uuidv5.URL),
    text: "A company wants to focus on business activities instead of managing compute and capacity. Which AWS service can be used to automatically add or remove Amazon EC2 instances based on demand?",
    options: [
      "Elastic Load Balancer.",
      "Amazon EC2 Auto Scaling.",
      "Amazon Route 53.",
      "Amazon CloudFront.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon EC2 Auto Scaling allows users to automatically scale EC2 instances up or down based on the demand, minimizing the need for manual capacity management.",
  },
  {
    id: uuidv5("aws-question-933", uuidv5.URL),
    text: "Which is the minimum AWS Support plan that includes Infrastructure Event Management without additional costs?",
    options: ["Enterprise.", "Business.", "Developer.", "Basic."],
    correctAnswers: [0],
    explanation:
      "The Enterprise Support plan includes Infrastructure Event Management without additional costs, providing customers with proactive support for managing complex infrastructure changes.",
  },
  {
    id: uuidv5("aws-question-934", uuidv5.URL),
    text: "Access keys in AWS Identity and Access Management (IM1) are used to:",
    options: [
      "Log in to the AWS Management Console.",
      "Make programmatic calls to AWS from AWS APIs.",
      "Log in to Amazon EC2 instances.",
      "Authenticate to AWS CodeCommit repositories.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS access keys are used to make programmatic API calls to AWS services, allowing for automation of tasks such as managing resources and data.",
  },
  {
    id: uuidv5("aws-question-935", uuidv5.URL),
    text: "Which AWS service can be used to query stored datasets directly from Amazon S3 using standard SQL?",
    options: [
      "AWS Glue.",
      "AWS Data Pipeline.",
      "Amazon CloudSearch.",
      "Amazon Athena.",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon Athena is a serverless query service that allows users to run SQL queries directly on data stored in Amazon S3, simplifying the process of analyzing large datasets.",
  },
  {
    id: uuidv5("aws-question-936", uuidv5.URL),
    text: "How does AWS shorten the time to provision IT resources?",
    options: [
      "It supplies an online IT ticketing platform for resource requests.",
      "It supports automatic code validation services.",
      "It provides the ability to programmatically provision existing resources.",
      "It automates the resource request process from a company’s IT vendor list.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS accelerates the provisioning of IT resources by providing APIs and automation tools to programmatically provision resources, enabling faster deployments.",
  },
  {
    id: uuidv5("aws-question-937", uuidv5.URL),
    text: "Which AWS services can be used to gather information about AWS account activity? (Select TWO)",
    options: [
      "Amazon CloudFront.",
      "AWS Cloud9.",
      "AWS CloudTrail.",
      "AWS CloudHSM.",
      "Amazon CloudWatch.",
    ],
    correctAnswers: [2, 4],
    explanation:
      "AWS CloudTrail logs account activity and user actions, while Amazon CloudWatch monitors metrics and logs for various AWS services, providing insights into account activity.",
  },
  {
    id: uuidv5("aws-question-938", uuidv5.URL),
    text: "Which of the following are characteristics of Amazon S3? (Select TWO)",
    options: [
      "A global file system.",
      "An object store.",
      "A local file store.",
      "A network file system.",
      "A durable storage system.",
    ],
    correctAnswers: [1, 4],
    explanation:
      "Amazon S3 is an object store that offers highly durable and scalable storage, making it suitable for large-scale data storage and retrieval across AWS regions.",
  },
  {
    id: uuidv5("aws-question-939", uuidv5.URL),
    text: "A user wants guidance on possible savings when migrating from on-premises to AWS. Which tool is suitable for this scenario?",
    options: [
      "AWS Budgets.",
      "Cost Explorer.",
      "AWS Total Cost of Ownership (TCO) Calculator.",
      "AWS Well-Architected Tool.",
    ],
    correctAnswers: [2],
    explanation:
      "The AWS Total Cost of Ownership (TCO) Calculator helps users estimate the cost savings of migrating from on-premises infrastructure to AWS by comparing their existing infrastructure costs with AWS costs.",
  },
  {
    id: uuidv5("aws-question-940", uuidv5.URL),
    text: "Which of the following services is in the category of AWS serverless platform?",
    options: [
      "Amazon EMR.",
      "Elastic Load Balancing.",
      "AWS Lambda.",
      "AWS Mobile Hub.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Lambda is a serverless compute service that lets you run code without provisioning or managing servers, automatically scaling to meet demand.",
  },
  {
    id: uuidv5("aws-question-941", uuidv5.URL),
    text: "The use of what AWS feature or service allows companies to track and categorize spending on a detailed level?",
    options: [
      "Cost allocation tags.",
      "Consolidated billing.",
      "AWS Budgets.",
      "AWS Marketplace.",
    ],
    correctAnswers: [0],
    explanation:
      "Cost allocation tags allow companies to categorize and track their AWS spending at a granular level, helping in cost management and analysis.",
  },
  {
    id: uuidv5("aws-question-942", uuidv5.URL),
    text: "Which of the following inspects AWS environments to find opportunities that can save money for users and also improve system performance?",
    options: [
      "AWS Cost Explorer.",
      "AWS Trusted Advisor.",
      "Consolidated billing.",
      "Detailed billing.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Trusted Advisor analyzes AWS environments and provides recommendations on cost savings, security, performance, and fault tolerance.",
  },
  {
    id: uuidv5("aws-question-943", uuidv5.URL),
    text: "Web servers running on Amazon EC2 access a legacy application running in a corporate data center. What term would describe this model?",
    options: [
      "Cloud-native.",
      "Partner network.",
      "Hybrid architecture.",
      "Infrastructure as a service.",
    ],
    correctAnswers: [2],
    explanation:
      "A hybrid architecture integrates cloud-based resources with on-premises or legacy infrastructure, allowing workloads to run across both environments.",
  },
  {
    id: uuidv5("aws-question-944", uuidv5.URL),
    text: "What technology enables compute capacity to adjust as loads change?",
    options: [
      "Load balancing.",
      "Automatic failover.",
      "Round robin.",
      "Auto Scaling.",
    ],
    correctAnswers: [3],
    explanation:
      "Auto Scaling automatically adjusts the number of Amazon EC2 instances to handle changes in load, ensuring that resources scale efficiently and cost-effectively.",
  },
  {
    id: uuidv5("aws-question-945", uuidv5.URL),
    text: "Which AWS service is a managed NoSQL database?",
    options: [
      "Amazon Redshift.",
      "Amazon DynamoDB.",
      "Amazon Aurora.",
      "Amazon RDS for ManaDB.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability.",
  },
  {
    id: uuidv5("aws-question-946", uuidv5.URL),
    text: "Which of the following is a correct relationship between regions, Availability Zones, and edge locations?",
    options: [
      "Data centers contain regions.",
      "Regions contain Availability Zones.",
      "Availability Zones contain edge locations.",
      "Edge locations contain regions.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS regions are made up of multiple Availability Zones, which are designed to provide high availability. Edge locations are used for services like CloudFront and Route 53, but they are not directly inside Availability Zones.",
  },
  {
    id: uuidv5("aws-question-947", uuidv5.URL),
    text: "What approach to transcoding a large number of individual video files adheres to AWS architecture principles?",
    options: [
      "Using many instances in parallel.",
      "Using a single large instance during off-peak hours.",
      "Using dedicated hardware.",
      "Using a large GPU instance type.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS recommends using a distributed approach to transcoding, leveraging parallel processing across many instances to meet scalability and performance requirements.",
  },
  {
    id: uuidv5("aws-question-948", uuidv5.URL),
    text: "Which AWS services can host a Microsoft SQL Server database? (Select TWO)",
    options: [
      "Amazon EC2.",
      "Amazon Relational Database Service (Amazon RDS).",
      "Amazon Aurora.",
      "Amazon Redshift.",
      "Amazon S3.",
    ],
    correctAnswers: [0, 1],
    explanation:
      "Amazon EC2 and Amazon RDS can both host Microsoft SQL Server databases, with RDS providing managed database capabilities for easier maintenance.",
  },
  {
    id: uuidv5("aws-question-949", uuidv5.URL),
    text: "Which AWS IAM feature allows developers to access AWS services through the AWS CLI?",
    options: [
      "API keys.",
      "Access keys.",
      "User names/Passwords.",
      "SSH keys.",
    ],
    correctAnswers: [1],
    explanation:
      "Access keys are used by developers to authenticate programmatic access to AWS services through the AWS CLI and APIs.",
  },
  {
    id: uuidv5("aws-question-950", uuidv5.URL),
    text: "The user is fully responsible for which action when running workloads on AWS?",
    options: [
      "Patching the infrastructure components.",
      "Maintaining the underlying infrastructure components.",
      "Maintaining physical and environmental controls.",
      "Implementing controls to route application traffic.",
    ],
    correctAnswers: [3],
    explanation:
      "In the AWS shared responsibility model, users are responsible for the configuration of application-level traffic routing and other application-level concerns.",
  },
  {
    id: uuidv5("aws-question-951", uuidv5.URL),
    text: "Which AWS support plan includes a dedicated Technical Account Manager?",
    options: ["Developer.", "Enterprise.", "Business.", "Basic."],
    correctAnswers: [1],
    explanation:
      "The AWS Enterprise support plan includes a dedicated Technical Account Manager (TAM) to provide proactive support and guidance for customers.",
  },
  {
    id: uuidv5("aws-question-952", uuidv5.URL),
    text: "What time-savings advantage is offered with the use of Amazon Rekognition?",
    options: [
      "Amazon Rekognition provides automatic watermarking of images.",
      "Amazon Rekognition provides automatic detection of objects appearing in pictures.",
      "Amazon Recognition provides the ability to resize millions of images automatically.",
      "Amazon Rekognition uses Amazon Mechanical Turk to allow humans to bid on object detection jobs.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon Rekognition automates the detection of objects and scenes in images, which saves time compared to manually tagging or analyzing visual data.",
  },
  {
    id: uuidv5("aws-question-953", uuidv5.URL),
    text: "Which AWS service can be used to automatically scale an application up and down without making capacity planning decisions?",
    options: [
      "Amazon AutoScaling.",
      "Amazon Redshift.",
      "AWS CloudTrail.",
      "AWS Lambda.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon AutoScaling automatically adjusts the number of instances running based on demand, eliminating the need for manual capacity planning decisions.",
  },
  {
    id: uuidv5("aws-question-954", uuidv5.URL),
    text: "Amazon Relational Database Service (Amazon RDS) offers which of the following benefits over traditional database management?",
    options: [
      "AWS manages the data stored in Amazon RDS tables.",
      "AWS manages the maintenance of the operating system.",
      "AWS automatically scales up instance types on demand.",
      "AWS manages the database type.",
    ],
    correctAnswers: [1],
    explanation:
      "With Amazon RDS, AWS manages tasks such as patching, backups, and maintenance of the underlying operating system, reducing the operational overhead for users.",
  },
  {
    id: uuidv5("aws-question-955", uuidv5.URL),
    text: "A company’s web application currently has light dependencies on underlying components so when one component fails the entire web application fails. Applying which AWS Cloud design principle will address the current design issue?",
    options: [
      "Implementing elasticity enabling the application to scale up or scale down as demand changes.",
      "Enabling several EC2 instances to run in parallel to achieve better performance.",
      "Focusing on decoupling components by isolating them and ensuring individual components can function when other components.",
      "Doubling EC2 computing resources to increase system fault tolerance.",
    ],
    correctAnswers: [2],
    explanation:
      "Decoupling components and isolating failures helps ensure that when one component fails, it does not impact the entire application, improving system reliability.",
  },
  {
    id: uuidv5("aws-question-956", uuidv5.URL),
    text: "A customer would like to design and build a new workload on AWS Cloud but does not have the AWS-related software technical expertise in-house. Which of the following AWS programs can a customer take advantage of to achieve that outcome?",
    options: [
      "AWS Partner Network Technology Partners.",
      "AWS Marketplace.",
      "AWS Partner Network Consulting Partners.",
      "AWS Service Catalog.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Partner Network (APN) Consulting Partners provide professional services, including design, implementation, and ongoing management of AWS workloads for customers.",
  },
  {
    id: uuidv5("aws-question-957", uuidv5.URL),
    text: "Which service stores objects, provides real-time access to those objects, and offers versioning and lifecycle capabilities?",
    options: [
      "Amazon Glacier.",
      "AWS Storage Gateway.",
      "Amazon S3.",
      "Amazon EBS.",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon S3 is a scalable object storage service that provides features such as versioning, lifecycle policies, and real-time access to stored data.",
  },
  {
    id: uuidv5("aws-question-958", uuidv5.URL),
    text: "Distributing workloads across multiple Availability Zones supports which cloud architecture design principle?",
    options: [
      "Implement automation.",
      "Design for agility.",
      "Design for failure.",
      "Implement elasticity.",
    ],
    correctAnswers: [2],
    explanation:
      "Distributing workloads across multiple Availability Zones ensures fault tolerance and resilience, a key aspect of designing for failure in the cloud.",
  },
  {
    id: uuidv5("aws-question-959", uuidv5.URL),
    text: "Which service should a customer use to consolidate and centrally manage multiple AWS accounts?",
    options: [
      "AWS IAM.",
      "AWS Organizations.",
      "AWS Schema Conversion Tool.",
      "AWS Config.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Organizations allows customers to consolidate billing, manage accounts, and implement policies for multiple AWS accounts in a single organization.",
  },
];

const exam12: Question[] = [
  {
    id: uuidv5("aws-question-960", uuidv5.URL),
    text: "Which of the following components of the AWS Global Infrastructure consists of one or more discrete data centers interconnected through low latency links?",
    options: [
      "Availability Zone",
      "Edge location",
      "Region",
      "Private networking",
    ],
    correctAnswers: [0],
    explanation:
      "An Availability Zone consists of one or more discrete data centers interconnected through low-latency links, providing high availability and fault tolerance.",
  },
  {
    id: uuidv5("aws-question-961", uuidv5.URL),
    text: "One benefit of On-Demand Amazon Elastic Compute Cloud (Amazon EC2) pricing is:",
    options: [
      "The ability to bid for a lower hourly cost.",
      "Paying a daily rate regardless of time used.",
      "Paying only for time used.",
      "Pre-paying for instances and paying a lower hourly rate.",
    ],
    correctAnswers: [2],
    explanation:
      "With On-Demand EC2 instances, you pay only for the compute time you use without any long-term commitments, making it flexible and cost-effective for unpredictable workloads.",
  },
  {
    id: uuidv5("aws-question-962", uuidv5.URL),
    text: "What can assist in evaluating an application for migration to the cloud? (Select TWO)",
    options: [
      "AWS Trusted Advisor.",
      "AWS Professional Services.",
      "AWS Systems Manager.",
      "AWS Partner Network (APN).",
      "AWS Secrets Manager.",
    ],
    correctAnswers: [1, 3],
    explanation:
      "AWS Professional Services provides expert guidance for cloud migration, while the AWS Partner Network (APN) includes consulting partners who assist in migrating applications to AWS.",
  },
  {
    id: uuidv5("aws-question-963", uuidv5.URL),
    text: "A characteristic of edge locations is that they:",
    options: [
      "Host Amazon EC2 instances closer to users.",
      "Help lower latency and improve performance for users.",
      "Cache frequently changing data without reaching the origin server.",
      "Refresh data changes daily.",
    ],
    correctAnswers: [1],
    explanation:
      "Edge locations are part of Amazon CloudFront’s content delivery network (CDN), which helps lower latency and improve performance for end users by caching content closer to them.",
  },
  {
    id: uuidv5("aws-question-964", uuidv5.URL),
    text: "Which of the following are valid ways for a customer to interact with AWS services? (Select TWO)",
    options: [
      "Command line interface.",
      "On-premises.",
      "Software Development Kits.",
      "Software-as-a-service.",
      "Hybrid.",
    ],
    correctAnswers: [0, 2],
    explanation:
      "AWS services can be accessed using the AWS Command Line Interface (CLI) and Software Development Kits (SDKs), allowing users to interact programmatically and via command-line commands.",
  },
  {
    id: uuidv5("aws-question-965", uuidv5.URL),
    text: "What is a value proposition of the AWS Cloud?",
    options: [
      "AWS is responsible for security in the AWS Cloud.",
      "No long-term contract is required.",
      "Provision new servers in days.",
      "AWS manages user applications in the AWS Cloud.",
    ],
    correctAnswers: [1],
    explanation:
      "One of the key benefits of AWS is its pay-as-you-go model, which eliminates the need for long-term contracts and upfront commitments.",
  },
  {
    id: uuidv5("aws-question-966", uuidv5.URL),
    text: "A company is migrating an application that is running non-interruptible workloads for a three-year time frame. Which pricing construct would provide the MOST cost-effective solution?",
    options: [
      "Amazon EC2 Spot Instances.",
      "Amazon EC2 Dedicated Instances.",
      "Amazon EC2 On-Demand Instances.",
      "Amazon EC2 Reserved Instances.",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon EC2 Reserved Instances provide significant cost savings for workloads with predictable usage patterns over a long-term period, such as three years.",
  },
  {
    id: uuidv5("aws-question-967", uuidv5.URL),
    text: "Which AWS service is used to track, record, and audit configuration changes made to AWS resources?",
    options: ["AWS Shield.", "AWS Config.", "AWS IAM.", "Amazon Inspector."],
    correctAnswers: [1],
    explanation:
      "AWS Config continuously monitors and records AWS resource configurations and changes, allowing for auditing and compliance tracking.",
  },
  {
    id: uuidv5("aws-question-968", uuidv5.URL),
    text: "Which feature of the AWS Cloud will support an international company’s requirement for low latency to all of its customers?",
    options: [
      "Fault tolerance.",
      "Global reach.",
      "Pay-as-you-go pricing.",
      "High availability.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Global Infrastructure, including multiple regions and edge locations, provides global reach, ensuring low latency access for customers worldwide.",
  },
  {
    id: uuidv5("aws-question-969", uuidv5.URL),
    text: "How can one AWS account use Reserved Instances from another AWS account?",
    options: [
      "By using Amazon EC2 Dedicated Instances.",
      "By using AWS Organizations consolidated billing.",
      "By using the AWS Cost Explorer tool.",
      "By using AWS Budgets.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Organizations consolidated billing allows multiple AWS accounts within an organization to share Reserved Instances for cost efficiency.",
  },
  {
    id: uuidv5("aws-question-970", uuidv5.URL),
    text: "Which of the following services have Distributed Denial of Service (DDoS) mitigation features? (Select TWO)",
    options: [
      "AWS WAF",
      "Amazon DynamoDB",
      "Amazon EC2",
      "Amazon CloudFront",
      "Amazon Inspector",
    ],
    correctAnswers: [0, 3],
    explanation:
      "AWS WAF (Web Application Firewall) and Amazon CloudFront help mitigate DDoS attacks by filtering and distributing traffic efficiently. AWS WAF provides rule-based filtering for web traffic, while CloudFront acts as a content delivery network (CDN) that helps absorb and distribute large-scale traffic spikes. The other options do not have built-in DDoS protection.",
  },
  {
    id: uuidv5("aws-question-971", uuidv5.URL),
    text: "Which of the following AWS features enables a user to launch a pre-configured Amazon Elastic Compute Cloud (Amazon EC2) instance?",
    options: [
      "Amazon Elastic Block Store (Amazon EBS)",
      "Amazon Machine Image",
      "Amazon EC2 Systems Manager",
      "Amazon AppStream 2.0",
    ],
    correctAnswers: [1],
    explanation:
      "An Amazon Machine Image (AMI) allows users to launch pre-configured EC2 instances with an operating system, application code, and software settings. Amazon EBS is a storage service, EC2 Systems Manager provides management tools, and AppStream 2.0 is a fully managed application streaming service, none of which directly launch pre-configured EC2 instances.",
  },
  {
    id: uuidv5("aws-question-972", uuidv5.URL),
    text: "A solution that is able to support growth in users, traffic, or data size with no drop in performance aligns with which cloud architecture principle?",
    options: [
      "Think parallel",
      "Implement elasticity",
      "Decouple your components",
      "Design for failure",
    ],
    correctAnswers: [1],
    explanation:
      "Implementing elasticity allows AWS resources to scale up or down dynamically based on demand, ensuring that performance remains consistent as traffic or data volume grows. The other principles focus on different architectural best practices, such as fault tolerance and modular design.",
  },
  {
    id: uuidv5("aws-question-973", uuidv5.URL),
    text: "Which AWS Cloud benefit eliminates the need for users to try estimating future infrastructure usage?",
    options: [
      "Easy and fast deployment of applications in multiple Regions around the world",
      "Security of the AWS Cloud",
      "Elasticity of the AWS Cloud",
      "Lower variable costs due to massive economies of scale",
    ],
    correctAnswers: [2],
    explanation:
      "Elasticity in AWS allows businesses to automatically scale resources based on real-time demand, removing the need for precise forecasting of infrastructure needs. The other options relate to security, cost efficiency, and global availability but do not specifically address infrastructure estimation.",
  },
  {
    id: uuidv5("aws-question-974", uuidv5.URL),
    text: "What can users access from AWS Artifact?",
    options: [
      "AWS security and compliance documents",
      "A download of configuration management details for all AWS resources",
      "Training materials for AWS services",
      "A security assessment of the applications deployed in the AWS Cloud",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Artifact provides security and compliance documents, such as audit reports and compliance certifications. It does not provide configuration management data, training materials, or specific application security assessments.",
  },
  {
    id: uuidv5("aws-question-975", uuidv5.URL),
    text: "Compared with costs in traditional and virtualized data centers, AWS has:",
    options: [
      "Greater variable costs and greater upfront costs",
      "Fixed usage costs and lower upfront costs",
      "Lower variable costs and greater upfront costs",
      "Lower variable costs and lower upfront costs",
    ],
    correctAnswers: [3],
    explanation:
      "AWS operates on a pay-as-you-go model, reducing upfront costs and offering lower variable costs due to economies of scale. Traditional data centers require large initial investments, while AWS allows businesses to scale resources dynamically, leading to cost efficiency.",
  },
  {
    id: uuidv5("aws-question-976", uuidv5.URL),
    text: "Which AWS service would a customer use with a static website to achieve lower latency and high transfer speeds?",
    options: [
      "AWS Lambda",
      "Amazon DynamoDB Accelerator",
      "Amazon Route 53",
      "Amazon CloudFront",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon CloudFront is a content delivery network (CDN) that caches and serves static website content closer to users, reducing latency and improving performance. The other options either focus on different AWS services, such as compute (Lambda), database acceleration (DynamoDB Accelerator), or DNS routing (Route 53).",
  },
  {
    id: uuidv5("aws-question-977", uuidv5.URL),
    text: "How do Amazon EC2 Auto Scaling groups help achieve high availability for a web application?",
    options: [
      "They automatically add more instances across multiple AWS Regions based on global demand of the application",
      "They automatically add or replace instances across multiple Availability Zones when the application needs it",
      "They enable the application’s static content to reside closer to end users",
      "They are able to distribute incoming requests across a tier of web server instances",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon EC2 Auto Scaling ensures high availability by adding or replacing instances in different Availability Zones to maintain application performance. The other options either focus on global scaling, content delivery, or load balancing, which are not the primary function of Auto Scaling.",
  },
  {
    id: uuidv5("aws-question-978", uuidv5.URL),
    text: "Which of the following can limit Amazon Simple Storage Service (Amazon S3) bucket access to specific users?",
    options: [
      "A public and private key-pair",
      "Amazon Inspector",
      "AWS Identity and Access Management (IAM) policies",
      "Security Groups",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Identity and Access Management (IAM) policies allow fine-grained access control to Amazon S3 buckets, ensuring only authorized users can access data. Security groups control access at the network level, and public/private key pairs are used for encryption, not access control.",
  },
  {
    id: uuidv5("aws-question-979", uuidv5.URL),
    text: "How should a customer forecast the future costs for running a new web application?",
    options: [
      "Amazon Aurora Backtrack",
      "Amazon CloudWatch Billing Alarms",
      "AWS Simple Monthly Calculator",
      "AWS Cost and Usage report",
    ],
    correctAnswers: [2],
    explanation:
      "The AWS Simple Monthly Calculator allows customers to estimate costs for running their applications based on selected services and usage patterns. CloudWatch Billing Alarms monitor spending, and the AWS Cost and Usage Report provides historical data rather than forecasts.",
  },
  {
    id: uuidv5("aws-question-980", uuidv5.URL),
    text: "Where are AWS compliance documents, such as an SOC 1 report, located?",
    options: [
      "Amazon Inspector",
      "AWS CloudTrail",
      "AWS Artifact",
      "AWS Certificate Manager",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Artifact provides access to compliance reports such as SOC 1, SOC 2, ISO certifications, and more. AWS CloudTrail logs API activity, Amazon Inspector scans workloads for security vulnerabilities, and AWS Certificate Manager manages SSL/TLS certificates but does not store compliance documents.",
  },
  {
    id: uuidv5("aws-question-981", uuidv5.URL),
    text: "Which of the following tasks is the responsibility of AWS?",
    options: [
      "Encrypting client-side data",
      "Configuring AWS Identity and Access Management (IAM) roles",
      "Securing the Amazon EC2 hypervisor",
      "Setting user password policies",
    ],
    correctAnswers: [2],
    explanation:
      "AWS is responsible for securing the EC2 hypervisor as part of its shared responsibility model. Encrypting client-side data, IAM role configuration, and setting user password policies are responsibilities of the customer.",
  },
  {
    id: uuidv5("aws-question-982", uuidv5.URL),
    text: "Under the shared responsibility model which of the following areas are the customer’s responsibility? (Select TWO)",
    options: [
      "Firmware upgrades of network infrastructure",
      "Patching of operating systems",
      "Patching of the underlying hypervisor",
      "Physical security of data centers",
      "Configuration of the security group",
    ],
    correctAnswers: [1, 4],
    explanation:
      "Customers are responsible for patching operating systems and configuring security groups. AWS is responsible for hypervisor patching, network infrastructure, and physical security of data centers.",
  },
  {
    id: uuidv5("aws-question-983", uuidv5.URL),
    text: "A company is looking for a scalable data warehouse solution. Which of the following AWS solutions would meet the company’s needs?",
    options: [
      "Amazon Simple Storage Service (Amazon S3)",
      "Amazon DynamoDB",
      "Amazon Kinesis",
      "Amazon Redshift",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon Redshift is AWS's fully managed, scalable data warehouse solution. S3 is object storage, DynamoDB is a NoSQL database, and Kinesis is for real-time data streaming.",
  },
  {
    id: uuidv5("aws-question-984", uuidv5.URL),
    text: "Which AWS services provide a way to extend an on-premises architecture to the AWS Cloud? (Select TWO)",
    options: [
      "Amazon EBS",
      "AWS Direct Connect",
      "Amazon CloudFront",
      "AWS Storage Gateway",
      "Amazon Connect",
    ],
    correctAnswers: [1, 3],
    explanation:
      "AWS Direct Connect provides a dedicated network connection from on-premises to AWS, while AWS Storage Gateway enables seamless integration between on-premises storage and AWS Cloud storage. Amazon EBS is a block storage service, CloudFront is a CDN, and Amazon Connect is a cloud-based contact center.",
  },
  {
    id: uuidv5("aws-question-985", uuidv5.URL),
    text: "What are the advantages of the AWS Cloud? (Select TWO)",
    options: [
      "Fixed rate monthly cost",
      "No need to guess capacity requirements",
      "Increased speed to market",
      "Increased upfront capital expenditure",
      "Physical access to cloud data centers",
    ],
    correctAnswers: [1, 2],
    explanation:
      "AWS allows businesses to scale resources as needed, removing the need to estimate capacity. It also speeds up time to market by providing on-demand infrastructure. AWS does not have fixed monthly costs, increased capital expenditure, or provide physical data center access to customers.",
  },
  {
    id: uuidv5("aws-question-986", uuidv5.URL),
    text: "How can the AWS Cloud increase user workforce productivity after migration from an on-premises data center?",
    options: [
      "Users do not have to wait for infrastructure provisioning",
      "The AWS Cloud infrastructure is much faster than an on-premises data center infrastructure",
      "AWS takes over application configuration management on behalf of users",
      "Users do not need to address security and compliance issues",
    ],
    correctAnswers: [0],
    explanation:
      "AWS provides on-demand provisioning of infrastructure, reducing wait times for resources. However, AWS does not guarantee a faster infrastructure than all on-premises setups, does not configure applications for customers, and customers still need to manage security and compliance within their environment.",
  },
  {
    id: uuidv5("aws-question-987", uuidv5.URL),
    text: "Which of the following services could be used to deploy an application to servers running on-premises? (Select TWO)",
    options: [
      "AWS Elastic Beanstalk",
      "AWS OpsWorks",
      "AWS CodeDeploy",
      "AWS Batch",
      "AWS X-Ray",
    ],
    correctAnswers: [1, 2],
    explanation:
      "AWS OpsWorks and AWS CodeDeploy both support on-premises deployments. Elastic Beanstalk is for cloud-based applications, AWS Batch is for batch computing, and AWS X-Ray is a tracing tool.",
  },
  {
    id: uuidv5("aws-question-988", uuidv5.URL),
    text: "What is an example of agility in the AWS Cloud?",
    options: [
      "Access to multiple instance types",
      "Access to managed services",
      "Using Consolidated Billing to produce one bill",
      "Decreased acquisition time for new compute resources",
    ],
    correctAnswers: [3],
    explanation:
      "Agility in AWS means being able to provision new compute resources quickly. While access to instance types and managed services are AWS benefits, they do not directly represent agility. Consolidated Billing relates to cost management rather than agility.",
  },
  {
    id: uuidv5("aws-question-989", uuidv5.URL),
    text: "Which AWS security service protects applications from distributed denial of service attacks with always-on detection and automatic inline mitigations?",
    options: [
      "Amazon Inspector",
      "AWS Web Application Firewall (AWS WAF)",
      "Elastic Load Balancing (ELB)",
      "AWS Shield",
    ],
    correctAnswers: [3],
    explanation:
      "AWS Shield provides DDoS protection with automatic detection and mitigation. AWS WAF helps filter web traffic but does not provide full DDoS protection. Amazon Inspector is for vulnerability assessments, and ELB helps distribute traffic but does not specifically mitigate DDoS attacks.",
  },
  {
    id: uuidv5("aws-question-990", uuidv5.URL),
    text: "Which of the following are advantages of AWS consolidated billing? (Choose two)",
    options: [
      "The ability to receive one bill for multiple accounts.",
      "Service limits increasing by default in all accounts.",
      "A fixed discount on the monthly bill.",
      "Potential volume discounts, as usage in all accounts is combined.",
      "The automatic extension of the master account’s AWS support plan to all accounts.",
    ],
    correctAnswers: [0, 3],
    explanation:
      "AWS Consolidated Billing allows organizations to receive a single bill for multiple linked accounts, simplifying cost management. Additionally, combining usage across accounts can lead to volume discounts. However, service limits do not automatically increase, there are no fixed discounts, and AWS Support plans are not shared automatically.",
  },
  {
    id: uuidv5("aws-question-991", uuidv5.URL),
    text: "A company is considering using AWS for a self-hosted database that requires a nightly shutdown for maintenance and cost-saving purposes. Which service should the company use?",
    options: [
      "Amazon Redshift",
      "Amazon DynamoDB",
      "Amazon Elastic Compute Cloud (Amazon EC2) with Amazon EC2 instance store",
      "Amazon EC2 with Amazon Elastic Block Store (Amazon EBS)",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon EC2 with Amazon EBS is the best choice because EBS provides persistent storage that retains data even when the instance is stopped, allowing the database to shut down nightly without data loss. EC2 instance store is ephemeral and loses data when stopped. DynamoDB is a managed NoSQL database, and Redshift is a data warehouse solution, neither of which fit the use case.",
  },
];

const exam13: Question[] = [
  {
    id: uuidv5("aws-question-992", uuidv5.URL),
    text: "The use of what AWS feature or service allows companies to track and categorize spending on a detailed level?",
    options: [
      "Cost allocation tags",
      "Consolidated billing",
      "AWS Budgets",
      "AWS Marketplace",
    ],
    correctAnswers: [0],
    explanation:
      "Cost allocation tags allow users to categorize and track AWS costs by applying metadata to resources. This helps in detailed cost tracking and reporting. Consolidated billing groups accounts but does not categorize spending, AWS Budgets sets spending limits, and AWS Marketplace is for purchasing software.",
  },
  {
    id: uuidv5("aws-question-993", uuidv5.URL),
    text: "Which service stores objects, provides real-time access to those objects, and offers versioning and lifecycle capabilities?",
    options: [
      "Amazon Glacier",
      "AWS Storage Gateway",
      "Amazon S3",
      "Amazon EBS",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon S3 is an object storage service that supports real-time access, versioning, and lifecycle management. Amazon Glacier is for archival storage with delayed retrieval, AWS Storage Gateway enables hybrid cloud storage, and Amazon EBS is block storage for EC2 instances.",
  },
  {
    id: uuidv5("aws-question-994", uuidv5.URL),
    text: "What AWS team assists customers with accelerating cloud adoption through paid engagements in any of several specialty practice areas?",
    options: [
      "AWS Enterprise Support",
      "AWS Solutions Architects",
      "AWS Professional Services",
      "AWS Account Managers",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Professional Services provides specialized guidance and consulting to help customers accelerate cloud adoption through paid engagements. AWS Enterprise Support offers technical assistance, Solutions Architects provide architecture guidance, and Account Managers focus on customer relationships.",
  },
  {
    id: uuidv5("aws-question-995", uuidv5.URL),
    text: "A customer would like to design and build a new workload on AWS Cloud but does not have the AWS-related software technical expertise in-house. Which of the following AWS programs can a customer take advantage of to achieve that outcome?",
    options: [
      "AWS Partner Network Technology Partners",
      "AWS Marketplace",
      "AWS Partner Network Consulting Partners",
      "AWS Service Catalog",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Partner Network (APN) Consulting Partners provide expertise and services to help customers design and build workloads on AWS. APN Technology Partners offer software solutions, AWS Marketplace sells third-party software, and AWS Service Catalog helps manage approved cloud products.",
  },
  {
    id: uuidv5("aws-question-996", uuidv5.URL),
    text: "Distributing workloads across multiple Availability Zones supports which cloud architecture design principle?",
    options: [
      "Implement automation",
      "Design for agility",
      "Design for failure",
      "Implement elasticity",
    ],
    correctAnswers: [2],
    explanation:
      "Designing for failure ensures resilience by distributing workloads across multiple Availability Zones. This minimizes downtime in case of failures. Implementing automation, agility, and elasticity contribute to performance and efficiency but do not directly address failure tolerance.",
  },
  {
    id: uuidv5("aws-question-997", uuidv5.URL),
    text: "Which AWS services can host a Microsoft SQL Server database? (Select TWO)",
    options: [
      "Amazon EC2",
      "Amazon Relational Database Service (Amazon RDS)",
      "Amazon Aurora",
      "Amazon Redshift",
      "Amazon S3",
    ],
    correctAnswers: [0, 1],
    explanation:
      "Amazon EC2 allows self-managed SQL Server installations, while Amazon RDS provides a managed SQL Server database service. Amazon Aurora is a different relational database engine, Redshift is for data warehousing, and S3 is object storage.",
  },
  {
    id: uuidv5("aws-question-998", uuidv5.URL),
    text: "Which of the following inspects AWS environments to find opportunities that can save money for users and also improve system performance?",
    options: [
      "AWS Cost Explorer",
      "AWS Trusted Advisor",
      "Consolidated billing",
      "Detailed billing",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Trusted Advisor analyzes AWS environments for cost savings, security, and performance improvements. Cost Explorer helps visualize costs, Consolidated Billing manages multiple accounts, and Detailed Billing provides raw billing data.",
  },
  {
    id: uuidv5("aws-question-999", uuidv5.URL),
    text: "Which of the following Amazon EC2 pricing models allow customers to use existing server-bound software licenses?",
    options: [
      "Spot Instances",
      "Reserved Instances",
      "Dedicated Hosts",
      "On-Demand Instances",
    ],
    correctAnswers: [2],
    explanation:
      "Dedicated Hosts allow customers to bring their own software licenses by providing a dedicated physical server. Spot and On-Demand Instances do not guarantee dedicated hardware, and Reserved Instances are pricing commitments without license-specific accommodations.",
  },
  {
    id: uuidv5("aws-question-1000", uuidv5.URL),
    text: "Which AWS characteristics make AWS cost effective for a workload with dynamic user demand? (Select TWO)",
    options: [
      "High availability",
      "Shared security model",
      "Elasticity",
      "Pay-as-you-go pricing",
      "Reliability",
    ],
    correctAnswers: [2, 3],
    explanation:
      "Elasticity allows AWS to scale resources up or down as needed, optimizing costs, while pay-as-you-go pricing ensures customers pay only for what they use. High availability and reliability improve service uptime but do not directly impact cost efficiency.",
  },
  {
    id: uuidv5("aws-question-1001", uuidv5.URL),
    text: "Which service enables risk auditing by continuously monitoring and logging account activity, including user actions in the AWS Management Console and AWS SDKs?",
    options: [
      "Amazon CloudWatch",
      "AWS CloudTrail",
      "AWS Config",
      "AWS Health",
    ],
    correctAnswers: [1],
    explanation:
      "AWS CloudTrail provides a detailed record of AWS account activity, allowing security auditing and compliance monitoring. CloudWatch monitors performance metrics, AWS Config tracks configuration changes, and AWS Health provides service status updates.",
  },
];

export const exam14: Question[] = [
  {
    id: uuidv5("aws-question-1002", uuidv5.URL),
    text: "Which storage service can be used as a low-cost option for hosting static websites?",
    options: [
      "Amazon Glacier",
      "Amazon DynamoDB",
      "Amazon Elastic File System (Amazon EFS)",
      "Amazon Simple Storage Service (Amazon S3)",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon S3 provides a low-cost, scalable, and highly available solution for hosting static websites. Unlike Amazon Glacier, which is intended for archival storage, Amazon DynamoDB, which is a NoSQL database, and Amazon EFS, which is a scalable file system for EC2 instances, Amazon S3 is specifically designed to serve static content over the web.",
  },
  {
    id: uuidv5("aws-question-1003", uuidv5.URL),
    text: "Which Amazon EC2 instance pricing model can provide discounts of up to 90%?",
    options: [
      "Reserved Instances",
      "On-Demand",
      "Dedicated Hosts",
      "Spot Instances",
    ],
    correctAnswers: [3],
    explanation:
      "Spot Instances allow customers to bid on unused EC2 capacity at significantly reduced rates, offering discounts of up to 90%. Reserved Instances offer discounts for long-term commitments but not at such high rates. On-Demand instances are billed at standard rates without discounts, and Dedicated Hosts provide physical servers for compliance needs but are not cost-efficient in comparison.",
  },
  {
    id: uuidv5("aws-question-1004", uuidv5.URL),
    text: "What is the AWS customer responsible for according to the AWS shared responsibility model?",
    options: [
      "Physical access controls",
      "Data encryption",
      "Secure disposal of storage devices",
      "Environmental risk management",
    ],
    correctAnswers: [1],
    explanation:
      "Under the AWS Shared Responsibility Model, AWS is responsible for security of the cloud (e.g., physical access controls, infrastructure security), while customers are responsible for security in the cloud, including data encryption and access management. Secure disposal of storage devices and environmental risk management are AWS's responsibility.",
  },
  {
    id: uuidv5("aws-question-1005", uuidv5.URL),
    text: "Which of the following AWS Cloud services can be used to run a customer-managed relational database?",
    options: [
      "Amazon EC2",
      "Amazon Route 53",
      "Amazon ElastiCache",
      "Amazon DynamoDB",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon EC2 allows customers to run their own relational database instances, providing full control over configuration, performance, and maintenance. Route 53 is a DNS service, ElastiCache is for caching, and DynamoDB is a NoSQL database.",
  },
  {
    id: uuidv5("aws-question-1006", uuidv5.URL),
    text: "A company is looking for a scalable data warehouse solution. Which of the following AWS solutions would meet the company's needs?",
    options: [
      "Amazon Simple Storage Service (Amazon S3)",
      "Amazon DynamoDB",
      "Amazon Kinesis",
      "Amazon Redshift",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon Redshift is AWS's managed data warehouse service, optimized for large-scale data analytics. S3 is an object storage service, DynamoDB is a NoSQL database, and Kinesis is designed for real-time data streaming rather than warehousing.",
  },
  {
    id: uuidv5("aws-question-1007", uuidv5.URL),
    text: "Which statement best describes Elastic Load Balancing?",
    options: [
      "It translates a domain name into an IP address using DNS.",
      "It distributes incoming application traffic across one or more Amazon EC2 instances.",
      "It collects metrics on connected Amazon EC2 instances.",
      "It automatically adjusts the number of Amazon EC2 instances to support incoming traffic.",
    ],
    correctAnswers: [1],
    explanation:
      "Elastic Load Balancing (ELB) distributes traffic across multiple EC2 instances to improve application availability and fault tolerance. DNS translation is performed by Route 53, and autoscaling is handled separately by Auto Scaling Groups.",
  },
  {
    id: uuidv5("aws-question-1008", uuidv5.URL),
    text: "Which of the following are valid ways for a customer to interact with AWS services? (Select TWO.)",
    options: [
      "Command line interface",
      "On-premises",
      "Software Development Kits",
      "Software-as-a-service",
      "Hybrid",
    ],
    correctAnswers: [0, 2],
    explanation:
      "Customers can interact with AWS services through the AWS Command Line Interface (CLI) and Software Development Kits (SDKs). On-premises is a deployment model, SaaS refers to software applications rather than AWS interaction, and Hybrid refers to a mix of cloud and on-premises solutions.",
  },
  {
    id: uuidv5("aws-question-1009", uuidv5.URL),
    text: "The AWS Cloud's multiple Regions are an example of:",
    options: [
      "Agility",
      "Global infrastructure",
      "Elasticity",
      "Pay-as-you-go pricing",
    ],
    correctAnswers: [1],
    explanation:
      "AWS's multiple Regions provide a globally distributed infrastructure that enhances availability and fault tolerance. Agility refers to the ability to rapidly deploy solutions, elasticity relates to scaling resources, and pay-as-you-go pricing refers to AWS’s billing model.",
  },
  {
    id: uuidv5("aws-question-1010", uuidv5.URL),
    text: "Which of the following AWS services can be used to serve large amounts of online video content with the lowest possible latency? (Select TWO.)",
    options: [
      "AWS Storage Gateway",
      "Amazon S3",
      "Amazon Elastic File System (EFS)",
      "Amazon Glacier",
      "Amazon CloudFront",
    ],
    correctAnswers: [1, 4],
    explanation:
      "Amazon S3 provides scalable storage for video files, while Amazon CloudFront is a Content Delivery Network (CDN) that caches and delivers content closer to users, reducing latency. AWS Storage Gateway is for hybrid storage, EFS is a file system, and Amazon Glacier is for archival storage, making them unsuitable for video streaming.",
  },
  {
    id: uuidv5("aws-question-1011", uuidv5.URL),
    text: "Web servers running on Amazon EC2 access a legacy application running in a corporate data center. What term would describe this model?",
    options: [
      "Cloud-native",
      "Partner network",
      "Hybrid architecture",
      "Infrastructure as a service",
    ],
    correctAnswers: [2],
    explanation:
      "A hybrid architecture combines on-premises infrastructure with cloud resources. Cloud-native refers to applications built specifically for the cloud, partner network refers to AWS partners, and Infrastructure as a Service (IaaS) refers to cloud-provided compute and storage rather than integration models.",
  },
  {
    id: uuidv5("aws-question-1012", uuidv5.URL),
    text: "What is the benefit of using AWS managed services, such as Amazon ElastiCache and Amazon Relational Database Service (Amazon RDS)?",
    options: [
      "They require the customer to monitor and replace failing instances.",
      "They have better performance than customer-managed services.",
      "They simplify patching and updating underlying OSs.",
      "They do not require the customer to optimize instance type or size selections.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS managed services handle infrastructure tasks like patching and updates, freeing customers from these operational burdens. Option A is incorrect because AWS manages instance failures. B is incorrect because while managed services provide operational efficiency, performance depends on use case and configuration. D is incorrect because customers still need to optimize resources for their needs.",
  },
  {
    id: uuidv5("aws-question-1013", uuidv5.URL),
    text: "Which service provides a virtually unlimited amount of online highly durable object storage?",
    options: [
      "Amazon Redshift",
      "Amazon Elastic File System (Amazon EFS)",
      "Amazon Elastic Container Service (Amazon ECS)",
      "Amazon S3",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon S3 is designed for unlimited object storage with high durability. Redshift (A) is a data warehouse, EFS (B) is a scalable file system for Linux, and ECS (C) is a container orchestration service, none of which are suited for large-scale object storage.",
  },
  {
    id: uuidv5("aws-question-1014", uuidv5.URL),
    text: "Which of the following Identity and Access Management (IAM) entities is associated with an access key ID and secret access key when using AWS Command Line Interface (AWS CLI)?",
    options: ["IAM group", "IAM user", "IAM role", "IAM policy"],
    correctAnswers: [1],
    explanation:
      "IAM users can be assigned long-term access keys for AWS CLI and SDKs. IAM groups (A) are collections of users, IAM roles (C) are temporary credentials for AWS services, and IAM policies (D) define permissions but don't provide credentials.",
  },
  {
    id: uuidv5("aws-question-1015", uuidv5.URL),
    text: "Which of the following security-related services does AWS offer? (Select TWO.)",
    options: [
      "Multi-factor authentication physical tokens",
      "AWS Trusted Advisor security checks",
      "Data encryption",
      "Automated penetration testing",
      "Amazon S3 copyrighted content detection",
    ],
    correctAnswers: [1, 2],
    explanation:
      "AWS Trusted Advisor helps improve security, and AWS provides encryption tools for data protection. Option A is incorrect because AWS supports MFA but doesn’t provide physical tokens directly. D is incorrect because AWS does not conduct automated penetration tests. E is incorrect because Amazon S3 does not monitor copyrighted content.",
  },
  {
    id: uuidv5("aws-question-1016", uuidv5.URL),
    text: "Which AWS managed service is used to host databases?",
    options: ["AWS Batch", "AWS Artifact", "AWS Data Pipeline", "Amazon RDS"],
    correctAnswers: [3],
    explanation:
      "Amazon RDS is a managed database service for relational databases. AWS Batch (A) runs batch computing jobs, AWS Artifact (B) provides compliance reports, and AWS Data Pipeline (C) automates data movement.",
  },
  {
    id: uuidv5("aws-question-1017", uuidv5.URL),
    text: "Which AWS service provides a simple and scalable shared file storage solution for use with Linux-based AWS and on-premises servers?",
    options: ["Amazon S3", "Amazon Glacier", "Amazon EBS", "Amazon EFS"],
    correctAnswers: [3],
    explanation:
      "Amazon EFS provides a scalable, shared file system for Linux workloads. S3 (A) is object storage, Glacier (B) is for cold storage, and EBS (C) is block storage for EC2.",
  },
  {
    id: uuidv5("aws-question-1018", uuidv5.URL),
    text: "When architecting cloud applications, which of the following are a key design principle?",
    options: [
      "Use the largest instance possible",
      "Provision capacity for peak load",
      "Use the Scrum development process",
      "Implement elasticity",
    ],
    correctAnswers: [3],
    explanation:
      "Elasticity ensures resources scale dynamically to match demand. Option A is incorrect as using the largest instance may waste resources. B is outdated since cloud computing eliminates the need for peak provisioning. C is a development methodology, not a cloud architecture principle.",
  },
  {
    id: uuidv5("aws-question-1019", uuidv5.URL),
    text: "Which AWS service should be used for long-term, low-cost storage of data backups?",
    options: ["Amazon RDS", "Amazon Glacier", "AWS Snowball", "AWS EBS"],
    correctAnswers: [1],
    explanation:
      "Amazon S3 Glacier provides low-cost archival storage. RDS (A) is a database service, Snowball (C) is for data migration, and EBS (D) is persistent block storage.",
  },
  {
    id: uuidv5("aws-question-1020", uuidv5.URL),
    text: "Which task is AWS responsible for in the shared responsibility model for security and compliance?",
    options: [
      "Granting access to individuals and services",
      "Encrypting data in transit",
      "Updating Amazon EC2 host firmware",
      "Updating operating systems",
    ],
    correctAnswers: [2],
    explanation:
      "AWS secures the infrastructure, including encrypting data in transit. Customers are responsible for access control (A), EC2 host firmware updates (C), and OS updates (D).",
  },
  {
    id: uuidv5("aws-question-1021", uuidv5.URL),
    text: "Where should a company go to search software listings from independent software vendors to find, test, buy and deploy software that runs on AWS?",
    options: [
      "AWS Marketplace",
      "Amazon Lumberyard",
      "AWS Artifact",
      "Amazon CloudSearch",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Marketplace provides software listings from vendors. Lumberyard (B) is a game engine, Artifact (C) is for compliance reports, and CloudSearch (D) is a managed search service.",
  },
  {
    id: uuidv5("aws-question-1022", uuidv5.URL),
    text: "Which of the following is a benefit of using the AWS Cloud?",
    options: [
      "Permissive security removes the administrative burden.",
      "Ability to focus on revenue-generating activities.",
      "Control over cloud network hardware.",
      "Choice of specific cloud hardware vendors.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS allows businesses to focus on revenue-generating activities by reducing the need for managing infrastructure. The other options are incorrect as AWS does not remove security concerns (A), does not provide control over physical network hardware (C), and does not allow choice of specific hardware vendors (D).",
  },
  {
    id: uuidv5("aws-question-1023", uuidv5.URL),
    text: "When performing a cost analysis that supports physical isolation of a customer workload, which compute hosting model should be accounted for in the Total Cost of Ownership (TCO)?",
    options: [
      "Dedicated Hosts",
      "Reserved Instances",
      "On-Demand Instances",
      "No Upfront Reserved Instances",
    ],
    correctAnswers: [0],
    explanation:
      "Dedicated Hosts provide physical isolation by allocating an entire physical server for exclusive use, making them a key consideration in TCO calculations. Reserved Instances (B), On-Demand Instances (C), and No Upfront Reserved Instances (D) do not provide the same level of physical isolation.",
  },
  {
    id: uuidv5("aws-question-1024", uuidv5.URL),
    text: "Which AWS service provides the ability to manage infrastructure as code?",
    options: [
      "AWS CodePipeline",
      "AWS CodeDeploy",
      "AWS Direct Connect",
      "AWS CloudFormation",
    ],
    correctAnswers: [3],
    explanation:
      "AWS CloudFormation allows users to define and provision AWS infrastructure as code. CodePipeline (A) is a CI/CD service, CodeDeploy (B) automates application deployment, and Direct Connect (C) is for dedicated network connections.",
  },
  {
    id: uuidv5("aws-question-1025", uuidv5.URL),
    text: "If a customer needs to audit the change management of AWS resources, which of the following AWS services should the customer use?",
    options: [
      "AWS Config",
      "AWS Trusted Advisor",
      "Amazon CloudWatch",
      "Amazon Inspector",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Config continuously monitors AWS resource configurations and supports auditing. Trusted Advisor (B) provides best practice recommendations, CloudWatch (C) is for monitoring, and Inspector (D) assesses security.",
  },
  {
    id: uuidv5("aws-question-1026", uuidv5.URL),
    text: "What is Amazon CloudWatch?",
    options: [
      "A code repository with customizable build and team commit features.",
      "A metrics repository with customizable notification thresholds and channels.",
      "A security configuration repository with threat analytics.",
      "A rule repository of a web application firewall with automated vulnerability prevention features.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon CloudWatch collects and monitors performance metrics. The other options misrepresent its capabilities.",
  },
  {
    id: uuidv5("aws-question-1027", uuidv5.URL),
    text: "Which service allows a company with multiple AWS accounts to combine its usage to obtain volume discounts?",
    options: [
      "AWS Server Migration Service",
      "AWS Organizations",
      "AWS Budgets",
      "AWS Trusted Advisor",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Organizations enables consolidated billing and volume discounts. The other options do not provide this feature.",
  },
  {
    id: uuidv5("aws-question-1028", uuidv5.URL),
    text: "Which of the following services could be used to deploy an application to servers running on-premises? (Select TWO.)",
    options: [
      "AWS Elastic Beanstalk",
      "AWS OpsWorks",
      "AWS CodeDeploy",
      "AWS Batch",
      "AWS X-Ray",
    ],
    correctAnswers: [1, 2],
    explanation:
      "AWS OpsWorks and AWS CodeDeploy support on-premises deployments. Elastic Beanstalk (A) is for AWS-based applications, AWS Batch (D) handles batch jobs, and AWS X-Ray (E) is for application tracing.",
  },
  {
    id: uuidv5("aws-question-1029", uuidv5.URL),
    text: "Which Amazon EC2 pricing model adjusts based on supply and demand of EC2 instances?",
    options: [
      "On-Demand Instances",
      "Reserved Instances",
      "Spot Instances",
      "Convertible Reserved Instances",
    ],
    correctAnswers: [2],
    explanation:
      "Spot Instances are priced dynamically based on supply and demand. The other options have fixed or predictable pricing.",
  },
  {
    id: uuidv5("aws-question-1030", uuidv5.URL),
    text: "Which design principles for cloud architecture are recommended when re-architecting a large monolithic application? (Select TWO.)",
    options: [
      "Use manual monitoring.",
      "Use fixed servers.",
      "Implement loose coupling.",
      "Rely on individual components.",
      "Design for scalability.",
    ],
    correctAnswers: [2, 4],
    explanation:
      "Loose coupling and scalability are key principles in cloud architecture. Manual monitoring (A) and fixed servers (B) reduce flexibility, and relying on individual components (D) is vague and not necessarily a best practice.",
  },
  {
    id: uuidv5("aws-question-1031", uuidv5.URL),
    text: "Which is the MINIMUM AWS Support plan that allows for one-hour target response time for support cases?",
    options: ["Enterprise", "Business", "Developer", "Basic"],
    correctAnswers: [1],
    explanation:
      "The Business plan is the minimum AWS Support plan that provides a one-hour response time. Developer and Basic plans do not offer this.",
  },
  {
    id: uuidv5("aws-question-1032", uuidv5.URL),
    text: "Where can AWS compliance and certification reports be downloaded?",
    options: [
      "AWS Artifact",
      "AWS Concierge",
      "AWS Certificate Manager",
      "AWS Trusted Advisor",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Artifact is your go-to, central resource for compliance-related information that matters to you. It provides on-demand access to AWS's security and compliance reports and select online agreements. The AWS SOC 2 report is particularly helpful for completing questionnaires because it provides a comprehensive description of the implementation and operating effectiveness of AWS security controls. Another useful document is the Executive Briefing within the AWS FedRAMP Partner Package.",
  },
  {
    id: uuidv5("aws-question-1033", uuidv5.URL),
    text: "Which AWS service provides a customized view of the health of specific AWS services that power a customer's workloads running on AWS?",
    options: [
      "AWS Service Health Dashboard",
      "AWS X-Ray",
      "AWS Personal Health Dashboard",
      "Amazon CloudWatch",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Personal Health Dashboard provides a personalized view of the performance and availability of the AWS services that you are using, along with alerts that are automatically triggered by changes in the health of these services.",
  },
  {
    id: uuidv5("aws-question-1034", uuidv5.URL),
    text: "Which of the following is an advantage of consolidated billing on AWS?",
    options: [
      "Volume pricing qualification",
      "Shared access permissions",
      "Multiple bills per account",
      "Eliminates the need for tagging",
    ],
    correctAnswers: [0],
    explanation:
      "If you have multiple standalone accounts, your charges might decrease if you add the accounts to an organization. AWS combines usage from all accounts in the organization to qualify you for volume pricing discounts.",
  },
  {
    id: uuidv5("aws-question-1035", uuidv5.URL),
    text: "Which of the following steps should be taken by a customer when conducting penetration testing on AWS?",
    options: [
      "Conduct penetration testing using Amazon Inspector, and then notify AWS support.",
      "Request and wait for approval from the customer's internal security team, and then conduct testing.",
      "Notify AWS support, and then conduct testing immediately.",
      "Request and wait for approval from AWS support, and then conduct testing.",
    ],
    correctAnswers: [3],
    explanation:
      "AWS customers are welcome to carry out security assessments or penetration tests against their AWS infrastructure without prior approval for 8 services.",
  },
  {
    id: uuidv5("aws-question-1036", uuidv5.URL),
    text: "Which of the following AWS features enables a user to launch a pre-configured Amazon Elastic Compute Cloud (Amazon EC2) instance?",
    options: [
      "Amazon Elastic Block Store (Amazon EBS)",
      "Amazon Machine Image",
      "Amazon EC2 Systems Manager",
      "Amazon AppStream 2.0",
    ],
    correctAnswers: [1],
    explanation:
      "To use Amazon EC2, you simply select a pre-configured, templated Amazon Machine Image (AMI) to get up and running immediately. Or create an AMI containing your applications, libraries, data, and associated configuration settings.",
  },
  {
    id: uuidv5("aws-question-1037", uuidv5.URL),
    text: "How would an AWS customer easily apply common access controls to a large set of users?",
    options: [
      "Apply an IAM policy to an IAM group.",
      "Apply an IAM policy to an IAM role.",
      "Apply the same IAM policy to all IAM users with access to the same workload.",
      "Apply an IAM policy to an Amazon Cognito user pool.",
    ],
    correctAnswers: [0],
    explanation:
      "Instead of defining permissions for individual IAM users, it's usually more convenient to create groups that relate to job functions (administrators, developers, accounting, etc.). Next, define the relevant permissions for each group. Finally, assign IAM users to those groups. All the users in an IAM group inherit the permissions assigned to the group.",
  },
  {
    id: uuidv5("aws-question-1038", uuidv5.URL),
    text: "Which AWS Cost Management tool allows you to view the most granular data about your AWS bill?",
    options: [
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Cost and Usage report",
      "AWS Billing dashboard",
    ],
    correctAnswers: [2],
    explanation:
      "The Cost & Usage Report is your one-stop-shop for accessing the most granular data about your AWS costs and usage. You can also load your cost and usage information into Amazon Athena, Amazon Redshift, AWS QuickSight, or a tool of your choice.",
  },
  {
    id: uuidv5("aws-question-1039", uuidv5.URL),
    text: "Which of the following can an AWS customer use to launch a new Amazon Relational Database Service (Amazon RDS) cluster? (Select TWO.)",
    options: [
      "AWS Concierge",
      "AWS CloudFormation",
      "Amazon Simple Storage Service (Amazon S3)",
      "Amazon EC2 Auto Scaling",
      "AWS Management Console",
    ],
    correctAnswers: [1, 4],
    explanation:
      "AWS CloudFormation and the AWS Management Console are tools that allow you to launch and manage AWS resources, including Amazon RDS clusters.",
  },
  {
    id: uuidv5("aws-question-1040", uuidv5.URL),
    text: "Which of the following is an AWS Cloud architecture design principle?",
    options: [
      "Implement single points of failure.",
      "Implement loose coupling.",
      "Implement monolithic design.",
      "Implement vertical scaling.",
    ],
    correctAnswers: [1],
    explanation:
      "Loose coupling between services can also be done through asynchronous integration. It involves one component that generates events and another that consumes them. This approach decouples the two components and introduces additional resiliency.",
  },
  {
    id: uuidv5("aws-question-1041", uuidv5.URL),
    text: "Which of the following security measures protect access to an AWS account? (Select TWO.)",
    options: [
      "Enable AWS CloudTrail.",
      "Grant least privilege access to IAM users.",
      "Create one IAM user and share with many developers and users.",
      "Enable Amazon CloudFront.",
      "Activate multi-factor authentication (MFA) for privileged users.",
    ],
    correctAnswers: [1, 4],
    explanation:
      "Granting least privilege access to IAM users and activating multi-factor authentication (MFA) for privileged users are key security measures to protect access to an AWS account.",
  },
  {
    id: uuidv5("aws-question-1042", uuidv5.URL),
    text: "Which service provides a hybrid storage service that enables on-premises applications to seamlessly use cloud storage?",
    options: [
      "Amazon Glacier",
      "AWS Snowball",
      "AWS Storage Gateway",
      "Amazon Elastic Block Storage (Amazon EBS)",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Storage Gateway is a hybrid cloud storage service that gives you on-premises access to virtually unlimited cloud storage. Customers use Storage Gateway to simplify storage management and reduce costs for key hybrid cloud storage use cases.",
  },
  {
    id: uuidv5("aws-question-1043", uuidv5.URL),
    text: "Which of the following services falls under the responsibility of the customer to maintain operating system configuration, security patching, and networking?",
    options: ["Amazon RDS", "Amazon EC2", "Amazon ElastiCache", "AWS Fargate"],
    correctAnswers: [1],
    explanation:
      "The customer is responsible for managing, support, patching and control of the guest operating system and AWS services provided like EC2.",
  },
  {
    id: uuidv5("aws-question-1044", uuidv5.URL),
    text: "Which of the following is an important architectural design principle when designing cloud applications?",
    options: [
      "Use multiple Availability Zones.",
      "Use tightly coupled components.",
      "Use open source software.",
      "Provision extra capacity.",
    ],
    correctAnswers: [0],
    explanation:
      "Data Center resilience is practiced through Availability Zones across data centers that reduce the impact of failures.",
  },
  {
    id: uuidv5("aws-question-1045", uuidv5.URL),
    text: "Which AWS support plan includes a dedicated Technical Account Manager?",
    options: ["Developer", "Enterprise", "Business", "Basic"],
    correctAnswers: [1],
    explanation:
      "The enterprise support plans supports technical account manager. Developer and business support plans are devoid of this facility.",
  },
  {
    id: uuidv5("aws-question-1046", uuidv5.URL),
    text: "Amazon Relational Database Service (Amazon RDS) offers which of the following benefits over traditional database management?",
    options: [
      "AWS manages the data stored in Amazon RDS tables.",
      "AWS manages the maintenance of the operating system.",
      "AWS automatically scales up instance types on demand.",
      "AWS manages the database type.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS manages the maintenance of the operating system for Amazon RDS, which is one of the benefits over traditional database management.",
  },
  {
    id: uuidv5("aws-question-1047", uuidv5.URL),
    text: "Which service is best for storing common database query results, which helps to alleviate database access load?",
    options: [
      "Amazon Machine Learning",
      "Amazon SQS",
      "Amazon ElastiCache",
      "Amazon EC2 Instance Store",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon ElastiCache for Redis is a great choice for implementing a highly available, distributed, and secure in-memory cache to decrease access latency, increase throughput, and ease the load off your relational or NoSQL databases and applications.",
  },
  {
    id: uuidv5("aws-question-1048", uuidv5.URL),
    text: "Which of the following is a component of the shared responsibility model managed entirely by AWS?",
    options: [
      "Patching operating system software",
      "Encrypting data",
      "Enforcing multi-factor authentication",
      "Auditing physical data center assets",
    ],
    correctAnswers: [3],
    explanation:
      "AWS is responsible for auditing physical data center assets and resources since it is the property of Amazon Inc.",
  },
  {
    id: uuidv5("aws-question-1049", uuidv5.URL),
    text: "Which options does AWS make available for customers who want to learn about security in the cloud in an instructor-led setting? (Select TWO.)",
    options: [
      "AWS Trusted Advisor",
      "AWS Online Tech Talks",
      "AWS Blog",
      "AWS Forums",
      "AWS Classroom Training",
    ],
    correctAnswers: [1, 4],
    explanation:
      "AWS Training and Certification offers both digital and classroom training including private on-site training. You can choose to learn online at your own pace or learn from an accredited AWS instructor.",
  },
  {
    id: uuidv5("aws-question-1050", uuidv5.URL),
    text: "Which of the following features can be configured through the Amazon Virtual Private Cloud (Amazon VPC) Dashboard? (Select TWO.)",
    options: [
      "Amazon CloudFront distributions",
      "Amazon Route 53",
      "Security Groups",
      "Subnets",
      "Elastic Load Balancing",
    ],
    correctAnswers: [2, 3],
    explanation:
      "Amazon Virtual Private Cloud (Amazon VPC) lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define. You can configure Security Groups and Subnets through the Amazon VPC Dashboard.",
  },
  {
    id: uuidv5("aws-question-1051", uuidv5.URL),
    text: "If each department within a company has its own AWS account, what is one way to enable consolidated billing?",
    options: [
      "Use AWS Budgets on each account to pay only to budget.",
      "Contact AWS Support for a monthly bill.",
      "Create an AWS Organization from the payer account and invite the other accounts to join.",
      "Put all invoices into one Amazon Simple Storage Service (Amazon S3) bucket, load data into Amazon Redshift, and then run a billing report.",
    ],
    correctAnswers: [2],
    explanation:
      "Creating an AWS Organization from the payer account and inviting the other accounts to join enables consolidated billing.",
  },
];

const exam15: Question[] = [
  {
    id: uuidv5("aws-question-1052", uuidv5.URL),
    text: "How do customers benefit from Amazon's massive economies of scale?",
    options: [
      "Periodic price reductions as the result of Amazon's operational efficiencies",
      "New Amazon EC2 instance types providing the latest hardware",
      "The ability to scale up and down when needed",
      "Increased reliability in the underlying hardware of Amazon EC2 instances",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon's massive economies of scale enable it to reduce operational costs and pass those savings on to customers in the form of periodic price reductions. The other options refer to other benefits of AWS but do not directly relate to economies of scale.",
  },
  {
    id: uuidv5("aws-question-1053", uuidv5.URL),
    text: "Which AWS services can be used to gather information about AWS account activity? (Choose TWO)",
    options: [
      "Amazon CloudFront",
      "AWS Cloud9",
      "AWS CloudTrail",
      "AWS CloudHSM",
      "Amazon CloudWatch",
    ],
    correctAnswers: [2, 4],
    explanation:
      "AWS CloudTrail logs account activity, helping track API calls and actions taken. Amazon CloudWatch provides monitoring and operational insights by collecting and analyzing logs and metrics. The other options do not directly provide account activity tracking.",
  },
  {
    id: uuidv5("aws-question-1054", uuidv5.URL),
    text: "Which of the following common IT tasks can AWS cover to free up company IT resources? (Choose TWO)",
    options: [
      "Patching database software",
      "Testing application releases",
      "Backing up databases",
      "Creating database schema",
      "Running penetration tests",
    ],
    correctAnswers: [0, 2],
    explanation:
      "AWS services like RDS automate database patching and backups, freeing up IT resources. Creating a database schema and testing applications remain developer responsibilities, and penetration testing requires additional approval from AWS.",
  },
  {
    id: uuidv5("aws-question-1055", uuidv5.URL),
    text: "In which scenario should Amazon EC2 Spot Instances be used?",
    options: [
      "A company wants to move its main website to AWS from an on-premises web server.",
      "A company has a number of application services whose Service Level Agreement (SLA) requires 99.999% uptime.",
      "A company's heavily used legacy database is currently running on-premises.",
      "A company has a number of infrequent, interruptible jobs that are currently using On-Demand Instances.",
    ],
    correctAnswers: [3],
    explanation:
      "EC2 Spot Instances are ideal for interruptible workloads that can tolerate occasional disruptions, offering cost savings. The other scenarios require stable, high-availability infrastructure that Spot Instances cannot guarantee.",
  },
  {
    id: uuidv5("aws-question-1056", uuidv5.URL),
    text: "Which AWS feature should a customer leverage to achieve high availability of an application?",
    options: [
      "AWS Direct Connect",
      "Availability Zones",
      "Data centers",
      "Amazon Virtual Private Cloud (Amazon VPC)",
    ],
    correctAnswers: [1],
    explanation:
      "Availability Zones (AZs) provide redundancy and fault tolerance for applications, ensuring high availability. Direct Connect provides private network connections, VPCs offer isolated networking, and data centers are part of AWS infrastructure but do not ensure high availability on their own.",
  },
  {
    id: uuidv5("aws-question-1057", uuidv5.URL),
    text: "Which is the minimum AWS Support plan that includes Infrastructure Event Management without additional costs?",
    options: ["Enterprise", "Business", "Developer", "Basic"],
    correctAnswers: [1],
    explanation:
      "The Business Support plan includes Infrastructure Event Management at no additional cost, while Developer and Basic plans do not offer this feature. Enterprise Support also includes it but is a higher-tier plan.",
  },
  {
    id: uuidv5("aws-question-1058", uuidv5.URL),
    text: "Which AWS service can serve a static website?",
    options: ["Amazon S3", "Amazon Route 53", "Amazon QuickSight", "AWS X-Ray"],
    correctAnswers: [0],
    explanation:
      "Amazon S3 can host static websites, delivering static content directly to users. Route 53 provides DNS services, QuickSight is a business intelligence tool, and X-Ray is used for application tracing.",
  },
  {
    id: uuidv5("aws-question-1059", uuidv5.URL),
    text: "How does AWS shorten the time to provision IT resources?",
    options: [
      "It supplies an online IT ticketing platform for resource requests.",
      "It supports automatic code validation services.",
      "It provides the ability to programmatically provision existing resources.",
      "It automates the resource request process from a company's IT vendor list.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS allows programmatic provisioning of resources using tools like AWS CloudFormation and APIs, reducing manual intervention. The other options do not describe AWS’s primary approach to rapid resource provisioning.",
  },
  {
    id: uuidv5("aws-question-1060", uuidv5.URL),
    text: "What can AWS edge locations be used for? (Choose TWO)",
    options: [
      "Hosting applications",
      "Delivering content closer to users",
      "Running NoSQL database caching services",
      "Reducing traffic on the server by caching responses",
      "Sending notification messages to end users",
    ],
    correctAnswers: [1, 3],
    explanation:
      "AWS edge locations, used by CloudFront, reduce latency by caching content closer to users and help reduce server traffic by serving cached responses. They do not host applications, run NoSQL databases, or send notifications.",
  },
  {
    id: uuidv5("aws-question-1061", uuidv5.URL),
    text: "Which of the following can limit Amazon Simple Storage Service (Amazon S3) bucket access to specific users?",
    options: [
      "A public and private key-pair",
      "Amazon Inspector",
      "AWS Identity and Access Management (IAM) policies",
      "Security Groups",
    ],
    correctAnswers: [2],
    explanation:
      "IAM policies control access to S3 buckets by defining user permissions. Public-private key pairs are used for encryption, Amazon Inspector is a security assessment tool, and Security Groups control network access but not bucket access.",
  },
  {
    id: uuidv5("aws-question-1062", uuidv5.URL),
    text: "A solution that is able to support growth in users, traffic, or data size with no drop in performance aligns with which cloud architecture principle?",
    options: [
      "Think parallel",
      "Implement elasticity",
      "Decouple your components",
      "Design for failure",
    ],
    correctAnswers: [1],
    explanation:
      "Implementing elasticity allows a system to scale with increasing demand while maintaining performance. The other options focus on other architectural best practices but do not specifically address scalability.",
  },
  {
    id: uuidv5("aws-question-1063", uuidv5.URL),
    text: "Which of the following tasks is the responsibility of AWS?",
    options: [
      "Encrypting client-side data",
      "Configuring AWS Identity and Access Management (IAM) roles",
      "Securing the Amazon EC2 hypervisor",
      "Setting user password policies",
    ],
    correctAnswers: [2],
    explanation:
      "AWS is responsible for securing the underlying infrastructure, including the EC2 hypervisor. Customers are responsible for configuring IAM, encrypting data, and setting password policies.",
  },
  {
    id: uuidv5("aws-question-1064", uuidv5.URL),
    text: "One benefit of On-Demand Amazon Elastic Compute Cloud (Amazon EC2) pricing is:",
    options: [
      "The ability to bid for a lower hourly cost.",
      "Paying a daily rate regardless of time used.",
      "Paying only for time used.",
      "Pre-paying for instances and paying a lower hourly rate.",
    ],
    correctAnswers: [2],
    explanation:
      "On-Demand instances allow users to pay only for the time they use, without long-term commitments or upfront costs, making them flexible for varying workloads.",
  },
  {
    id: uuidv5("aws-question-1065", uuidv5.URL),
    text: "An administrator needs to rapidly deploy a popular IT solution and start using it immediately. Where can the administrator find assistance?",
    options: [
      "AWS Well-Architected Framework documentation",
      "Amazon CloudFront",
      "AWS CodeCommit",
      "AWS Quick Start reference deployments",
    ],
    correctAnswers: [3],
    explanation:
      "AWS Quick Starts provide pre-configured, automated deployments for popular IT solutions, reducing setup time and complexity.",
  },
  {
    id: uuidv5("aws-question-1066", uuidv5.URL),
    text: "Which of the following services is in the category of AWS serverless platform?",
    options: [
      "Amazon EMR",
      "Elastic Load Balancing",
      "AWS Lambda",
      "AWS Mobile Hub",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Lambda is a core service in AWS's serverless platform, allowing users to run code without provisioning or managing servers.",
  },
  {
    id: uuidv5("aws-question-1067", uuidv5.URL),
    text: "Which services are parts of the AWS serverless platform?",
    options: [
      "Amazon EC2, Amazon S3, Amazon Athena",
      "Amazon Kinesis, Amazon SQS, Amazon EMR",
      "AWS Step Functions, Amazon DynamoDB, Amazon SNS",
      "Amazon Athena, Amazon Cognito, Amazon EC2",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Step Functions, Amazon DynamoDB, and Amazon SNS are serverless services that provide workflow orchestration, database, and messaging capabilities without requiring server management.",
  },
  {
    id: uuidv5("aws-question-1068", uuidv5.URL),
    text: "Under the shared responsibility model, which of the following is a shared control between a customer and AWS?",
    options: [
      "Physical controls",
      "Patch management",
      "Zone security",
      "Data center auditing",
    ],
    correctAnswers: [1],
    explanation:
      "Patch management is a shared control: AWS patches its infrastructure, while customers are responsible for patching their own OS and applications.",
  },
  {
    id: uuidv5("aws-question-1069", uuidv5.URL),
    text: "What technology enables compute capacity to adjust as loads change?",
    options: [
      "Load balancing",
      "Automatic failover",
      "Round robin",
      "Auto Scaling",
    ],
    correctAnswers: [3],
    explanation:
      "Auto Scaling automatically adjusts compute resources based on demand, ensuring optimal performance and cost efficiency.",
  },
  {
    id: uuidv5("aws-question-1070", uuidv5.URL),
    text: "Which AWS services are defined as global instead of regional? (Choose TWO)",
    options: [
      "Amazon Route 53",
      "Amazon EC2",
      "Amazon S3",
      "Amazon CloudFront",
      "Amazon DynamoDB",
    ],
    correctAnswers: [0, 3],
    explanation:
      "Amazon Route 53 and Amazon CloudFront are global services, meaning they are not restricted to specific AWS regions.",
  },
  {
    id: uuidv5("aws-question-1071", uuidv5.URL),
    text: "What can AWS edge locations be used for? (Choose TWO)",
    options: [
      "Hosting applications",
      "Delivering content closer to users",
      "Running NoSQL database caching services",
      "Reducing traffic on the server by caching responses",
      "Sending notification messages to end users",
    ],
    correctAnswers: [1, 3],
    explanation:
      "Edge locations, used by CloudFront, cache content closer to users and reduce the load on origin servers by serving cached responses.",
  },
  {
    id: uuidv5("aws-question-1072", uuidv5.URL),
    text: "Which AWS service would you use to obtain compliance reports and certificates?",
    options: [
      "AWS Artifact",
      "AWS Lambda",
      "Amazon Inspector",
      "AWS Certificate Manager",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Artifact is the central resource for compliance-related information, providing access to AWS' security and compliance reports and agreements. Other options do not offer compliance reports or certifications.",
  },
  {
    id: uuidv5("aws-question-1073", uuidv5.URL),
    text: "Under the shared responsibility model, which of the following tasks are the responsibility of the AWS customer? (Select TWO.)",
    options: [
      "Ensuring that application data is encrypted at rest",
      "Ensuring that AWS NTP servers are set to the correct time",
      "Ensuring that users have received security training in the use of AWS services",
      "Ensuring that access to data centers is restricted",
      "Ensuring that hardware is disposed of properly",
    ],
    correctAnswers: [0, 2],
    explanation:
      "Customers are responsible for securing their data and training their users on security best practices. AWS manages the infrastructure, including hardware disposal and physical security of data centers.",
  },
  {
    id: uuidv5("aws-question-1074", uuidv5.URL),
    text: "Which AWS service can be used to manually launch instances based on resource requirements?",
    options: ["Amazon EBS", "Amazon S3", "Amazon EC2", "Amazon ECS"],
    correctAnswers: [2],
    explanation:
      "Amazon EC2 allows users to manually launch instances with customizable compute, storage, and networking options. Other services do not provide direct instance launching capabilities.",
  },
  {
    id: uuidv5("aws-question-1075", uuidv5.URL),
    text: "A company is migrating an application that is running non-interruptible workloads for a three-year time frame. Which pricing construct would provide the MOST cost-effective solution?",
    options: [
      "Amazon EC2 Spot Instances",
      "Amazon EC2 Dedicated Instances",
      "Amazon EC2 On-Demand Instances",
      "Amazon EC2 Reserved Instances",
    ],
    correctAnswers: [3],
    explanation:
      "Reserved Instances offer significant cost savings for long-term, predictable workloads compared to On-Demand and Dedicated Instances. Spot Instances are not suitable for non-interruptible workloads.",
  },
  {
    id: uuidv5("aws-question-1076", uuidv5.URL),
    text: "The financial benefits of using AWS are: (Select TWO.)",
    options: [
      "Reduced Total Cost of Ownership (TCO)",
      "Increased capital expenditure (capex)",
      "Reduced operational expenditure (opex)",
      "Deferred payment plans for startups",
      "Business credit lines for startups",
    ],
    correctAnswers: [0, 2],
    explanation:
      "AWS helps reduce both TCO and opex by eliminating upfront infrastructure investments and providing a pay-as-you-go model. Capex is reduced rather than increased, and AWS does not directly offer financial credit lines.",
  },
  {
    id: uuidv5("aws-question-1077", uuidv5.URL),
    text: "Which of the following is entirely the responsibility of AWS, according to the AWS shared responsibility model?",
    options: [
      "Patching of the guest operating system",
      "Security awareness and training",
      "Physical and environmental controls",
      "Development of an IAM password policy",
    ],
    correctAnswers: [2],
    explanation:
      "AWS is responsible for securing its infrastructure, including physical and environmental security. Customers are responsible for OS patching, security training, and IAM policies.",
  },
  {
    id: uuidv5("aws-question-1078", uuidv5.URL),
    text: "Which AWS service allows companies to connect an Amazon VPC to an on-premises data center? (Select TWO)",
    options: [
      "AWS VPN",
      "Amazon Redshift",
      "API Gateway",
      "Amazon Direct Connect",
    ],
    correctAnswers: [0, 3],
    explanation:
      "AWS VPN and Direct Connect enable secure connectivity between on-premises data centers and AWS. Other services like Redshift and API Gateway do not provide network connectivity solutions.",
  },
  {
    id: uuidv5("aws-question-1079", uuidv5.URL),
    text: "A company wants to reduce the physical compute footprint that developers use to run code. Which service would meet that need by enabling serverless architectures?",
    options: [
      "Amazon Elastic Compute Cloud (Amazon EC2)",
      "AWS Lambda",
      "Amazon DynamoDB",
      "AWS CodeCommit",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Lambda allows developers to run code without provisioning or managing servers, reducing physical compute requirements. Other services do not provide serverless computing.",
  },
  {
    id: uuidv5("aws-question-1080", uuidv5.URL),
    text: "Which AWS service provides alerts when an AWS event may impact a company's AWS resources?",
    options: [
      "AWS Personal Health Dashboard",
      "AWS Service Health Dashboard",
      "AWS Trusted Advisor",
      "AWS Infrastructure Event Management",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Personal Health Dashboard provides personalized alerts about events that might impact a company's AWS resources. Other services provide broader or advisory information.",
  },
  {
    id: uuidv5("aws-question-1081", uuidv5.URL),
    text: "Which of the following are categories of AWS Trusted Advisor? (Select TWO.)",
    options: [
      "Fault Tolerance",
      "Instance Usage",
      "Infrastructure",
      "Performance",
      "Storage Capacity",
    ],
    correctAnswers: [0, 3],
    explanation:
      "AWS Trusted Advisor provides recommendations in five categories, including Performance and Fault Tolerance. Instance Usage and Storage Capacity are not explicit categories.",
  },
  {
    id: uuidv5("aws-question-1082", uuidv5.URL),
    text: "Which of the following services falls under the responsibility of the customer to maintain operating system configuration, security patching, and networking?",
    options: ["Amazon RDS", "Amazon EC2", "Amazon ElastiCache", "AWS Fargate"],
    correctAnswers: [1],
    explanation:
      "The customer is responsible for managing, support, patching and control of the guest operating system and AWS services provided like EC2.",
  },
  {
    id: uuidv5("aws-question-1083", uuidv5.URL),
    text: "A company will be moving from an on-premises data center to the AWS Cloud. What would be one financial difference after the move?",
    options: [
      "Moving from variable operational expense (opex) to upfront capital expense (capex).",
      "Moving from upfront capital expense (capex) to variable capital expense (capex).",
      "Moving from upfront capital expense (capex) to variable operational expense (opex).",
      "Elimination of upfront capital expense (capex) and elimination of variable operational expense (opex).",
    ],
    correctAnswers: [2],
    explanation:
      "AWS follows a pay-as-you-go model, which moves businesses from a capital expense (CapEx) model to an operational expense (OpEx) model, allowing for variable costs instead of large upfront investments.",
  },
  {
    id: uuidv5("aws-question-1084", uuidv5.URL),
    text: "How should a customer forecast the future costs for running a new web application?",
    options: [
      "Amazon Aurora Backtrack",
      "Amazon CloudWatch Billing Alarms",
      "AWS Simple Monthly Calculator",
      "AWS Cost and Usage report",
    ],
    correctAnswers: [2],
    explanation:
      "The AWS Simple Monthly Calculator helps customers estimate their future costs by allowing them to model different configurations and usage scenarios.",
  },
  {
    id: uuidv5("aws-question-1085", uuidv5.URL),
    text: "Which is the MINIMUM AWS Support plan that provides technical support through phone calls?",
    options: ["Enterprise", "Business", "Developer", "Basic"],
    correctAnswers: [1],
    explanation:
      "The Business support plan is the minimum AWS Support plan that provides technical support via phone calls.",
  },
  {
    id: uuidv5("aws-question-1086", uuidv5.URL),
    text: "According to the AWS shared responsibility model, what is the sole responsibility of AWS?",
    options: [
      "Application security",
      "Edge location management",
      "Patch management",
      "Client-side data",
    ],
    correctAnswers: [1],
    explanation:
      "Client-side data and application security are the customer's responsibility. Patch management is a shared responsibility. AWS is solely responsible for managing edge locations.",
  },
  {
    id: uuidv5("aws-question-1087", uuidv5.URL),
    text: "Which AWS IAM feature is used to associate a set of permissions with multiple users?",
    options: [
      "Multi-factor authentication",
      "Groups",
      "Password policies",
      "Access keys",
    ],
    correctAnswers: [1],
    explanation:
      "IAM Groups allow you to assign permissions to multiple users at once, making permission management more efficient.",
  },
  {
    id: uuidv5("aws-question-1088", uuidv5.URL),
    text: "Which of the following are benefits of the AWS Cloud? (Choose two.)",
    options: [
      "Unlimited uptime",
      "Elasticity",
      "Agility",
      "Colocation",
      "Capital expenses",
    ],
    correctAnswers: [1, 2],
    explanation:
      "Elasticity allows AWS resources to scale up or down as needed, and agility enables businesses to innovate faster and adapt quickly to market demands.",
  },
  {
    id: uuidv5("aws-question-1089", uuidv5.URL),
    text: "Which of the following can a customer use to enable single sign-on (SSO) to the AWS Console?",
    options: [
      "Amazon Connect",
      "AWS Directory Service",
      "Amazon Pinpoint",
      "Amazon Rekognition",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Directory Service provides integration with existing directories, enabling single sign-on (SSO) to the AWS Console.",
  },
  {
    id: uuidv5("aws-question-1090", uuidv5.URL),
    text: "What are the multiple, isolated locations within an AWS Region that are connected by low-latency networks called?",
    options: [
      "AWS Direct Connects",
      "Amazon VPCs",
      "Edge locations",
      "Availability Zones",
    ],
    correctAnswers: [3],
    explanation:
      "Availability Zones are the isolated locations within an AWS Region, connected by low-latency links to ensure high availability and fault tolerance.",
  },
  {
    id: uuidv5("aws-question-1091", uuidv5.URL),
    text: "Which of the following benefits does the AWS Compliance program provide to AWS customers? (Choose two.)",
    options: [
      "It verifies that hosted workloads are automatically compliant with the controls of supported compliance frameworks.",
      "AWS is responsible for the maintenance of common compliance framework documentation.",
      "It assures customers that AWS is maintaining physical security and data protection.",
      "It ensures the use of compliance frameworks that are being used by other cloud providers.",
      "It will adopt new compliance frameworks as they become relevant to customer workloads.",
    ],
    correctAnswers: [0, 1],
    explanation:
      "AWS Compliance program helps customers by ensuring workloads comply with compliance frameworks and maintaining compliance documentation.",
  },
  {
    id: uuidv5("aws-question-1092", uuidv5.URL),
    text: "Which of the following services provides on-demand access to AWS compliance reports?",
    options: ["AWS IAM", "AWS Artifact", "Amazon GuardDuty", "AWS KMS"],
    correctAnswers: [1],
    explanation:
      "AWS Artifact is a central resource for compliance-related information. It provides on-demand access to AWS' security and compliance reports, including SOC reports, PCI reports, and various certifications. The other options do not provide compliance reports.",
  },
  {
    id: uuidv5("aws-question-1093", uuidv5.URL),
    text: "As part of the AWS shared responsibility model, which of the following operational controls do users fully inherit from AWS?",
    options: [
      "Security management of data center",
      "Patch management",
      "Configuration management",
      "User and access management",
    ],
    correctAnswers: [0],
    explanation:
      "AWS is responsible for the security of the cloud, including data center security. Customers are responsible for security in the cloud, which includes user and access management, configuration management, and patching within their environment.",
  },
  {
    id: uuidv5("aws-question-1094", uuidv5.URL),
    text: "When comparing AWS Cloud with on-premises Total Cost of Ownership, which expenses must be considered? (Choose two.)",
    options: [
      "Software development",
      "Project management",
      "Storage hardware",
      "Physical servers",
      "Antivirus software license",
    ],
    correctAnswers: [2, 3],
    explanation:
      "When moving from on-premises to AWS, costs such as physical servers and storage hardware are eliminated, as AWS provides these resources. Software development and project management remain separate costs.",
  },
  {
    id: uuidv5("aws-question-1095", uuidv5.URL),
    text: "Under the shared responsibility model, which of the following tasks are the responsibility of the customer? (Choose two.)",
    options: [
      "Maintaining the underlying Amazon EC2 hardware",
      "Managing the VPC network access control lists",
      "Encrypting data in transit and at rest",
      "Replacing failed hard disk drives",
      "Deploying hardware in different Availability Zones",
    ],
    correctAnswers: [1, 2],
    explanation:
      "Customers are responsible for securing their applications, which includes managing VPC network ACLs and encrypting data. AWS is responsible for maintaining hardware and infrastructure.",
  },
  {
    id: uuidv5("aws-question-1096", uuidv5.URL),
    text: "Which scenarios represent the concept of elasticity on AWS? (Choose two.)",
    options: [
      "Scaling the number of Amazon EC2 instances based on traffic.",
      "Resizing Amazon RDS instances as business needs change.",
      "Automatically directing traffic to less-utilized Amazon EC2 instances.",
      "Using AWS compliance documents to accelerate the compliance process.",
      "Having the ability to create and govern environments using code.",
    ],
    correctAnswers: [0, 1],
    explanation:
      "Elasticity refers to the ability to scale resources up or down based on demand. Scaling EC2 instances and resizing RDS instances fit this concept, whereas compliance and governance do not.",
  },
  {
    id: uuidv5("aws-question-1097", uuidv5.URL),
    text: "When is it beneficial for a company to use a Spot Instance?",
    options: [
      "When there is flexibility in when an application needs to run.",
      "When there are mission-critical workloads.",
      "When dedicated capacity is needed.",
      "When an instance should not be stopped.",
    ],
    correctAnswers: [0],
    explanation:
      "Spot Instances are ideal for workloads with flexible start and stop times since they can be interrupted when AWS needs capacity. They are not suitable for mission-critical workloads.",
  },
  {
    id: uuidv5("aws-question-1098", uuidv5.URL),
    text: "A company is considering moving its on-premises data center to AWS. What factors should be included in doing a Total Cost of Ownership (TCO) analysis? (Choose two.)",
    options: [
      "Amazon EC2 instance availability",
      "Power consumption of the data center",
      "Labor costs to replace old servers",
      "Application developer time",
      "Database engine capacity",
    ],
    correctAnswers: [1, 2],
    explanation:
      "TCO analysis includes costs such as power consumption and labor for hardware replacement, which are eliminated when moving to AWS. Other factors are either unrelated or dependent on application choices.",
  },
  {
    id: uuidv5("aws-question-1099", uuidv5.URL),
    text: "How does AWS charge for AWS Lambda?",
    options: [
      "Users bid on the maximum price they are willing to pay per hour.",
      "Users choose a 1-, 3- or 5-year upfront payment term.",
      "Users pay for the required permanent storage on a file system or in a database.",
      "Users pay based on the number of requests and consumed compute resources.",
    ],
    correctAnswers: [3],
    explanation:
      "AWS Lambda pricing is based on the number of requests and the compute time used. There are no upfront commitments or bidding involved.",
  },
  {
    id: uuidv5("aws-question-1100", uuidv5.URL),
    text: "What function do security groups serve related to Amazon EC2 instance security?",
    options: [
      "Act as a virtual firewall for the Amazon EC2 instance.",
      "Secure AWS user accounts with AWS identity and Access Management (IAM) policies.",
      "Provide DDoS protection with AWS Shield.",
      "Use Amazon CloudFront to protect the Amazon EC2 instance.",
    ],
    correctAnswers: [0],
    explanation:
      "Security groups act as a virtual firewall, controlling inbound and outbound traffic for EC2 instances. Other services like IAM, AWS Shield, and CloudFront serve different security purposes.",
  },
  {
    id: uuidv5("aws-question-1101", uuidv5.URL),
    text: "Which disaster recovery scenario offers the lowest probability of downtime?",
    options: [
      "Backup and restore",
      "Pilot light",
      "Warm standby",
      "Multi-site active-active",
    ],
    correctAnswers: [3],
    explanation:
      "A multi-site active-active setup ensures redundancy and minimizes downtime by running workloads across multiple locations. Other methods have varying degrees of recovery time.",
  },
];

export const exam16: Question[] = [
  {
    id: uuidv5("aws-question-1102", uuidv5.URL),
    text: "What will help a company perform a cost benefit analysis of migrating to the AWS Cloud?",
    options: [
      "Cost Explorer",
      "AWS Total Cost of Ownership (TCO) Calculator",
      "AWS Simple Monthly Calculator",
      "AWS Trusted Advisor",
    ],
    correctAnswers: [1],
    explanation:
      "AWS TCO calculators allow you to estimate the cost savings when using AWS and provide a detailed set of reports for executive presentations. The calculators also allow you to modify assumptions to best meet your business needs.",
  },
  {
    id: uuidv5("aws-question-1103", uuidv5.URL),
    text: "Which of the following provides the ability to share the cost benefits of Reserved Instances across AWS accounts?",
    options: [
      "AWS Cost Explorer between AWS accounts",
      "Linked accounts and consolidated billing",
      "Amazon EC2 Reserved Instance Utilization Report",
      "Amazon EC2 Instance Usage Report between AWS accounts",
    ],
    correctAnswers: [1],
    explanation:
      "Reserved Instance discounts apply to accounts in an organization's consolidated billing family if Reserved Instance sharing is enabled. By default, Reserved Instance sharing is on.",
  },
  {
    id: uuidv5("aws-question-1104", uuidv5.URL),
    text: "A company has multiple AWS accounts and wants to simplify and consolidate its billing process. Which AWS service will achieve this?",
    options: [
      "AWS Cost and Usage Reports",
      "AWS Organizations",
      "AWS Cost Explorer",
      "AWS Budgets",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Organizations provides consolidated billing, allowing companies to manage multiple AWS accounts under a single payment method.",
  },
  {
    id: uuidv5("aws-question-1105", uuidv5.URL),
    text: "A company is designing an application hosted in a single AWS Region serving end-users spread across the world. The company wants to provide the end-users low latency access to the application data. Which of the following services will help fulfill this requirement?",
    options: [
      "Amazon CloudFront",
      "AWS Direct Connect",
      "Amazon Route 53 global DNS",
      "Amazon S3 transfer acceleration",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon CloudFront is a content delivery network (CDN) that distributes data globally, providing low-latency access to users.",
  },
  {
    id: uuidv5("aws-question-1106", uuidv5.URL),
    text: "Which of the following deployment models enables customers to fully trade their capital IT expenses for operational expenses?",
    options: ["On-premises", "Hybrid", "Cloud", "Platform as a service"],
    correctAnswers: [2],
    explanation:
      "The cloud model allows businesses to eliminate upfront capital expenses and switch to a pay-as-you-go model.",
  },
  {
    id: uuidv5("aws-question-1107", uuidv5.URL),
    text: "How is asset management on AWS easier than asset management in a physical data center?",
    options: [
      "AWS provides a Configuration Management Database that users can maintain.",
      "AWS performs infrastructure discovery scans on the customer's behalf.",
      "Amazon EC2 automatically generates an asset report and places it in the customer's specified Amazon S3 bucket.",
      "Users can gather asset metadata reliably with a few API calls.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS centrally manages assets through an inventory system that tracks ownership, status, and maintenance.",
  },
  {
    id: uuidv5("aws-question-1108", uuidv5.URL),
    text: "What feature of Amazon RDS helps to create globally redundant databases?",
    options: [
      "Snapshots",
      "Automatic patching and updating",
      "Cross-Region read replicas",
      "Provisioned IOPS",
    ],
    correctAnswers: [2],
    explanation:
      "Cross-Region read replicas allow RDS databases to be replicated across different AWS regions for redundancy and availability.",
  },
  {
    id: uuidv5("aws-question-1109", uuidv5.URL),
    text: "Using AWS Identity and Access Management (IAM) to grant access only to the resources needed to perform a task is a concept known as:",
    options: [
      "Restricted access",
      "As-needed access",
      "Least privilege access",
      "Token access",
    ],
    correctAnswers: [2],
    explanation:
      "The principle of least privilege ensures that users and roles are granted only the minimum permissions necessary to perform their tasks.",
  },
  {
    id: uuidv5("aws-question-1110", uuidv5.URL),
    text: "Which methods can be used to identify AWS costs by departments? (Choose two.)",
    options: [
      "Enable multi-factor authentication for the AWS account root user.",
      "Create separate accounts for each department.",
      "Use Reserved Instances whenever possible.",
      "Use tags to associate each instance with a particular department.",
      "Pay bills using purchase orders.",
    ],
    correctAnswers: [1, 3],
    explanation:
      "Creating separate AWS accounts for each department and tagging resources appropriately allows businesses to track costs effectively.",
  },
  {
    id: uuidv5("aws-question-1111", uuidv5.URL),
    text: "Under the AWS shared responsibility model, customer responsibilities include which one of the following?",
    options: [
      "Securing the hardware, software, facilities, and networks that run all products and services.",
      "Providing certificates, reports, and other documentation directly to AWS customers under NDA.",
      "Configuring the operating system, network, and firewall.",
      "Obtaining industry certifications and independent third-party attestations.",
    ],
    correctAnswers: [2],
    explanation:
      "Customers are responsible for configuring their operating systems, networks, and firewalls in accordance with AWS security best practices.",
  },
  {
    id: uuidv5("aws-question-1112", uuidv5.URL),
    text: "Which managed AWS service provides real-time guidance on AWS security best practices?",
    options: [
      "AWS X-Ray",
      "AWS Trusted Advisor",
      "Amazon CloudWatch",
      "AWS Systems Manager",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Trusted Advisor provides real-time guidance to help optimize resources, improve security, and reduce costs. The other options do not provide security best practice recommendations in real time.",
  },
  {
    id: uuidv5("aws-question-1113", uuidv5.URL),
    text: "Which feature adds elasticity to Amazon EC2 instances to handle the changing demand for workloads?",
    options: [
      "Resource groups",
      "Lifecycle policies",
      "Application Load Balancer",
      "Amazon EC2 Auto Scaling",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon EC2 Auto Scaling dynamically adjusts the number of EC2 instances based on demand, ensuring optimal performance and cost-efficiency. The other options do not directly manage elasticity.",
  },
  {
    id: uuidv5("aws-question-1114", uuidv5.URL),
    text: "Under the AWS shared responsibility model, customers are responsible for which aspects of security in the cloud? (Choose two.)",
    options: [
      "Visualization management",
      "Hardware management",
      "Encryption management",
      "Facilities management",
      "Firewall management",
    ],
    correctAnswers: [2, 4],
    explanation:
      "Customers are responsible for securing their data (encryption management) and configuring firewalls (firewall management). AWS manages the underlying hardware and facilities, while visualization management is not a relevant security responsibility.",
  },
  {
    id: uuidv5("aws-question-1115", uuidv5.URL),
    text: "Which AWS hybrid storage service enables on-premises applications to seamlessly use AWS Cloud storage through standard file-storage protocols?",
    options: [
      "AWS Direct Connect",
      "AWS Snowball",
      "AWS Storage Gateway",
      "AWS Snowball Edge",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Storage Gateway integrates on-premises environments with AWS Cloud storage using standard file-storage protocols. Other options focus on network connectivity (Direct Connect) or physical data transfer (Snowball, Snowball Edge).",
  },
  {
    id: uuidv5("aws-question-1116", uuidv5.URL),
    text: "What is a responsibility of AWS in the shared responsibility model?",
    options: [
      "Updating the network ACLs to block traffic to vulnerable ports.",
      "Patching operating systems running on Amazon EC2 instances.",
      "Updating the firmware on the underlying EC2 hosts.",
      "Updating the security group rules to block traffic to the vulnerable ports.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS is responsible for maintaining the underlying infrastructure, including updating firmware on EC2 hosts. Customers are responsible for managing security groups, network ACLs, and OS patching.",
  },
  {
    id: uuidv5("aws-question-1117", uuidv5.URL),
    text: "Which architectural principle is used when deploying an Amazon Relational Database Service (Amazon RDS) instance in Multiple Availability Zone mode?",
    options: [
      "Implement loose coupling.",
      "Design for failure.",
      "Automate everything that can be automated.",
      "Use services, not servers.",
    ],
    correctAnswers: [1],
    explanation:
      "Multi-AZ deployments ensure high availability by automatically failing over to a standby instance, embodying the 'Design for failure' principle.",
  },
  {
    id: uuidv5("aws-question-1118", uuidv5.URL),
    text: "What does it mean to grant least privilege to AWS IAM users?",
    options: [
      "It is granting permissions to a single user only.",
      "It is granting permissions using AWS IAM policies only.",
      "It is granting AdministratorAccess policy permissions to trustworthy users.",
      "It is granting only the permissions required to perform a given task.",
    ],
    correctAnswers: [3],
    explanation:
      "The principle of least privilege ensures users receive only the permissions necessary for their tasks, minimizing security risks.",
  },
  {
    id: uuidv5("aws-question-1119", uuidv5.URL),
    text: "What is a benefit of loose coupling as a principle of cloud architecture design?",
    options: [
      "It facilitates low-latency request handling.",
      "It allows applications to have dependent workflows.",
      "It prevents cascading failures between different components.",
      "It allows companies to focus on their physical data center operations.",
    ],
    correctAnswers: [2],
    explanation:
      "Loose coupling ensures components are independent, preventing failures in one from affecting others, improving system resilience.",
  },
  {
    id: uuidv5("aws-question-1120", uuidv5.URL),
    text: "Which service will facilitate private hybrid connectivity?",
    options: [
      "Amazon VPC NAT Gateway",
      "AWS Direct Connect",
      "Amazon Simple Storage Service (Amazon S3) Transfer Acceleration",
      "AWS Web Application Firewall (AWS WAF)",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Direct Connect provides private, low-latency connections between on-premises environments and AWS, ensuring secure hybrid connectivity.",
  },
  {
    id: uuidv5("aws-question-1121", uuidv5.URL),
    text: "A company's web application currently has tight dependencies on underlying components, so when one component fails the entire web application fails. Applying which AWS Cloud design principle will address the current design issue?",
    options: [
      "Implementing elasticity, enabling the application to scale up or scale down as demand changes.",
      "Enabling several EC2 instances to run in parallel to achieve better performance.",
      "Focusing on decoupling components by isolating them and ensuring individual components can function when other components fail.",
      "Doubling EC2 computing resources to increase system fault tolerance.",
    ],
    correctAnswers: [2],
    explanation:
      "Decoupling components ensures that failures in one part of the system do not cascade to others, improving system reliability and availability.",
  },
  {
    id: uuidv5("aws-question-1123", uuidv5.URL),
    text: "How can a customer increase security to AWS account logons? (Choose two.)",
    options: [
      "Configure AWS Certificate Manager",
      "Enable Multi-Factor Authentication (MFA)",
      "Use Amazon Cognito to manage access",
      "Configure a strong password policy",
      "Enable AWS Organizations",
    ],
    correctAnswers: [1, 3],
    explanation:
      "Enabling Multi-Factor Authentication (MFA) adds an extra layer of security by requiring a second factor (such as a hardware device or an app-generated code) in addition to a password. Configuring a strong password policy ensures users create complex and secure passwords, reducing the risk of account compromise. AWS Certificate Manager is used for managing SSL/TLS certificates, Amazon Cognito is an identity provider for applications, and AWS Organizations is for managing multiple accounts, none of which directly enhance AWS account logon security.",
  },
  {
    id: uuidv5("aws-question-1124", uuidv5.URL),
    text: "What AWS service would be used to centrally manage AWS access across multiple accounts?",
    options: [
      "AWS Service Catalog",
      "AWS Config",
      "AWS Trusted Advisor",
      "AWS Organizations",
    ],
    correctAnswers: [3],
    explanation:
      "AWS Organizations allows users to centrally manage multiple AWS accounts, apply policies, and enable consolidated billing. AWS Service Catalog manages approved AWS services, AWS Config tracks configuration changes, and AWS Trusted Advisor provides recommendations but does not manage access across accounts.",
  },
  {
    id: uuidv5("aws-question-1125", uuidv5.URL),
    text: "Which AWS service can a customer use to set up an alert notification when the account is approaching a particular dollar amount?",
    options: [
      "AWS Cost and Usage reports",
      "AWS Budgets",
      "AWS Cost Explorer",
      "AWS Trusted Advisor",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Budgets allows users to set custom cost and usage budgets, sending alerts when thresholds are exceeded. AWS Cost and Usage Reports provide detailed billing data, AWS Cost Explorer helps analyze cost trends, and AWS Trusted Advisor offers best practice recommendations but does not trigger budget alerts.",
  },
  {
    id: uuidv5("aws-question-1126", uuidv5.URL),
    text: "What can users access from AWS Artifact?",
    options: [
      "AWS security and compliance documents",
      "A download of configuration management details for all AWS resources",
      "Training materials for AWS services",
      "A security assessment of the applications deployed in the AWS Cloud",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Artifact provides security and compliance documents such as ISO certifications and SOC reports. It does not provide configuration details, training materials, or security assessments for deployed applications.",
  },
  {
    id: uuidv5("aws-question-1127", uuidv5.URL),
    text: "Which is the MINIMUM AWS Support plan that provides designated Technical Account Managers?",
    options: ["Enterprise", "Business", "Developer", "Basic"],
    correctAnswers: [0],
    explanation:
      "The Enterprise Support plan is the only plan that includes a designated Technical Account Manager (TAM). Business, Developer, and Basic plans do not provide this level of support.",
  },
  {
    id: uuidv5("aws-question-1128", uuidv5.URL),
    text: "Which of the following is an AWS Well-Architected Framework design principle related to reliability?",
    options: [
      "Deployment to a single Availability Zone",
      "Ability to recover from failure",
      "Design for cost optimization",
      "Perform operations as code",
    ],
    correctAnswers: [1],
    explanation:
      "Reliability in AWS architecture includes the ability to recover from failure. Using multiple Availability Zones, backups, and automated failover mechanisms contribute to this principle. The other options either do not relate directly to reliability or are counterproductive (such as deploying to a single Availability Zone).",
  },
  {
    id: uuidv5("aws-question-1129", uuidv5.URL),
    text: "Which type of AWS storage is ephemeral and is deleted when an instance is stopped or terminated?",
    options: [
      "Amazon EBS",
      "Amazon EC2 instance store",
      "Amazon EFS",
      "Amazon S3",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon EC2 instance store is temporary storage that is lost when an instance is stopped or terminated. Amazon EBS persists across stops, Amazon EFS is a managed file system, and Amazon S3 is for object storage with durability across multiple locations.",
  },
  {
    id: uuidv5("aws-question-1130", uuidv5.URL),
    text: "What is an advantage of using the AWS Cloud over a traditional on-premises solution?",
    options: [
      "Users do not have to guess about future capacity needs.",
      "Users can utilize existing hardware contracts for purchases.",
      "Users can fix costs no matter what their traffic is.",
      "Users can avoid audits by using reports from AWS.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS offers scalability, allowing users to provision resources on demand rather than estimating future capacity. The other options are incorrect because AWS does not require existing hardware, costs can fluctuate, and audits are still necessary.",
  },
  {
    id: uuidv5("aws-question-1131", uuidv5.URL),
    text: "Which of the following is an AWS-managed compute service?",
    options: ["Amazon SWF", "Amazon EC2", "AWS Lambda", "Amazon Aurora"],
    correctAnswers: [2],
    explanation:
      "AWS Lambda is a fully managed compute service that runs code in response to events without provisioning or managing servers. EC2 requires user management, Amazon SWF is for workflow automation, and Amazon Aurora is a managed database service.",
  },
  {
    id: uuidv5("aws-question-1132", uuidv5.URL),
    text: "Which of the following is an important architectural principle when designing cloud applications?",
    options: [
      "Store data and backups in the same region.",
      "Design tightly coupled system components.",
      "Avoid multi-threading.",
      "Design for failure",
    ],
    correctAnswers: [3],
    explanation:
      "Cloud applications should be designed for failure by implementing redundancy, failover mechanisms, and distributed architectures. Storing backups in the same region increases risk, tightly coupled components reduce flexibility, and avoiding multi-threading limits scalability.",
  },
  {
    id: uuidv5("aws-question-1133", uuidv5.URL),
    text: "Which mechanism allows developers to access AWS services from application code?",
    options: [
      "AWS Software Development Kit",
      "AWS Management Console",
      "AWS CodePipeline",
      "AWS Config",
    ],
    correctAnswers: [0],
    explanation:
      "The AWS Software Development Kit (SDK) allows developers to access AWS services from application code by providing APIs, libraries, and tools. The AWS Management Console is a web interface, AWS CodePipeline is a CI/CD service, and AWS Config is used for compliance and resource tracking, none of which are meant for direct application integration.",
  },
  {
    id: uuidv5("aws-question-1134", uuidv5.URL),
    text: "Which Amazon EC2 pricing model is the MOST cost efficient for an uninterruptible workload that runs once a year for 24 hours?",
    options: [
      "On-Demand Instances",
      "Reserved Instances",
      "Spot Instances",
      "Dedicated Instances",
    ],
    correctAnswers: [0],
    explanation:
      "On-Demand Instances allow users to pay for compute capacity without long-term commitments, making them ideal for short-term, unpredictable workloads. Reserved Instances require long-term commitments, Spot Instances can be interrupted, and Dedicated Instances are designed for specific compliance or regulatory needs, making them less cost-efficient for this use case.",
  },
  {
    id: uuidv5("aws-question-1135", uuidv5.URL),
    text: "Which Amazon Virtual Private Cloud (Amazon VPC) feature enables users to connect two VPCs together?",
    options: [
      "Amazon VPC endpoints",
      "Amazon Elastic Compute Cloud (Amazon EC2) ClassicLink",
      "Amazon VPC peering",
      "AWS Direct Connect",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon VPC Peering allows private network communication between two VPCs, enabling them to act as a single network. VPC endpoints provide secure connections to AWS services, ClassicLink connects EC2-Classic instances to VPCs (but not between VPCs), and AWS Direct Connect establishes a dedicated network connection between on-premises and AWS, not between VPCs.",
  },
  {
    id: uuidv5("aws-question-1136", uuidv5.URL),
    text: "Which service's PRIMARY purpose is software version control?",
    options: [
      "Amazon CodeStar",
      "AWS Command Line Interface (AWS CLI)",
      "Amazon Cognito",
      "AWS CodeCommit",
    ],
    correctAnswers: [3],
    explanation:
      "AWS CodeCommit is a managed source control service that provides secure, private Git repositories. CodeStar is a development platform, AWS CLI is a command-line tool for managing AWS resources, and Amazon Cognito handles user authentication and authorization, making them unsuitable for version control.",
  },
  {
    id: uuidv5("aws-question-1137", uuidv5.URL),
    text: "Which tool can be used to compare the cost of running workloads on-premises vs AWS?",
    options: [
      "AWS Simple Monthly Calculator",
      "AWS Total Cost of Ownership (TCO) Calculator",
      "AWS Billing and Cost Management console",
      "Cost Explorer",
    ],
    correctAnswers: [1],
    explanation:
      "The AWS Total Cost of Ownership (TCO) Calculator helps estimate the cost savings of moving workloads to AWS. The Simple Monthly Calculator estimates AWS costs but does not compare with on-premises costs, Billing and Cost Management tracks expenses, and Cost Explorer helps analyze usage and cost trends.",
  },
  {
    id: uuidv5("aws-question-1138", uuidv5.URL),
    text: "Which AWS service provides a secure, fast, and cost-effective way to migrate or transport exabyte-scale datasets into AWS?",
    options: [
      "AWS Batch",
      "AWS Snowball",
      "AWS Migration Hub",
      "AWS Snowmobile",
    ],
    correctAnswers: [3],
    explanation:
      "AWS Snowmobile is designed for exabyte-scale data transfer using a secure, ruggedized container transported by truck. AWS Snowball is for petabyte-scale data, AWS Batch is for batch processing, and AWS Migration Hub helps track migration progress but does not handle direct data transfer.",
  },
  {
    id: uuidv5("aws-question-1139", uuidv5.URL),
    text: "Which of the following BEST describe the AWS pricing model? (Choose two.)",
    options: [
      "Fixed-term",
      "Pay-as-you-go",
      "Colocation",
      "Planned",
      "Variable cost",
    ],
    correctAnswers: [1, 4],
    explanation:
      "AWS follows a pay-as-you-go model, where users only pay for the resources they consume. Pricing is also variable, meaning costs fluctuate based on usage. Fixed-term pricing applies to traditional data centers, colocation is a different hosting model, and planned pricing does not describe AWS’s flexible pricing approach.",
  },
  {
    id: uuidv5("aws-question-1140", uuidv5.URL),
    text: "Which load balancer types are available with Elastic Load Balancing (ELB)? (Choose two.)",
    options: [
      "Public load balancers with AWS Application Auto Scaling capabilities",
      "F5 Big-IP and Citrix NetScaler load balancers",
      "Classic Load Balancers",
      "Cross-zone load balancers with public and private IPs",
      "Application Load Balancers",
    ],
    correctAnswers: [2, 4],
    explanation:
      "Elastic Load Balancing (ELB) supports Classic Load Balancers and Application Load Balancers, along with Network Load Balancers. The other options refer to third-party solutions or unrelated load-balancing features.",
  },
  {
    id: uuidv5("aws-question-1141", uuidv5.URL),
    text: "Why should a company choose AWS instead of a traditional data center?",
    options: [
      "AWS provides users with full control over the underlying resources.",
      "AWS does not require long-term contracts and provides a pay-as-you-go model.",
      "AWS offers edge locations in every country, supporting global reach.",
      "AWS has no limits on the number of resources that can be created.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS’s pay-as-you-go model eliminates long-term commitments, making it more flexible than traditional data centers. While AWS offers resource scalability, limits still exist, and full control over underlying resources applies more to on-premises solutions. Edge locations do not exist in every country.",
  },
  {
    id: uuidv5("aws-question-1142", uuidv5.URL),
    text: "Which solution provides the FASTEST application response times to frequently accessed data to users in multiple AWS Regions?",
    options: [
      "AWS CloudTrail across multiple Availability Zones",
      "Amazon CloudFront to edge locations",
      "AWS CloudFormation in multiple regions",
      "A virtual private gateway over AWS Direct Connect",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon CloudFront speeds up content delivery by leveraging its global network of edge locations. It caches content closer to users, reducing latency and improving response times. The other options do not serve the same purpose of accelerating content delivery.",
  },
  {
    id: uuidv5("aws-question-1143", uuidv5.URL),
    text: "Which AWS service provides a self-service portal for on-demand access to AWS compliance reports?",
    options: [
      "AWS Config",
      "AWS Certificate Manager",
      "Amazon Inspector",
      "AWS Artifact",
    ],
    correctAnswers: [3],
    explanation:
      "AWS Artifact provides on-demand access to AWS compliance reports and agreements, such as SOC reports and PCI certifications. The other services focus on security monitoring, configuration management, or certificate management, rather than compliance documentation.",
  },
  {
    id: uuidv5("aws-question-1144", uuidv5.URL),
    text: "Which of the following AWS services can be used to run a self-managed database?",
    options: [
      "Amazon Route 53",
      "AWS X-Ray",
      "AWS Snowmobile",
      "Amazon Elastic Compute Cloud (Amazon EC2)",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon EC2 provides virtual machines where users can install and manage their own databases. The other options do not support running self-managed databases: Route 53 is for DNS, X-Ray is for tracing, and Snowmobile is for large-scale data transfer.",
  },
  {
    id: uuidv5("aws-question-1145", uuidv5.URL),
    text: "What exclusive benefit is provided to users with Enterprise Support?",
    options: [
      "Access to a Technical Project Manager",
      "Access to a Technical Account Manager",
      "Access to a Cloud Support Engineer",
      "Access to a Solutions Architect",
    ],
    correctAnswers: [1],
    explanation:
      "The AWS Enterprise Support plan provides customers with a Technical Account Manager (TAM), which is a dedicated resource to help optimize and manage AWS environments. The other options are either available in lower support tiers or not part of Enterprise Support.",
  },
  {
    id: uuidv5("aws-question-1146", uuidv5.URL),
    text: "How can a user protect against AWS service disruptions if a natural disaster affects an entire geographic area?",
    options: [
      "Deploy applications across multiple Availability Zones within an AWS Region.",
      "Use a hybrid cloud computing deployment model within the geographic area.",
      "Deploy applications across multiple AWS Regions.",
      "Store application artifacts using AWS Artifact and replicate them across multiple AWS Regions.",
    ],
    correctAnswers: [2],
    explanation:
      "Deploying applications across multiple AWS Regions provides the highest level of resilience against natural disasters, as entire regions can fail. Availability Zones provide redundancy within a region, but may not protect against region-wide failures.",
  },
  {
    id: uuidv5("aws-question-1147", uuidv5.URL),
    text: "How does AWS MOST effectively reduce computing costs for a growing start-up company?",
    options: [
      "It provides on-demand resources for peak usage.",
      "It automates the provisioning of individual developer environments.",
      "It automates customer relationship management.",
      "It implements a fixed monthly computing budget.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS allows startups to scale cost-effectively by providing on-demand resources. This means they only pay for what they use, avoiding upfront costs. Other options do not directly address cost reduction.",
  },
  {
    id: uuidv5("aws-question-1148", uuidv5.URL),
    text: "A startup is working on a new application that needs to go to market quickly. The application requirements may need to be adjusted in the near future. Which of the following is a characteristic of the AWS Cloud that would meet this specific need?",
    options: ["Elasticity", "Reliability", "Performance", "Agility"],
    correctAnswers: [3],
    explanation:
      "Agility is a core advantage of the AWS Cloud, allowing businesses to iterate quickly, adjust resources, and deploy applications rapidly based on evolving needs.",
  },
  {
    id: uuidv5("aws-question-1149", uuidv5.URL),
    text: "Which AWS Support plan provides a full set of AWS Trusted Advisor checks?",
    options: [
      "Business and Developer Support",
      "Business and Basic Support",
      "Enterprise and Developer Support",
      "Enterprise and Business Support",
    ],
    correctAnswers: [3],
    explanation:
      "The AWS Enterprise and Business Support plans provide access to all AWS Trusted Advisor checks. Lower-tier support plans have limited access to these checks.",
  },
  {
    id: uuidv5("aws-question-1150", uuidv5.URL),
    text: "Which of the following services have Distributed Denial of Service (DDoS) mitigation features? (Choose two.)",
    options: [
      "AWS WAF",
      "Amazon DynamoDB",
      "Amazon EC2",
      "Amazon CloudFront",
      "Amazon Inspector",
    ],
    correctAnswers: [0, 3],
    explanation:
      "AWS WAF and Amazon CloudFront help mitigate DDoS attacks. AWS WAF provides firewall protection against threats, while CloudFront helps absorb and distribute large-scale attacks. The other options do not have built-in DDoS mitigation capabilities.",
  },
  {
    id: uuidv5("aws-question-1151", uuidv5.URL),
    text: "When building a cloud Total Cost of Ownership (TCO) model, which cost elements should be considered for workloads running on AWS? (Choose three.)",
    options: [
      "Compute costs",
      "Facilities costs",
      "Storage costs",
      "Data transfer costs",
      "Network infrastructure costs",
      "Hardware lifecycle costs",
    ],
    correctAnswers: [0, 2, 3],
    explanation:
      "Key elements of AWS TCO include compute costs (e.g., EC2, Lambda), storage costs (e.g., S3, EBS), and data transfer costs (e.g., inter-region transfer fees). The other options are typically managed by AWS rather than the customer.",
  },
];

const exam17: Question[] = [
  {
    id: uuidv5("aws-question-1152", uuidv5.URL),
    text: "What time-savings advantage is offered with the use of Amazon Rekognition?",
    options: [
      "Amazon Rekognition provides automatic watermarking of images.",
      "Amazon Rekognition provides automatic detection of objects appearing in pictures.",
      "Amazon Rekognition provides the ability to resize millions of images automatically.",
      "Amazon Rekognition uses Amazon Mechanical Turk to allow humans to bid on object detection jobs.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon Rekognition is an image recognition service that detects objects, scenes, and faces; extracts text; recognizes celebrities; and identifies inappropriate content in images. The other options do not reflect the core capabilities of Amazon Rekognition.",
  },
  {
    id: uuidv5("aws-question-1153", uuidv5.URL),
    text: "When comparing AWS with on-premises Total Cost of Ownership (TCO), what costs are included?",
    options: [
      "Data center security",
      "Business analysis",
      "Project management",
      "Operating system administration",
    ],
    correctAnswers: [0],
    explanation:
      "AWS TCO includes data center security costs, as AWS is responsible for securing physical infrastructure. The other costs, such as business analysis and project management, are typically internal business expenses not directly covered by AWS.",
  },
  {
    id: uuidv5("aws-question-1154", uuidv5.URL),
    text: "According to the AWS shared responsibility model, what is AWS responsible for?",
    options: [
      "Configuring Amazon VPC",
      "Managing application code",
      "Maintaining application traffic",
      "Managing the network infrastructure",
    ],
    correctAnswers: [3],
    explanation:
      "Under the AWS shared responsibility model, AWS is responsible for managing the network infrastructure, including security and maintenance. Customers are responsible for configuring services such as Amazon VPC and managing their own application code.",
  },
  {
    id: uuidv5("aws-question-1155", uuidv5.URL),
    text: "Which service should be used to estimate the costs of running a new project on AWS?",
    options: [
      "AWS TCO Calculator",
      "AWS Simple Monthly Calculator",
      "AWS Cost Explorer API",
      "AWS Budgets",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Cost Explorer is the tool used to estimate and analyze costs. Other tools like AWS TCO Calculator are used for comparing AWS with on-premises costs, and AWS Budgets is for tracking spending.",
  },
  {
    id: uuidv5("aws-question-1156", uuidv5.URL),
    text: "Which AWS tool will identify security groups that grant unrestricted Internet access to a limited list of ports?",
    options: [
      "AWS Organizations",
      "AWS Trusted Advisor",
      "AWS Usage Report",
      "Amazon EC2 dashboard",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Trusted Advisor checks security groups for configurations that allow unrestricted access, helping users identify potential vulnerabilities. The other tools do not offer this specific functionality.",
  },
  {
    id: uuidv5("aws-question-1157", uuidv5.URL),
    text: "Which AWS service can be used to generate alerts based on an estimated monthly bill?",
    options: ["AWS Config", "Amazon CloudWatch", "AWS X-Ray", "AWS CloudTrail"],
    correctAnswers: [1],
    explanation:
      "Amazon CloudWatch can monitor estimated AWS charges and generate alerts when certain thresholds are met. Other services focus on configuration management, tracing, and logging, which are unrelated to billing alerts.",
  },
  {
    id: uuidv5("aws-question-1158", uuidv5.URL),
    text: "Which Amazon EC2 pricing model offers the MOST significant discount when compared to On-Demand Instances?",
    options: [
      "Partial Upfront Reserved Instances for a 1-year term",
      "All Upfront Reserved Instances for a 1-year term",
      "All Upfront Reserved Instances for a 3-year term",
      "No Upfront Reserved Instances for a 3-year term",
    ],
    correctAnswers: [2],
    explanation:
      "All Upfront Reserved Instances for a 3-year term provide the highest discount, as AWS offers the best rates for longer commitments. Other options provide savings but not as significant.",
  },
  {
    id: uuidv5("aws-question-1159", uuidv5.URL),
    text: "Which of the following is the responsibility of AWS?",
    options: [
      "Setting up AWS Identity and Access Management (IAM) users and groups",
      "Physically destroying storage media at end of life",
      "Patching guest operating systems",
      "Configuring security settings on Amazon EC2 instances",
    ],
    correctAnswers: [1],
    explanation:
      "AWS is responsible for securely decommissioning storage media at the end of its lifecycle, following industry best practices like NIST 800-88. The other tasks are the customer's responsibility.",
  },
  {
    id: uuidv5("aws-question-1160", uuidv5.URL),
    text: "Which of the following is an advantage of using AWS?",
    options: [
      "AWS audits user data.",
      "Data is automatically secure.",
      "There is no guessing on capacity needs.",
      "AWS manages compliance needs.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS provides scalable resources, allowing customers to adjust capacity as needed without overprovisioning. Other options are incorrect because AWS does not audit user data automatically, security requires proper configuration, and compliance management is a shared responsibility.",
  },
  {
    id: uuidv5("aws-question-1161", uuidv5.URL),
    text: "Which AWS service would a customer use with a static website to achieve lower latency and high transfer speeds?",
    options: [
      "AWS Lambda",
      "Amazon DynamoDB Accelerator",
      "Amazon Route 53",
      "Amazon CloudFront",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon CloudFront is a CDN service that reduces latency and improves transfer speeds for content delivery. Other services focus on compute, database acceleration, or DNS management, which do not directly impact website performance in the same way.",
  },
  {
    id: uuidv5("aws-question-1162", uuidv5.URL),
    text: "Which services manage and automate application deployments on AWS? (Choose two.)",
    options: [
      "AWS Elastic Beanstalk",
      "AWS CodeCommit",
      "AWS Data Pipeline",
      "AWS CloudFormation",
      "AWS Config",
    ],
    correctAnswers: [0, 3],
    explanation:
      "AWS Elastic Beanstalk automates the deployment of applications, handling provisioning, load balancing, and scaling. AWS CloudFormation allows infrastructure to be defined as code and deployed using templates. The other options do not manage or automate application deployments.",
  },
  {
    id: uuidv5("aws-question-1163", uuidv5.URL),
    text: "A user wants guidance on possible savings when migrating from on-premises to AWS. Which tool is suitable for this scenario?",
    options: [
      "AWS Budgets",
      "Cost Explorer",
      "AWS Total Cost of Ownership (TCO) Calculator",
      "AWS Well-Architected Tool",
    ],
    correctAnswers: [2],
    explanation:
      "The AWS TCO Calculator provides an estimate of potential cost savings when migrating to AWS. It helps customers compare the cost of on-premises infrastructure with AWS services. The other tools focus on cost monitoring, budgeting, or architectural best practices rather than migration cost assessment.",
  },
  {
    id: uuidv5("aws-question-1164", uuidv5.URL),
    text: "Which principles are used to architect applications for reliability on the AWS Cloud? (Choose two.)",
    options: [
      "Design for automated failure recovery",
      "Use multiple Availability Zones",
      "Manage changes via documented processes",
      "Test for moderate demand to ensure reliability",
      "Backup recovery to an on-premises environment",
    ],
    correctAnswers: [0, 1],
    explanation:
      "Designing for automated failure recovery and using multiple Availability Zones help ensure application reliability. Documenting processes, moderate demand testing, and backing up to on-premises environments are not key AWS reliability principles.",
  },
  {
    id: uuidv5("aws-question-1165", uuidv5.URL),
    text: "What tasks should a customer perform when that customer suspects an AWS account has been compromised? (Choose two.)",
    options: [
      "Rotate passwords and access keys.",
      "Remove MFA tokens.",
      "Move resources to a different AWS Region.",
      "Delete AWS CloudTrail Resources.",
      "Contact AWS Support.",
    ],
    correctAnswers: [0, 4],
    explanation:
      "Rotating credentials and contacting AWS Support are critical steps in responding to a compromised AWS account. Removing MFA tokens, moving resources, or deleting CloudTrail logs would not mitigate the issue and could make recovery more difficult.",
  },
  {
    id: uuidv5("aws-question-1166", uuidv5.URL),
    text: "What is an example of high availability in the AWS Cloud?",
    options: [
      "Consulting AWS technical support at any time day or night",
      "Ensuring an application remains accessible, even if a resource fails",
      "Making any AWS service available for use by paying on demand",
      "Deploying in any part of the world using AWS Regions",
    ],
    correctAnswers: [1],
    explanation:
      "High availability ensures an application remains accessible despite failures. AWS support, pricing models, or global deployment do not directly define high availability.",
  },
  {
    id: uuidv5("aws-question-1167", uuidv5.URL),
    text: "Which AWS security service protects applications from distributed denial of service attacks with always-on detection and automatic inline mitigations?",
    options: [
      "Amazon Inspector",
      "AWS Web Application Firewall (AWS WAF)",
      "Elastic Load Balancing (ELB)",
      "AWS Shield",
    ],
    correctAnswers: [3],
    explanation:
      "AWS Shield provides always-on DDoS protection with automatic mitigation. AWS WAF protects against web threats, but not DDoS. ELB balances traffic but does not mitigate attacks. Amazon Inspector is a security assessment tool.",
  },
  {
    id: uuidv5("aws-question-1168", uuidv5.URL),
    text: "A company wants to monitor the CPU usage of its Amazon EC2 resources. Which AWS service should the company use?",
    options: [
      "AWS CloudTrail",
      "Amazon CloudWatch",
      "AWS Cost and Usage report",
      "Amazon Simple Notification Service (Amazon SNS)",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon CloudWatch monitors EC2 instances, including CPU usage. CloudTrail tracks API activity, Cost and Usage reports financial data, and SNS provides notifications.",
  },
  {
    id: uuidv5("aws-question-1169", uuidv5.URL),
    text: "What is an AWS Identity and Access Management (IAM) role?",
    options: [
      "A user associated with an AWS resource",
      "A group associated with an AWS resource",
      "An entity that defines a set of permissions for use with an AWS resource",
      "An authentication credential associated with a multi-factor authentication (MFA) token",
    ],
    correctAnswers: [2],
    explanation:
      "An IAM role is an entity that defines a set of permissions for AWS resources. It is not a user, group, or MFA credential but provides temporary access permissions.",
  },
  {
    id: uuidv5("aws-question-1170", uuidv5.URL),
    text: "What are the advantages of Reserved Instances? (Choose two.)",
    options: [
      "They provide a discount over on-demand pricing.",
      "They provide access to additional instance types.",
      "They provide additional networking capability.",
      "Customers can upgrade instances as new types become available.",
      "Customers can reserve capacity in an Availability Zone.",
    ],
    correctAnswers: [0, 4],
    explanation:
      "Reserved Instances offer cost savings and the ability to reserve capacity. They do not provide new instance types, enhanced networking, or automatic upgrades.",
  },
  {
    id: uuidv5("aws-question-1171", uuidv5.URL),
    text: "How do Amazon EC2 Auto Scaling groups help achieve high availability for a web application?",
    options: [
      "They automatically add more instances across multiple AWS Regions based on global demand of the application.",
      "They automatically add or replace instances across multiple Availability Zones when the application needs it.",
      "They enable the application's static content to reside closer to end users.",
      "They are able to distribute incoming requests across a tier of web server instances.",
    ],
    correctAnswers: [1],
    explanation:
      "EC2 Auto Scaling helps maintain high availability by replacing failing instances and distributing them across multiple Availability Zones. It does not distribute traffic (which is the role of ELB) or manage global demand.",
  },
  {
    id: uuidv5("aws-question-1172", uuidv5.URL),
    text: "How can one AWS account use Reserved Instances from another AWS account?",
    options: [
      "By using Amazon EC2 Dedicated Instances",
      "By using AWS Organizations consolidated billing",
      "By using the AWS Cost Explorer tool",
      "By using AWS Budgets",
    ],
    correctAnswers: [1],
    explanation:
      "The account that originally purchased the Reserved Instance receives the discount first. If the purchasing account doesn't have any instances that match the terms of the Reserved Instance, the discount for the Reserved Instance is assigned to any matching usage on another account in the organization. AWS Organizations consolidated billing enables this cost-sharing mechanism.",
  },
  {
    id: uuidv5("aws-question-1173", uuidv5.URL),
    text: "A customer runs an On-Demand Amazon Linux EC2 instance for 3 hours, 5 minutes, and 6 seconds. For how much time will the customer be billed?",
    options: [
      "3 hours, 5 minutes",
      "3 hours, 5 minutes, and 6 seconds",
      "3 hours, 6 minutes",
      "4 hours",
    ],
    correctAnswers: [1],
    explanation:
      "AWS bills On-Demand EC2 instances per second, with a minimum of 60 seconds. Therefore, the customer will be billed exactly for 3 hours, 5 minutes, and 6 seconds, rather than rounding up to the next full minute or hour.",
  },
  {
    id: uuidv5("aws-question-1174", uuidv5.URL),
    text: "Which of the following AWS services provide compute resources? (Choose two.)",
    options: [
      "AWS Lambda",
      "Amazon Elastic Container Service (Amazon ECS)",
      "AWS CodeDeploy",
      "Amazon Glacier",
      "AWS Organizations",
    ],
    correctAnswers: [0, 1],
    explanation:
      "AWS Lambda and Amazon ECS provide compute resources. AWS Lambda runs code without provisioning or managing servers, while Amazon ECS allows users to run and manage Docker containers on a cluster of EC2 instances or with AWS Fargate. The other options do not provide compute capabilities.",
  },
  {
    id: uuidv5("aws-question-1175", uuidv5.URL),
    text: "Which AWS service enables users to deploy infrastructure as code by automating the process of provisioning resources?",
    options: [
      "Amazon GameLift",
      "AWS CloudFormation",
      "AWS Data Pipeline",
      "AWS Glue",
    ],
    correctAnswers: [1],
    explanation:
      "AWS CloudFormation enables infrastructure as code, allowing users to define AWS resources in templates and provision them automatically. The other services do not provide this capability.",
  },
  {
    id: uuidv5("aws-question-1176", uuidv5.URL),
    text: "Which AWS services provide a way to extend an on-premises architecture to the AWS Cloud? (Choose two.)",
    options: [
      "Amazon EBS",
      "AWS Direct Connect",
      "Amazon CloudFront",
      "AWS Storage Gateway",
      "Amazon Connect",
    ],
    correctAnswers: [1, 3],
    explanation:
      "AWS Direct Connect provides a dedicated network connection from on-premises to AWS, and AWS Storage Gateway allows integration between on-premises storage and AWS Cloud storage. The other options do not extend on-premises environments to AWS.",
  },
  {
    id: uuidv5("aws-question-1177", uuidv5.URL),
    text: "Which of the following allows users to provision a dedicated network connection from their internal network to AWS?",
    options: [
      "AWS CloudHSM",
      "AWS Direct Connect",
      "AWS VPN",
      "Amazon Connect",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Direct Connect provides a dedicated physical network connection from an on-premises network to AWS, improving bandwidth and reducing latency. AWS VPN provides encrypted tunnels over the internet but is not a dedicated connection.",
  },
  {
    id: uuidv5("aws-question-1178", uuidv5.URL),
    text: "Which services use AWS edge locations? (Choose two.)",
    options: [
      "Amazon CloudFront",
      "AWS Shield",
      "Amazon EC2",
      "Amazon RDS",
      "Amazon ElastiCache",
    ],
    correctAnswers: [0, 1],
    explanation:
      "Amazon CloudFront is a content delivery network that caches content at edge locations to reduce latency. AWS Shield provides DDoS protection at AWS edge locations. The other services do not utilize edge locations.",
  },
  {
    id: uuidv5("aws-question-1179", uuidv5.URL),
    text: "Which service would provide network connectivity in a hybrid architecture that includes the AWS Cloud?",
    options: [
      "Amazon VPC",
      "AWS Direct Connect",
      "AWS Directory Service",
      "Amazon API Gateway",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon VPC allows users to create a logically isolated network in AWS, supporting hybrid connectivity using VPN or Direct Connect. While Direct Connect provides a dedicated link, VPC is the core service for hybrid networking.",
  },
  {
    id: uuidv5("aws-question-1180", uuidv5.URL),
    text: "Which tool can be used to compare the costs of running a web application in a traditional hosting environment to running it on AWS?",
    options: [
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Cost and Usage report",
      "AWS Total Cost of Ownership (TCO) Calculator",
    ],
    correctAnswers: [3],
    explanation:
      "The AWS Total Cost of Ownership (TCO) Calculator helps users estimate the cost savings of running applications on AWS compared to traditional hosting. The other tools focus on cost monitoring rather than comparisons.",
  },
  {
    id: uuidv5("aws-question-1181", uuidv5.URL),
    text: "What is the value of using third-party software from AWS Marketplace instead of installing third-party software on Amazon EC2? (Choose two.)",
    options: [
      "Users pay for software by the hour or month depending on licensing.",
      "AWS Marketplace enables the user to launch applications with 1-Click.",
      "AWS Marketplace data encryption is managed by a third-party vendor.",
      "AWS Marketplace eliminates the need to upgrade to newer software versions.",
      "Users can deploy third-party software without testing.",
    ],
    correctAnswers: [0, 1],
    explanation:
      "AWS Marketplace allows users to pay for third-party software based on usage and deploy applications with one click. However, software upgrades are still needed, and users should test software before deployment.",
  },
  {
    id: uuidv5("aws-question-1182", uuidv5.URL),
    text: "Which of the following is a cloud architectural design principle?",
    options: [
      "Scale up, not out.",
      "Loosely couple components.",
      "Build monolithic systems.",
      "Use commercial database software.",
    ],
    correctAnswers: [1],
    explanation:
      "Loosely coupled architectures reduce interdependencies, so that a change or failure in a component does not cascade to other components.",
  },
  {
    id: uuidv5("aws-question-1183", uuidv5.URL),
    text: "Under the shared responsibility model; which of the following areas are the customer's responsibility? (Choose two.)",
    options: [
      "Firmware upgrades of network infrastructure",
      "Patching of operating systems",
      "Patching of the underlying hypervisor",
      "Physical security of data centers",
      "Configuration of the security group",
    ],
    correctAnswers: [1, 4],
    explanation:
      "Under the shared responsibility model, customers are responsible for patching their operating systems and configuring security groups. AWS manages the infrastructure, including physical security and hypervisor patching.",
  },
  {
    id: uuidv5("aws-question-1184", uuidv5.URL),
    text: "Which service enables customers to audit and monitor changes in AWS resources?",
    options: [
      "AWS Trusted Advisor",
      "Amazon GuardDuty",
      "Amazon Inspector",
      "AWS Config",
    ],
    correctAnswers: [3],
    explanation:
      "AWS Config continuously monitors and records AWS resource configurations, allowing users to audit, assess compliance, and track changes over time.",
  },
  {
    id: uuidv5("aws-question-1185", uuidv5.URL),
    text: "Which AWS service identifies security groups that allow unrestricted access to a user's AWS resources?",
    options: [
      "AWS CloudTrail",
      "AWS Trusted Advisor",
      "Amazon CloudWatch",
      "Amazon Inspector",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Trusted Advisor provides security checks, including identifying security groups with open access to resources.",
  },
  {
    id: uuidv5("aws-question-1186", uuidv5.URL),
    text: "According to the AWS shared responsibility model, who is responsible for configuration management?",
    options: [
      "It is solely the responsibility of the customer.",
      "It is solely the responsibility of AWS.",
      "It is shared between AWS and the customer.",
      "It is not part of the AWS shared responsibility model.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS maintains the infrastructure configuration, but customers are responsible for managing their own configurations, including operating systems, databases, and applications.",
  },
  {
    id: uuidv5("aws-question-1187", uuidv5.URL),
    text: "Which AWS service is a content delivery network that securely delivers data, video, and applications to users globally with low latency and high speeds?",
    options: [
      "AWS CloudFormation",
      "AWS Direct Connect",
      "Amazon CloudFront",
      "Amazon Pinpoint",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon CloudFront is AWS's content delivery network (CDN) that provides secure, low-latency delivery of data, videos, and applications to users worldwide.",
  },
  {
    id: uuidv5("aws-question-1188", uuidv5.URL),
    text: "Which benefit of the AWS Cloud supports matching the supply of resources with changing workload demands?",
    options: ["Security", "Reliability", "Elasticity", "High availability"],
    correctAnswers: [2],
    explanation:
      "Elasticity allows AWS resources to scale up or down dynamically, matching workload demands efficiently.",
  },
  {
    id: uuidv5("aws-question-1189", uuidv5.URL),
    text: "A user is running an application on AWS and notices that one or more AWS-owned IP addresses is involved in a distributed denial-of-service (DDoS) attack. Who should the user contact FIRST about this situation?",
    options: [
      "AWS Premium Support",
      "AWS Technical Account Manager",
      "AWS Solutions Architect",
      "AWS Abuse team",
    ],
    correctAnswers: [3],
    explanation:
      "The AWS Abuse team is responsible for handling reports related to DDoS attacks and other malicious activities involving AWS resources.",
  },
  {
    id: uuidv5("aws-question-1190", uuidv5.URL),
    text: "Which of the following are benefits of hosting infrastructure in the AWS Cloud? (Choose two.)",
    options: [
      "There are no upfront commitments.",
      "AWS manages all security in the cloud.",
      "Users have the ability to provision resources on demand.",
      "Users have access to free and unlimited storage.",
      "Users have control over the physical infrastructure.",
    ],
    correctAnswers: [0, 2],
    explanation:
      "AWS provides pay-as-you-go pricing, eliminating upfront costs. It also allows users to provision resources on demand, ensuring flexibility and scalability.",
  },
  {
    id: uuidv5("aws-question-1191", uuidv5.URL),
    text: "What AWS service would be used to centrally manage AWS access policies across multiple accounts?",
    options: [
      "AWS Service Catalog",
      "AWS Config",
      "AWS Trusted Advisor",
      "AWS Organizations",
    ],
    correctAnswers: [3],
    explanation:
      "AWS Organizations enables centralized governance and management of multiple AWS accounts, including access policies and billing.",
  },
  {
    id: uuidv5("aws-question-1192", uuidv5.URL),
    text: "What is AWS Trusted Advisor?",
    options: [
      "It is an AWS staff member who provides recommendations and best practices on how to use AWS.",
      "It is a network of AWS partners who provide recommendations and best practices on how to use AWS.",
      "It is an online tool with a set of automated checks that provides recommendations on cost optimization, performance, and security.",
      "It is another name for AWS Technical Account Managers who provide recommendations on cost optimization, performance, and security.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Trusted Advisor is an online tool that provides real-time guidance to help you provision your resources following AWS best practices. It offers recommendations in areas such as cost optimization, security, and performance, helping users improve their AWS environment. The other options incorrectly describe Trusted Advisor.",
  },
  {
    id: uuidv5("aws-question-1193", uuidv5.URL),
    text: "Which AWS service or feature allows a company to visualize, understand, and manage AWS costs and usage over time?",
    options: [
      "AWS Budgets",
      "AWS Cost Explorer",
      "AWS Organizations",
      "Consolidated billing",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Cost Explorer provides an interface that allows users to visualize, understand, and manage their AWS costs and usage over time. AWS Budgets is for setting cost and usage limits, AWS Organizations helps manage multiple accounts, and Consolidated Billing allows central billing but does not provide visualization tools.",
  },
  {
    id: uuidv5("aws-question-1194", uuidv5.URL),
    text: "Which AWS service offers on-demand access to AWS security and compliance reports?",
    options: [
      "AWS CloudTrail",
      "AWS Artifact",
      "AWS Health",
      "Amazon CloudWatch",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Artifact provides on-demand access to AWS security and compliance reports. It includes SOC reports, PCI reports, and compliance certifications. AWS CloudTrail records API activity, AWS Health provides service health updates, and Amazon CloudWatch is used for monitoring and observability.",
  },
  {
    id: uuidv5("aws-question-1195", uuidv5.URL),
    text: "What are the benefits of using the AWS Cloud for companies with customers in many countries around the world? (Choose two.)",
    options: [
      "Companies can deploy applications in multiple AWS Regions to reduce latency.",
      "Amazon Translate automatically translates third-party website interfaces into multiple languages.",
      "Amazon CloudFront has multiple edge locations around the world to reduce latency.",
      "Amazon Comprehend allows users to build applications that can respond to user requests in many languages.",
      "Elastic Load Balancing can distribute application web traffic to multiple AWS Regions around the world, which reduces latency.",
    ],
    correctAnswers: [0, 2],
    explanation:
      "Deploying applications in multiple AWS Regions and using Amazon CloudFront edge locations help reduce latency for global users. Amazon Translate and Amazon Comprehend are language-related services, not directly tied to global performance. Elastic Load Balancing operates within a region and does not distribute traffic across multiple AWS Regions.",
  },
  {
    id: uuidv5("aws-question-1196", uuidv5.URL),
    text: "Which AWS service handles the deployment details of capacity provisioning, load balancing, Auto Scaling, and application health monitoring?",
    options: [
      "AWS Config",
      "AWS Elastic Beanstalk",
      "Amazon Route 53",
      "Amazon CloudFront",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Elastic Beanstalk simplifies application deployment by automatically handling capacity provisioning, load balancing, auto-scaling, and health monitoring. AWS Config monitors AWS resource configurations, Route 53 manages DNS, and CloudFront provides content delivery.",
  },
  {
    id: uuidv5("aws-question-1197", uuidv5.URL),
    text: "Which AWS service provides inbound and outbound network ACLs to harden external connectivity to Amazon EC2?",
    options: ["AWS IAM", "Amazon Connect", "Amazon VPC", "Amazon API Gateway"],
    correctAnswers: [2],
    explanation:
      "Amazon VPC provides network ACLs to control inbound and outbound traffic for EC2 instances. AWS IAM manages identity and access but not network security, Amazon Connect is a contact center service, and API Gateway handles API management.",
  },
  {
    id: uuidv5("aws-question-1198", uuidv5.URL),
    text: "When a company provisions web servers in multiple AWS Regions, what is being increased?",
    options: ["Coupling", "Availability", "Security", "Durability"],
    correctAnswers: [1],
    explanation:
      "Deploying web servers in multiple AWS Regions increases availability by reducing the impact of regional failures. It does not necessarily improve security or durability, and coupling refers to system dependencies rather than availability.",
  },
  {
    id: uuidv5("aws-question-1199", uuidv5.URL),
    text: "The pay-as-you-go pricing model for AWS services:",
    options: [
      "reduces capital expenditures.",
      "requires payment up front for AWS services.",
      "is relevant only for Amazon EC2, Amazon S3, and Amazon RDS.",
      "reduces operational expenditures.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS's pay-as-you-go model reduces capital expenditures (CapEx) by eliminating upfront costs. It does not require upfront payments, applies to many AWS services beyond EC2, S3, and RDS, and primarily impacts CapEx rather than operational expenditures.",
  },
  {
    id: uuidv5("aws-question-1200", uuidv5.URL),
    text: "Under the AWS shared responsibility model, AWS is responsible for which security-related task?",
    options: [
      "Lifecycle management of IAM credentials",
      "Physical security of global infrastructure",
      "Encryption of Amazon EBS volumes",
      "Firewall configuration",
    ],
    correctAnswers: [1],
    explanation:
      "AWS is responsible for the physical security of its global infrastructure under the shared responsibility model. Customers are responsible for IAM credential management, EBS encryption, and firewall configurations.",
  },
  {
    id: uuidv5("aws-question-1201", uuidv5.URL),
    text: "Which AWS service enables users to consolidate billing across multiple accounts?",
    options: [
      "Amazon QuickSight",
      "AWS Organizations",
      "AWS Budgets",
      "Amazon Forecast",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Organizations allows consolidated billing, letting users manage costs across multiple accounts. QuickSight is a BI tool, AWS Budgets helps monitor costs, and Amazon Forecast provides forecasting insights.",
  },
];

export const exam18: Question[] = [
  {
    id: uuidv5("aws-question-1202", uuidv5.URL),
    text: "Under the AWS shared responsibility model, which of the following is an example of security in the AWS Cloud?",
    options: [
      "Managing edge locations",
      "Physical security",
      "Firewall configuration",
      "Global infrastructure",
    ],
    correctAnswers: [2],
    explanation:
      "Under the AWS Shared Responsibility Model, security in the cloud is the customer's responsibility. Configuring firewalls, such as security groups and network ACLs, is an example of security in the cloud. AWS is responsible for physical security and global infrastructure, but customers must manage their own firewall rules.",
  },
  {
    id: uuidv5("aws-question-1203", uuidv5.URL),
    text: "How can an AWS user with an AWS Basic Support plan obtain technical assistance from AWS?",
    options: [
      "AWS Senior Support Engineers",
      "AWS Technical Account Managers",
      "AWS Trusted Advisor",
      "AWS Discussion Forums",
    ],
    correctAnswers: [3],
    explanation:
      "Users with AWS Basic Support can access the AWS Discussion Forums for assistance. Other options, like AWS Senior Support Engineers and Technical Account Managers, are available only with higher-tier support plans.",
  },
  {
    id: uuidv5("aws-question-1204", uuidv5.URL),
    text: "Which of the following are pillars of the AWS Well-Architected Framework? (Choose two.)",
    options: [
      "Multiple Availability Zones",
      "Performance efficiency",
      "Security",
      "Encryption usage",
      "High availability",
    ],
    correctAnswers: [1, 2],
    explanation:
      "The AWS Well-Architected Framework consists of five pillars: Operational Excellence, Security, Reliability, Performance Efficiency, and Cost Optimization. Performance Efficiency and Security are part of this framework, while the other options are best practices but not official pillars.",
  },
  {
    id: uuidv5("aws-question-1205", uuidv5.URL),
    text: "After selecting an Amazon EC2 Dedicated Host reservation, which pricing option would provide the largest discount?",
    options: [
      "No upfront payment",
      "Hourly on-demand payment",
      "Partial upfront payment",
      "All upfront payment",
    ],
    correctAnswers: [3],
    explanation:
      "AWS offers Reserved Instances with different payment options. Paying all upfront provides the largest discount compared to other options. No upfront and partial upfront payments offer less savings.",
  },
  {
    id: uuidv5("aws-question-1206", uuidv5.URL),
    text: "What is an advantage of deploying an application across multiple Availability Zones?",
    options: [
      "There is a lower risk of service failure if a natural disaster causes a service disruption in a given AWS Region.",
      "The application will have higher availability because it can withstand a service disruption in one Availability Zone.",
      "There will be better coverage as Availability Zones are geographically distant and can serve a wider area.",
      "There will be decreased application latency that will improve the user experience.",
    ],
    correctAnswers: [1],
    explanation:
      "Deploying across multiple Availability Zones increases application availability by preventing a single point of failure. If one AZ fails, the application can still run in another AZ. This does not necessarily reduce latency or expand coverage.",
  },
  {
    id: uuidv5("aws-question-1207", uuidv5.URL),
    text: "A Cloud Practitioner is asked how to estimate the cost of using a new application on AWS. What is the MOST appropriate response?",
    options: [
      "Inform the user that AWS pricing allows for on-demand pricing.",
      "Direct the user to the AWS Simple Monthly Calculator for an estimate.",
      "Use Amazon QuickSight to analyze current spending on-premises.",
      "Use Amazon AppStream 2.0 for real-time pricing analytics.",
    ],
    correctAnswers: [1],
    explanation:
      "The AWS Simple Monthly Calculator is a tool that helps users estimate the cost of using AWS services. Other options do not provide a direct way to estimate costs for a new application.",
  },
  {
    id: uuidv5("aws-question-1208", uuidv5.URL),
    text: "A company wants to migrate its applications to a VPC on AWS. These applications will need to access on-premises resources. What combination of actions will enable the company to accomplish this goal? (Choose two.)",
    options: [
      "Use the AWS Service Catalog to identify a list of on-premises resources that can be migrated.",
      "Build a VPN connection between an on-premises device and a virtual private gateway in the new VPC.",
      "Use Amazon Athena to query data from the on-premises database servers.",
      "Connect the company's on-premises data center to AWS using AWS Direct Connect.",
      "Leverage Amazon CloudFront to restrict access to static web content provided through the company's on-premises web servers.",
    ],
    correctAnswers: [1, 3],
    explanation:
      "To enable access to on-premises resources, companies can use AWS Direct Connect for a dedicated connection or establish a VPN connection with a virtual private gateway. Other options are unrelated to hybrid connectivity.",
  },
  {
    id: uuidv5("aws-question-1209", uuidv5.URL),
    text: "A web application running on AWS has been spammed with malicious requests from a recurring set of IP addresses. Which AWS service can help secure the application and block the malicious traffic?",
    options: [
      "AWS IAM",
      "Amazon GuardDuty",
      "Amazon Simple Notification Service (Amazon SNS)",
      "AWS WAF",
    ],
    correctAnswers: [3],
    explanation:
      "AWS WAF is a web application firewall that helps protect applications from malicious traffic. IAM is for identity management, GuardDuty detects threats but does not block them, and SNS is a messaging service.",
  },
  {
    id: uuidv5("aws-question-1210", uuidv5.URL),
    text: "Treating infrastructure as code in the AWS Cloud allows users to:",
    options: [
      "automate migration of on-premises hardware to AWS data centers.",
      "let a third party automate an audit of the AWS infrastructure.",
      "turn over application code to AWS so it can run on the AWS infrastructure.",
      "automate the infrastructure provisioning process.",
    ],
    correctAnswers: [3],
    explanation:
      "Infrastructure as Code (IaC) automates infrastructure provisioning using code, improving consistency and efficiency. It does not migrate hardware or involve third-party audits.",
  },
  {
    id: uuidv5("aws-question-1211", uuidv5.URL),
    text: "A company requires a dedicated network connection between its on-premises servers and the AWS Cloud. Which AWS service should be used?",
    options: [
      "AWS VPN",
      "AWS Direct Connect",
      "Amazon API Gateway",
      "Amazon Connect",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Direct Connect provides a dedicated, high-bandwidth network connection between on-premises environments and AWS. AWS VPN is an alternative but is not a dedicated connection.",
  },
  {
    id: uuidv5("aws-question-1212", uuidv5.URL),
    text: "Which AWS service can be used to query stored datasets directly from Amazon S3 using standard SQL?",
    options: [
      "AWS Glue",
      "AWS Data Pipeline",
      "Amazon CloudSearch",
      "Amazon Athena",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon S3 using standard SQL. It supports querying various file formats like CSV, Parquet, and JSON.",
  },
  {
    id: uuidv5("aws-question-1213", uuidv5.URL),
    text: "AWS CloudFormation is designed to help the user:",
    options: [
      "model and provision resources.",
      "update application code.",
      "set up data lakes.",
      "create reports for billing.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS CloudFormation provides a common language for modeling and provisioning AWS and third-party resources in an automated and secure manner.",
  },
  {
    id: uuidv5("aws-question-1214", uuidv5.URL),
    text: "Which of the following is an AWS database service?",
    options: [
      "Amazon Redshift",
      "Amazon Elastic Block Store (Amazon EBS)",
      "Amazon S3 Glacier",
      "AWS Snowball",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon Redshift is a cloud data warehouse service that is part of AWS's database services.",
  },
  {
    id: uuidv5("aws-question-1215", uuidv5.URL),
    text: "A Cloud Practitioner must determine if any security groups in an AWS account have been provisioned to allow unrestricted access for specific ports. What is the SIMPLEST way to do this?",
    options: [
      "Review the inbound rules for each security group in the Amazon EC2 management console to check for port 0.0.0.0/0.",
      "Run AWS Trusted Advisor and review the findings.",
      "Open the AWS IAM console and check the inbound rule filters for open access.",
      "In AWS Config, create a custom rule that invokes an AWS Lambda function to review rules for inbound access.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Trusted Advisor provides security checks, including identifying security groups with unrestricted access.",
  },
  {
    id: uuidv5("aws-question-1216", uuidv5.URL),
    text: "What are the benefits of developing and running a new application in the AWS Cloud compared to on-premises? (Choose two.)",
    options: [
      "AWS automatically distributes the data globally for higher durability.",
      "AWS will take care of operating the application.",
      "AWS makes it easy to architect for high availability.",
      "AWS can easily accommodate application demand changes.",
      "AWS takes care application security patching.",
    ],
    correctAnswers: [2, 3],
    explanation:
      "AWS allows for high availability architecture and easily accommodates demand changes, making applications more scalable and resilient.",
  },
  {
    id: uuidv5("aws-question-1217", uuidv5.URL),
    text: "A user needs an automated security assessment report that will identify unintended network access to Amazon EC2 instances and vulnerabilities on those instances. Which AWS service will provide this assessment report?",
    options: [
      "EC2 security groups",
      "AWS Config",
      "Amazon Macie",
      "Amazon Inspector",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon Inspector is an automated security assessment service that evaluates applications for vulnerabilities and exposure.",
  },
  {
    id: uuidv5("aws-question-1218", uuidv5.URL),
    text: "How can a company isolate the costs of production and non-production workloads on AWS?",
    options: [
      "Create IAM roles for production and non-production workloads.",
      "Use different accounts for production and non-production expenses.",
      "Use Amazon EC2 for non-production workloads and other services for production workloads.",
      "Use Amazon CloudWatch to monitor the use of services.",
    ],
    correctAnswers: [1],
    explanation:
      "Using separate AWS accounts for production and non-production environments allows for clear cost allocation.",
  },
  {
    id: uuidv5("aws-question-1219", uuidv5.URL),
    text: "Where can users find a catalog of AWS-recognized providers of third-party security solutions?",
    options: [
      "AWS Service Catalog",
      "AWS Marketplace",
      "AWS Quick Start",
      "AWS CodeDeploy",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Marketplace provides a catalog of third-party security solutions that are recognized by AWS.",
  },
  {
    id: uuidv5("aws-question-1220", uuidv5.URL),
    text: "A Cloud Practitioner needs to store data for 7 years to meet regulatory requirements. Which AWS service will meet this requirement at the LOWEST cost?",
    options: [
      "Amazon S3",
      "AWS Snowball",
      "Amazon Redshift",
      "Amazon S3 Glacier",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon S3 Glacier provides low-cost long-term storage designed for archival and regulatory requirements.",
  },
  {
    id: uuidv5("aws-question-1221", uuidv5.URL),
    text: "What are the immediate benefits of using the AWS Cloud? (Choose two.)",
    options: [
      "Increased IT staff.",
      "Capital expenses are replaced with variable expenses.",
      "User control of infrastructure.",
      "Increased agility.",
      "AWS holds responsibility for security in the cloud.",
    ],
    correctAnswers: [1, 3],
    explanation:
      "AWS replaces capital expenses with variable costs and increases agility by allowing rapid scaling and innovation.",
  },
  {
    id: "aws-question-1222",
    text: "Which security service automatically recognizes and classifies sensitive data or intellectual property on AWS?",
    options: [
      "Amazon GuardDuty",
      "Amazon Macie",
      "Amazon Inspector",
      "AWS Shield",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon Macie is a security service that uses machine learning to automatically discover, classify, and protect sensitive data in AWS. Macie recognizes sensitive data such as personally identifiable information (PII) or intellectual property. It provides dashboards and alerts that give visibility into how this data is being accessed or moved.",
  },
  {
    id: "aws-question-1223",
    text: "What is the purpose of AWS Storage Gateway?",
    options: [
      "It ensures on-premises data storage is 99.999999999% durable.",
      "It transports petabytes of data to and from AWS.",
      "It connects to multiple Amazon EC2 instances.",
      "It connects on-premises data storage to the AWS Cloud.",
    ],
    correctAnswers: [3],
    explanation:
      "AWS Storage Gateway is a hybrid storage service that enables on-premises applications to use AWS cloud storage seamlessly. It allows integration between on-premises environments and AWS, providing a way to back up data to AWS securely.",
  },
  {
    id: "aws-question-1224",
    text: "What should users do if they want to install an application in geographically isolated locations?",
    options: [
      "Install the application using multiple internet gateways.",
      "Deploy the application to an Amazon VPC.",
      "Deploy the application to multiple AWS Regions.",
      "Configure the application using multiple NAT gateways.",
    ],
    correctAnswers: [2],
    explanation:
      "Deploying an application across multiple AWS Regions ensures that it is available in geographically isolated locations, providing redundancy and disaster recovery capabilities.",
  },
  {
    id: "aws-question-1225",
    text: "A system in the AWS Cloud is designed to withstand the failure of one or more components. What is this an example of?",
    options: ["Elasticity", "High Availability", "Scalability", "Agility"],
    correctAnswers: [1],
    explanation:
      "High Availability refers to designing a system that can continue operating even when one or more components fail. AWS achieves this through redundant infrastructure and failover mechanisms.",
  },
  {
    id: "aws-question-1226",
    text: "A Cloud Practitioner needs a consistent and dedicated connection between AWS resources and an on-premises system. Which AWS service can fulfill this requirement?",
    options: [
      "AWS Direct Connect",
      "AWS VPN",
      "Amazon Connect",
      "AWS Data Pipeline",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Direct Connect provides a dedicated private connection between on-premises data centers and AWS, offering higher bandwidth and lower latency compared to a traditional VPN.",
  },
  {
    id: "aws-question-1227",
    text: "Within the AWS shared responsibility model, who is responsible for security and compliance?",
    options: [
      "The customer is responsible.",
      "AWS is responsible.",
      "AWS and the customer share responsibility.",
      "AWS shares responsibility with the relevant governing body.",
    ],
    correctAnswers: [2],
    explanation:
      "Security and Compliance is a shared responsibility between AWS and the customer. AWS manages the infrastructure security, while customers are responsible for securing their applications and data.",
  },
  {
    id: "aws-question-1228",
    text: "To use the AWS CLI, users are required to generate:",
    options: [
      "a password policy.",
      "an access/secret key.",
      "a managed policy.",
      "an API key.",
    ],
    correctAnswers: [1],
    explanation:
      "The AWS CLI requires an access key ID and a secret access key for authentication when making API requests to AWS services.",
  },
  {
    id: "aws-question-1229",
    text: "Which AWS service is used to provide encryption for Amazon EBS?",
    options: [
      "AWS Certificate Manager",
      "AWS Systems Manager",
      "AWS KMS",
      "AWS Config",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Key Management Service (AWS KMS) is used to create and manage cryptographic keys for encrypting Amazon EBS volumes, ensuring data security.",
  },
  {
    id: "aws-question-1230",
    text: "How does AWS charge for AWS Lambda usage once the free tier has been exceeded? (Choose two.)",
    options: [
      "By the time it takes for the Lambda function to execute.",
      "By the number of versions of a specific Lambda function.",
      "By the number of requests made for a given Lambda function.",
      "By the programming language that is used for the Lambda function.",
      "By the total number of Lambda functions in an AWS account.",
    ],
    correctAnswers: [0, 2],
    explanation:
      "AWS Lambda pricing is based on two factors: the number of requests made and the duration of execution time for each request.",
  },
  {
    id: "aws-question-1231",
    text: "Which of the following describes the relationships among AWS Regions, Availability Zones, and edge locations? (Choose two.)",
    options: [
      "There are more AWS Regions than Availability Zones.",
      "There are more edge locations than AWS Regions.",
      "An edge location is an Availability Zone.",
      "There are more AWS Regions than edge locations.",
      "There are more Availability Zones than AWS Regions.",
    ],
    correctAnswers: [1, 4],
    explanation:
      "AWS has more edge locations than Regions because they are used for caching content and delivering services globally. Additionally, each AWS Region consists of multiple Availability Zones to provide high availability.",
  },
  {
    id: uuidv5("aws-question-1232", uuidv5.URL),
    text: "What does AWS Shield Standard provide?",
    options: [
      "WAF rules",
      "DDoS protection",
      "Identity and Access Management (IAM) permissions and access to resources",
      "Data encryption",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Shield Standard provides protection for all AWS customers from common, most frequently occurring network and transport layer DDoS attacks that target your web site or application at no additional charge.",
  },
  {
    id: uuidv5("aws-question-1233", uuidv5.URL),
    text: "A company wants to build its new application workloads in the AWS Cloud instead of using on-premises resources. What expense can be reduced using the AWS Cloud?",
    options: [
      "The cost of writing custom-built Java or Node.js code",
      "Penetration testing for security",
      "Hardware required to support new applications",
      "Writing specific test cases for third-party applications.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS eliminates the need for large capital investments in hardware by providing scalable, pay-as-you-go resources.",
  },
  {
    id: uuidv5("aws-question-1234", uuidv5.URL),
    text: "What does AWS Marketplace allow users to do? (Choose two.)",
    options: [
      "Sell unused Amazon EC2 Spot Instances.",
      "Sell solutions to other AWS users.",
      "Buy third-party software that runs on AWS.",
      "Purchase AWS security and compliance documents.",
      "Order AWS Snowball.",
    ],
    correctAnswers: [1, 2],
    explanation:
      "AWS Marketplace enables users to buy and sell software and services that run on AWS.",
  },
  {
    id: uuidv5("aws-question-1235", uuidv5.URL),
    text: "What does it mean if a user deploys a hybrid cloud architecture on AWS?",
    options: [
      "All resources run using on-premises infrastructure.",
      "Some resources run on-premises and some run in a colocation center.",
      "All resources run in the AWS Cloud.",
      "Some resources run on-premises and some run in the AWS Cloud.",
    ],
    correctAnswers: [3],
    explanation:
      "A hybrid cloud architecture consists of both on-premises and cloud-based resources working together.",
  },
  {
    id: uuidv5("aws-question-1236", uuidv5.URL),
    text: "Which AWS service allows users to identify the changes made to a resource over time?",
    options: [
      "Amazon Inspector",
      "AWS Config",
      "AWS Service Catalog",
      "AWS IAM",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Config provides a detailed view of the configuration of AWS resources over time.",
  },
  {
    id: uuidv5("aws-question-1237", uuidv5.URL),
    text: "How can a company reduce its Total Cost of Ownership (TCO) using AWS?",
    options: [
      "By minimizing large capital expenditures",
      "By having no responsibility for third-party license costs",
      "By having no operational expenditures",
      "By having AWS manage applications",
    ],
    correctAnswers: [0],
    explanation:
      "AWS reduces TCO by eliminating large upfront hardware costs and allowing businesses to scale as needed.",
  },
  {
    id: uuidv5("aws-question-1238", uuidv5.URL),
    text: "Which activity is a customer responsibility in the AWS Cloud according to the AWS shared responsibility model?",
    options: [
      "Ensuring network connectivity from AWS to the internet",
      "Patching and fixing flaws within the AWS Cloud infrastructure",
      "Ensuring the physical security of cloud data centers",
      "Ensuring Amazon EBS volumes are backed up",
    ],
    correctAnswers: [3],
    explanation:
      "Customers are responsible for data protection and backups within the AWS shared responsibility model.",
  },
  {
    id: uuidv5("aws-question-1239", uuidv5.URL),
    text: "What are the advantages of the AWS Cloud? (Choose two.)",
    options: [
      "Fixed rate monthly cost",
      "No need to guess capacity requirements",
      "Increased speed to market",
      "Increased upfront capital expenditure",
      "Physical access to cloud data centers",
    ],
    correctAnswers: [1, 2],
    explanation:
      "AWS provides scalability and agility, allowing companies to deploy solutions faster without upfront investment.",
  },
  {
    id: uuidv5("aws-question-1240", uuidv5.URL),
    text: "When comparing the total cost of ownership (TCO) of an on-premises infrastructure to a cloud architecture, what costs should be considered? (Choose two.)",
    options: [
      "The credit card processing fees for application transactions in the cloud.",
      "The cost of purchasing and installing server hardware in the on-premises data center.",
      "The cost of administering the infrastructure, including operating system and software installations, patches, backups, and recovering from failures.",
      "The costs of third-party penetration testing.",
      "The advertising costs associated with an ongoing enterprise-wide campaign.",
    ],
    correctAnswers: [1, 2],
    explanation:
      "TCO includes hardware, software maintenance, and administrative costs for managing infrastructure.",
  },
  {
    id: uuidv5("aws-question-1241", uuidv5.URL),
    text: "Which AWS feature allows a company to take advantage of usage tiers for services across multiple member accounts?",
    options: [
      "Service control policies (SCPs)",
      "Consolidated billing",
      "All Upfront Reserved Instances",
      "AWS Cost Explorer",
    ],
    correctAnswers: [1],
    explanation:
      "Consolidated billing enables organizations to aggregate usage and take advantage of volume pricing across multiple AWS accounts.",
  },
  {
    id: uuidv5("aws-question-1252", uuidv5.URL),
    text: "What is one of the customer's responsibilities according to the AWS shared responsibility model?",
    options: [
      "Virtualization infrastructure",
      "Network infrastructure",
      "Application security",
      "Physical security of hardware",
    ],
    correctAnswers: [2],
    explanation:
      "Customers are responsible for securing their applications in the AWS cloud, which includes securing code, managing access, and ensuring proper configurations. AWS manages the underlying infrastructure.",
  },
  {
    id: uuidv5("aws-question-1253", uuidv5.URL),
    text: "What helps a company provide a lower latency experience to its users globally?",
    options: [
      "Using an AWS Region that is central to all users",
      "Using a second Availability Zone in the AWS Region that is being used",
      "Enabling caching in the AWS Region that is being used",
      "Using edge locations to put content closer to all users",
    ],
    correctAnswers: [3],
    explanation:
      "Edge locations, provided by AWS CloudFront, help reduce latency by caching content closer to users. This improves response times and user experience.",
  },
  {
    id: uuidv5("aws-question-1254", uuidv5.URL),
    text: "How can the AWS Cloud increase user workforce productivity after migration from an on-premises data center?",
    options: [
      "Users do not have to wait for infrastructure provisioning.",
      "The AWS Cloud infrastructure is much faster than an on-premises data center infrastructure.",
      "AWS takes over application configuration management on behalf of users.",
      "Users do not need to address security and compliance issues.",
    ],
    correctAnswers: [0],
    explanation:
      "By leveraging AWS, businesses can deploy resources instantly, avoiding long lead times for hardware procurement and setup, thus increasing productivity.",
  },
  {
    id: uuidv5("aws-question-1255", uuidv5.URL),
    text: "Which AWS service provides a quick and automated way to create and manage AWS accounts?",
    options: [
      "AWS QuickSight",
      "Amazon Lightsail",
      "AWS Organizations",
      "Amazon Connect",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Organizations helps manage and automate the creation of AWS accounts, allowing centralized governance and cost management.",
  },
  {
    id: uuidv5("aws-question-1256", uuidv5.URL),
    text: "Which Amazon RDS feature can be used to achieve high availability?",
    options: [
      "Multiple Availability Zones",
      "Amazon Reserved Instances",
      "Provisioned IOPS storage",
      "Enhanced monitoring",
    ],
    correctAnswers: [0],
    explanation:
      "Multi-AZ deployments in Amazon RDS provide high availability by automatically replicating data to a standby instance in a different Availability Zone.",
  },
  {
    id: uuidv5("aws-question-1257", uuidv5.URL),
    text: "Where should users report that AWS resources are being used for malicious purposes?",
    options: [
      "AWS Abuse team",
      "AWS Shield",
      "AWS Support",
      "AWS Developer Forums",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Abuse team handles security incidents and reports of AWS services being misused for malicious activities.",
  },
  {
    id: uuidv5("aws-question-1258", uuidv5.URL),
    text: "Which AWS service needs to be enabled to track all user account changes within the AWS Management Console?",
    options: [
      "AWS CloudTrail",
      "Amazon Simple Notification Service (Amazon SNS)",
      "VPC Flow Logs",
      "AWS CloudHSM",
    ],
    correctAnswers: [0],
    explanation:
      "AWS CloudTrail provides logs of all API activity in the AWS account, enabling governance and auditing.",
  },
  {
    id: uuidv5("aws-question-1259", uuidv5.URL),
    text: "What is an AWS Cloud design best practice?",
    options: [
      "Tight coupling of components",
      "Single point of failure",
      "High availability",
      "Overprovisioning of resources",
    ],
    correctAnswers: [2],
    explanation:
      "High availability ensures that services remain operational even in the event of failures by distributing workloads across multiple resources.",
  },
  {
    id: uuidv5("aws-question-1260", uuidv5.URL),
    text: "Why is AWS more economical than traditional data centers for applications with varying compute workloads?",
    options: [
      "Amazon Elastic Compute Cloud (Amazon EC2) costs are billed on a monthly basis.",
      "Customers retain full administrative access to their Amazon EC2 instances.",
      "Amazon EC2 instances can be launched on-demand when needed.",
      "Customers can permanently run enough instances to handle peak workloads.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS allows dynamic scaling with EC2 instances, enabling cost savings by launching instances only when needed instead of maintaining excess capacity.",
  },
  {
    id: uuidv5("aws-question-1261", uuidv5.URL),
    text: "Which AWS service would simplify migration of a database to AWS?",
    options: [
      "AWS Storage Gateway",
      "AWS Database Migration Service (AWS DMS)",
      "Amazon Elastic Compute Cloud (Amazon EC2)",
      "Amazon AppStream 2.0",
    ],
    correctAnswers: [1],
    explanation:
      "AWS DMS helps migrate databases to AWS with minimal downtime by supporting continuous data replication.",
  },
];

export const exam19: Question[] = [
  {
    id: uuidv5("aws-question-1262", uuidv5.URL),
    text: "Which AWS offering enables customers to find, buy, and immediately start using software solutions in their AWS environment?",
    options: ["AWS Config", "AWS OpsWorks", "AWS SDK", "AWS Marketplace"],
    correctAnswers: [3],
    explanation:
      "AWS Marketplace allows customers to find, buy, and immediately start using software solutions in their AWS environment. Reference: https://aws.amazon.com/mp/",
  },
  {
    id: uuidv5("aws-question-1263", uuidv5.URL),
    text: "Which AWS networking service enables a company to create a virtual network within AWS?",
    options: [
      "AWS Config",
      "Amazon Route 53",
      "AWS Direct Connect",
      "Amazon Virtual Private Cloud (Amazon VPC)",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon VPC enables a company to create a virtual network within AWS. Reference: https://aws.amazon.com/vpc/",
  },
  {
    id: uuidv5("aws-question-1264", uuidv5.URL),
    text: "Which of the following is AWS's responsibility under the AWS shared responsibility model?",
    options: [
      "Configuring third-party applications",
      "Maintaining physical hardware",
      "Securing application access and data",
      "Managing custom Amazon Machine Images (AMIs)",
    ],
    correctAnswers: [1],
    explanation:
      "AWS is responsible for maintaining physical hardware as part of its shared responsibility model. Reference: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-1265", uuidv5.URL),
    text: "Which component of AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?",
    options: [
      "AWS Regions",
      "AWS edge locations",
      "AWS Availability Zones",
      "Amazon Virtual Private Cloud (Amazon VPC)",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon CloudFront uses AWS edge locations to ensure low-latency delivery. Reference: https://aws.amazon.com/cloudfront/",
  },
  {
    id: uuidv5("aws-question-1266", uuidv5.URL),
    text: "How would a system administrator add an additional layer of login security to a user's AWS Management Console?",
    options: [
      "Use AWS Cloud Directory",
      "Audit AWS Identity and Access Management (IAM) roles",
      "Enable Multi-Factor Authentication",
      "Enable AWS CloudTrail",
    ],
    correctAnswers: [2],
    explanation:
      "Enabling Multi-Factor Authentication (MFA) adds an additional layer of security to AWS Management Console logins. Reference: https://aws.amazon.com/iam/details/mfa/",
  },
  {
    id: uuidv5("aws-question-1267", uuidv5.URL),
    text: "Which service can identify the user that made the API call when an Amazon Elastic Compute Cloud (Amazon EC2) instance is terminated?",
    options: [
      "Amazon CloudWatch",
      "AWS CloudTrail",
      "AWS X-Ray",
      "AWS Identity and Access Management (AWS IAM)",
    ],
    correctAnswers: [1],
    explanation:
      "AWS CloudTrail records API calls and can identify the user that made a request, such as terminating an EC2 instance. Reference: http://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html",
  },
  {
    id: uuidv5("aws-question-1268", uuidv5.URL),
    text: "Which service would you use to send alerts based on Amazon CloudWatch alarms?",
    options: [
      "Amazon Simple Notification Service (Amazon SNS)",
      "AWS CloudTrail",
      "AWS Trusted Advisor",
      "Amazon Route 53",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon SNS is used to send alerts based on Amazon CloudWatch alarms. Reference: http://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html",
  },
  {
    id: uuidv5("aws-question-1269", uuidv5.URL),
    text: "Where can a customer find information about prohibited actions on AWS infrastructure?",
    options: [
      "AWS Trusted Advisor",
      "AWS Identity and Access Management (IAM)",
      "AWS Billing Console",
      "AWS Acceptable Use Policy",
    ],
    correctAnswers: [3],
    explanation:
      "AWS Acceptable Use Policy (AUP) provides details about prohibited actions on AWS infrastructure. Reference: https://aws.amazon.com/aup/",
  },
  {
    id: uuidv5("aws-question-1270", uuidv5.URL),
    text: "Which of the following is an example of how moving to the AWS Cloud reduces upfront cost?",
    options: [
      "By replacing large variable costs with lower capital investments",
      "By replacing large capital investments with lower variable costs",
      "By allowing the provisioning of compute and storage at a fixed level to meet peak demand",
      "By replacing the repeated scaling of virtual servers with a simpler fixed-scale model",
    ],
    correctAnswers: [1],
    explanation:
      "AWS replaces large capital investments with lower variable costs, allowing users to pay only for what they use. Reference: https://aws.amazon.com/economics/",
  },
  {
    id: uuidv5("aws-question-1271", uuidv5.URL),
    text: "When designing a typical three-tier web application, which AWS services and/or features improve availability and reduce the impact of failures? (Choose two.)",
    options: [
      "AWS Auto Scaling for Amazon EC2 instances",
      "Amazon VPC subnet ACLs to check the health of a service",
      "Distributed resources across multiple Availability Zones",
      "AWS Server Migration Service (AWS SMS) to move Amazon EC2 instances into a different Region",
      "Distributed resources across multiple AWS points of presence",
    ],
    correctAnswers: [0, 2],
    explanation:
      "AWS Auto Scaling and distributing resources across multiple Availability Zones improve availability and reduce failure impact. Reference: https://d1.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf",
  },
  {
    id: uuidv5("aws-question-1272", uuidv5.URL),
    text: "Which cloud design principle aligns with AWS Cloud best practices?",
    options: [
      "Create fixed dependencies among application components",
      "Aggregate services on a single instance",
      "Deploy applications in a single Availability Zone",
      "Distribute the compute load across multiple resources",
    ],
    correctAnswers: [3],
    explanation:
      "A well-architected application in AWS should distribute the compute load across multiple resources. This design improves availability, fault tolerance, and scalability. Load balancing also offloads encryption termination (TLS) to improve performance and effectively manage and route traffic.\n\nReference: https://d1.awsstatic.com/whitepapers/architecture/AWS_Well-Architected_Framework.pdf",
  },
  {
    id: uuidv5("aws-question-1273", uuidv5.URL),
    text: "Which of the following are recommended practices for managing IAM users? (Choose two.)",
    options: [
      "Require IAM users to change their passwords after a specified period of time",
      "Prevent IAM users from reusing previous passwords",
      "Recommend that the same password be used on AWS and other sites",
      "Require IAM users to store their passwords in raw text",
      "Disable multi-factor authentication (MFA) for IAM users",
    ],
    correctAnswers: [0, 1],
    explanation:
      "IAM best practices suggest enforcing password policies that require users to change their passwords periodically and prevent them from reusing old passwords. These measures improve security by reducing the risk of compromised credentials.\n\nReference: https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html",
  },
  {
    id: uuidv5("aws-question-1274", uuidv5.URL),
    text: "A company is migrating from on-premises data centers to the AWS Cloud and is looking for hands-on help with the project. How can the company get this support? (Choose two.)",
    options: [
      "Ask for a quote from the AWS Marketplace team to perform a migration into the company's AWS account.",
      "Contact AWS Support and open a case for assistance",
      "Use AWS Professional Services to provide guidance and to set up an AWS Landing Zone in the company's AWS account",
      "Select a partner from the AWS Partner Network (APN) to assist with the migration",
      "Use Amazon Connect to create a new request for proposal (RFP) for expert assistance in migrating to the AWS Cloud.",
    ],
    correctAnswers: [2, 3],
    explanation:
      "AWS provides different options for hands-on migration assistance. AWS Professional Services offers direct guidance and best practices, while the AWS Partner Network (APN) allows customers to find experienced AWS partners specializing in cloud migrations.\n\nReference: https://aws.amazon.com/solutions/aws-landing-zone/",
  },
  {
    id: uuidv5("aws-question-1275", uuidv5.URL),
    text: "How does the AWS Enterprise Support Concierge team help users?",
    options: [
      "Supporting application development",
      "Providing architecture guidance",
      "Answering billing and account inquires",
      "Answering questions regarding technical support cases",
    ],
    correctAnswers: [2],
    explanation:
      "The AWS Enterprise Support Concierge team assists users by providing guidance on billing and account-related inquiries, helping them navigate AWS billing and financial processes.\n\nReference: https://aws.amazon.com/premiumsupport/plans/enterprise/",
  },
  {
    id: uuidv5("aws-question-1276", uuidv5.URL),
    text: "An application designed to span multiple Availability Zones is described as:",
    options: [
      "being highly available",
      "having global reach",
      "using an economy of scale",
      "having elasticity",
    ],
    correctAnswers: [0],
    explanation:
      "Applications that span multiple Availability Zones are considered highly available because they can withstand failures in one zone and continue functioning by leveraging resources in another zone.",
  },
  {
    id: uuidv5("aws-question-1277", uuidv5.URL),
    text: "A new service using AWS must be highly available. Yet, due to regulatory requirements, all of its Amazon EC2 instances must be located in a single geographic area. According to best practices, to meet these requirements, the EC2 instances must be placed in at least two:",
    options: [
      "AWS Regions",
      "Availability Zones",
      "subnets",
      "placement groups",
    ],
    correctAnswers: [1],
    explanation:
      "To ensure high availability while keeping resources in a single geographic area, EC2 instances should be distributed across multiple Availability Zones within the same AWS Region. This minimizes downtime in case of an AZ failure.\n\nReference: https://aws.amazon.com/ec2/faqs/",
  },
  {
    id: uuidv5("aws-question-1278", uuidv5.URL),
    text: "Which AWS tool is used to compare the cost of running an application on-premises to running the application in the AWS Cloud?",
    options: [
      "AWS Trusted Advisor",
      "AWS Simple Monthly Calculator",
      "AWS Pricing Calculator",
      "Cost Explorer",
    ],
    correctAnswers: [2],
    explanation:
      "The AWS Pricing Calculator allows users to estimate the cost of running workloads on AWS compared to an on-premises environment. It helps organizations make informed decisions about cloud migration.\n\nReference: https://aws.amazon.com/tco-calculator/",
  },
  {
    id: uuidv5("aws-question-1279", uuidv5.URL),
    text: "A company has multiple AWS accounts within AWS Organizations and wants to apply the Amazon EC2 Reserved Instances benefit to a single account only. Which action should be taken?",
    options: [
      "Purchase the Reserved Instances from the master payer account and turn off Reserved Instance sharing.",
      "Enable billing alerts in the AWS Billing and Cost Management console.",
      "Purchase the Reserved Instances in individual linked accounts and turn off Reserved Instance sharing from the payer level.",
      "Enable Reserved Instance sharing in the AWS Billing and Cost Management console.",
    ],
    correctAnswers: [0],
    explanation:
      "To ensure that the Reserved Instances benefits apply to a single account, they should be purchased from the master payer account, and Reserved Instance sharing should be disabled. This prevents the benefits from being distributed across linked accounts.\n\nReference: https://aws.amazon.com/premiumsupport/knowledge-center/ec2-ri-consolidated-billing/",
  },
  {
    id: uuidv5("aws-question-1280", uuidv5.URL),
    text: "Which situation should be reported to the AWS Abuse team?",
    options: [
      "An Availability Zone has a service disruption",
      "An intrusion attempt is made from an AWS IP address",
      "A user has trouble accessing an Amazon S3 bucket from an AWS IP address",
      "A user needs to change payment methods due to a compromise",
    ],
    correctAnswers: [1],
    explanation:
      "If an intrusion attempt originates from an AWS IP address, it should be reported to the AWS Abuse team. This helps AWS investigate and take action against potential malicious activity.\n\nReference: https://aws.amazon.com/premiumsupport/knowledge-center/report-aws-abuse/",
  },
  {
    id: uuidv5("aws-question-1281", uuidv5.URL),
    text: "A company is planning to launch an ecommerce site in a single AWS Region to a worldwide user base. Which AWS services will allow the company to reach users and provide low latency and high transfer speeds? (Choose two.)",
    options: [
      "Application Load Balancer",
      "AWS Global Accelerator",
      "AWS Direct Connect",
      "Amazon CloudFront",
      "AWS Lambda",
    ],
    correctAnswers: [1, 3],
    explanation:
      "AWS Global Accelerator and Amazon CloudFront both help optimize performance for global users. Global Accelerator routes traffic efficiently to the nearest AWS Region, while CloudFront caches content at edge locations for faster delivery.\n\nReference: https://aws.amazon.com/cloudfront/faqs/",
  },
  {
    id: uuidv5("aws-question-1282", uuidv5.URL),
    text: "Which AWS service or resource is serverless?",
    options: [
      "AWS Lambda",
      "Amazon EC2 instances",
      "Amazon Lightsail",
      "Amazon ElastiCache",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Lambda is a serverless compute service that allows users to run code without provisioning or managing servers. It automatically scales and charges only for the compute time consumed.Reference: https://blogs.itemis.com/en/serverless-services-on-aws",
  },
  {
    id: uuidv5("aws-question-1283", uuidv5.URL),
    text: "Which of the following are components of Amazon VPC? (Choose two.)",
    options: [
      "Objects",
      "Subnets",
      "Buckets",
      "Internet gateways",
      "Access key",
    ],
    correctAnswers: [1, 3],
    explanation:
      "Amazon VPC components include subnets, which divide the VPC network, and internet gateways, which provide internet access for resources inside the VPC. Reference: https://subscription.packtpub.com/book/virtualization_and_cloud/9781788293723/3/ch03lvl1sec26/vpc-components",
  },
  {
    id: uuidv5("aws-question-1284", uuidv5.URL),
    text: "AWS Budgets can be used to:",
    options: [
      "prevent a given user from creating a resource",
      "send an alert when the utilization of Reserved Instances drops below a certain percentage",
      "set resource limits in AWS accounts to prevent overspending",
      "split an AWS bill across multiple forms of payment",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Budgets helps users monitor their spending and set cost limits to prevent unexpected charges. Users can define budget thresholds and receive alerts when spending approaches the limit. Reference: https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html",
  },
  {
    id: uuidv5("aws-question-1285", uuidv5.URL),
    text: "Which of the following will enhance the security of access to the AWS Management Console? (Choose two.)",
    options: [
      "AWS Secrets Manager",
      "AWS Certificate Manager",
      "AWS Multi-Factor Authentication (AWS MFA)",
      "Security groups",
      "Password policies",
    ],
    correctAnswers: [2, 4],
    explanation:
      "AWS Multi-Factor Authentication (MFA) adds an extra layer of security by requiring a second form of authentication, and password policies enforce strong password rules, reducing unauthorized access risks. Reference: https://aws.amazon.com/blogs/security/guidelines-for-protecting-your-aws-account-while-using-programmatic-access/",
  },
  {
    id: uuidv5("aws-question-1286", uuidv5.URL),
    text: "The AWS Trusted Advisor checks include recommendations regarding which of the following? (Choose two.)",
    options: [
      "Information on Amazon S3 bucket permissions",
      "AWS service outages",
      "Multi-factor authentication enabled on the AWS account root user",
      "Available software patches",
      "Number of users in the account",
    ],
    correctAnswers: [0, 2],
    explanation:
      "AWS Trusted Advisor provides security checks, including verifying Amazon S3 bucket permissions and ensuring multi-factor authentication (MFA) is enabled for root accounts. Reference: https://aws.amazon.com/premiumsupport/technology/trusted-advisor/best-practice-checklist/",
  },
  {
    id: uuidv5("aws-question-1287", uuidv5.URL),
    text: "Which functions can users perform using AWS KMS?",
    options: [
      "Create and manage AWS access keys for the AWS account root user",
      "Create and manage AWS access keys for an AWS account IAM user",
      "Create and manage keys for encryption and decryption of data",
      "Create and manage keys for multi-factor authentication",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Key Management Service (KMS) allows users to create and manage cryptographic keys used for encrypting and decrypting data across AWS services. Reference: https://docs.aws.amazon.com/kms/latest/developerguide/control-access.html",
  },
  {
    id: uuidv5("aws-question-1288", uuidv5.URL),
    text: "How does AWS Trusted Advisor provide guidance to users of the AWS Cloud? (Choose two.)",
    options: [
      "It identifies software vulnerabilities in applications running on AWS",
      "It provides a list of cost optimization recommendations based on current AWS usage",
      "It detects potential security vulnerabilities caused by permissions settings on account resources",
      "It automatically corrects potential security issues caused by permissions settings on account resources",
      "It provides proactive alerting whenever an Amazon EC2 instance has been compromised",
    ],
    correctAnswers: [1, 2],
    explanation:
      "AWS Trusted Advisor provides recommendations on cost optimization and security improvements, such as identifying overly permissive access settings. Reference: https://aws.amazon.com/premiumsupport/technology/trusted-advisor/best-practice-checklist/",
  },
  {
    id: uuidv5("aws-question-1289", uuidv5.URL),
    text: "Which of the following are advantages of the AWS Cloud? (Choose two.)",
    options: [
      "AWS manages the maintenance of the cloud infrastructure",
      "AWS manages the security of applications built on AWS",
      "AWS manages capacity planning for physical servers",
      "AWS manages the development of applications on AWS",
      "AWS manages cost planning for virtual servers",
    ],
    correctAnswers: [0, 2],
    explanation:
      "AWS takes care of infrastructure maintenance and capacity planning for physical servers, allowing customers to focus on their applications rather than hardware management. Reference: https://aws.amazon.com/compliance/data-center/controls/",
  },
  {
    id: uuidv5("aws-question-1290", uuidv5.URL),
    text: "A user deploys an Amazon RDS DB instance in multiple Availability Zones. This strategy involves which pillar of the AWS Well-Architected Framework?",
    options: [
      "Performance efficiency",
      "Reliability",
      "Cost optimization",
      "Security",
    ],
    correctAnswers: [1],
    explanation:
      "Deploying an RDS DB instance across multiple Availability Zones enhances reliability by ensuring redundancy and failover capabilities in case of an outage. Reference: https://aws.amazon.com/blogs/apn/the-5-pillars-of-the-aws-well-architected-framework/",
  },
  {
    id: uuidv5("aws-question-1291", uuidv5.URL),
    text: "Which AWS services provide a user with connectivity between the AWS Cloud and on-premises resources? (Choose two.)",
    options: [
      "AWS VPN",
      "Amazon Connect",
      "Amazon Cognito",
      "AWS Direct Connect",
      "AWS Managed Services",
    ],
    correctAnswers: [0, 3],
    explanation:
      "AWS VPN and AWS Direct Connect provide secure connectivity between on-premises networks and AWS cloud resources. Reference: https://aws.amazon.com/directconnect/ \nhttps://aws.amazon.com/blogs/networking-and-content-delivery/introducing-aws-client-vpn-to-securely-access-aws-and-on-premises-resources/",
  },
  {
    id: uuidv5("aws-question-1292", uuidv5.URL),
    text: "Which AWS service is used to pay AWS bills, and monitor usage and budget costs?",
    options: [
      "AWS Billing and Cost Management",
      "Consolidated billing",
      "Amazon CloudWatch",
      "Amazon QuickSight",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Billing and Cost Management is the service designed to handle payments, monitor usage, and set budget alerts. Consolidated Billing (option B) is a feature within AWS Organizations but does not manage payments directly. Amazon CloudWatch (option C) is used for monitoring metrics and logs, not billing. Amazon QuickSight (option D) is a business intelligence tool for data visualization.\n\nReference: https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-what-is.html",
  },
  {
    id: uuidv5("aws-question-1293", uuidv5.URL),
    text: "Which element of the AWS global infrastructure consists of one or more discrete data centers, each with redundant power, networking, and connectivity, which are housed in separate facilities?",
    options: [
      "AWS Regions",
      "Availability Zones",
      "Edge locations",
      "Amazon CloudFront",
    ],
    correctAnswers: [1],
    explanation:
      "Availability Zones (AZs) consist of one or more data centers within a Region, providing redundancy and high availability. AWS Regions (option A) contain multiple AZs but do not themselves consist of discrete data centers. Edge locations (option C) are used primarily for content delivery via Amazon CloudFront, and Amazon CloudFront (option D) is a content delivery network (CDN) service.\n\nReference: https://docs.aws.amazon.com/whitepapers/latest/aws-overview/global-infrastructure.html",
  },
  {
    id: uuidv5("aws-question-1294", uuidv5.URL),
    text: "Which Amazon VPC feature enables users to capture information about the IP traffic that reaches Amazon EC2 instances?",
    options: [
      "Security groups",
      "Elastic network interfaces",
      "Network ACLs",
      "VPC Flow Logs",
    ],
    correctAnswers: [3],
    explanation:
      "VPC Flow Logs allow capturing IP traffic information for analysis. Security groups (option A) control inbound and outbound traffic but do not log it. Elastic network interfaces (option B) provide network connectivity but do not monitor traffic. Network ACLs (option C) are used for stateless traffic filtering but do not provide logging capabilities.\n\nReference: https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html",
  },
  {
    id: uuidv5("aws-question-1295", uuidv5.URL),
    text: "Which AWS service can be used to automatically scale an application up and down without making capacity planning decisions?",
    options: [
      "Amazon AutoScaling",
      "Amazon Redshift",
      "AWS CloudTrail",
      "AWS Lambda",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon AutoScaling automatically scales EC2 instances based on demand. Amazon Redshift (option B) is a data warehouse service that does not provide auto-scaling. AWS CloudTrail (option C) tracks user actions but does not scale applications. AWS Lambda (option D) is serverless but does not handle traditional instance-based auto-scaling.\n\nReference: https://aws.amazon.com/blogs/aws/category/auto-scaling/",
  },
  {
    id: uuidv5("aws-question-1296", uuidv5.URL),
    text: "AWS Enterprise Support users have access to which service or feature that is not available to users with other AWS Support plans?",
    options: [
      "AWS Trusted Advisor",
      "AWS Support case",
      "Concierge team",
      "Amazon Connect",
    ],
    correctAnswers: [2],
    explanation:
      "The Concierge team is exclusive to Enterprise Support customers. AWS Trusted Advisor (option A) is available on other support plans. AWS Support case (option B) is available in multiple plans. Amazon Connect (option D) is a contact center service unrelated to AWS Support.\n\nReference: https://aws.amazon.com/premiumsupport/plans/",
  },
  {
    id: uuidv5("aws-question-1297", uuidv5.URL),
    text: "A company wants to migrate a MySQL database to AWS but does not have the budget for Database Administrators to handle routine tasks including provisioning, patching, and performing backups. Which AWS service will support this use case?",
    options: [
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon DocumentDB",
      "Amazon ElastiCache",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon RDS makes it easy to set up, operate, and scale a relational database in the cloud. It provides cost-efficient and resizable capacity while automating time-consuming administration tasks, such as hardware provisioning, database setup, patching, and backups. This allows companies to focus on their applications instead of database management. \n\nAmazon DynamoDB (B) is a NoSQL database and not a direct alternative for MySQL. Amazon DocumentDB (C) is optimized for JSON workloads, and Amazon ElastiCache (D) is used for in-memory caching rather than as a managed relational database service.\n\nReference: https://aws.amazon.com/blogs/database/part-1-role-of-the-dba-when-moving-to-amazon-rds-responsibilities/",
  },
  {
    id: uuidv5("aws-question-1298", uuidv5.URL),
    text: "A company wants to expand from one AWS Region into a second AWS Region. What does the company need to do to start supporting the new Region?",
    options: [
      "Contact an AWS Account Manager to sign a new contract",
      "Move an Availability Zone to the new Region",
      "Begin deploying resources in the second Region",
      "Download the AWS Management Console for the new Region",
    ],
    correctAnswers: [2],
    explanation:
      "To start using a new AWS Region, a company simply needs to deploy resources in that Region. There is no need to sign a new contract (A), move an Availability Zone (B), or download a new version of the AWS Management Console (D). \n\nReference: https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-region.html",
  },
  {
    id: uuidv5("aws-question-1299", uuidv5.URL),
    text: "A user must meet compliance and software licensing requirements that state a workload must be hosted on a physical server. Which Amazon EC2 instance pricing option will meet these requirements?",
    options: [
      "Dedicated Hosts",
      "Dedicated Instances",
      "Spot Instances",
      "Reserved Instances",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon EC2 Dedicated Hosts provide physical servers dedicated for a single customer's use, meeting compliance and licensing requirements. \n\nDedicated Instances (B) run on hardware dedicated to a single customer but do not offer the same control over physical placement. Spot Instances (C) are designed for temporary workloads with cost savings, and Reserved Instances (D) provide capacity reservation and discounts but do not guarantee dedicated physical servers.\n\nReference: https://aws.amazon.com/ec2/dedicated-hosts/",
  },
  {
    id: uuidv5("aws-question-1300", uuidv5.URL),
    text: "Which AWS service will provide a way to generate encryption keys that can be used to encrypt data? (Choose two.)",
    options: [
      "Amazon Macie",
      "AWS Certificate Manager",
      "AWS Key Management Service (AWS KMS)",
      "AWS Secrets Manager",
      "AWS CloudHSM",
    ],
    correctAnswers: [2, 4],
    explanation:
      "AWS Key Management Service (AWS KMS) and AWS CloudHSM allow users to generate and manage encryption keys. KMS provides centralized control over encryption keys, while CloudHSM offers hardware security modules (HSMs) for higher security. \n\nAmazon Macie (A) is used for data classification and protection, AWS Certificate Manager (B) is for managing SSL/TLS certificates, and AWS Secrets Manager (D) is for managing sensitive information such as credentials rather than encryption keys.\n\nReferences: \n- https://docs.aws.amazon.com/crypto/latest/userguide/awscryp-service-hsm.html\n- https://docs.aws.amazon.com/kms/latest/developerguide/overview.html",
  },
  {
    id: uuidv5("aws-question-1301", uuidv5.URL),
    text: "A company is planning to migrate from on-premises to the AWS Cloud. Which AWS tool or service provides detailed reports on estimated cost savings after migration?",
    options: [
      "AWS Total Cost of Ownership (TCO) Calculator",
      "Cost Explorer",
      "AWS Budgets",
      "AWS Migration Hub",
    ],
    correctAnswers: [0],
    explanation:
      "The AWS Total Cost of Ownership (TCO) Calculator helps companies estimate cost savings by comparing on-premises costs with AWS. \n\nCost Explorer (B) is for analyzing existing AWS usage and costs, AWS Budgets (C) is used for setting cost alerts, and AWS Migration Hub (D) tracks application migration progress but does not estimate savings.\n\nReference: https://docs.aws.amazon.com/migrationhub/latest/ug/hub-api.pdf",
  },
  {
    id: uuidv5("aws-question-1302", uuidv5.URL),
    text: "What can assist in evaluating an application for migration to the cloud? (Choose two.)",
    options: [
      "AWS Trusted Advisor",
      "AWS Professional Services",
      "AWS Systems Manager",
      "AWS Partner Network (APN)",
      "AWS Secrets Manager",
    ],
    correctAnswers: [1, 3],
    explanation:
      "AWS Professional Services provides guidance and best practices for cloud migration. AWS Partner Network (APN) connects businesses with AWS-certified partners to assist in migration. Trusted Advisor and Systems Manager focus on optimization and management, not migration evaluation. Secrets Manager handles credential storage. Reference: https://aws.amazon.com/professional-services/",
  },
  {
    id: uuidv5("aws-question-1303", uuidv5.URL),
    text: "Which AWS service helps users meet contractual and regulatory compliance requirements for data security by using dedicated hardware appliances within the AWS Cloud?",
    options: [
      "AWS Secrets Manager",
      "AWS CloudHSM",
      "AWS Key Management Service (AWS KMS)",
      "AWS Directory Service",
    ],
    correctAnswers: [1],
    explanation:
      "AWS CloudHSM provides dedicated hardware security modules (HSMs) for secure key management, meeting compliance requirements. AWS KMS is a managed service for key management but doesn't use dedicated hardware. Secrets Manager stores credentials, and Directory Service manages identities. Reference: https://aws.amazon.com/cloudhsm/faqs/",
  },
  {
    id: uuidv5("aws-question-1304", uuidv5.URL),
    text: "Under the AWS shared responsibility model, the customer manages which of the following? (Choose two.)",
    options: [
      "Decommissioning of physical storage devices",
      "Security group and ACL configuration",
      "Patch management of an Amazon RDS instance operating system",
      "Controlling physical access to data centers",
      "Patch management of an Amazon EC2 instance operating system",
    ],
    correctAnswers: [1, 4],
    explanation:
      "Customers manage security group and ACL configuration as well as patching the OS of EC2 instances. AWS handles physical infrastructure security, RDS OS patching, and decommissioning storage devices. Reference: https://www.whizlabs.com/blog/aws-security-shared-responsibility/",
  },
  {
    id: uuidv5("aws-question-1305", uuidv5.URL),
    text: "Which AWS service is suitable for an event-driven workload?",
    options: [
      "Amazon EC2",
      "AWS Elastic Beanstalk",
      "AWS Lambda",
      "Amazon Lumberyard",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Lambda runs event-driven workloads without provisioning servers. EC2 requires manual scaling, Elastic Beanstalk helps with web app deployment, and Lumberyard is a game engine. Reference: https://aws.amazon.com/lambda/",
  },
  {
    id: uuidv5("aws-question-1306", uuidv5.URL),
    text: "What is a value proposition of the AWS Cloud?",
    options: [
      "AWS is responsible for security in the AWS Cloud",
      "No long-term contract is required",
      "Provision new servers in days",
      "AWS manages user applications in the AWS Cloud",
    ],
    correctAnswers: [1],
    explanation:
      "AWS allows customers to use resources on a pay-as-you-go model, avoiding long-term contracts. Security is a shared responsibility, provisioning is near-instantaneous, and AWS does not manage user applications. Reference: https://d1.awsstatic.com/whitepapers/aws-whitepaper-business-value-of-aws.pdf",
  },
  {
    id: uuidv5("aws-question-1307", uuidv5.URL),
    text: "What is a characteristic of Amazon S3 cross-region replication?",
    options: [
      "Both source and destination S3 buckets must have versioning disabled",
      "The source and destination S3 buckets cannot be in different AWS Regions",
      "S3 buckets configured for cross-region replication can be owned by a single AWS account or by different accounts",
      "The source S3 bucket owner must have the source and destination AWS Regions disabled for their account",
    ],
    correctAnswers: [2],
    explanation:
      "Cross-region replication supports buckets owned by different accounts. Versioning must be enabled, buckets must be in different regions, and the owner must have the regions enabled. Reference: https://docs.aws.amazon.com/AmazonS3/latest/dev/replication.html",
  },
  {
    id: uuidv5("aws-question-1308", uuidv5.URL),
    text: "What is a user responsible for when running an application in the AWS Cloud?",
    options: [
      "Managing physical hardware",
      "Updating the underlying hypervisor",
      "Providing a list of users approved for data center access",
      "Managing application software updates",
    ],
    correctAnswers: [3],
    explanation:
      "Users manage application updates, while AWS handles physical infrastructure, hypervisors, and data center access. Reference: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-1309", uuidv5.URL),
    text: "A company that does business online needs to quickly deliver new functionality in an iterative manner, minimizing the time to market. Which AWS Cloud feature can provide this?",
    options: ["Elasticity", "High availability", "Agility", "Reliability"],
    correctAnswers: [2],
    explanation:
      "Agility enables fast iteration and deployment of new functionality. Elasticity relates to scaling, high availability ensures uptime, and reliability focuses on system dependability. Reference: https://aws.amazon.com/devops/partner-solutions/",
  },
  {
    id: uuidv5("aws-question-1310", uuidv5.URL),
    text: "Which features or services can be used to monitor costs and expenses for an AWS account? (Choose two.)",
    options: [
      "AWS Cost and Usage report",
      "AWS product pages",
      "AWS Simple Monthly Calculator",
      "Billing alerts and Amazon CloudWatch alarms",
      "AWS Price List API",
    ],
    correctAnswers: [0, 3],
    explanation:
      "AWS Cost and Usage reports provide detailed cost data, and CloudWatch billing alerts help track expenses. AWS product pages provide information, the Simple Monthly Calculator estimates costs, and the Price List API retrieves pricing data. Reference: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html",
  },
  {
    id: uuidv5("aws-question-1311", uuidv5.URL),
    text: "Amazon Route 53 enables users to:",
    options: [
      "Encrypt data in transit",
      "Register DNS domain names",
      "Generate and manage SSL certificates",
      "Establish a dedicated network connection to AWS",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon Route 53 is a domain name system (DNS) service that allows users to register and manage domain names. It does not provide encryption, SSL certificate management, or dedicated networking. Reference: https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html",
  },
];

const exam20: Question[] = [
  {
    id: uuidv5("aws-question-1312", uuidv5.URL),
    text: "Which AWS service helps identify malicious or unauthorized activities in AWS accounts and workloads?",
    options: [
      "Amazon Rekognition",
      "AWS Trusted Advisor",
      "Amazon GuardDuty",
      "Amazon CloudWatch",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon GuardDuty is a threat detection service that continuously monitors for malicious or unauthorized behavior to help protect your AWS accounts and workloads. The other services do not provide this level of threat detection: Amazon Rekognition is used for image and video analysis, AWS Trusted Advisor provides recommendations to optimize AWS resources, and Amazon CloudWatch is used for monitoring and observability, but not specifically for threat detection. https://aws.amazon.com/guardduty/",
  },
  {
    id: uuidv5("aws-question-1313", uuidv5.URL),
    text: "A company wants to try a third-party ecommerce solution before deciding to use it long term. Which AWS service or tool will support this effort?",
    options: [
      "AWS Marketplace",
      "AWS Partner Network (APN)",
      "AWS Managed Services",
      "AWS Service Catalog",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Marketplace is a curated digital catalog that makes it easy for customers to find, test, buy, and deploy third-party software that runs on AWS. The AWS Partner Network connects partners, but doesn't provide direct trial access. AWS Managed Services help with operational support, and AWS Service Catalog helps manage approved services but is not designed for testing third-party solutions. https://aws.amazon.com/about-aws/whats-new/2019/09/aws-marketplace-easier-to-find-solutions-from-aws-console/",
  },
  {
    id: uuidv5("aws-question-1314", uuidv5.URL),
    text: "Which AWS service is a managed NoSQL database?",
    options: [
      "Amazon Redshift",
      "Amazon DynamoDB",
      "Amazon Aurora",
      "Amazon RDS for MariaDB",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon DynamoDB is a fully managed NoSQL database service. Amazon Redshift is a data warehouse, Amazon Aurora and Amazon RDS for MariaDB are relational databases, not NoSQL solutions. https://aws.amazon.com/dynamodb/",
  },
  {
    id: uuidv5("aws-question-1315", uuidv5.URL),
    text: "Which AWS service should be used to create a billing alarm?",
    options: [
      "AWS Trusted Advisor",
      "AWS CloudTrail",
      "Amazon CloudWatch",
      "Amazon QuickSight",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon CloudWatch allows you to create billing alarms based on your estimated charges. AWS Trusted Advisor provides optimization insights, AWS CloudTrail logs API calls, and Amazon QuickSight is for data visualization. https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html",
  },
  {
    id: uuidv5("aws-question-1316", uuidv5.URL),
    text: "A company is hosting a web application in a Docker container on Amazon EC2. AWS is responsible for which of the following tasks?",
    options: [
      "Scaling the web application and services developed with Docker",
      "Provisioning or scheduling containers to run on clusters and maintain their availability",
      "Performing hardware maintenance in the AWS facilities that run the AWS Cloud",
      "Managing the guest operating system, including updates and security patches",
    ],
    correctAnswers: [2],
    explanation:
      "AWS is responsible for the hardware maintenance of the infrastructure running EC2 instances. The other tasks, including scaling, container orchestration, and OS management, are the responsibility of the customer in this scenario. https://aws.amazon.com/getting-started/tutorials/deploy-docker-containers/",
  },
  {
    id: uuidv5("aws-question-1317", uuidv5.URL),
    text: "Users are reporting latency when connecting to a website with a global customer base. Which AWS service will improve the customer experience by reducing latency?",
    options: [
      "Amazon CloudFront",
      "AWS Direct Connect",
      "Amazon EC2 Auto Scaling",
      "AWS Transit Gateway",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon CloudFront is a content delivery network (CDN) that helps deliver data with low latency to users across the globe. AWS Direct Connect is used for dedicated connections, EC2 Auto Scaling manages compute resources, and AWS Transit Gateway helps with network management, not content delivery. https://aws.amazon.com/getting-started/tutorials/deliver-content-faster/",
  },
  {
    id: uuidv5("aws-question-1318", uuidv5.URL),
    text: "Which actions represent best practices for using AWS IAM? (Choose two.)",
    options: [
      "Configure a strong password policy",
      "Share the security credentials among users of AWS accounts who are in the same Region",
      "Use access keys to log in to the AWS Management Console",
      "Rotate access keys on a regular basis",
      "Avoid using IAM roles to delegate permissions",
    ],
    correctAnswers: [0, 3],
    explanation:
      "Best practices for AWS IAM include configuring a strong password policy to enhance account security and rotating access keys regularly to minimize exposure in case they are compromised. Sharing credentials, using access keys for console login, and avoiding IAM roles are all insecure practices and go against AWS best practices. https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html",
  },
  {
    id: uuidv5("aws-question-1319", uuidv5.URL),
    text: "Which AWS feature or service can be used to capture information about incoming and outgoing traffic in an AWS VPC infrastructure?",
    options: [
      "AWS Config",
      "VPC Flow Logs",
      "AWS Trusted Advisor",
      "AWS CloudTrail",
    ],
    correctAnswers: [1],
    explanation:
      "VPC Flow Logs capture information about IP traffic going to and from network interfaces in your VPC. AWS Config tracks configuration changes, AWS Trusted Advisor offers best-practice checks, and AWS CloudTrail records API calls but does not monitor network traffic. https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html",
  },
  {
    id: uuidv5("aws-question-1320", uuidv5.URL),
    text: "A company wants to use an AWS service to monitor the health of application endpoints, with the ability to route traffic to healthy regional endpoints to improve application availability. Which service will support these requirements?",
    options: [
      "Amazon Inspector",
      "Amazon CloudWatch",
      "AWS Global Accelerator",
      "Amazon CloudFront",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Global Accelerator monitors the health of your endpoints and routes traffic to healthy regional endpoints to improve availability and performance. Amazon Inspector assesses application security, Amazon CloudWatch provides metrics and monitoring, and Amazon CloudFront is a CDN that does not manage endpoint health. https://aws.amazon.com/global-accelerator/?blogs-global-accelerator.sort-by=item.additionalFields.createdDate&blogs-global-accelerator.sort-order=desc&aws-global-accelerator-wn.sort-by=item.additionalFields.postDateTime&aws-global-accelerator-wn.sort-order=desc",
  },
  {
    id: uuidv5("aws-question-1321", uuidv5.URL),
    text: "According to the AWS Well-Architected Framework, what change management steps should be taken to achieve reliability in the AWS Cloud? (Choose two.)",
    options: [
      "Use AWS Config to generate an inventory of AWS resources",
      "Use service limits to prevent users from creating or making changes to AWS resources",
      "Use AWS CloudTrail to record AWS API calls into an auditable log file",
      "Use AWS Certificate Manager to whitelist approved AWS resources and services",
      "Use Amazon GuardDuty to validate configuration changes made to AWS resources",
    ],
    correctAnswers: [0, 2],
    explanation:
      "According to the AWS Well-Architected Framework, maintaining an inventory of AWS resources with AWS Config and recording API calls with AWS CloudTrail are key change management steps for ensuring reliability. Service limits, whitelisting with ACM, and using GuardDuty for configuration validation are not part of the defined best practices in this area. https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html",
  },
  {
    id: uuidv5("aws-question-1322", uuidv5.URL),
    text: "Which service can be used to monitor and receive alerts for AWS account root user AWS Management Console sign-in events?",
    options: [
      "Amazon CloudWatch",
      "AWS Config",
      "AWS Trusted Advisor",
      "AWS IAM",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon CloudWatch can be configured to monitor and send alerts for root user AWS Management Console sign-in events by setting up metrics and alarms. This helps enhance account security by notifying administrators of potentially risky activity. The other options do not provide this monitoring and alert capability directly. https://aws.amazon.com/blogs/mt/monitor-and-notify-on-aws-account-root-user-activity/",
  },
  {
    id: uuidv5("aws-question-1323", uuidv5.URL),
    text: "Which design principle should be considered when architecting in the AWS Cloud?",
    options: [
      "Think of servers as non-disposable resources",
      "Use synchronous integration of services",
      "Design loosely coupled components",
      "Implement the least permissive rules for security groups",
    ],
    correctAnswers: [2],
    explanation:
      "Designing loosely coupled components ensures that individual components can fail or change without affecting the entire system, improving flexibility and scalability. The other options either contradict AWS best practices or are too specific compared to this foundational principle. https://www.botmetric.com/blog/aws-cloud-architecture-design-principles/",
  },
  {
    id: uuidv5("aws-question-1324", uuidv5.URL),
    text: "Which AWS services can be used to move data from on-premises data centers to AWS? (Choose two.)",
    options: [
      "AWS Snowball",
      "AWS Lambda",
      "AWS ElastiCache",
      "AWS Database Migration Service (AWS DMS)",
      "Amazon API Gateway",
    ],
    correctAnswers: [0, 3],
    explanation:
      "AWS Snowball is used for large-scale data transfer by physically shipping secure devices, while AWS Database Migration Service (AWS DMS) helps migrate databases from on-premises to AWS with minimal downtime. The other services do not provide this data transfer capability. https://aws.amazon.com/snowball/",
  },
  {
    id: uuidv5("aws-question-1325", uuidv5.URL),
    text: "A batch workload takes 5 hours to finish on an Amazon EC2 instance. The amount of data to be processed doubles monthly and the processing time is proportional. What is the best cloud architecture to address this consistently growing demand?",
    options: [
      "Run the application on a bigger EC2 instance size.",
      "Switch to an EC2 instance family that better matches batch requirements.",
      "Distribute the application across multiple EC2 instances and run the workload in parallel.",
      "Run the application on a bare metal EC2 instance.",
    ],
    correctAnswers: [2],
    explanation:
      "Distributing the application across multiple EC2 instances and running workloads in parallel provides horizontal scaling, which effectively addresses exponential data growth. Increasing instance size or changing instance family has limitations and won't scale indefinitely.",
  },
  {
    id: uuidv5("aws-question-1326", uuidv5.URL),
    text: "Each department within a company has its own independent AWS account and its own payment method. New company leadership wants to centralize departmental governance and consolidate payments. How can this be achieved using AWS services or features?",
    options: [
      "Forward monthly invoices for each account. Then create IAM roles to allow cross-account access.",
      "Create a new AWS account. Then configure AWS Organizations and invite all existing accounts to join.",
      "Configure AWS Organizations in each of the existing accounts. Then link all accounts together.",
      "Use Cost Explorer to combine costs from all accounts. Then replicate IAM policies across accounts.",
    ],
    correctAnswers: [1],
    explanation:
      "Creating a new AWS account and configuring AWS Organizations allows centralized management of billing, accounts, and governance. Other methods do not provide the same level of integrated control. https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts.html",
  },
  {
    id: uuidv5("aws-question-1327", uuidv5.URL),
    text: "The ability to horizontally scale Amazon EC2 instances based on demand is an example of which concept in the AWS Cloud value proposition?",
    options: ["Economy of scale", "Elasticity", "High availability", "Agility"],
    correctAnswers: [1],
    explanation:
      "Elasticity refers to the ability to scale resources up or down automatically based on demand, a core AWS benefit.",
  },
  {
    id: uuidv5("aws-question-1328", uuidv5.URL),
    text: "An ecommerce company anticipates a huge increase in web traffic for two very popular upcoming shopping holidays. Which AWS service or feature can be configured to dynamically adjust resources to meet this change in demand?",
    options: [
      "AWS CloudTrail",
      "Amazon EC2 Auto Scaling",
      "Amazon Forecast",
      "AWS Config",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon EC2 Auto Scaling dynamically adjusts resources to meet changes in demand, ensuring application availability and cost efficiency. https://aws.amazon.com/autoscaling/",
  },
  {
    id: uuidv5("aws-question-1329", uuidv5.URL),
    text: "Which AWS service enables users to securely connect to AWS resources over the public internet?",
    options: [
      "Amazon VPC peering",
      "AWS Direct Connect",
      "AWS VPN",
      "Amazon Pinpoint",
    ],
    correctAnswers: [2],
    explanation:
      "AWS VPN allows secure connections to AWS resources over the public internet, enabling encrypted communication. https://d1.awsstatic.com/whitepapers/aws-security-whitepaper.pdf",
  },
  {
    id: uuidv5("aws-question-1330", uuidv5.URL),
    text: "Which tool is used to forecast AWS spending?",
    options: [
      "AWS Trusted Advisor",
      "AWS Organizations",
      "Cost Explorer",
      "Amazon Inspector",
    ],
    correctAnswers: [2],
    explanation:
      "Cost Explorer allows users to visualize, analyze, and forecast AWS spending, helping with budget planning. https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-forecast.html",
  },
  {
    id: uuidv5("aws-question-1331", uuidv5.URL),
    text: "A company is running an ecommerce application hosted in Europe. To decrease latency for users who access the website from other parts of the world, the company would like to cache frequently accessed static content closer to the users. Which AWS service will support these requirements?",
    options: [
      "Amazon ElastiCache",
      "Amazon CloudFront",
      "Amazon Elastic File System (Amazon EFS)",
      "Amazon Elastic Block Store (Amazon EBS)",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon CloudFront uses a global network of edge locations and regional edge caches to cache static content closer to users, reducing latency and improving performance. https://aws.amazon.com/cloudfront/faqs/",
  },
  {
    id: uuidv5("aws-question-1332", uuidv5.URL),
    text: "Which of the following is a component of the AWS Global Infrastructure?",
    options: [
      "Amazon Alexa",
      "AWS Regions",
      "Amazon Lightsail",
      "AWS Organizations",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Regions are fundamental components of the AWS Global Infrastructure, consisting of multiple, physically separated, and isolated Availability Zones. These allow users to build highly available and fault-tolerant applications. The other options are services or features not part of the infrastructure itself. https://aws.amazon.com/about-aws/global-infrastructure/",
  },
  {
    id: uuidv5("aws-question-1333", uuidv5.URL),
    text: "Which AWS service will help users determine if an application running on an Amazon EC2 instance has sufficient CPU capacity?",
    options: [
      "Amazon CloudWatch",
      "AWS Config",
      "AWS CloudTrail",
      "Amazon Inspector",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon CloudWatch allows monitoring of AWS resources and applications in real-time, including CPU utilization metrics for EC2 instances. The other services do not provide direct resource monitoring metrics. https://aws.amazon.com/ec2/faqs/",
  },
  {
    id: uuidv5("aws-question-1334", uuidv5.URL),
    text: "Why is it beneficial to use Elastic Load Balancers with applications?",
    options: [
      "They allow for the conversion from Application Load Balancers to Classic Load Balancers.",
      "They are capable of handling constant changes in network traffic patterns.",
      "They automatically adjust capacity.",
      "They are provided at no charge to users.",
    ],
    correctAnswers: [1],
    explanation:
      "Elastic Load Balancers are designed to handle varying network traffic patterns and distribute incoming traffic efficiently across multiple targets. This helps maintain application availability and performance. The other options are incorrect or misleading. https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html",
  },
  {
    id: uuidv5("aws-question-1335", uuidv5.URL),
    text: "Which tasks are the customer's responsibility in the AWS shared responsibility model? (Choose two.)",
    options: [
      "Infrastructure facilities access management",
      "Cloud infrastructure hardware lifecycle management",
      "Configuration management of user's applications",
      "Networking infrastructure protection",
      "Security groups configuration",
    ],
    correctAnswers: [2, 4],
    explanation:
      "Under the AWS shared responsibility model, AWS manages the security of the cloud, while customers are responsible for the security in the cloud, including application configuration and security group settings. The other options fall under AWS's responsibilities. https://cloudacademy.com/blog/aws-shared-responsibility-model-security/",
  },
  {
    id: uuidv5("aws-question-1336", uuidv5.URL),
    text: "IT systems should be designed to reduce interdependencies, so that a change or failure in one component does not cascade to other components. This is an example of which principle of cloud architecture design?",
    options: [
      "Scalability",
      "Loose coupling",
      "Automation",
      "Automatic scaling",
    ],
    correctAnswers: [1],
    explanation:
      "Loose coupling refers to designing systems with minimal dependencies between components, allowing for better fault isolation and easier updates. The other options refer to different architectural principles. https://d1.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf",
  },
  {
    id: uuidv5("aws-question-1337", uuidv5.URL),
    text: "Which AWS service or feature can enhance network security by blocking requests from a particular network for a web application on AWS? (Choose two.)",
    options: [
      "AWS WAF",
      "AWS Trusted Advisor",
      "AWS Direct Connect",
      "AWS Organizations",
      "Network ACLs",
    ],
    correctAnswers: [0, 4],
    explanation:
      "AWS WAF allows you to filter and block malicious web traffic at the application layer, and Network ACLs can control inbound and outbound traffic at the subnet level. The other options do not serve this purpose. https://aws.amazon.com/waf/ and https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html",
  },
  {
    id: uuidv5("aws-question-1338", uuidv5.URL),
    text: "An application runs on multiple Amazon EC2 instances that access a shared file system simultaneously. Which AWS storage service should be used?",
    options: ["Amazon EBS", "Amazon EFS", "Amazon S3", "AWS Artifact"],
    correctAnswers: [1],
    explanation:
      "Amazon EFS (Elastic File System) allows multiple EC2 instances to access the same file system simultaneously with shared access, making it ideal for applications requiring concurrent file system access. The other services do not meet this requirement. https://aws.amazon.com/efs/",
  },
  {
    id: uuidv5("aws-question-1339", uuidv5.URL),
    text: "A web application is hosted on AWS using an Elastic Load Balancer, multiple Amazon EC2 instances, and Amazon RDS. Which security measures fall under the responsibility of AWS? (Choose two.)",
    options: [
      "Running a virus scan on EC2 instances",
      "Protecting against IP spoofing and packet sniffing",
      "Installing the latest security patches on the RDS instance",
      "Encrypting communication between the EC2 instances and the Elastic Load Balancer",
      "Configuring a security group and a network access control list (NACL) for EC2",
    ],
    correctAnswers: [1, 2],
    explanation:
      "AWS is responsible for protecting against IP spoofing and for maintaining the security of managed services like RDS, including patching the underlying infrastructure. The other responsibilities fall to the customer. https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-1340", uuidv5.URL),
    text: "What is the benefit of elasticity in the AWS Cloud?",
    options: [
      "Ensure web traffic is automatically spread across multiple AWS Regions.",
      "Minimize storage costs by automatically archiving log data.",
      "Enable AWS to automatically select the most cost-effective services.",
      "Automatically adjust the required compute capacity to maintain consistent performance.",
    ],
    correctAnswers: [3],
    explanation:
      "Elasticity allows AWS to automatically scale resources up or down based on demand, ensuring consistent performance and cost efficiency. The other options do not reflect this principle. https://aimconsulting.com/insights/blog/the-elastic-cloud-opportunity/",
  },
  {
    id: uuidv5("aws-question-1341", uuidv5.URL),
    text: "The continual reduction of AWS Cloud pricing is due to:",
    options: [
      "pay-as-you go pricing",
      "the AWS global infrastructure",
      "economies of scale",
      "reserved storage pricing",
    ],
    correctAnswers: [2],
    explanation:
      "The reduction in AWS pricing over time is largely due to economies of scale, allowing AWS to pass on cost savings to customers. The other options are either pricing models or features but not the reason for price reductions. https://aws.amazon.com/economies-of-scale/",
  },
  {
    id: uuidv5("aws-question-1342", uuidv5.URL),
    text: "A company needs an Amazon S3 bucket that cannot have any public objects due to compliance requirements. How can this be accomplished?",
    options: [
      "Enable S3 Block Public Access from the AWS Management Console.",
      "Hold a team meeting to discuss the importance if only uploading private S3 objects.",
      "Require all S3 objects to be manually approved before uploading.",
      "Create a service to monitor all S3 uploads and remove any public uploads.",
    ],
    correctAnswers: [0],
    explanation:
      "The correct way to prevent public access to S3 buckets is by enabling S3 Block Public Access. This setting blocks public access to buckets and objects across an entire AWS account or at the bucket level. This approach is secure and does not rely on human oversight. Reference: https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html",
  },
  {
    id: uuidv5("aws-question-1343", uuidv5.URL),
    text: "A Cloud Practitioner identifies a billing issue after examining the AWS Cost and Usage report in the AWS Management Console. Which action can be taken to resolve this?",
    options: [
      "Open a detailed case related to billing and submit it to AWS Support for help.",
      "Upload data describing the issue to a new object in a private Amazon S3 bucket.",
      "Create a pricing application and deploy it to a right-sized Amazon EC2 instance for more information.",
      "Proceed with creating a new dashboard in Amazon QuickSight.",
    ],
    correctAnswers: [0],
    explanation:
      "If a billing issue is identified, the correct approach is to open a detailed billing case with AWS Support. AWS Support provides assistance with account and billing inquiries. Reference: https://docs.aws.amazon.com/awssupport/latest/user/case-management.html",
  },
  {
    id: uuidv5("aws-question-1344", uuidv5.URL),
    text: "What does the AWS Simple Monthly Calculator do?",
    options: [
      "Compares on-premises costs to colocation environments",
      "Estimates monthly billing based on projected usage",
      "Estimates power consumption at existing data centers",
      "Estimates CPU utilization",
    ],
    correctAnswers: [1],
    explanation:
      "The AWS Simple Monthly Calculator allows users to estimate their monthly AWS bill based on expected usage of services. Reference: https://aws.amazon.com/blogs/aws/estimate-your-c/",
  },
  {
    id: uuidv5("aws-question-1345", uuidv5.URL),
    text: "Who is responsible for patching the guest operating system for Amazon RDS?",
    options: [
      "The AWS Product team",
      "The customer Database Administrator",
      "Managed partners",
      "AWS Support",
    ],
    correctAnswers: [1],
    explanation:
      "Under the shared responsibility model, patching and maintaining the guest operating system, including databases, is the customer's responsibility for Amazon RDS. Reference: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-1346", uuidv5.URL),
    text: "Which AWS services may be scaled using AWS Auto Scaling? (Choose two.)",
    options: [
      "Amazon EC2",
      "Amazon DynamoDB",
      "Amazon S3",
      "Amazon Route 53",
      "Amazon Redshift",
    ],
    correctAnswers: [0, 1],
    explanation:
      "AWS Auto Scaling can be used to automatically adjust capacity for both EC2 instances and DynamoDB throughput. Reference: https://aws.amazon.com/autoscaling/faqs/",
  },
  {
    id: uuidv5("aws-question-1347", uuidv5.URL),
    text: "Which of the following are benefits of AWS Global Accelerator? (Choose two.)",
    options: [
      "Reduced cost to run services on AWS",
      "Improved availability of applications deployed on AWS",
      "Higher durability of data stored on AWS",
      "Decreased latency to reach applications deployed on AWS",
      "Higher security of data stored on AWS",
    ],
    correctAnswers: [1, 3],
    explanation:
      "AWS Global Accelerator improves application availability and decreases latency by directing traffic through the AWS global network. Reference: https://aws.amazon.com/global-accelerator/faqs/",
  },
  {
    id: uuidv5("aws-question-1348", uuidv5.URL),
    text: "A user who wants to get help with billing and reactivate a suspended account should submit an account and billing request to:",
    options: [
      "the AWS Support forum",
      "AWS Abuse",
      "an AWS Solutions Architect",
      "AWS Support",
    ],
    correctAnswers: [3],
    explanation:
      "To resolve account suspension and billing issues, users should submit an account and billing request to AWS Support. Reference: https://aws.amazon.com/premiumsupport/knowledge-center/reactivate-suspended-account/",
  },
  {
    id: uuidv5("aws-question-1349", uuidv5.URL),
    text: "Which AWS Cloud best practice uses the elasticity and agility of cloud computing?",
    options: [
      "Provision capacity based on past usage and theoretical peaks",
      "Dynamically and predictively scale to meet usage demands",
      "Build the application and infrastructure in a data center that grants physical access",
      "Break apart the application into loosely coupled components",
    ],
    correctAnswers: [1],
    explanation:
      "Dynamically and predictively scaling to meet demand is a key cloud best practice that takes advantage of AWS elasticity and agility. This allows organizations to avoid overprovisioning or underprovisioning.",
  },
  {
    id: uuidv5("aws-question-1350", uuidv5.URL),
    text: "Which method helps to optimize costs of users moving to the AWS Cloud?",
    options: [
      "Paying only for what is used",
      "Purchasing hardware before it is needed",
      "Manually provisioning cloud resources",
      "Purchasing for the maximum possible load",
    ],
    correctAnswers: [0],
    explanation:
      "A key cost optimization benefit of AWS is that users pay only for what they use, reducing unnecessary expenditures. Reference: https://www.cloudmanagementinsider.com/ways-to-optimize-aws-cost/",
  },
  {
    id: uuidv5("aws-question-1351", uuidv5.URL),
    text: "Under the AWS shared responsibility model, which of the following is a customer responsibility?",
    options: [
      "Installing security patches for the Xen and KVM hypervisors",
      "Installing operating system patches for Amazon DynamoDB",
      "Installing operating system security patches for Amazon EC2 database instances",
      "Installing operating system security patches for Amazon RDS database instances",
    ],
    correctAnswers: [2],
    explanation:
      "The customer is responsible for installing operating system security patches for EC2 instances, including database instances that run on EC2. Reference: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-1352", uuidv5.URL),
    text: "The AWS Cost Management tools give users the ability to do which of the following? (Choose two.)",
    options: [
      "Terminate all AWS resources automatically if budget thresholds are exceeded.",
      "Break down AWS costs by day, service, and linked AWS account.",
      "Create budgets and receive notifications if current of forecasted usage exceeds the budgets.",
      "Switch automatically to Reserved Instances or Spot Instances, whichever is most cost-effective.",
      "Move data stored in Amazon S3 to a more cost-effective storage class.",
    ],
    correctAnswers: [1, 2],
    explanation:
      "AWS Cost Management tools allow users to break down costs by day, service, and account, and to create budgets with notifications when thresholds are exceeded. They do not terminate resources or automatically switch instance types. Reference: https://aws.amazon.com/aws-cost-management/",
  },
  {
    id: uuidv5("aws-question-1353", uuidv5.URL),
    text: "Under the AWS shared responsibility model, the security and patching of the guest operating system is the responsibility of:",
    options: [
      "AWS Support",
      "the customer",
      "AWS Systems Manager",
      "AWS Config",
    ],
    correctAnswers: [1],
    explanation:
      "According to the AWS shared responsibility model, patching and securing the guest operating system is the customer's responsibility. Reference: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-1354", uuidv5.URL),
    text: "Which AWS service makes it easy to create and manage AWS users and groups, and provide them with secure access to AWS resources at no charge?",
    options: [
      "AWS Direct Connect",
      "Amazon Connect",
      "AWS Identity and Access Management (IAM)",
      "AWS Firewall Manager",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Identity and Access Management (IAM) allows users to securely manage users and groups and grant permissions at no cost. Reference: https://aws.amazon.com/iam/",
  },
  {
    id: uuidv5("aws-question-1355", uuidv5.URL),
    text: "Which AWS service provides on-demand access to AWS security and compliance documentation?",
    options: [
      "AWS Directory Service",
      "AWS Artifact",
      "AWS Trusted Advisor",
      "Amazon Inspector",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Artifact is the on-demand portal for AWS security and compliance reports and documentation. Reference: https://aws.amazon.com/artifact/",
  },
  {
    id: uuidv5("aws-question-1356", uuidv5.URL),
    text: "Which AWS service can be used to turn text into life-like speech?",
    options: [
      "Amazon Polly",
      "Amazon Transcribe",
      "Amazon Rekognition",
      "Amazon Lex",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon Polly converts text to life-like speech using advanced deep learning technologies. Reference: https://aws.amazon.com/polly/",
  },
  {
    id: uuidv5("aws-question-1357", uuidv5.URL),
    text: "What is one of the core principles to follow when designing a highly available application in the AWS Cloud?",
    options: [
      "Design using a serverless architecture",
      "Assume that all components within an application can fail",
      "Design AWS Auto Scaling into every application",
      "Design all components using open-source code",
    ],
    correctAnswers: [1],
    explanation:
      "A key principle in designing highly available systems is to assume all components can fail and design for resiliency.",
  },
  {
    id: uuidv5("aws-question-1358", uuidv5.URL),
    text: "A user needs to generate a report that outlines the status of key security checks in an AWS account, including S3 permissions, root MFA status, and unrestricted security groups. Where can this information be found in one location?",
    options: [
      "Amazon QuickSight dashboard",
      "AWS CloudTrail trails",
      "AWS Trusted Advisor report",
      "IAM credential report",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Trusted Advisor provides checks and recommendations for security, including S3 bucket permissions, root account MFA, and open security groups. Reference: https://aws.amazon.com/premiumsupport/technology/trusted-advisor/best-practice-checklist/#Security",
  },
  {
    id: uuidv5("aws-question-1359", uuidv5.URL),
    text: "Which Amazon EC2 pricing model should be used to comply with per-core software license requirements?",
    options: [
      "Dedicated Hosts",
      "On-Demand Instances",
      "Spot Instances",
      "Reserved Instances",
    ],
    correctAnswers: [0],
    explanation:
      "Dedicated Hosts allow you to use your own software licenses that are bound to specific physical cores, meeting per-core licensing requirements. Reference: https://aws.amazon.com/ec2/dedicated-hosts/pricing/",
  },
  {
    id: uuidv5("aws-question-1360", uuidv5.URL),
    text: "Which part of the AWS global infrastructure is used to cache copies of content for faster delivery to users across the globe?",
    options: [
      "AWS Regions",
      "Availability Zones",
      "Edge locations",
      "Data centers",
    ],
    correctAnswers: [2],
    explanation:
      "Edge locations are part of AWS's global content delivery network (CDN) and cache content to improve response times globally. Reference: https://aws.amazon.com/caching/",
  },
  {
    id: uuidv5("aws-question-1361", uuidv5.URL),
    text: "Using AWS Config to record, audit, and evaluate changes to AWS resources to enable traceability is an example of which AWS Well-Architected Framework pillar?",
    options: [
      "Security",
      "Operational excellence",
      "Performance efficiency",
      "Cost optimization",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Config helps ensure security by providing audit trails and resource configuration change tracking, which aligns with the Security pillar of the AWS Well-Architected Framework. Reference: https://d1.awsstatic.com/whitepapers/architecture/AWS_Well-Architected_Framework.pdf",
  },
];

const exam21: Question[] = [
  {
    id: uuidv5("aws-question-1362", uuidv5.URL),
    text: "A user needs to quickly deploy a non-relational database on AWS. The user does not want to manage the underlying hardware or the database software. Which AWS service can be used to accomplish this?",
    options: [
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon Aurora",
      "Amazon Redshift",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon DynamoDB is a fully managed NoSQL database service that does not require users to manage the underlying infrastructure. More details: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SQLtoNoSQL.html",
  },
  {
    id: uuidv5("aws-question-1363", uuidv5.URL),
    text: "A Cloud Practitioner is developing a disaster recovery plan and intends to replicate data between multiple geographic areas. Which of the following meets these requirements?",
    options: [
      "AWS Accounts",
      "AWS Regions",
      "Availability Zones",
      "Edge locations",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Regions are geographically separated locations that allow for disaster recovery and data replication. More details: https://www.botmetric.com/blog/having-a-disaster-recovery-plan-is-pivotal-the-dos-and-donts-on-aws-cloud/",
  },
  {
    id: uuidv5("aws-question-1364", uuidv5.URL),
    text: "Which features and benefits does the AWS Organizations service provide? (Choose two.)",
    options: [
      "Establishing real-time communications between members of an internal team",
      "Facilitating the use of NoSQL databases",
      "Providing automated security checks",
      "Implementing consolidated billing",
      "Enforcing the governance of AWS accounts",
    ],
    correctAnswers: [3, 4],
    explanation:
      "AWS Organizations enables consolidated billing and governance enforcement across multiple AWS accounts. More details: https://aws.amazon.com/organizations/",
  },
  {
    id: uuidv5("aws-question-1365", uuidv5.URL),
    text: "Which AWS service is used to automate configuration management using Chef and Puppet?",
    options: [
      "AWS Config",
      "AWS OpsWorks",
      "AWS CloudFormation",
      "AWS Systems Manager",
    ],
    correctAnswers: [1],
    explanation:
      "AWS OpsWorks provides configuration management using Chef and Puppet. More details: https://aws.amazon.com/opsworks/",
  },
  {
    id: uuidv5("aws-question-1366", uuidv5.URL),
    text: "Which tool is best suited for combining the billing of AWS accounts that were previously independent from one another?",
    options: [
      "Detailed billing report",
      "Consolidated billing",
      "AWS Cost and Usage report",
      "Cost allocation report",
    ],
    correctAnswers: [1],
    explanation:
      "Consolidated billing in AWS Organizations allows multiple accounts to be billed together under a single payer account. More details: https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html",
  },
  {
    id: uuidv5("aws-question-1367", uuidv5.URL),
    text: "The AWS Total Cost of Ownership (TCO) Calculator is used to:",
    options: [
      "Receive reports that break down AWS Cloud compute costs by duration, resource, or tags",
      "Estimate savings when comparing the AWS Cloud to an on-premises environment",
      "Estimate a monthly bill for the AWS Cloud resources that will be used",
      "Enable billing alerts to monitor actual AWS costs compared to estimated costs",
    ],
    correctAnswers: [1],
    explanation:
      "The AWS TCO Calculator helps estimate cost savings when migrating from on-premises to AWS. More details: https://aws.amazon.com/tco-calculator/",
  },
  {
    id: uuidv5("aws-question-1368", uuidv5.URL),
    text: "Which AWS services can be used to provide network connectivity between an on-premises network and a VPC? (Choose two.)",
    options: [
      "Amazon Route 53",
      "AWS Direct Connect",
      "AWS Data Pipeline",
      "AWS VPN",
      "Amazon Connect",
    ],
    correctAnswers: [1, 3],
    explanation:
      "AWS Direct Connect and AWS VPN provide secure network connectivity between on-premises networks and AWS VPCs. More details: https://aws.amazon.com/directconnect/faqs/",
  },
  {
    id: uuidv5("aws-question-1369", uuidv5.URL),
    text: "Under the AWS shared responsibility model, which of the following are customer responsibilities? (Choose two.)",
    options: [
      "Setting up server-side encryption on an Amazon S3 bucket",
      "Amazon RDS instance patching",
      "Network and firewall configurations",
      "Physical security of data center facilities",
      "Compute capacity availability",
    ],
    correctAnswers: [0, 2],
    explanation:
      "Customers are responsible for data encryption and network security configurations. More details: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-1370", uuidv5.URL),
    text: "What is the MINIMUM AWS Support plan level that will provide users with access to the AWS Support API?",
    options: ["Developer", "Enterprise", "Business", "Basic"],
    correctAnswers: [2],
    explanation:
      "The AWS Support API is available starting at the Business support plan. More details: https://aws.amazon.com/premiumsupport/plans/",
  },
  {
    id: uuidv5("aws-question-1371", uuidv5.URL),
    text: "A company has deployed several relational databases on Amazon EC2 instances. Every month, the database software vendor releases new security patches that need to be applied to the databases. What is the MOST efficient way to apply the security patches?",
    options: [
      "Connect to each database instance on a monthly basis, and download and apply the necessary security patches from the vendor.",
      "Enable automatic patching for the instances using the Amazon RDS console.",
      "In AWS Config, configure a rule for the instances and the required patch level.",
      "Use AWS Systems Manager to automate database patching according to a schedule.",
    ],
    correctAnswers: [3],
    explanation:
      "AWS Systems Manager allows automation of patching processes, reducing manual effort. More details: https://aws.amazon.com/rds/faqs/",
  },
  {
    id: uuidv5("aws-question-1372", uuidv5.URL),
    text: "A company wants to use Amazon Elastic Compute Cloud (Amazon EC2) to deploy a global commercial application. The deployment solution should be built with the highest redundancy and fault tolerance. Based on this situation, the Amazon EC2 instances should be deployed:",
    options: [
      "in a single Availability Zone in one AWS Region",
      "with multiple Elastic Network Interfaces belonging to different subnets",
      "across multiple Availability Zones in one AWS Region",
      "across multiple Availability Zones in two AWS Regions",
    ],
    correctAnswers: [2],
    explanation:
      "Deploying instances across multiple Availability Zones within one AWS Region provides high availability and fault tolerance. Reference: https://jayendrapatil.com/aws-high-availability-fault-tolerance-architecture-certification/",
  },
  {
    id: uuidv5("aws-question-1373", uuidv5.URL),
    text: "A company has an application with users in both Australia and Brazil. All the company infrastructure is currently provisioned in the Asia Pacific (Sydney) Region in Australia, and Brazilian users are experiencing high latency. What should the company do to reduce latency?",
    options: [
      "Implement AWS Direct Connect for users in Brazil",
      "Provision resources in the South America (São Paulo) Region in Brazil.",
      "Use AWS Transit Gateway to quickly route users from Brazil to the application",
      "Launch additional Amazon EC2 instances in Sydney to handle the demand",
    ],
    correctAnswers: [1],
    explanation:
      "Provisioning resources in the São Paulo Region will reduce latency for Brazilian users by bringing the infrastructure closer to them. Reference: https://aws.amazon.com/transit-gateway/",
  },
  {
    id: uuidv5("aws-question-1374", uuidv5.URL),
    text: "An Amazon EC2 instance runs only when needed yet must remain active for the duration of the process. What is the most appropriate purchasing option?",
    options: [
      "Dedicated Instances",
      "Spot Instances",
      "On-Demand Instances",
      "Reserved Instances",
    ],
    correctAnswers: [2],
    explanation:
      "On-Demand Instances provide flexibility for workloads that run only when needed, without long-term commitments.",
  },
  {
    id: uuidv5("aws-question-1375", uuidv5.URL),
    text: "Which AWS dashboard displays relevant and timely information to help users manage events in progress, and provides proactive notifications to help plan for scheduled activities?",
    options: [
      "AWS Service Health Dashboard",
      "AWS Personal Health Dashboard",
      "AWS Trusted Advisor dashboard",
      "Amazon CloudWatch dashboard",
    ],
    correctAnswers: [1],
    explanation:
      "The AWS Personal Health Dashboard provides real-time and proactive alerts for events that impact the user's AWS environment. Reference: https://aws.amazon.com/premiumsupport/technology/personal-health-dashboard/",
  },
  {
    id: uuidv5("aws-question-1376", uuidv5.URL),
    text: "Which AWS hybrid storage service enables a user's on-premises applications to seamlessly use AWS Cloud storage?",
    options: [
      "AWS Backup",
      "Amazon Connect",
      "AWS Direct Connect",
      "AWS Storage Gateway",
    ],
    correctAnswers: [3],
    explanation:
      "AWS Storage Gateway enables on-premises applications to integrate seamlessly with AWS Cloud storage. Reference: https://aws.amazon.com/storagegateway/",
  },
  {
    id: uuidv5("aws-question-1377", uuidv5.URL),
    text: "Which of the following acts as a virtual firewall at the Amazon EC2 instance level to control traffic for one or more instances?",
    options: [
      "Access keys",
      "Virtual private gateways",
      "Security groups",
      "Access Control Lists (ACL)",
    ],
    correctAnswers: [2],
    explanation:
      "Security groups act as virtual firewalls controlling inbound and outbound traffic to EC2 instances. Reference: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html",
  },
  {
    id: uuidv5("aws-question-1378", uuidv5.URL),
    text: "What is the most efficient way to establish network connectivity from on-premises to multiple VPCs in different AWS Regions?",
    options: [
      "Use AWS Direct Connect",
      "Use AWS VPN",
      "Use AWS Client VPN",
      "Use an AWS Transit Gateway",
    ],
    correctAnswers: [3],
    explanation:
      "AWS Transit Gateway enables scalable and efficient connectivity between on-premises environments and multiple VPCs across AWS Regions. Reference: https://d1.awsstatic.com/whitepapers/building-a-scalable-and-secure-multi-vpc-aws-network-infrastructure.pdf",
  },
  {
    id: uuidv5("aws-question-1379", uuidv5.URL),
    text: "Which AWS Support plan provides access to architectural and operational reviews, as well as 24/7 access to Senior Cloud Support Engineers through email, online chat, and phone?",
    options: ["Basic", "Business", "Developer", "Enterprise"],
    correctAnswers: [3],
    explanation:
      "The Enterprise Support plan includes access to Senior Cloud Support Engineers and architectural reviews. Reference: https://aws.amazon.com/premiumsupport/plans/enterprise/",
  },
  {
    id: uuidv5("aws-question-1380", uuidv5.URL),
    text: "Which AWS service or feature helps restrict the AWS services, resources, and individual API actions the users and roles in each member account can access?",
    options: [
      "Amazon Cognito",
      "AWS Organizations",
      "AWS Shield",
      "AWS Firewall Manager",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Organizations allows centralized control over account permissions, enforcing policies and access restrictions. Reference: https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html",
  },
  {
    id: uuidv5("aws-question-1381", uuidv5.URL),
    text: "What is the best resource for a user to find compliance-related information and reports about AWS?",
    options: [
      "AWS Artifact",
      "AWS Marketplace",
      "Amazon Inspector",
      "AWS Support",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Artifact provides access to compliance-related reports and documentation. Reference: https://aws.amazon.com/compliance/faq/",
  },
  {
    id: "aws-question-1382",
    text: "Which Amazon S3 storage class is optimized to provide access to data with lower resiliency requirements, but rapid access when needed such as duplicate backups?",
    options: [
      "Amazon S3 Standard",
      "Amazon S3 Glacier Deep Archive",
      "Amazon S3 One Zone-Infrequent Access",
      "Amazon S3 Glacier",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon S3 One Zone-Infrequent Access is designed for infrequently accessed data that does not require multiple Availability Zone resilience but provides rapid access when needed. Reference: https://aws.amazon.com/s3/storage-classes/",
  },
  {
    id: "aws-question-1383",
    text: "What is an Availability Zone in AWS?",
    options: [
      "One or more physical data centers",
      "A completely isolated geographic location",
      "One or more edge locations based around the world",
      "A data center location with a single source of power and networking",
    ],
    correctAnswers: [0],
    explanation:
      "An Availability Zone consists of one or more discrete data centers with redundant power, networking, and connectivity in an AWS Region. Reference: https://aws.amazon.com/about-aws/global-infrastructure/regions_az/",
  },
  {
    id: "aws-question-1384",
    text: "Which AWS services can be used as infrastructure automation tools? (Choose two.)",
    options: [
      "AWS CloudFormation",
      "Amazon CloudFront",
      "AWS Batch",
      "AWS OpsWorks",
      "Amazon QuickSight",
    ],
    correctAnswers: [0, 3],
    explanation:
      "AWS CloudFormation and AWS OpsWorks enable infrastructure as code, allowing automation and management of AWS resources. Reference: https://blog.newrelic.com/engineering/best-cloud-infrastructure-automation-tools/",
  },
  {
    id: "aws-question-1385",
    text: "Which AWS service enables users to create copies of resources across AWS Regions?",
    options: [
      "Amazon ElastiCache",
      "AWS CloudFormation",
      "AWS CloudTrail",
      "AWS Systems Manager",
    ],
    correctAnswers: [1],
    explanation:
      "AWS CloudFormation allows you to replicate resources across AWS Regions by defining infrastructure as code. Reference: https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html",
  },
  {
    id: "aws-question-1386",
    text: "A user would like to encrypt data that is received, stored, and managed by AWS CloudTrail. Which AWS service will provide this capability?",
    options: [
      "AWS Secrets Manager",
      "AWS Systems Manager",
      "AWS Key Management Service (AWS KMS)",
      "AWS Certificate Manager",
    ],
    correctAnswers: [2],
    explanation:
      "AWS KMS provides encryption and key management for AWS CloudTrail logs, ensuring data security. Reference: https://docs.aws.amazon.com/awscloudtrail/latest/userguide/data-protection.html",
  },
  {
    id: "aws-question-1387",
    text: "Which AWS Cloud benefit eliminates the need for users to try estimating future infrastructure usage?",
    options: [
      "Easy and fast deployment of applications in multiple Regions around the world",
      "Security of the AWS Cloud",
      "Elasticity of the AWS Cloud",
      "Lower variable costs due to massive economies of scale",
    ],
    correctAnswers: [2],
    explanation:
      "Elasticity in the AWS Cloud allows resources to scale up or down automatically based on demand, removing the need for capacity planning.",
  },
  {
    id: "aws-question-1388",
    text: "What credential components are required to gain programmatic access to an AWS account? (Choose two.)",
    options: [
      "An access key ID",
      "A primary key",
      "A secret access key",
      "A user ID",
      "A secondary key",
    ],
    correctAnswers: [0, 2],
    explanation:
      "Programmatic access to AWS requires an access key ID and a secret access key. Reference: https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html",
  },
  {
    id: "aws-question-1389",
    text: "Which of the following are AWS compute services? (Select two.)",
    options: [
      "Amazon Lightsail",
      "AWS Systems Manager",
      "AWS CloudFormation",
      "AWS Batch",
      "Amazon Inspector",
    ],
    correctAnswers: [0, 3],
    explanation:
      "Amazon Lightsail and AWS Batch are compute services. Lightsail provides simple virtual private servers, while AWS Batch manages batch computing workloads. Reference: https://docs.aws.amazon.com/whitepapers/latest/aws-overview/compute-services.html",
  },
  {
    id: "aws-question-1390",
    text: "How can a company separate costs for network traffic, Amazon EC2, Amazon S3, and other AWS services by department?",
    options: [
      "Add department-specific tags to each resource",
      "Create a separate VPC for each department",
      "Create a separate AWS account for each department",
      "Use AWS Organizations",
    ],
    correctAnswers: [2],
    explanation:
      "Using separate AWS accounts for each department allows for clear cost allocation and management. Reference: https://aws.amazon.com/organizations/",
  },
  {
    id: "aws-question-1391",
    text: "What is a benefit of consolidated billing for AWS accounts?",
    options: [
      "Access to AWS Personal Health Dashboard",
      "Combined usage volume discounts",
      "Improved account security",
      "Centralized AWS IAM",
    ],
    correctAnswers: [1],
    explanation:
      "Consolidated billing provides cost savings through combined usage volume discounts across multiple accounts. Reference: https://jayendrapatil.com/aws-consolidated-billing/",
  },
  {
    id: uuidv5("aws-question-1392", uuidv5.URL),
    text: "Which AWS service will allow a user to set custom cost and usage limits, and will alert when the thresholds are exceeded?",
    options: [
      "AWS Organizations",
      "AWS Budgets",
      "Cost Explorer",
      "AWS Trusted Advisor",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Budgets allows users to set custom cost and usage limits and alerts them when thresholds are exceeded. More details: https://aws.amazon.com/getting-started/hands-on/control-your-costs-free-tier-budgets/",
  },
  {
    id: uuidv5("aws-question-1393", uuidv5.URL),
    text: "Which AWS service provides the ability to detect inadvertent data leaks of personally identifiable information (PII) and user credential data?",
    options: [
      "Amazon GuardDuty",
      "Amazon Inspector",
      "Amazon Macie",
      "AWS Shield",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon Macie helps detect inadvertent data leaks of personally identifiable information (PII) and user credentials. More details: https://aws.amazon.com/macie/",
  },
  {
    id: uuidv5("aws-question-1394", uuidv5.URL),
    text: "Which tool can be used to monitor AWS service limits?",
    options: [
      "AWS Total Cost of Ownership (TCO) Calculator",
      "AWS Trusted Advisor",
      "AWS Personal Health Dashboard",
      "AWS Cost and Usage report",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Trusted Advisor provides insights into service limits and usage. More details: https://aws.amazon.com/blogs/mt/monitoring-service-limits-with-trusted-advisor-and-amazon-cloudwatch/",
  },
  {
    id: uuidv5("aws-question-1395", uuidv5.URL),
    text: "A company has distributed its workload on both the AWS Cloud and some on-premises servers. What type of architecture is this?",
    options: [
      "Virtual private network",
      "Virtual private cloud",
      "Hybrid cloud",
      "Private cloud",
    ],
    correctAnswers: [2],
    explanation:
      "A hybrid cloud integrates workloads across both AWS and on-premises environments. More details: https://aws.amazon.com/hybrid/",
  },
  {
    id: uuidv5("aws-question-1396", uuidv5.URL),
    text: "Which of the following describes a security best practice that can be implemented using AWS IAM?",
    options: [
      "Disable AWS Management Console access for all users",
      "Generate secret keys for every IAM user",
      "Grant permissions to users who are required to perform a given task only",
      "Store AWS credentials within Amazon EC2 instances",
    ],
    correctAnswers: [2],
    explanation:
      "The principle of least privilege recommends granting only necessary permissions. More details: https://cloudcheckr.com/cloud-security/top-5-iam-best-practices/",
  },
  {
    id: uuidv5("aws-question-1397", uuidv5.URL),
    text: "What can be used to automate and manage secure, well-architected, multi-account AWS environments?",
    options: [
      "AWS shared responsibility model",
      "AWS Control Tower",
      "AWS Security Hub",
      "AWS Well-Architected Tool",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Control Tower helps automate the setup and governance of multi-account AWS environments. More details: https://aws.amazon.com/blogs/aws/aws-control-tower-set-up-govern-a-multi-account-aws-environment/",
  },
  {
    id: uuidv5("aws-question-1398", uuidv5.URL),
    text: "Which AWS service or feature allows a user to easily scale connectivity among thousands of VPCs?",
    options: [
      "VPC peering",
      "AWS Transit Gateway",
      "AWS Direct Connect",
      "AWS Global Accelerator",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Transit Gateway simplifies connectivity between multiple VPCs and on-premises networks. More details: https://aws.amazon.com/blogs/training-and-certification/explore-the-aws-transit-gateway-networking-and-scaling-digital-course/",
  },
  {
    id: uuidv5("aws-question-1399", uuidv5.URL),
    text: "A company needs protection from expanded distributed denial of service (DDoS) attacks on its website and assistance from AWS experts during such events. Which AWS managed service will meet these requirements?",
    options: [
      "AWS Shield Advanced",
      "AWS Firewall Manager",
      "AWS WAF",
      "Amazon GuardDuty",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Shield Advanced provides DDoS protection and support from AWS experts. More details: https://docs.aws.amazon.com/waf/latest/developerguide/ddos-overview.html",
  },
  {
    id: uuidv5("aws-question-1400", uuidv5.URL),
    text: "A company's application has flexible start and end times. Which Amazon EC2 pricing model will be the MOST cost-effective?",
    options: [
      "On-Demand Instances",
      "Spot Instances",
      "Reserved Instances",
      "Dedicated Hosts",
    ],
    correctAnswers: [1],
    explanation:
      "Spot Instances are the most cost-effective choice for applications with flexible schedules. More details: https://aws.amazon.com/ec2/pricing/",
  },
  {
    id: uuidv5("aws-question-1401", uuidv5.URL),
    text: "Under the AWS shared responsibility model, what are the customer's responsibilities? (Choose two.)",
    options: [
      "Physical and environmental security",
      "Physical network devices including firewalls",
      "Storage device decommissioning",
      "Security of data in transit",
      "Data integrity authentication",
    ],
    correctAnswers: [3, 4],
    explanation:
      "Customers are responsible for securing their data in transit and ensuring data integrity. More details: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-1402", uuidv5.URL),
    text: "A cloud practitioner has a data analysis workload that is infrequently executed and can be interrupted without harm. To optimize for cost, which Amazon EC2 purchasing option should be used?",
    options: [
      "On-Demand Instances",
      "Reserved Instances",
      "Spot Instances",
      "Dedicated Hosts",
    ],
    correctAnswers: [2],
    explanation:
      "Spot Instances provide the most cost-effective option for workloads that are flexible with their start and stop times. They can be interrupted but offer significant savings compared to On-Demand Instances. [Reference](https://aws.amazon.com/ec2/pricing/)",
  },
  {
    id: uuidv5("aws-question-1403", uuidv5.URL),
    text: "Which AWS container service will help a user install, operate, and scale the cluster management infrastructure?",
    options: [
      "Amazon Elastic Container Registry (Amazon ECR)",
      "AWS Elastic Beanstalk",
      "Amazon Elastic Container Service (Amazon ECS)",
      "Amazon Elastic Block Store (Amazon EBS)",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon ECS helps manage and scale containerized applications without needing to install and operate the cluster management infrastructure. [Reference](https://aws.amazon.com/ecs/)",
  },
  {
    id: uuidv5("aws-question-1404", uuidv5.URL),
    text: "Which of the following allows an application running on an Amazon EC2 instance to securely write data to an Amazon S3 bucket without using long-term credentials?",
    options: [
      "Amazon Cognito",
      "AWS Shield",
      "AWS IAM role",
      "AWS IAM user access key",
    ],
    correctAnswers: [2],
    explanation:
      "AWS IAM roles allow EC2 instances to assume temporary security credentials, eliminating the need for long-term credentials. [Reference](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html)",
  },
  {
    id: uuidv5("aws-question-1405", uuidv5.URL),
    text: "A company with a Developer-level AWS Support plan provisioned an Amazon RDS database and cannot connect to it. Who should the developer contact for this level of support?",
    options: [
      "AWS Support using a support case",
      "AWS Professional Services",
      "AWS technical account manager",
      "AWS consulting partners",
    ],
    correctAnswers: [0],
    explanation:
      "The Developer Support plan allows users to create support cases for troubleshooting issues. [Reference](https://aws.amazon.com/premiumsupport/plans/)",
  },
  {
    id: uuidv5("aws-question-1406", uuidv5.URL),
    text: "What is the purpose of having an internet gateway within a VPC?",
    options: [
      "To create a VPN connection to the VPC",
      "To allow communication between the VPC and the Internet",
      "To impose bandwidth constraints on internet traffic",
      "To load balance traffic from the Internet across Amazon EC2 instances",
    ],
    correctAnswers: [1],
    explanation:
      "An internet gateway enables communication between resources in a VPC and the internet. [Reference](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html)",
  },
  {
    id: uuidv5("aws-question-1407", uuidv5.URL),
    text: "A company must ensure that its endpoint for a database instance remains the same after a single Availability Zone service interruption. The application needs to resume database operations without the need for manual administrative intervention. How can these requirements be met?",
    options: [
      "Use multiple Amazon Route 53 routes to the standby database instance endpoint hosted on AWS Storage Gateway.",
      "Configure Amazon RDS Multi-Availability Zone deployments with automatic failover to the standby.",
      "Add multiple Application Load Balancers and deploy the database instance with AWS Elastic Beanstalk.",
      "Deploy a single Network Load Balancer to distribute incoming traffic across multiple Amazon CloudFront origins.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon RDS Multi-AZ deployments provide automatic failover, ensuring high availability for database instances. [Reference](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html)",
  },
  {
    id: uuidv5("aws-question-1408", uuidv5.URL),
    text: "Which AWS managed service can be used to distribute traffic between one or more Amazon EC2 instances?",
    options: [
      "NAT gateway",
      "Elastic Load Balancing",
      "Amazon Athena",
      "AWS PrivateLink",
    ],
    correctAnswers: [1],
    explanation:
      "Elastic Load Balancing (ELB) distributes incoming application traffic across multiple EC2 instances, improving availability and fault tolerance. [Reference](https://aws.amazon.com/elasticloadbalancing/)",
  },
  {
    id: uuidv5("aws-question-1409", uuidv5.URL),
    text: "AWS Trusted Advisor provides recommendations on which of the following? (Choose two.)",
    options: [
      "Cost optimization",
      "Auditing",
      "Serverless architecture",
      "Performance",
      "Scalability",
    ],
    correctAnswers: [0, 3],
    explanation:
      "AWS Trusted Advisor provides recommendations in categories such as cost optimization, security, fault tolerance, performance, and service limits. [Reference](https://aws.amazon.com/premiumsupport/technology/trusted-advisor/)",
  },
  {
    id: uuidv5("aws-question-1410", uuidv5.URL),
    text: "Which of the following tasks can only be performed after signing in with AWS account root user credentials? (Choose two.)",
    options: [
      "Closing an AWS account",
      "Creating a new IAM policy",
      "Changing AWS Support plans",
      "Attaching a role to an Amazon EC2 instance",
      "Generating access keys for IAM users",
    ],
    correctAnswers: [0, 2],
    explanation:
      "Only the root user can close an AWS account and change AWS Support plans. [Reference](https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-closure.html)",
  },
  {
    id: uuidv5("aws-question-1411", uuidv5.URL),
    text: "Fault tolerance refers to:",
    options: [
      "the ability of an application to accommodate growth without changing design",
      "how well and how quickly an application's environment can have lost data restored",
      "how secure your application is",
      "the built-in redundancy of an application's components",
    ],
    correctAnswers: [3],
    explanation:
      "Fault tolerance is the ability of a system to continue functioning despite failures in some of its components by utilizing built-in redundancy. [Reference](https://aws.amazon.com/architecture/well-architected/)",
  },
];

const exam22: Question[] = [
  {
    id: uuidv5("aws-question-1412", uuidv5.URL),
    text: "A company operating in the AWS Cloud requires separate invoices for specific environments, such as development, testing, and production. How can this be achieved?",
    options: [
      "Use multiple AWS accounts",
      "Use resource tagging",
      "Use multiple VPCs",
      "Use Cost Explorer",
    ],
    correctAnswers: [0],
    explanation:
      "The best way to separate invoices for different environments is by using multiple AWS accounts. AWS Organizations allows you to create and manage multiple AWS accounts under a single billing account. Reference: https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html",
  },
  {
    id: uuidv5("aws-question-1413", uuidv5.URL),
    text: "Which AWS service can be used in the application deployment process?",
    options: ["AWS AppSync", "AWS Batch", "AWS CodePipeline", "AWS DataSync"],
    correctAnswers: [2],
    explanation:
      "AWS CodePipeline is a fully managed continuous integration and continuous delivery (CI/CD) service that helps automate the application deployment process. Reference: https://aws.amazon.com/codepipeline/",
  },
  {
    id: uuidv5("aws-question-1414", uuidv5.URL),
    text: "What can be used to reduce the cost of running Amazon EC2 instances? (Choose two.)",
    options: [
      "Spot Instances for stateless and flexible workloads",
      "Memory optimized instances for high-compute workloads",
      "On-Demand Instances for high-cost and sustained workloads",
      "Reserved Instances for sustained workloads",
      "Spend limits set using AWS Budgets",
    ],
    correctAnswers: [0, 3],
    explanation:
      "Spot Instances allow you to bid on unused EC2 capacity at a lower price, making them cost-effective for stateless workloads. Reserved Instances provide significant discounts for predictable, long-term workloads. Reference: https://aws.amazon.com/ec2/pricing/",
  },
  {
    id: uuidv5("aws-question-1415", uuidv5.URL),
    text: "A company is launching an e-commerce site that will store and process credit card data. The company requires information about AWS compliance reports and AWS agreements. Which AWS service provides on-demand access to these items?",
    options: [
      "AWS Certificate Manager",
      "AWS Config",
      "AWS Artifact",
      "AWS CloudTrail",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Artifact provides on-demand access to AWS compliance reports and security documentation. Reference: https://aws.amazon.com/artifact/",
  },
  {
    id: uuidv5("aws-question-1416", uuidv5.URL),
    text: "Which AWS service or feature allows the user to manage cross-region application traffic?",
    options: [
      "Amazon AppStream 2.0",
      "Amazon VPC",
      "Elastic Load Balancer",
      "Amazon Route 53",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon Route 53 is a scalable domain name system (DNS) web service that helps manage cross-region application traffic. Reference: https://aws.amazon.com/route53/",
  },
  {
    id: uuidv5("aws-question-1417", uuidv5.URL),
    text: "Which AWS service can be used to track unauthorized API calls?",
    options: [
      "AWS Config",
      "AWS CloudTrail",
      "AWS Trusted Advisor",
      "Amazon Inspector",
    ],
    correctAnswers: [1],
    explanation:
      "AWS CloudTrail logs all API calls made within an AWS account, allowing tracking of unauthorized access attempts. Reference: https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html",
  },
  {
    id: uuidv5("aws-question-1418", uuidv5.URL),
    text: "A user needs to regularly audit and evaluate the setup of all AWS resources, identify non-compliant accounts, and be notified when a resource changes. Which AWS service can be used to meet these requirements?",
    options: [
      "AWS Trusted Advisor",
      "AWS Config",
      "AWS Resource Access Manager",
      "AWS Systems Manager",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Config continuously monitors and records AWS resource configurations, allowing users to audit and identify non-compliant configurations. Reference: https://aws.amazon.com/config/",
  },
  {
    id: uuidv5("aws-question-1419", uuidv5.URL),
    text: "A user is planning to launch two additional Amazon EC2 instances to increase availability. Which action should the user take?",
    options: [
      "Launch the instances across multiple Availability Zones in a single AWS Region.",
      "Launch the instances as EC2 Reserved Instances in the same AWS Region and the same Availability Zone.",
      "Launch the instances in multiple AWS Regions, but in the same Availability Zone.",
      "Launch the instances as EC2 Spot Instances in the same AWS Region, but in different Availability Zones.",
    ],
    correctAnswers: [0],
    explanation:
      "Launching instances across multiple Availability Zones in the same AWS Region increases availability and fault tolerance. Reference: https://aws.amazon.com/ec2/faqs/",
  },
  {
    id: uuidv5("aws-question-1420", uuidv5.URL),
    text: "A company must store critical business data in Amazon S3 with a backup to another AWS Region. How can this be achieved?",
    options: [
      "Use an Amazon CloudFront Content Delivery Network (CDN) to cache data globally",
      "Set up Amazon S3 cross-region replication to another AWS Region",
      "Configure the AWS Backup service to back up to the data to another AWS Region",
      "Take Amazon S3 bucket snapshots and copy that data to another AWS Region",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon S3 cross-region replication (CRR) enables automatic copying of objects across AWS Regions for backup and compliance. Reference: https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication.html",
  },
  {
    id: uuidv5("aws-question-1421", uuidv5.URL),
    text: "Which AWS Cloud service can send alerts to customers if custom spending thresholds are exceeded?",
    options: [
      "AWS Budgets",
      "AWS Cost Explorer",
      "AWS Cost Allocation Tags",
      "AWS Organizations",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Budgets allows users to set cost thresholds and receive alerts when spending exceeds defined limits. Reference: https://aws.amazon.com/aws-cost-management/aws-budgets/",
  },
  {
    id: uuidv5("aws-question-1422", uuidv5.URL),
    text: "What is the recommended method to request penetration testing on AWS resources?",
    options: [
      "Open a support case",
      "Fill out the Penetration Testing Request Form",
      "Request a penetration test from your technical account manager",
      "Contact your AWS sales representative",
    ],
    correctAnswers: [1],
    explanation:
      "AWS provides a Penetration Testing Request Form as the recommended way to request penetration testing on AWS resources. This ensures compliance with AWS security policies. More details: https://aws.amazon.com/security/penetration-testing/",
  },
  {
    id: uuidv5("aws-question-1423", uuidv5.URL),
    text: "A user needs to automatically discover, classify, and protect sensitive data stored in Amazon S3. Which AWS service can meet these requirements?",
    options: [
      "Amazon Inspector",
      "Amazon Macie",
      "Amazon GuardDuty",
      "AWS Secrets Manager",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon Macie uses machine learning to discover, classify, and protect sensitive data in Amazon S3. More details: https://aws.amazon.com/macie/",
  },
  {
    id: uuidv5("aws-question-1424", uuidv5.URL),
    text: "Which components are required to build a successful site-to-site VPN connection on AWS? (Choose two.)",
    options: [
      "Internet gateway",
      "NAT gateway",
      "Customer gateway",
      "Transit gateway",
      "Virtual private gateway",
    ],
    correctAnswers: [2, 4],
    explanation:
      "A site-to-site VPN requires a Customer Gateway on the on-premises side and a Virtual Private Gateway on the AWS side. More details: https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html",
  },
  {
    id: uuidv5("aws-question-1425", uuidv5.URL),
    text: "Which Amazon EC2 pricing option is best suited for applications with short-term, spiky, or unpredictable workloads that cannot be interrupted?",
    options: [
      "Spot Instances",
      "Dedicated Hosts",
      "On-Demand Instances",
      "Reserved Instances",
    ],
    correctAnswers: [2],
    explanation:
      "On-Demand Instances are ideal for workloads with unpredictable traffic patterns that cannot tolerate interruptions. More details: https://aws.amazon.com/ec2/pricing/",
  },
  {
    id: uuidv5("aws-question-1426", uuidv5.URL),
    text: "Which AWS cloud architecture principle states that systems should reduce interdependencies?",
    options: [
      "Scalability",
      "Services, not servers",
      "Removing single points of failure",
      "Loose coupling",
    ],
    correctAnswers: [3],
    explanation:
      "Loose coupling reduces interdependencies between components, improving scalability and fault tolerance. More details: https://docs.aws.amazon.com/wellarchitected/latest/framework/operational-excellence.html",
  },
  {
    id: uuidv5("aws-question-1427", uuidv5.URL),
    text: "What is the MOST effective resource for staying up to date on AWS security announcements?",
    options: [
      "AWS Personal Health Dashboard",
      "AWS Secrets Manager",
      "AWS Security Bulletins",
      "Amazon Inspector",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Security Bulletins provide updates on security-related issues and advisories. More details: https://aws.amazon.com/security/security-bulletins/",
  },
  {
    id: uuidv5("aws-question-1428", uuidv5.URL),
    text: "Which AWS service offers persistent storage for a file system?",
    options: [
      "Amazon S3",
      "Amazon EC2 instance store",
      "Amazon Elastic Block Store (Amazon EBS)",
      "Amazon ElastiCache",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon EBS provides persistent block storage that can be attached to EC2 instances. More details: https://aws.amazon.com/ebs/",
  },
  {
    id: uuidv5("aws-question-1429", uuidv5.URL),
    text: "Which of the following allows AWS users to manage cost allocations for billing?",
    options: [
      "Tagging resources",
      "Limiting who can create resources",
      "Adding a secondary payment method",
      "Running all operations on a single AWS account",
    ],
    correctAnswers: [0],
    explanation:
      "Tagging resources allows users to categorize AWS resources and track costs. More details: https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html",
  },
  {
    id: uuidv5("aws-question-1430", uuidv5.URL),
    text: "Which AWS service allows users to download security and compliance reports about the AWS infrastructure on demand?",
    options: [
      "Amazon GuardDuty",
      "AWS Security Hub",
      "AWS Artifact",
      "AWS Shield",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Artifact provides access to AWS compliance reports. More details: https://aws.amazon.com/artifact/",
  },
  {
    id: uuidv5("aws-question-1431", uuidv5.URL),
    text: "Which of the following AWS services are serverless? (Choose two.)",
    options: [
      "AWS Lambda",
      "Amazon Elasticsearch Service",
      "AWS Elastic Beanstalk",
      "Amazon DynamoDB",
      "Amazon Redshift",
    ],
    correctAnswers: [0, 3],
    explanation:
      "AWS Lambda and Amazon DynamoDB are serverless services. More details: https://aws.amazon.com/serverless/",
  },
  {
    id: uuidv5("aws-question-1432", uuidv5.URL),
    text: "Which AWS managed services can be used to extend an on-premises data center to the AWS network? (Choose two.)",
    options: [
      "AWS VPN",
      "NAT gateway",
      "AWS Direct Connect",
      "Amazon Connect",
      "Amazon Route 53",
    ],
    correctAnswers: [0, 2],
    explanation:
      "AWS VPN and AWS Direct Connect are the two services that allow extending an on-premises data center to the AWS network. AWS VPN provides a secure tunnel between on-premises and AWS, while AWS Direct Connect offers a dedicated network connection to AWS. More details: https://aws.amazon.com/directconnect/",
  },
  {
    id: uuidv5("aws-question-1433", uuidv5.URL),
    text: "Which requirement must be met for a member account to be unlinked from an AWS Organizations account?",
    options: [
      "The linked account must be actively compliant with AWS System and Organization Controls (SOC).",
      "The payer and the linked account must both create AWS Support cases to request that the member account be unlinked from the organization.",
      "The member account must meet the requirements of a standalone account.",
      "The payer account must be used to remove the linked account from the organization.",
    ],
    correctAnswers: [2],
    explanation:
      "Before a member account can be removed from AWS Organizations, it must meet the requirements of a standalone account, including having its own payment method. Reference: https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts_remove.html",
  },
  {
    id: uuidv5("aws-question-1434", uuidv5.URL),
    text: "What AWS benefit refers to a customer's ability to deploy applications that scale up and down to meet variable demand?",
    options: ["Elasticity", "Agility", "Security", "Scalability"],
    correctAnswers: [3],
    explanation:
      "Scalability is the ability of a system to handle growing amounts of work by adding resources. AWS enables automatic scaling of resources to accommodate demand. Reference: https://aws.amazon.com/what-is-cloud-computing/",
  },
  {
    id: uuidv5("aws-question-1435", uuidv5.URL),
    text: "During a compliance review, one of the auditors requires a copy of the AWS SOC 2 report. Which service should be used to submit this request?",
    options: [
      "AWS Personal Health Dashboard",
      "AWS Trusted Advisor",
      "AWS Artifact",
      "Amazon S3",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Artifact provides on-demand access to AWS compliance reports, including SOC 2. Reference: https://aws.amazon.com/artifact/",
  },
  {
    id: uuidv5("aws-question-1436", uuidv5.URL),
    text: "A company wants to set up a highly available workload in AWS with a disaster recovery plan that will allow the company to recover in case of a regional service interruption. Which configuration will meet these requirements?",
    options: [
      "Run on two Availability Zones in one AWS Region, using the additional Availability Zones in the AWS Region for the disaster recovery site.",
      "Run on two Availability Zones in one AWS Region, using another AWS Region for the disaster recovery site.",
      "Run on two Availability Zones in one AWS Region, using a local AWS Region for the disaster recovery site.",
      "Run across two AWS Regions, using a third AWS Region for the disaster recovery site.",
    ],
    correctAnswers: [1, 3],
    explanation:
      "Running workloads across multiple AWS Regions ensures high availability and disaster recovery capabilities. Using another AWS Region as a disaster recovery site is a best practice. Reference: https://aws.amazon.com/blogs/startups/large-scale-disaster-recovery-using-aws-regions/",
  },
  {
    id: uuidv5("aws-question-1437", uuidv5.URL),
    text: "A company has a 500 TB image repository that needs to be transported to AWS for processing. Which AWS service can import this data MOST cost-effectively?",
    options: ["AWS Snowball", "AWS Direct Connect", "AWS VPN", "Amazon S3"],
    correctAnswers: [0],
    explanation:
      "AWS Snowball is a cost-effective service for transferring large amounts of data to AWS. It is ideal for offline data transfer. Reference: https://aws.amazon.com/snowball/",
  },
  {
    id: uuidv5("aws-question-1438", uuidv5.URL),
    text: "Which AWS service can run a managed PostgreSQL database that provides online transaction processing (OLTP)?",
    options: ["Amazon DynamoDB", "Amazon Athena", "Amazon RDS", "Amazon EMR"],
    correctAnswers: [2],
    explanation:
      "Amazon RDS provides managed relational databases, including PostgreSQL, optimized for OLTP workloads. Reference: https://aws.amazon.com/rds/postgresql/",
  },
  {
    id: uuidv5("aws-question-1439", uuidv5.URL),
    text: "Which of the following assist in identifying costs by department? (Choose two.)",
    options: [
      "Using tags on resources",
      "Using multiple AWS accounts",
      "Using an account manager",
      "Using AWS Trusted Advisor",
      "Using Consolidated Billing",
    ],
    correctAnswers: [0, 1],
    explanation:
      "Tagging resources and using multiple AWS accounts help allocate costs per department. AWS Organizations supports consolidated billing for multiple accounts. Reference: https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-allocation-tags.html",
  },
  {
    id: uuidv5("aws-question-1440", uuidv5.URL),
    text: "A company wants to allow full access to an Amazon S3 bucket for a particular user. Which element in the S3 bucket policy holds the user details that describe who needs access to the S3 bucket?",
    options: ["Principal", "Action", "Resource", "Statement"],
    correctAnswers: [0],
    explanation:
      "In an S3 bucket policy, the 'Principal' element specifies the user, account, or service allowed to access the resource. Reference: https://docs.aws.amazon.com/AmazonS3/latest/userguide/amazon-s3-policy-elements.html",
  },
  {
    id: uuidv5("aws-question-1441", uuidv5.URL),
    text: "Which AWS service allows for effective cost management of multiple AWS accounts?",
    options: [
      "AWS Organizations",
      "AWS Trusted Advisor",
      "AWS Direct Connect",
      "Amazon Connect",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Organizations enables policy-based management and consolidated billing for multiple AWS accounts, optimizing cost management. Reference: https://aws.amazon.com/organizations/",
  },
  {
    id: uuidv5("aws-question-1442", uuidv5.URL),
    text: "A company is piloting a new customer-facing application on Amazon Elastic Compute Cloud (Amazon EC2) for one month. What pricing model is appropriate?",
    options: [
      "Reserved Instances",
      "Spot Instances",
      "On-Demand Instances",
      "Dedicated Hosts",
    ],
    correctAnswers: [2],
    explanation:
      "On-Demand Instances are the best choice for short-term, spiky, or unpredictable workloads that cannot be interrupted. Since the company is piloting the application for only one month, On-Demand pricing offers flexibility without long-term commitments. Reference: https://aws.amazon.com/ec2/pricing/",
  },
  {
    id: uuidv5("aws-question-1443", uuidv5.URL),
    text: "Which AWS tools automatically forecast future AWS costs?",
    options: [
      "AWS Support Center",
      "AWS Total Cost of Ownership (TCO) Calculator",
      "AWS Simple Monthly Calculator",
      "Cost Explorer",
    ],
    correctAnswers: [3],
    explanation:
      "AWS Cost Explorer provides forecasting capabilities that help users predict future AWS costs based on historical data. Reference: https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-forecast.html",
  },
  {
    id: uuidv5("aws-question-1444", uuidv5.URL),
    text: "Under the AWS shared responsibility model, which of the following is a responsibility of AWS?",
    options: [
      "Enabling server-side encryption for objects stored in S3",
      "Applying AWS IAM security policies",
      "Patching the operating system on an Amazon EC2 instance",
      "Applying updates to the hypervisor",
    ],
    correctAnswers: [3],
    explanation:
      "AWS is responsible for patching and updating the hypervisor as part of its infrastructure security. Customers are responsible for patching their own operating systems running on EC2 instances. Reference: https://aws.amazon.com/compliance/shared-responsibility-model/?ref=wellarchitected",
  },
  {
    id: uuidv5("aws-question-1445", uuidv5.URL),
    text: "A user is able to set up a master payer account to view consolidated billing reports through:",
    options: [
      "AWS Budgets",
      "Amazon Macie",
      "Amazon QuickSight",
      "AWS Organizations",
    ],
    correctAnswers: [3],
    explanation:
      "AWS Organizations allows the setup of a master payer account to consolidate billing across multiple AWS accounts. Reference: https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html",
  },
  {
    id: uuidv5("aws-question-1446", uuidv5.URL),
    text: "Performing operations as code is a design principle that supports which pillar of the AWS Well-Architected Framework?",
    options: [
      "Performance efficiency",
      "Operational excellence",
      "Reliability",
      "Security",
    ],
    correctAnswers: [1],
    explanation:
      "The Operational Excellence pillar emphasizes performing operations as code to improve efficiency and reduce human error. Reference: https://aws.amazon.com/blogs/apn/the-5-pillars-of-the-aws-well-architected-framework/",
  },
  {
    id: uuidv5("aws-question-1447", uuidv5.URL),
    text: "Which design principle is achieved by following the reliability pillar of the AWS Well-Architected Framework?",
    options: [
      "Vertical scaling",
      "Manual failure recovery",
      "Testing recovery procedures",
      "Changing infrastructure manually",
    ],
    correctAnswers: [2],
    explanation:
      "Testing recovery procedures ensures that systems can recover from failures efficiently, which aligns with the reliability pillar. Reference: https://aws.amazon.com/blogs/apn/the-5-pillars-of-the-aws-well-architected-framework/",
  },
  {
    id: uuidv5("aws-question-1448", uuidv5.URL),
    text: "What is a characteristic of Convertible Reserved Instances (RIs)?",
    options: [
      "Users can exchange Convertible RIs for other Convertible RIs from a different instance family with an equal or higher value than the Convertible Reserved Instances that you are exchanging.",
      "Users can exchange Convertible RIs for other Convertible RIs in different AWS Regions.",
      "Users can sell and buy Convertible RIs on the AWS Marketplace.",
      "Users can shorten the term of their Convertible RIs by merging them with other Convertible RIs.",
    ],
    correctAnswers: [0],
    explanation:
      "Convertible Reserved Instances allow users to exchange them for other Convertible RIs of equal or greater value within the same region. Reference: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-convertible-exchange.html",
  },
  {
    id: uuidv5("aws-question-1449", uuidv5.URL),
    text: "The user is fully responsible for which action when running workloads on AWS?",
    options: [
      "Patching the infrastructure components",
      "Implementing controls to route application traffic",
      "Maintaining physical and environmental controls",
      "Maintaining the underlying infrastructure components",
    ],
    correctAnswers: [1],
    explanation:
      "Under the shared responsibility model, users are responsible for application-level configurations, including traffic routing, while AWS manages the underlying infrastructure.",
  },
  {
    id: uuidv5("aws-question-1450", uuidv5.URL),
    text: "An architecture design includes Amazon EC2, an Elastic Load Balancer, and Amazon RDS. What is the BEST way to get a monthly cost estimation for this architecture?",
    options: [
      "Open an AWS Support case, provide the architecture proposal, and ask for a monthly cost estimation.",
      "Collect the published prices of the AWS services and calculate the monthly estimate.",
      "Use the AWS Simple Monthly Calculator to estimate the monthly cost.",
      "Use the AWS Total Cost of Ownership (TCO) Calculator to estimate the monthly cost.",
    ],
    correctAnswers: [2],
    explanation:
      "The AWS Simple Monthly Calculator helps estimate the monthly cost of an AWS architecture based on service usage. Reference: https://docs.aws.amazon.com/pricing-calculator/latest/userguide/aws-pc.pdf",
  },
  {
    id: uuidv5("aws-question-1451", uuidv5.URL),
    text: "Which are benefits of using Amazon RDS over Amazon EC2 when running relational databases on AWS? (Choose two.)",
    options: [
      "Automated backups",
      "Schema management",
      "Indexing of tables",
      "Software patching",
      "Extract, transform, and load (ETL) management",
    ],
    correctAnswers: [0, 3],
    explanation:
      "Amazon RDS provides automated backups and software patching, reducing administrative overhead. Reference: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html",
  },
  {
    id: uuidv5("aws-question-1452", uuidv5.URL),
    text: "What does the Amazon S3 Intelligent-Tiering storage class offer?",
    options: [
      "Payment flexibility by reserving storage capacity",
      "Long-term retention of data by copying the data to an encrypted Amazon Elastic Block Store (Amazon EBS) volume",
      "Automatic cost savings by moving objects between tiers based on access pattern changes",
      "Secure, durable, and lowest cost storage for data archival",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon S3 Intelligent-Tiering automatically moves objects between two access tiers when access patterns change, optimizing costs. Reference: https://aws.amazon.com/about-aws/whats-new/2018/11/s3-intelligent-tiering/",
  },
  {
    id: uuidv5("aws-question-1453", uuidv5.URL),
    text: "A company has multiple data sources across the organization and wants to consolidate data into one data warehouse. Which AWS service can be used to meet this requirement?",
    options: [
      "Amazon DynamoDB",
      "Amazon Redshift",
      "Amazon Athena",
      "Amazon QuickSight",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon Redshift is a fully managed data warehouse service that allows businesses to consolidate data from multiple sources for analytics. Reference: https://aws.amazon.com/redshift/faqs/",
  },
  {
    id: uuidv5("aws-question-1454", uuidv5.URL),
    text: "Which AWS service can be used to track resource changes and establish compliance?",
    options: [
      "Amazon CloudWatch",
      "AWS Config",
      "AWS CloudTrail",
      "AWS Trusted Advisor",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Config helps track configuration changes and evaluate compliance across AWS resources. Reference: https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html",
  },
  {
    id: uuidv5("aws-question-1455", uuidv5.URL),
    text: "A user has underutilized on-premises resources. Which AWS Cloud concept can BEST address this issue?",
    options: ["High availability", "Elasticity", "Security", "Loose coupling"],
    correctAnswers: [1],
    explanation:
      "Elasticity in AWS allows resources to scale up or down based on demand, reducing waste from underutilized infrastructure. Reference: https://www.gremlin.com/blog/implementing-cost-saving-strategies-on-amazon-ec-2-with-chaos-engineering/",
  },
  {
    id: uuidv5("aws-question-1456", uuidv5.URL),
    text: "A user has a stateful workload that will run on Amazon EC2 for the next 3 years. What is the MOST cost-effective pricing model for this workload?",
    options: [
      "On-Demand Instances",
      "Reserved Instances",
      "Dedicated Instances",
      "Spot Instances",
    ],
    correctAnswers: [1],
    explanation:
      "Reserved Instances provide a significant discount for long-term workloads that run continuously. This is the best option for a 3-year commitment.",
  },
  {
    id: uuidv5("aws-question-1457", uuidv5.URL),
    text: "A cloud practitioner needs an Amazon EC2 instance to launch and run for 7 hours without interruptions. What is the most suitable and cost-effective option for this task?",
    options: [
      "On-Demand Instance",
      "Reserved Instance",
      "Dedicated Host",
      "Spot Instance",
    ],
    correctAnswers: [0],
    explanation:
      "On-Demand Instances are the best choice for short-term, unpredictable workloads that require guaranteed availability.",
  },
  {
    id: uuidv5("aws-question-1458", uuidv5.URL),
    text: "Which of the following are benefits of using AWS Trusted Advisor? (Choose two.)",
    options: [
      "Providing high-performance container orchestration",
      "Creating and rotating encryption keys",
      "Detecting underutilized resources to save costs",
      "Improving security by proactively monitoring the AWS environment",
      "Implementing enforced tagging across AWS resources",
    ],
    correctAnswers: [2, 3],
    explanation:
      "AWS Trusted Advisor helps optimize AWS usage by identifying underutilized resources and security vulnerabilities. Reference: https://aws.amazon.com/about-aws/whats-new/2016/06/aws-support-enables-tagging-capabilities-for-trusted-advisor/",
  },
  {
    id: uuidv5("aws-question-1459", uuidv5.URL),
    text: "A developer has been hired by a large company and needs AWS credentials. Which are security best practices that should be followed? (Choose two.)",
    options: [
      "Grant the developer access to only the AWS resources needed to perform the job.",
      "Share the AWS account root user credentials with the developer.",
      "Add the developer to the administrator's group in AWS IAM.",
      "Configure a password policy that ensures the developer's password cannot be changed.",
      "Ensure the account password policy requires a minimum length.",
    ],
    correctAnswers: [0, 4],
    explanation:
      "Following the principle of least privilege and enforcing strong password policies are best practices for AWS security.",
  },
  {
    id: uuidv5("aws-question-1460", uuidv5.URL),
    text: "Which AWS storage service is designed to transfer petabytes of data in and out of the cloud?",
    options: [
      "AWS Storage Gateway",
      "Amazon S3 Glacier Deep Archive",
      "Amazon Lightsail",
      "AWS Snowball",
    ],
    correctAnswers: [3],
    explanation:
      "AWS Snowball is a data transfer service designed for large-scale data migrations. Reference: https://docs.aws.amazon.com/snowball/latest/ug/transfer-petabytes.html",
  },
  {
    id: uuidv5("aws-question-1461", uuidv5.URL),
    text: "Which service provides a user the ability to warehouse data in the AWS Cloud?",
    options: ["Amazon EFS", "Amazon Redshift", "Amazon RDS", "Amazon VPC"],
    correctAnswers: [1],
    explanation:
      "Amazon Redshift is AWS's data warehousing solution that enables fast analytics on structured data. Reference: https://aws.amazon.com/redshift/",
  },
];

export const quizzes: Quiz[] = [
  {
    id: 1,
    title: "Practice Exam 1",
    slug: "aws",
    subtitle: `${exam1.length} Questions`,
    description: "Test your knowledge of AWS fundamentals.",
    categoryId: "aws-fundamentals",
    category: "AWS Fundamentals",
    exam: exam1,
  },
  {
    id: 2,
    title: "Practice Exam 2",
    slug: "aws",
    subtitle: `${exam2.length} Questions`,
    description: "Test your knowledge of AWS security best practices.",
    categoryId: "aws-security",
    category: "AWS Security",
    exam: exam2,
  },
  {
    id: 3,
    title: "Practice Exam 3",
    slug: "aws",
    subtitle: `${exam3.length} Questions`,
    description: "Test your knowledge of AWS compute services.",
    categoryId: "aws-compute",
    category: "AWS Compute",
    exam: exam3,
  },
  {
    id: 4,
    title: "Practice Exam 4",
    slug: "aws",
    subtitle: `${exam4.length} Questions`,
    description: "Test your knowledge of AWS database services.",
    categoryId: "aws-database",
    category: "AWS Database",
    exam: exam4,
  },
  {
    id: 5,
    title: "Practice Exam 5",
    slug: "aws",
    subtitle: `${exam5.length} Questions`,
    description: "Test your knowledge of AWS storage services.",
    categoryId: "aws-storage",
    category: "AWS Storage",
    exam: exam5,
  },
  {
    id: 6,
    title: "Practice Exam 6",
    slug: "aws",
    subtitle: `${exam6.length} Questions`,
    description: "Test your knowledge of AWS networking services.",
    categoryId: "aws-networking",
    category: "AWS Networking",
    exam: exam6,
  },
  {
    id: 7,
    title: "Practice Exam 7",
    slug: "aws",
    subtitle: `${exam7.length} Questions`,
    description: "Test your knowledge of AWS management services.",
    categoryId: "aws-management",
    category: "AWS Management",
    exam: exam7,
  },
  {
    id: 8,
    title: "Practice Exam 8",
    slug: "aws",
    subtitle: `${exam8.length} Questions`,
    description: "Test your knowledge of AWS management services.",
    categoryId: "aws-management",
    category: "AWS Management",
    exam: exam8,
  },
  {
    id: 9,
    title: "Practice Exam 9",
    slug: "aws",
    subtitle: `${exam9.length} Questions`,
    description: "Test your knowledge of AWS management services.",
    categoryId: "aws-management",
    category: "AWS Management",
    exam: exam9,
  },
  {
    id: 10,
    title: "Practice Exam 10",
    slug: "aws",
    subtitle: `${exam10.length} Questions`,
    description: "Test your knowledge of AWS management services.",
    categoryId: "aws-management",
    category: "AWS Management",
    exam: exam10,
  },
  {
    id: 11,
    title: "Practice Exam 11",
    slug: "aws",
    subtitle: `${exam11.length} Questions`,
    description: "Test your knowledge of AWS management services.",
    categoryId: "aws-management",
    category: "AWS Management",
    exam: exam11,
  },
  {
    id: 12,
    title: "Practice Exam 12",
    slug: "aws",
    subtitle: `${exam12.length} Questions`,
    description: "Test your knowledge of AWS management services.",
    categoryId: "aws-management",
    category: "AWS Management",
    exam: exam12,
  },
  {
    id: 13,
    title: "Practice Exam 13",
    slug: "aws",
    subtitle: `${exam13.length} Questions`,
    description: "Test your knowledge of AWS management services.",
    categoryId: "aws-management",
    category: "AWS Management",
    exam: exam13,
  },
  {
    id: 14,
    title: "Practice Exam 14",
    slug: "aws",
    subtitle: `${exam14.length} Questions`,
    description: "Test your knowledge of AWS management services.",
    categoryId: "aws-management",
    category: "AWS Management",
    exam: exam14,
  },
  {
    id: 15,
    title: "Practice Exam 15",
    slug: "aws",
    subtitle: `${exam15.length} Questions`,
    description: "Test your knowledge of AWS management services.",
    categoryId: "aws-management",
    category: "AWS Management",
    exam: exam15,
  },
  {
    id: 16,
    title: "Practice Exam 16",
    slug: "aws",
    subtitle: `${exam16.length} Questions`,
    description: "Test your knowledge of AWS management services.",
    categoryId: "aws-management",
    category: "AWS Management",
    exam: exam16,
  },
  {
    id: 17,
    title: "Practice Exam 17",
    slug: "aws",
    subtitle: `${exam17.length} Questions`,
    description: "Test your knowledge of AWS management services.",
    categoryId: "aws-management",
    category: "AWS Management",
    exam: exam17,
  },
  {
    id: 18,
    title: "Practice Exam 18",
    slug: "aws",
    subtitle: `${exam18.length} Questions`,
    description: "Test your knowledge of AWS management services.",
    categoryId: "aws-management",
    category: "AWS Management",
    exam: exam18,
  },
  {
    id: 19,
    title: "Practice Exam 19",
    slug: "aws",
    subtitle: `${exam19.length} Questions`,
    description: "Test your knowledge of AWS management services.",
    categoryId: "aws-management",
    category: "AWS Management",
    exam: exam19,
  },
  {
    id: 20,
    title: "Practice Exam 20",
    slug: "aws",
    subtitle: `${exam20.length} Questions`,
    description: "Test your knowledge of AWS management services.",
    categoryId: "aws-management",
    category: "AWS Management",
    exam: exam20,
  },
  {
    id: 21,
    title: "Practice Exam 21",
    slug: "aws",
    subtitle: `${exam21.length} Questions`,
    description: "Test your knowledge of AWS management services.",
    categoryId: "aws-management",
    category: "AWS Management",
    exam: exam21,
  },
  {
    id: 22,
    title: "Practice Exam 22",
    slug: "aws",
    subtitle: `${exam22.length} Questions`,
    description: "Test your knowledge of AWS management services.",
    categoryId: "aws-management",
    category: "AWS Management",
    exam: exam22,
  },
];
