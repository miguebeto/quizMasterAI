const { v5: uuidv5 } = require("uuid");
const categories = [
  {
    id: uuidv5("aws", uuidv5.URL),
    name: "aws",
    description: "AWS",
    image: "https://via.placeholder.com/150",
    quizzes: [],
  },
  {
    id: uuidv5("react", uuidv5.URL),
    name: "react",
    description: "React",
    image: "https://via.placeholder.com/150",
    quizzes: [],
  },
  {
    id: uuidv5("english", uuidv5.URL),
    name: "english",
    description: "English",
    image: "https://via.placeholder.com/150",
    quizzes: [],
  },
  {
    id: uuidv5("nodejs", uuidv5.URL),
    name: "nodejs",
    description: "Node.js",
    image: "https://via.placeholder.com/150",
    quizzes: [],
  },
];

const exam1 = [
  {
    id: uuidv5("aws-question-1", uuidv5.URL),
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
    id: uuidv5("aws-question-2", uuidv5.URL),
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
    id: uuidv5("aws-question-3", uuidv5.URL),
    text: "AWS allows users to manage their resources using a web-based user interface. What is the name of this interface?",
    options: ["AWS CLI", "AWS API", "AWS SDK", "AWS Management Console"],
    correctAnswers: [3],
    explanation:
      "The AWS Management Console is a web-based interface that allows users to manage their AWS resources visually and interactively. The CLI, API, and SDK provide programmatic and command-line access to AWS services.",
  },
  {
    id: uuidv5("aws-question-4", uuidv5.URL),
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
    id: uuidv5("aws-question-5", uuidv5.URL),
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
    id: uuidv5("aws-question-6", uuidv5.URL),
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
    id: uuidv5("aws-question-7", uuidv5.URL),
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
    id: uuidv5("aws-question-8", uuidv5.URL),
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
    id: uuidv5("aws-question-9", uuidv5.URL),
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
    id: uuidv5("aws-question-10", uuidv5.URL),
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
    id: uuidv5("aws-question-11", uuidv5.URL),
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
    id: uuidv5("aws-question-12", uuidv5.URL),
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
    id: uuidv5("aws-question-13", uuidv5.URL),
    text: "Which of the following helps ensure that AWS users follow security best practices by enforcing password policies, MFA, and user permissions?",
    options: ["AWS WAF", "AWS Config", "AWS IAM", "Amazon GuardDuty"],
    correctAnswers: [2],
    explanation:
      "AWS Identity and Access Management (IAM) helps enforce security best practices by managing user permissions, enforcing password policies, and requiring multi-factor authentication (MFA) where necessary.",
  },
  {
    id: uuidv5("aws-question-14", uuidv5.URL),
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
    id: uuidv5("aws-question-15", uuidv5.URL),
    text: "Which of the following is a serverless event bus service that can be used to connect different AWS services, SaaS apps, and custom applications?",
    options: ["Amazon SQS", "Amazon SNS", "AWS Lambda", "Amazon EventBridge"],
    correctAnswers: [3],
    explanation:
      "Amazon EventBridge is a serverless event bus service that allows you to connect different AWS services, SaaS apps, and custom applications, enabling event-driven architectures.",
  },
  {
    id: uuidv5("aws-question-16", uuidv5.URL),
    text: "Which service enables you to run containerized applications without managing the underlying infrastructure?",
    options: ["Amazon EC2", "Amazon ECS", "AWS Fargate", "AWS Lambda"],
    correctAnswers: [2],
    explanation:
      "AWS Fargate is a serverless compute engine for containers, allowing users to run containerized applications without needing to manage the underlying infrastructure, which is handled automatically by AWS.",
  },
  {
    id: uuidv5("aws-question-17", uuidv5.URL),
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
    id: uuidv5("aws-question-18", uuidv5.URL),
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
    id: uuidv5("aws-question-19", uuidv5.URL),
    text: "Which AWS service is a fully managed message queuing service that decouples and scales microservices, distributed systems, and serverless applications?",
    options: ["Amazon SNS", "Amazon SQS", "AWS Step Functions", "Amazon MQ"],
    correctAnswers: [1],
    explanation:
      "Amazon SQS is a fully managed message queuing service that helps decouple and scale microservices, distributed systems, and serverless applications by allowing components to communicate asynchronously.",
  },
  {
    id: uuidv5("aws-question-20", uuidv5.URL),
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
    id: uuidv5("aws-question-21", uuidv5.URL),
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
    id: uuidv5("aws-question-22", uuidv5.URL),
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
    id: uuidv5("aws-question-23", uuidv5.URL),
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
    id: uuidv5("aws-question-24", uuidv5.URL),
    text: "Which service is used to securely manage access to AWS services and resources for individual users or groups?",
    options: ["AWS IAM", "AWS WAF", "Amazon Inspector", "AWS Config"],
    correctAnswers: [0],
    explanation:
      "AWS Identity and Access Management (IAM) allows users to securely manage access to AWS services and resources by defining permissions for individual users or groups.",
  },
  {
    id: uuidv5("aws-question-25", uuidv5.URL),
    text: "Which AWS service allows you to create and manage cryptographic keys to control access to your data?",
    options: ["AWS KMS", "AWS IAM", "Amazon S3", "AWS Shield"],
    correctAnswers: [0],
    explanation:
      "AWS Key Management Service (KMS) allows you to create and manage cryptographic keys to secure and control access to your data, ensuring its confidentiality and integrity.",
  },
  {
    id: uuidv5("aws-question-26", uuidv5.URL),
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
    id: uuidv5("aws-question-27", uuidv5.URL),
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
    id: uuidv5("aws-question-28", uuidv5.URL),
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
    id: uuidv5("aws-question-29", uuidv5.URL),
    text: "Which service helps you move petabyte-scale data to AWS quickly and cost-effectively?",
    options: ["AWS Snowball", "AWS Storage Gateway", "Amazon S3", "AWS DMS"],
    correctAnswers: [0],
    explanation:
      "AWS Snowball is a petabyte-scale data transfer service that allows you to move large volumes of data to AWS securely and cost-effectively, without relying on network bandwidth.",
  },
  {
    id: uuidv5("aws-question-30", uuidv5.URL),
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
    id: uuidv5("aws-question-31", uuidv5.URL),
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
    id: uuidv5("aws-question-32", uuidv5.URL),
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
    id: uuidv5("aws-question-33", uuidv5.URL),
    text: "Which AWS service can be used to process and analyze real-time streaming data?",
    options: ["Amazon S3", "Amazon Redshift", "Amazon Kinesis", "AWS Glue"],
    correctAnswers: [2],
    explanation:
      "Amazon Kinesis allows you to collect, process, and analyze real-time streaming data, enabling use cases such as real-time analytics, machine learning, and log analysis.",
  },
  {
    id: uuidv5("aws-question-34", uuidv5.URL),
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
    id: uuidv5("aws-question-35", uuidv5.URL),
    text: "Which AWS service is best suited for performing extract, transform, and load (ETL) operations on large datasets?",
    options: ["AWS Lambda", "Amazon Redshift", "AWS Glue", "Amazon RDS"],
    correctAnswers: [2],
    explanation:
      "AWS Glue is a fully managed ETL (extract, transform, and load) service that makes it easy to prepare and load your data for analytics, especially for large datasets.",
  },
  {
    id: uuidv5("aws-question-36", uuidv5.URL),
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
    id: uuidv5("aws-question-37", uuidv5.URL),
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
    id: uuidv5("aws-question-38", uuidv5.URL),
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
    id: uuidv5("aws-question-39", uuidv5.URL),
    text: "Which AWS service allows you to analyze big data using SQL queries?",
    options: ["Amazon S3", "AWS Glue", "Amazon Athena", "Amazon EMR"],
    correctAnswers: [2],
    explanation:
      "Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon S3 using SQL queries without needing to set up or manage infrastructure.",
  },
  {
    id: uuidv5("aws-question-40", uuidv5.URL),
    text: "Which AWS service helps improve the security of your AWS environment by identifying vulnerabilities and potential threats?",
    options: ["AWS Shield", "AWS GuardDuty", "AWS WAF", "AWS IAM"],
    correctAnswers: [1],
    explanation:
      "AWS GuardDuty is a threat detection service that continuously monitors for malicious activity and unauthorized behavior to help protect your AWS accounts and workloads.",
  },
  {
    id: uuidv5("aws-question-41", uuidv5.URL),
    text: "Which AWS service allows you to run code without provisioning or managing servers?",
    options: ["Amazon EC2", "AWS Lambda", "Amazon ECS", "AWS Batch"],
    correctAnswers: [1],
    explanation:
      "AWS Lambda is a serverless computing service that lets you run code without having to provision or manage servers. You only pay for the compute time that your code actually uses.",
  },
  {
    id: uuidv5("aws-question-42", uuidv5.URL),
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
    id: uuidv5("aws-question-43", uuidv5.URL),
    text: "Which AWS service is used to automate infrastructure management using code?",
    options: ["AWS CloudFormation", "AWS Lambda", "Amazon RDS", "Amazon S3"],
    correctAnswers: [0],
    explanation:
      "AWS CloudFormation enables you to use infrastructure as code, allowing you to model and automate the setup of your AWS resources in a safe, repeatable manner.",
  },
  {
    id: uuidv5("aws-question-44", uuidv5.URL),
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
    id: uuidv5("aws-question-45", uuidv5.URL),
    text: "Which AWS service provides distributed denial-of-service (DDoS) protection?",
    options: ["AWS GuardDuty", "AWS WAF", "AWS Shield", "AWS Trusted Advisor"],
    correctAnswers: [2],
    explanation:
      "AWS Shield is a managed Distributed Denial of Service (DDoS) protection service that helps protect your applications against DDoS attacks.",
  },
  {
    id: uuidv5("aws-question-46", uuidv5.URL),
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
    id: uuidv5("aws-question-47", uuidv5.URL),
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
    id: uuidv5("aws-question-48", uuidv5.URL),
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
    id: uuidv5("aws-question-49", uuidv5.URL),
    text: "Which AWS service allows you to securely store and manage access to secrets like API keys and database passwords?",
    options: ["AWS IAM", "AWS Secrets Manager", "AWS KMS", "AWS CloudHSM"],
    correctAnswers: [1],
    explanation:
      "AWS Secrets Manager helps you securely store and manage access to sensitive information like API keys, database passwords, and other credentials.",
  },
  {
    id: uuidv5("aws-question-50", uuidv5.URL),
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
];

const exam2 = [
  {
    id: uuidv5("aws-question-51", uuidv5.URL),
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
    id: uuidv5("aws-question-52", uuidv5.URL),
    text: "Which service provides object-level storage in AWS?",
    options: ["Amazon EBS", "Amazon Instance Store", "Amazon EFS", "Amazon S3"],
    correctAnswers: [3],
    explanation:
      "Amazon S3 is an object storage service that provides scalable, secure, and durable storage for data in various formats, including media files, backups, and archives.",
  },
  {
    id: uuidv5("aws-question-53", uuidv5.URL),
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
    id: uuidv5("aws-question-54", uuidv5.URL),
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
    id: uuidv5("aws-question-55", uuidv5.URL),
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
    id: uuidv5("aws-question-56", uuidv5.URL),
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
    id: uuidv5("aws-question-57", uuidv5.URL),
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
    id: uuidv5("aws-question-58", uuidv5.URL),
    text: "What is the AWS feature that provides an additional level of security above the default authentication mechanism of usernames and passwords?",
    options: ["Encrypted keys", "Email verification", "AWS KMS", "AWS MFA"],
    correctAnswers: [3],
    explanation:
      "AWS Multi-Factor Authentication (MFA) adds an extra layer of protection by requiring a second form of authentication, like a one-time code, in addition to a password.",
  },
  {
    id: uuidv5("aws-question-59", uuidv5.URL),
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
    id: uuidv5("aws-question-60", uuidv5.URL),
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
    id: uuidv5("aws-question-61", uuidv5.URL),
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
    id: uuidv5("aws-question-62", uuidv5.URL),
    text: "According to the AWS Acceptable Use Policy, which of the following statements is true regarding penetration testing of EC2 instances?",
    options: [
      "Penetration testing is not allowed in AWS.",
      "Penetration testing is performed automatically by AWS to determine vulnerabilities in your AWS infrastructure.",
      "Penetration testing can be performed by the customer on their own instances without prior authorization from AWS.",
      "The AWS customers are only allowed to perform penetration testing on services managed by AWS.",
    ],
    correctAnswers: [2],
    explanation:
      "Customers are allowed to conduct penetration tests on their own EC2 instances without prior authorization from AWS, as long as they follow AWS's penetration testing guidelines.",
  },
  {
    id: uuidv5("aws-question-63", uuidv5.URL),
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
    id: uuidv5("aws-question-64", uuidv5.URL),
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
    id: uuidv5("aws-question-65", uuidv5.URL),
    text: "What is the AWS service that provides a virtual network dedicated to your AWS account?",
    options: ["AWS VPN", "AWS Subnets", "AWS Dedicated Hosts", "Amazon VPC"],
    correctAnswers: [3],
    explanation:
      "Amazon Virtual Private Cloud (VPC) allows you to launch AWS resources in a virtual network that you define, providing full control over your network configuration and isolation.",
  },
  {
    id: uuidv5("aws-question-66", uuidv5.URL),
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
    id: uuidv5("aws-question-67", uuidv5.URL),
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
    id: uuidv5("aws-question-68 ", uuidv5.URL),
    text: "Your company is designing a new application that will store and retrieve photos and videos. Which of the following services should you recommend as the underlying storage mechanism?",
    options: ["Amazon EBS", "Amazon SQS", "Amazon S3", "Amazon Instance Store"],
    correctAnswers: [2],
    explanation:
      "Amazon S3 is an object storage service suitable for storing and retrieving large quantities of data, including photos and videos, with scalability and high durability.",
  },
  {
    id: uuidv5("aws-question-69", uuidv5.URL),
    text: "Which of the following is equivalent to a user name and password and is used to authenticate your programmatic access to AWS services and APIs?",
    options: ["Instance Password", "Key pairs", "Access Keys", "MFA"],
    correctAnswers: [2],
    explanation:
      "Access Keys consist of an access key ID and a secret access key, and are used to authenticate programmatic requests to AWS services, much like a user name and password for your AWS account.",
  },
  {
    id: uuidv5("aws-question-70", uuidv5.URL),
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
    id: uuidv5("aws-question-71", uuidv5.URL),
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
    id: uuidv5("aws-question-72", uuidv5.URL),
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
    id: uuidv5("aws-question-73", uuidv5.URL),
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
    id: uuidv5("aws-question-74", uuidv5.URL),
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
    id: uuidv5("aws-question-75", uuidv5.URL),
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
    id: uuidv5("aws-question-76", uuidv5.URL),
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
    id: uuidv5("aws-question-77", uuidv5.URL),
    text: "Which of the following services can help protect your web applications from SQL injection and other vulnerabilities in your application code?",
    options: ["Amazon Cognito", "AWS IAM", "Amazon Aurora", "AWS WAF"],
    correctAnswers: [3],
    explanation:
      "AWS WAF (Web Application Firewall) helps protect your web applications by filtering out malicious traffic and preventing vulnerabilities such as SQL injection and cross-site scripting (XSS).",
  },
  {
    id: uuidv5("aws-question-78", uuidv5.URL),
    text: "An organization needs to analyze and process a large number of data sets. Which AWS service should they use?",
    options: ["Amazon EMR", "Amazon MQ", "Amazon SNS", "Amazon SQS"],
    correctAnswers: [0],
    explanation:
      "Amazon EMR (Elastic MapReduce) is a service that allows you to process vast amounts of data using popular frameworks such as Apache Hadoop and Apache Spark, ideal for large-scale data analysis.",
  },
  {
    id: uuidv5("aws-question-79", uuidv5.URL),
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
    id: uuidv5("aws-question-80", uuidv5.URL),
    text: "What is the AWS service that provides you the highest level of control over the underlying virtual infrastructure?",
    options: ["Amazon Redshift", "Amazon DynamoDB", "Amazon EC2", "Amazon RDS"],
    correctAnswers: [2],
    explanation:
      "Amazon EC2 (Elastic Compute Cloud) provides the highest level of control over the virtualized infrastructure, allowing you to configure instances, storage, networking, and more.",
  },
  {
    id: uuidv5("aws-question-81", uuidv5.URL),
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
    id: uuidv5("aws-question-82", uuidv5.URL),
    text: "In your on-premises environment, you can create as many virtual servers as you need from a single template. What can you use to perform the same in AWS?",
    options: ["IAM", "An internet gateway", "EBS Snapshot", "AMI"],
    correctAnswers: [3],
    explanation:
      "An Amazon Machine Image (AMI) is a template that contains a software configuration (e.g., OS, application server, and applications), allowing you to launch new instances based on the same setup.",
  },
  {
    id: uuidv5("aws-question-83", uuidv5.URL),
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
    id: uuidv5("aws-question-84", uuidv5.URL),
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
    id: uuidv5("aws-question-85", uuidv5.URL),
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
    id: uuidv5("aws-question-86", uuidv5.URL),
    text: "AWS has created a large number of Edge Locations as part of its Global Infrastructure. Which of the following is NOT a benefit of using Edge Locations?",
    options: [
      "Edge locations are used by CloudFront to cache the most recent responses",
      "Edge locations are used by CloudFront to improve your end users' experience when uploading files",
      "Edge locations are used by CloudFront to distribute traffic across multiple instances to reduce latency",
      "Edge locations are used by CloudFront to distribute content to global users with low latency",
    ],
    correctAnswers: [2],
    explanation:
      "Edge Locations help improve content delivery and reduce latency for users globally by caching content closer to end users. They do not distribute traffic across multiple instances.",
  },
  {
    id: uuidv5("aws-question-87", uuidv5.URL),
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
    id: uuidv5("aws-question-88", uuidv5.URL),
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
    id: uuidv5("aws-question-89", uuidv5.URL),
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
    id: uuidv5("aws-question-90", uuidv5.URL),
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
    id: uuidv5("aws-question-91", uuidv5.URL),
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
    id: uuidv5("aws-question-92", uuidv5.URL),
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
    id: uuidv5("aws-question-93", uuidv5.URL),
    text: "What is the AWS service/feature that takes advantage of Amazon CloudFront's globally distributed edge locations to transfer files to S3 with higher upload speeds?",
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
    id: uuidv5("aws-question-94", uuidv5.URL),
    text: "Which of the following AWS security features is associated with an EC2 instance and functions to filter incoming traffic requests?",
    options: ["AWS X-Ray", "Network ACL", "Security Groups", "VPC Flow logs"],
    correctAnswers: [2],
    explanation:
      "Security Groups act as a virtual firewall for your EC2 instances to control inbound and outbound traffic.",
  },
  {
    id: uuidv5("aws-question-95", uuidv5.URL),
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
    id: uuidv5("aws-question-96", uuidv5.URL),
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
    id: uuidv5("aws-question-97", uuidv5.URL),
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
    id: uuidv5("aws-question-98", uuidv5.URL),
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
    id: uuidv5("aws-question-99", uuidv5.URL),
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
    id: uuidv5("aws-question-100", uuidv5.URL),
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

const exam3 = [
  {
    id: uuidv5("aws-question-101", uuidv5.URL),
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
    id: uuidv5("aws-question-102", uuidv5.URL),
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
    id: uuidv5("aws-question-103", uuidv5.URL),
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
    id: uuidv5("aws-question-104", uuidv5.URL),
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
    id: uuidv5("aws-question-105", uuidv5.URL),
    text: "What is the primary storage service used by Amazon RDS database instances?",
    options: ["Amazon Glacier", "Amazon EBS", "Amazon EFS", "Amazon S3"],
    correctAnswers: [1],
    explanation:
      "Amazon RDS primarily utilizes Amazon EBS (Elastic Block Store) to provide persistent block storage for database instances.",
  },
  {
    id: uuidv5("aws-question-106", uuidv5.URL),
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
    id: uuidv5("aws-question-107", uuidv5.URL),
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
    id: uuidv5("aws-question-108", uuidv5.URL),
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
    id: uuidv5("aws-question-109", uuidv5.URL),
    text: "Sarah has deployed an application in the Northern California (us-west-1) region. After examining the application's traffic, she notices that about 30% of the traffic is coming from Asia. What can she do to reduce latency for the users in Asia?",
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
    id: uuidv5("aws-question-110", uuidv5.URL),
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
    id: uuidv5("aws-question-111", uuidv5.URL),
    text: "Using Amazon EC2 falls under which of the following cloud computing models?",
    options: ["Iaas & SaaS", "IaaS", "SaaS", "PaaS"],
    correctAnswers: [1],
    explanation:
      "Amazon EC2 is an example of Infrastructure as a Service (IaaS), providing virtual servers in the cloud on which users can run applications.",
  },
  {
    id: uuidv5("aws-question-112", uuidv5.URL),
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
    id: uuidv5("aws-question-113", uuidv5.URL),
    text: "Your company is designing a new application that will store and retrieve photos and videos. Which of the following services should you recommend as the underlying storage mechanism?",
    options: ["Amazon EBS", "Amazon SQS", "Amazon Instance store", "Amazon S3"],
    correctAnswers: [3],
    explanation:
      "Amazon S3 is ideal for storing and retrieving any amount of data, such as photos and videos, at any time from anywhere on the web, making it perfect for such applications.",
  },
  {
    id: uuidv5("aws-question-114", uuidv5.URL),
    text: "Amazon Glacier is an Amazon S3 storage class that is suitable for storing [...] & [...]. (Choose TWO)",
    options: [
      "Active archives",
      "Dynamic websites' assets",
      "Long-term analytic data",
      "Active databases",
      "Cached data",
    ],
    correctAnswers: [0, 2],
    explanation:
      "Amazon Glacier, now known as Amazon S3 Glacier, is a storage solution designed for secure, durable, and extremely low-cost storage for data archiving and long-term backup.",
  },
  {
    id: uuidv5("aws-question-115", uuidv5.URL),
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
    id: uuidv5("aws-question-116", uuidv5.URL),
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
    id: uuidv5("aws-question-117", uuidv5.URL),
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
    id: uuidv5("aws-question-118", uuidv5.URL),
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
    id: uuidv5("aws-question-119", uuidv5.URL),
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
    id: uuidv5("aws-question-120", uuidv5.URL),
    text: "What is the AWS tool that enables you to use scripts to manage all AWS services and resources?",
    options: ["AWS Console", "AWS Service Catalog", "AWS OpsWorks", "AWS CLI"],
    correctAnswers: [3],
    explanation:
      "AWS CLI (Command Line Interface) allows users to manage AWS services and resources via scripts, providing a powerful way to automate tasks across different AWS services.",
  },
  {
    id: uuidv5("aws-question-121", uuidv5.URL),
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
    id: uuidv5("aws-question-122", uuidv5.URL),
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
    id: uuidv5("aws-question-123", uuidv5.URL),
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
    id: uuidv5("aws-question-124", uuidv5.URL),
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
    id: uuidv5("aws-question-125", uuidv5.URL),
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
    id: uuidv5("aws-question-126", uuidv5.URL),
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
    id: uuidv5("aws-question-127", uuidv5.URL),
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
    id: uuidv5("aws-question-128", uuidv5.URL),
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
    id: uuidv5("aws-question-129", uuidv5.URL),
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
    id: uuidv5("aws-question-130", uuidv5.URL),
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
    id: uuidv5("aws-question-131", uuidv5.URL),
    text: "Which of the following statements describes the AWS Cloud's agility?",
    options: [
      "AWS allows you to host your applications in multiple regions around the world",
      "AWS provides customizable hardware at the lowest possible cost",
      "AWS allows you to provision resources in minutes",
      "AWS allows you to pay upfront to reduce costs",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Cloud's agility refers to the ability to quickly provision and manage cloud resources in minutes, enabling businesses to scale and adapt faster.",
  },
  {
    id: uuidv5("aws-question-132", uuidv5.URL),
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
    id: uuidv5("aws-question-133", uuidv5.URL),
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
    id: uuidv5("aws-question-134", uuidv5.URL),
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
    id: uuidv5("aws-question-135", uuidv5.URL),
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
    id: uuidv5("aws-question-136", uuidv5.URL),
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
    id: uuidv5("aws-question-137", uuidv5.URL),
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
    id: uuidv5("aws-question-138", uuidv5.URL),
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
    id: uuidv5("aws-question-139", uuidv5.URL),
    text: "Which AWS Service can be used to register a new domain name?",
    options: ["Amazon Personalize", "Amazon Route 53", "AWS KMS", "AWS Config"],
    correctAnswers: [1],
    explanation:
      "Amazon Route 53 is AWS's scalable Domain Name System (DNS) service that can also be used to register and manage domain names.",
  },
  {
    id: uuidv5("aws-question-140", uuidv5.URL),
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
    id: uuidv5("aws-question-141", uuidv5.URL),
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
    id: uuidv5("aws-question-142", uuidv5.URL),
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
    id: uuidv5("aws-question-143", uuidv5.URL),
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
    id: uuidv5("aws-question-144", uuidv5.URL),
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
    id: uuidv5("aws-question-145", uuidv5.URL),
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
    id: uuidv5("aws-question-146", uuidv5.URL),
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
    id: uuidv5("aws-question-147", uuidv5.URL),
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

const exam4 = [
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
    text: "A company needs to migrate their website from on-premises to AWS. Security is a major concern for them, so they need to host their website on hardware that is NOT shared with other AWS customers. Which of the following EC2 instance options meets this requirement?",
    options: [
      "On-demand instances.",
      "Spot instances.",
      "Dedicated instances.",
      "Reserved instances.",
    ],
    correctAnswers: [2],
    explanation:
      "Dedicated instances run on hardware that is not shared with other customers, ensuring higher levels of security and compliance compared to other instance types.",
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
    text: "A company is planning to migrate a database with high read/write activity to AWS. What is the best storage option to use?",
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
    text: "Which of the following are factors in determining the appropriate database technology to use for a specific workload? (Choose TWO)",
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
    text: "Which of the below are responsibilities of the customer when using Amazon EC2? (Choose TWO)",
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
    text: "AWS recommends some practices to help organizations avoid unexpected charges on their bill. Which of the following is NOT one of these practices?",
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

const exam5 = [
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
    text: "What AWS service provides serverless computing for event-driven applications?",
    options: ["Amazon EC2.", "AWS Lambda.", "Amazon ECS.", "Amazon EKS."],
    correctAnswers: [1],
    explanation:
      "AWS Lambda is the service designed for running code in response to events in a serverless architecture.",
  },
  {
    id: uuidv5("aws-question-261", uuidv5.URL),
    text: "What is the main benefit of using Amazon Route 53?",
    options: [
      "It provides a content delivery network.",
      "It is a domain registration service and DNS service.",
      "It offers storage solutions.",
      "It automates backup processes.",
    ],
    correctAnswers: [1],
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
      "Amazon DynamoDB is a fully managed NoSQL database service designed for high availability and scalability.",
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
      "Amazon S3 (Simple Storage Service) is used for scalable object storage for data of any type.",
  },
  {
    id: uuidv5("aws-question-272", uuidv5.URL),
    text: "What is the function of AWS Config?",
    options: [
      "To monitor resource changes.",
      "To automate the deployment of applications.",
      "To manage load balancing.",
      "To provide caching solutions.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Config allows you to assess, audit, and evaluate the configurations of your AWS resources.",
  },
  {
    id: uuidv5("aws-question-273", uuidv5.URL),
    text: "What service provides a global content delivery network (CDN)?",
    options: [
      "Amazon CloudFront.",
      "Amazon S3.",
      "AWS Direct Connect.",
      "Amazon Route 53.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon CloudFront is the AWS service that provides a global content delivery network for fast content delivery.",
  },
  {
    id: uuidv5("aws-question-274", uuidv5.URL),
    text: "What is the purpose of Amazon RDS Multi-AZ deployments?",
    options: [
      "To enhance database performance.",
      "To provide high availability and failover support.",
      "To scale databases vertically.",
      "To reduce costs.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon RDS Multi-AZ deployments provide high availability and failover support for your database.",
  },
  {
    id: uuidv5("aws-question-275", uuidv5.URL),
    text: "Which service is used to run containerized applications?",
    options: ["AWS Lambda.", "Amazon EC2.", "Amazon ECS.", "AWS Fargate."],
    correctAnswers: [2],
    explanation:
      "Amazon ECS (Elastic Container Service) is used to run and manage containerized applications.",
  },
  {
    id: uuidv5("aws-question-276", uuidv5.URL),
    text: "What type of storage does Amazon EBS provide?",
    options: [
      "Object storage.",
      "Block storage.",
      "File storage.",
      "Archival storage.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon EBS (Elastic Block Store) provides block storage for use with Amazon EC2 instances.",
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
    text: "What does Amazon Route 53 provide?",
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
      "AWS IAM (Identity and Access Management) is used to manage access and permissions for AWS resources.",
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
    text: "What is the purpose of AWS Direct Connect?",
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

const exam6 = [
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
    text: "Which features are included in the AWS Business Support Plan? (Choose TWO)",
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
      "EC2 Reserved Instances - No Upfront.",
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
    text: "Which of the following is a service that allows users to run containers without managing servers?",
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
      "To manage AWS resource inventory.",
      "To monitor and respond to security incidents.",
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
      "AWS Auto Scaling automatically adjusts the capacity to maintain steady, predictable performance at the lowest possible cost.",
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
      "A cloud storage service.",
      "A content delivery network.",
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
      "To monitor application performance.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally.",
  },
  {
    id: 'uuidv5("aws-question-334", uuidv5.URL)',
    text: "Which service provides distributed denial-of-service (DDoS) protection?",
    options: ["AWS Shield.", "AWS WAF.", "Amazon Inspector.", "AWS GuardDuty."],
    correctAnswers: [0],
    explanation:
      "AWS Shield is a managed DDoS protection service that safeguards applications running on AWS.",
  },
  {
    id: 'uuidv5("aws-question-335", uuidv5.URL)',
    text: "What does Amazon Aurora offer?",
    options: [
      "A serverless database service.",
      "A fully managed NoSQL database.",
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
    text: "What does AWS Elastic Beanstalk provide?",
    options: [
      "A serverless architecture for web applications.",
      "Automated deployment and scaling for web applications.",
      "A managed database service.",
      "A CDN for delivering content.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Elastic Beanstalk is an easy-to-use service for deploying and scaling web applications and services.",
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

const quizzes = [
  {
    id: uuidv5("aws-fundamentals", uuidv5.URL),
    title: "Practice Exam 1",
    slug: "aws",
    subtitle: `${exam1.length} Questions`,
    description: "Test your knowledge of AWS fundamentals.",
    categoryId: categories[0].id,
    category: "AWS Fundamentals",
    exam: exam1,
  },
  {
    id: uuidv5("aws-fundamentals-2", uuidv5.URL),
    title: "Practice Exam 2",
    slug: "aws",
    subtitle: `${exam2.length} Questions`,
    description: "Test your knowledge of AWS fundamentals.",
    categoryId: categories[0].id,
    category: "AWS Fundamentals",
    exam: exam2,
  },
  {
    id: uuidv5("aws-fundamentals-3", uuidv5.URL),
    title: "Practice Exam 3",
    slug: "aws",
    subtitle: `${exam3.length} Questions`,
    description: "Test your knowledge of AWS fundamentals.",
    categoryId: categories[0].id,
    category: "AWS Fundamentals",
    exam: exam3,
  },
  {
    id: uuidv5("aws-fundamentals-4", uuidv5.URL),
    title: "Practice Exam 4",
    slug: "aws",
    subtitle: `${exam4.length} Questions`,
    description: "Test your knowledge of AWS fundamentals.",
    categoryId: categories[0].id,
    category: "AWS Fundamentals",
    exam: exam4,
  },
  {
    id: uuidv5("aws-fundamentals-5", uuidv5.URL),
    title: "Practice Exam 5",
    slug: "aws",
    subtitle: `${exam5.length} Questions`,
    description: "Test your knowledge of AWS fundamentals.",
    categoryId: categories[0].id,
    category: "AWS Fundamentals",
    exam: exam5,
  },
  {
    id: uuidv5("aws-fundamentals-6", uuidv5.URL),
    title: "Practice Exam 6",
    slug: "aws",
    subtitle: `${exam6.length} Questions`,
    description: "Test your knowledge of AWS fundamentals.",
    categoryId: categories[0].id,
    category: "AWS Fundamentals",
    exam: exam6,
  },
];

module.exports = { categories, exam1, exam2, exam3, quizzes };
