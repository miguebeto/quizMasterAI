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
    id: uuidv5("aws-question-1", uuidv5.URL),
    text: "AWS allows users to manage their resources using a web based user interface. What is the name of this interface?",
    options: ["AWS CLI.", "AWS API.", "AWS SDK.", "AWS Management Console."],
    correctAnswers: [3],
    explanation:
      "The AWS Management Console is a web-based user interface that allows users to manage AWS resources. [Reference](https://docs.aws.amazon.com/console/).",
  },
  {
    id: uuidv5("aws-question-2", uuidv5.URL),
    text: "Which of the following is an example of horizontal scaling in the AWS Cloud?",
    options: [
      "Replacing an existing EC2 instance with a larger, more powerful one.",
      "Increasing the compute capacity of a single EC2 instance to address the growing demands of an application.",
      "Adding more RAM capacity to an EC2 instance.",
      "Adding more EC2 instances of the same size to handle an increase in traffic.",
    ],
    correctAnswers: [3],
    explanation:
      "Horizontal scaling involves adding more instances of the same type to distribute load, as opposed to vertical scaling which increases the size of a single instance. [Reference](https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html).",
  },
  {
    id: uuidv5("aws-question-3", uuidv5.URL),
    text: "You have noticed that several critical Amazon EC2 instances have been terminated. Which of the following AWS services would help you determine who took this action?",
    options: [
      "Amazon Inspector.",
      "AWS CloudTrail.",
      "AWS Trusted Advisor.",
      "EC2 Instance Usage Report.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS CloudTrail records AWS API calls, allowing you to determine who took actions like terminating EC2 instances. [Reference](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html).",
  },
  {
    id: uuidv5("aws-question-4", uuidv5.URL),
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
      "Reliability includes the ability to automatically provision new resources and to recover quickly from failures. [Reference](https://wa.aws.amazon.com/wat.pillar.reliability.en.html).",
  },
  {
    id: uuidv5("aws-question-5", uuidv5.URL),
    text: "Which statement is true regarding the AWS Shared Responsibility Model?",
    options: [
      "Responsibilities vary depending on the services used.",
      "Security of the IaaS services is the responsibility of AWS.",
      "Patching the guest OS is always the responsibility of AWS.",
      "Security of the managed services is the responsibility of the customer.",
    ],
    correctAnswers: [0],
    explanation:
      "The Shared Responsibility Model's division of responsibilities depends on the specific AWS services used. [Reference](https://aws.amazon.com/compliance/shared-responsibility-model/).",
  },
  {
    id: uuidv5("aws-question-6", uuidv5.URL),
    text: "You have set up consolidated billing for several AWS accounts. One of the accounts has purchased a number of reserved instances for 3 years. Which of the following is true regarding this scenario?",
    options: [
      "The Reserved Instance discounts can only be shared with the master account.",
      "All accounts can receive the hourly cost benefit of the Reserved Instances.",
      "The purchased instances will have better performance than On-demand instances.",
      "There are no cost benefits from using consolidated billing; It is for informational purposes only.",
    ],
    correctAnswers: [1],
    explanation:
      "With consolidated billing, Reserved Instance discounts can apply across linked accounts. [Reference](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html).",
  },
  {
    id: uuidv5("aws-question-7", uuidv5.URL),
    text: "A company has developed an eCommerce web application in AWS. What should they do to ensure that the application has the highest level of availability?",
    options: [
      "Deploy the application across multiple Availability Zones and Edge locations.",
      "Deploy the application across multiple Availability Zones and subnets.",
      "Deploy the application across multiple Regions and Availability Zones.",
      "Deploy the application across multiple VPC’s and subnets.",
    ],
    correctAnswers: [2],
    explanation:
      "High availability is best achieved by deploying applications across multiple Regions and Availability Zones to handle regional failures. [Reference](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/global-infrastructure.html).",
  },
  {
    id: uuidv5("aws-question-8", uuidv5.URL),
    text: "What does AWS Snowball provide? (Choose TWO)",
    options: [
      "Built-in computing capabilities that allow customers to process data locally.",
      "A catalog of third-party software solutions that customers need to build solutions and run their businesses.",
      "A hybrid cloud storage between on-premises environments and the AWS Cloud.",
      "An Exabyte-scale data transfer service that allows you to move extremely large amounts of data to AWS.",
      "Secure transfer of large amounts of data into and out of the AWS.",
    ],
    correctAnswers: [0, 4],
    explanation:
      "AWS Snowball offers secure and physical data transfer appliances, with compute capabilities and secure transfers. [Reference](https://aws.amazon.com/snowball/).",
  },
  {
    id: uuidv5("aws-question-9", uuidv5.URL),
    text: "A company has an AWS Enterprise Support plan. They want quick and efficient guidance with their billing and account inquiries. Which of the following should the company use?",
    options: [
      "AWS Health Dashboard.",
      "AWS Support Concierge.",
      "AWS Customer Service.",
      "AWS Operations Support.",
    ],
    correctAnswers: [1],
    explanation:
      "The AWS Support Concierge team is available to Enterprise Support customers to assist with billing and account inquiries. [Reference](https://aws.amazon.com/premiumsupport/plans/).",
  },
  {
    id: uuidv5("aws-question-10", uuidv5.URL),
    text: "A Japanese company hosts their applications on Amazon EC2 instances in the Tokyo Region. The company has opened new branches in the United States, and the US users are complaining of high latency. What can the company do to reduce latency for the users in the US while minimizing costs?",
    options: [
      "Applying the Amazon Connect latency-based routing policy.",
      "Registering a new US domain name to serve the users in the US.",
      "Building a new data center in the US and implementing a hybrid model.",
      "Deploying new Amazon EC2 instances in a Region located in the US.",
    ],
    correctAnswers: [3],
    explanation:
      "Deploying EC2 instances in a US Region will minimize latency for US users by serving content closer to them. [Reference](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html).",
  },
  {
    id: uuidv5("aws-question-11", uuidv5.URL),
    text: "An organization has a large number of technical employees who operate their AWS Cloud infrastructure. What does AWS provide to help organize them into teams and then assign the appropriate permissions for each team?",
    options: [
      "IAM roles.",
      "IAM users.",
      "IAM user groups.",
      "AWS Organizations.",
    ],
    correctAnswers: [2],
    explanation:
      "IAM user groups allow organizations to group IAM users and assign permissions to the group. This simplifies management by applying the same permissions to multiple users. [Reference](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups.html).",
  },
  {
    id: uuidv5("aws-question-12", uuidv5.URL),
    text: "A company has decided to migrate its Oracle database to AWS. Which AWS service can help achieve this without negatively impacting the functionality of the source database?",
    options: [
      "AWS OpsWorks.",
      "AWS Database Migration Service.",
      "AWS Server Migration Service.",
      "AWS Application Discovery Service.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Database Migration Service (DMS) helps you migrate databases to AWS quickly and securely with minimal downtime. [Reference](https://docs.aws.amazon.com/dms/latest/userguide/Welcome.html).",
  },
  {
    id: uuidv5("aws-question-13", uuidv5.URL),
    text: "Adjusting compute capacity dynamically to reduce cost is an implementation of which AWS cloud best practice?",
    options: [
      "Build security in every layer.",
      "Parallelize tasks.",
      "Implement elasticity.",
      "Adopt monolithic architecture.",
    ],
    correctAnswers: [2],
    explanation:
      "Elasticity allows systems to scale in or out automatically depending on the workload, optimizing cost and performance. [Reference](https://docs.aws.amazon.com/wellarchitected/latest/framework/elasticity.html).",
  },
  {
    id: uuidv5("aws-question-14", uuidv5.URL),
    text: "What are the benefits of having infrastructure hosted in AWS? (Choose TWO)",
    options: [
      "Increasing speed and agility.",
      "There is no need to worry about security.",
      "Gaining complete control over the physical infrastructure.",
      "Operating applications on behalf of customers.",
      "All of the physical security and most of the data/network security are taken care of for you.",
    ],
    correctAnswers: [0, 4],
    explanation:
      "AWS provides agility and speed for deploying infrastructure and handles most of the underlying security, allowing customers to focus on their applications. [Reference](https://aws.amazon.com/what-is-aws/).",
  },
  {
    id: uuidv5("aws-question-15", uuidv5.URL),
    text: 'What is the advantage of the AWS-recommended practice of "decoupling" applications?',
    options: [
      "Allows treating an application as a single, cohesive unit.",
      "Reduces inter-dependencies so that failures do not impact other components of the application.",
      "Allows updates of any monolithic application quickly and easily.",
      "Allows tracking of any API call made to any AWS service.",
    ],
    correctAnswers: [1],
    explanation:
      "Decoupling helps build resilient systems by isolating components so that a failure in one does not affect others. [Reference](https://docs.aws.amazon.com/wellarchitected/latest/architecture-decisions/decoupling.html).",
  },
  {
    id: uuidv5("aws-question-16", uuidv5.URL),
    text: "Which of the following helps a customer view the Amazon EC2 billing activity for the past month?",
    options: [
      "AWS Budgets.",
      "AWS Pricing Calculator.",
      "AWS Systems Manager.",
      "AWS Cost & Usage Reports.",
    ],
    correctAnswers: [3],
    explanation:
      "AWS Cost & Usage Reports provide the most detailed information available about your AWS costs and usage. [Reference](https://docs.aws.amazon.com/cur/latest/userguide/what-is-cur.html).",
  },
  {
    id: uuidv5("aws-question-17", uuidv5.URL),
    text: "What do you gain from setting up consolidated billing for five different AWS accounts under another master account?",
    options: [
      "AWS services’ costs will be reduced to half the original price.",
      "The consolidated billing feature is just for organizational purpose.",
      "Each AWS account gets volume discounts.",
      "Each AWS account gets five times the free-tier services capacity.",
    ],
    correctAnswers: [2],
    explanation:
      "Consolidated billing allows accounts to share volume discounts and reserved instance pricing across accounts. [Reference](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html).",
  },
  {
    id: uuidv5("aws-question-18", uuidv5.URL),
    text: "What should you do in order to keep the data on EBS volumes safe? (Choose TWO)",
    options: [
      "Regularly update firmware on EBS devices.",
      "Create EBS snapshots.",
      "Ensure that EBS data is encrypted at rest.",
      "Store a backup daily in an external drive.",
      "Prevent any unauthorized access to AWS data centers.",
    ],
    correctAnswers: [1, 2],
    explanation:
      "Creating snapshots provides backup, while encryption protects data at rest. AWS takes care of data center security. [Reference](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html).",
  },
  {
    id: uuidv5("aws-question-19", uuidv5.URL),
    text: "One of the most important AWS best-practices to follow is the cloud architecture principle of elasticity. How does this principle improve your architecture’s design?",
    options: [
      "By automatically scaling your on-premises resources based on changes in demand.",
      "By automatically scaling your AWS resources using an Elastic Load Balancer.",
      "By reducing interdependencies between application components wherever possible.",
      "By automatically provisioning the required AWS resources based on changes in demand.",
    ],
    correctAnswers: [3],
    explanation:
      "Elasticity allows you to automatically add or remove AWS resources based on demand to optimize costs and performance. [Reference](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/elasticity-and-scalability.html).",
  },
  {
    id: uuidv5("aws-question-20", uuidv5.URL),
    text: "A startup company is operating on limited funds and is extremely concerned about cost overruns. Which of the below options can be used to notify the company when their monthly AWS bill exceeds $2000? (Choose TWO)",
    options: [
      "Setup a CloudWatch billing alarm that triggers an SNS notification when the threshold is exceeded.",
      "Configure the Amazon Simple Email Service to send billing alerts to their email address on a daily basis.",
      "Configure the AWS Budgets Service to alert the company when the threshold is exceeded.",
      "Configure AWS CloudTrail to automatically delete all AWS resources when the threshold is exceeded.",
      "Configure the Amazon Connect Service to alert the company when the threshold is exceeded.",
    ],
    correctAnswers: [0, 2],
    explanation:
      "AWS Budgets and CloudWatch alarms can notify you when costs exceed thresholds. Other options are incorrect or not designed for cost alerts. [Reference](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-monitor.html).",
  },
  {
    id: uuidv5("aws-question-21", uuidv5.URL),
    text: "What does Amazon CloudFront use to distribute content to global users with low latency?",
    options: [
      "AWS Global Accelerator",
      "AWS Regions",
      "AWS Edge Locations",
      "AWS Availability Zones",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon CloudFront uses AWS Edge Locations to cache copies of content and deliver it to users with low latency. [Reference](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html).",
  },
  {
    id: uuidv5("aws-question-22", uuidv5.URL),
    text: "What does the 'Principle of Least Privilege' refer to?",
    options: [
      "You should grant your users only the permissions they need when they need them and nothing more.",
      "All IAM users should have at least the necessary permissions to access the core AWS services.",
      "All trusted IAM users should have access to any AWS service in the respective AWS account.",
      "IAM users should not be granted any permissions; to keep your account safe.",
    ],
    correctAnswers: [0],
    explanation:
      "The Principle of Least Privilege means granting only the necessary permissions to users for the tasks they need to perform. [Reference](https://aws.amazon.com/iam/).",
  },
  {
    id: uuidv5("aws-question-23", uuidv5.URL),
    text: "Which of the following does NOT belong to the AWS Cloud Computing models?",
    options: [
      "Platform as a Service (PaaS)",
      "Infrastructure as a Service (IaaS)",
      "Software as a Service (SaaS)",
      "Networking as a Service (NaaS)",
    ],
    correctAnswers: [3],
    explanation:
      "Networking as a Service (NaaS) is not part of the commonly recognized AWS Cloud Computing models. [Reference](https://aws.amazon.com/executive-insights/).",
  },
  {
    id: uuidv5("aws-question-24", uuidv5.URL),
    text: "The identification process of an online financial services company requires that new users must complete an online interview with their security team. The completed recorded interviews are only required in the event of a legal issue or a regulatory compliance breach. What is the most cost-effective service to store the recorded videos?",
    options: [
      "S3 Intelligent-Tiering",
      "AWS Marketplace",
      "Amazon S3 Glacier Deep Archive",
      "Amazon EBS",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon S3 Glacier Deep Archive is designed for long-term archival storage, making it the most cost-effective option for rarely accessed data. [Reference](https://aws.amazon.com/s3/storage-classes/).",
  },
  {
    id: uuidv5("aws-question-25", uuidv5.URL),
    text: "Which service provides DNS in the AWS cloud?",
    options: ["Route 53", "AWS Config", "Amazon CloudFront", "Amazon EMR"],
    correctAnswers: [0],
    explanation:
      "Amazon Route 53 provides DNS (Domain Name System) services in AWS, enabling routing of end users to applications. [Reference](https://aws.amazon.com/route53/).",
  },
  {
    id: uuidv5("aws-question-26", uuidv5.URL),
    text: "Hundreds of thousands of DDoS attacks are recorded every month worldwide. What service does AWS provide to help protect AWS Customers from these attacks? (Choose TWO)",
    options: [
      "AWS Shield",
      "AWS Config",
      "Amazon Cognito",
      "AWS WAF",
      "AWS KMS",
    ],
    correctAnswers: [0, 3],
    explanation:
      "AWS Shield and AWS WAF are designed to protect applications from DDoS attacks and other threats. [Reference](https://aws.amazon.com/shield/).",
  },
  {
    id: uuidv5("aws-question-27", uuidv5.URL),
    text: "A company is deploying a new two-tier web application in AWS. Where should the most frequently accessed data be stored so that the application’s response time is optimal?",
    options: [
      "AWS OpsWorks",
      "AWS Storage Gateway",
      "Amazon EBS volume",
      "Amazon ElastiCache",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon ElastiCache is a caching service designed to improve the performance of web applications by storing frequently accessed data in memory. [Reference](https://aws.amazon.com/elasticache/).",
  },
  {
    id: uuidv5("aws-question-28", uuidv5.URL),
    text: "You want to run a questionnaire application for only one day (without interruption), which Amazon EC2 purchase option should you use?",
    options: [
      "Reserved instances",
      "Spot instances",
      "Dedicated instances",
      "On-demand instances",
    ],
    correctAnswers: [3],
    explanation:
      "On-demand instances are ideal for short-term workloads, allowing you to pay for compute capacity without a long-term commitment. [Reference](https://aws.amazon.com/ec2/).",
  },
  {
    id: uuidv5("aws-question-29", uuidv5.URL),
    text: "You are working on a project that involves creating thumbnails of millions of images. Consistent uptime is not an issue, and continuous processing is not required. Which EC2 buying option would be the most cost-effective?",
    options: [
      "Reserved Instances",
      "On-demand Instances",
      "Dedicated Instances",
      "Spot Instances",
    ],
    correctAnswers: [3],
    explanation:
      "Spot instances allow you to take advantage of unused EC2 capacity at a lower cost, making them ideal for non-critical workloads. [Reference](https://aws.amazon.com/ec2/spot/).",
  },
  {
    id: uuidv5("aws-question-30", uuidv5.URL),
    text: "Which of the following can be described as a global content delivery network (CDN) service?",
    options: [
      "AWS VPN",
      "AWS Direct Connect",
      "AWS Regions",
      "Amazon CloudFront",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon CloudFront is a global content delivery network (CDN) that accelerates the delivery of web content to users worldwide. [Reference](https://aws.amazon.com/cloudfront/).",
  },
  {
    id: uuidv5("aws-question-31", uuidv5.URL),
    text: "Which of the following services allows customers to manage their agreements with AWS?",
    options: [
      "AWS Artifact",
      "AWS Certificate Manager",
      "AWS Systems Manager",
      "AWS Organizations",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Artifact allows customers to manage their agreements with AWS, providing access to compliance reports and agreements. [Reference](https://aws.amazon.com/artifact/).",
  },
  {
    id: uuidv5("aws-question-32", uuidv5.URL),
    text: "Which of the following are examples of AWS-Managed Services, where AWS is responsible for the operational and maintenance burdens of running the service? (Choose TWO)",
    options: [
      "Amazon VPC",
      "Amazon DynamoDB",
      "Amazon Elastic MapReduce",
      "AWS IAM",
      "Amazon Elastic Compute Cloud",
    ],
    correctAnswers: [1, 2],
    explanation:
      "Amazon DynamoDB and Amazon Elastic MapReduce are managed by AWS, meaning AWS handles much of the operational overhead, like patching and scaling. [Reference](https://aws.amazon.com/dynamodb/), [Reference](https://aws.amazon.com/emr/).",
  },
  {
    id: uuidv5("aws-question-33", uuidv5.URL),
    text: "Your company has a data store application that requires access to a NoSQL database. Which AWS database offering would meet this requirement?",
    options: [
      "Amazon Aurora",
      "Amazon DynamoDB",
      "Amazon Elastic Block Store",
      "Amazon Redshift",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon DynamoDB is a fully managed NoSQL database service that can scale to meet your application’s needs. [Reference](https://aws.amazon.com/dynamodb/).",
  },
  {
    id: uuidv5("aws-question-34", uuidv5.URL),
    text: "As part of the Enterprise support plan, who is the primary point of contact for ongoing support needs?",
    options: [
      "AWS Identity and Access Management (IAM) user",
      "Infrastructure Event Management (IEM) engineer",
      "AWS Consulting Partners",
      "Technical Account Manager (TAM)",
    ],
    correctAnswers: [3],
    explanation:
      "The Technical Account Manager (TAM) provides guidance and assistance with AWS resources for customers under the Enterprise support plan. [Reference](https://aws.amazon.com/premiumsupport/enterprise/).",
  },
  {
    id: uuidv5("aws-question-35", uuidv5.URL),
    text: "How can you view the distribution of AWS spending in one of your AWS accounts?",
    options: [
      "By using Amazon VPC console",
      "By contacting the AWS Support team",
      "By using AWS Cost Explorer",
      "By contacting the AWS Finance team",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Cost Explorer allows you to visualize and analyze your spending patterns across AWS services. [Reference](https://aws.amazon.com/aws-cost-management/aws-cost-explorer/).",
  },
  {
    id: uuidv5("aws-question-36", uuidv5.URL),
    text: "Which of the following must an IAM user provide to interact with AWS services using the AWS Command Line Interface (AWS CLI)?",
    options: [
      "Access keys",
      "Secret token",
      "UserID",
      "User name and password",
    ],
    correctAnswers: [0],
    explanation:
      "An IAM user must provide access keys to authenticate when using the AWS CLI. These consist of an access key ID and a secret access key. [Reference](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html).",
  },
  {
    id: uuidv5("aws-question-37", uuidv5.URL),
    text: "You have AWS Basic support, and you have discovered that some AWS resources are being used maliciously, and those resources could potentially compromise your data. What should you do?",
    options: [
      "Contact the AWS Customer Service team",
      "Contact the AWS Abuse team",
      "Contact the AWS Concierge team",
      "Contact the AWS Security team",
    ],
    correctAnswers: [1],
    explanation:
      "The AWS Abuse team handles incidents related to the misuse of AWS resources. [Reference](https://aws.amazon.com/abuse/).",
  },
  {
    id: uuidv5("aws-question-38", uuidv5.URL),
    text: "Select TWO examples of the AWS shared controls.",
    options: [
      "Patch Management",
      "IAM Management",
      "VPC Management",
      "Configuration Management",
      "Data Center operations",
    ],
    correctAnswers: [0, 3],
    explanation:
      "Patch management and configuration management are shared responsibilities between AWS and the customer. AWS handles patching for managed services, while customers manage patches for others. [Reference](https://aws.amazon.com/compliance/shared-responsibility-model/).",
  },
  {
    id: uuidv5("aws-question-39", uuidv5.URL),
    text: "In order to implement best practices when dealing with a “Single Point of Failure,” you should attempt to build as much automation as possible in both detecting and reacting to failure. Which of the following AWS services would help? (Choose TWO)",
    options: ["ELB", "Auto Scaling", "Amazon Athena", "ECR", "Amazon EC2"],
    correctAnswers: [0, 1],
    explanation:
      "Elastic Load Balancing (ELB) and Auto Scaling help distribute traffic and automatically replace unhealthy instances to ensure high availability. [Reference](https://aws.amazon.com/elasticloadbalancing/), [Reference](https://aws.amazon.com/autoscaling/).",
  },
  {
    id: uuidv5("aws-question-40", uuidv5.URL),
    text: "A company is planning to host an educational website on AWS. Their video courses will be streamed all around the world. Which of the following AWS services will help achieve high transfer speeds?",
    options: [
      "Amazon SNS",
      "Amazon Kinesis Video Streams",
      "AWS CloudFormation",
      "Amazon CloudFront",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon CloudFront is a global content delivery network (CDN) that caches content at edge locations worldwide to reduce latency and improve transfer speeds. [Reference](https://aws.amazon.com/cloudfront/).",
  },
  {
    id: uuidv5("aws-question-41", uuidv5.URL),
    text: "A developer is planning to build a two-tier web application that has a MySQL database layer. Which of the following AWS database services would provide automated backups for the application?",
    options: [
      "A. A MySQL database installed on an EC2 instance.",
      "B. Amazon Aurora.",
      "C. Amazon DynamoDB.",
      "D. Amazon Neptune.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon Aurora provides automated backups, point-in-time recovery, and replication. MySQL installed on EC2 does not provide built-in automated backups like Aurora does. [Reference](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Welcome.html)",
  },
  {
    id: uuidv5("aws-question-42", uuidv5.URL),
    text: "What is the AWS service that enables AWS architects to manage infrastructure as code?",
    options: [
      "A. AWS CloudFormation.",
      "B. AWS Config.",
      "C. Amazon SES.",
      "D. Amazon EMR.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS CloudFormation is used to define and provision infrastructure using code. It allows users to manage resources via templates. [Reference](https://aws.amazon.com/cloudformation/)",
  },
  {
    id: uuidv5("aws-question-43", uuidv5.URL),
    text: "Under the shared responsibility model, which of the following is the responsibility of AWS?",
    options: [
      "A. Client-side encryption.",
      "B. Configuring infrastructure devices.",
      "C. Server-side encryption.",
      "D. Filtering traffic with Security Groups.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS is responsible for server-side encryption, while customers manage client-side encryption, security groups, and configuring infrastructure. [Reference](https://aws.amazon.com/compliance/shared-responsibility-model/)",
  },
  {
    id: uuidv5("aws-question-44", uuidv5.URL),
    text: "What does the AWS Health Dashboard provide? (Choose TWO)",
    options: [
      "A. Detailed troubleshooting guidance to address AWS events impacting your resources.",
      "B. Health checks for Auto Scaling instances.",
      "C. Recommendations for Cost Optimization.",
      "D. A dashboard detailing vulnerabilities in your applications.",
      "E. Personalized view of AWS service health.",
    ],
    correctAnswers: [0, 4],
    explanation:
      "The AWS Health Dashboard provides a personalized view of AWS service health and troubleshooting guidance for impacted resources. [Reference](https://aws.amazon.com/premiumsupport/technology/aws-health/)",
  },
  {
    id: uuidv5("aws-question-45", uuidv5.URL),
    text: "You have deployed your application on multiple Amazon EC2 instances. Your customers complain that sometimes they can’t reach your application. Which AWS service allows you to monitor the performance of your EC2 instances to assist in troubleshooting these issues?",
    options: [
      "A. AWS Lambda.",
      "B. AWS Config.",
      "C. Amazon CloudWatch.",
      "D. AWS CloudTrail.",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon CloudWatch provides monitoring and observability of your EC2 instances, helping to troubleshoot and diagnose performance issues. [Reference](https://aws.amazon.com/cloudwatch/)",
  },
  {
    id: uuidv5("aws-question-46", uuidv5.URL),
    text: "Your company is developing a critical web application in AWS, and the security of the application is a top priority. Which of the following AWS services will provide infrastructure security optimization recommendations?",
    options: [
      "A. AWS Shield.",
      "B. AWS Management Console.",
      "C. AWS Secrets Manager.",
      "D. AWS Trusted Advisor.",
    ],
    correctAnswers: [3],
    explanation:
      "AWS Trusted Advisor provides best practice recommendations, including security optimization for your AWS resources. [Reference](https://aws.amazon.com/premiumsupport/technology/aws-trusted-advisor/)",
  },
  {
    id: uuidv5("aws-question-47", uuidv5.URL),
    text: "Which of the following is not a benefit of Amazon S3? (Choose TWO)",
    options: [
      "A. Amazon S3 provides unlimited storage for any type of data.",
      "B. Amazon S3 can run any type of application or backend system.",
      "C. Amazon S3 stores any number of objects, but with object size limits.",
      "D. Amazon S3 can be scaled manually to store and retrieve any amount of data from anywhere.",
      "E. Amazon S3 provides 99.999999999% (11 9’s) of data durability.",
    ],
    correctAnswers: [1, 3],
    explanation:
      "Amazon S3 provides object storage with virtually unlimited capacity, but it is not designed to run applications or backend systems. It is also a fully managed service, so it doesn't require manual scaling. [Reference](https://aws.amazon.com/s3/)",
  },
  {
    id: uuidv5("aws-question-48", uuidv5.URL),
    text: "In the AWS Shared responsibility Model, which of the following are the responsibility of the customer? (Choose TWO)",
    options: [
      "A. Disk disposal.",
      "B. Controlling physical access to compute resources.",
      "C. Patching the Network infrastructure.",
      "D. Setting password complexity rules.",
      "E. Configuring network access rules.",
    ],
    correctAnswers: [3, 4],
    explanation:
      "Customers are responsible for setting password policies, and configuring network access and firewall rules. AWS handles physical security and patching the infrastructure. [Reference](https://aws.amazon.com/compliance/shared-responsibility-model/)",
  },
  {
    id: uuidv5("aws-question-49", uuidv5.URL),
    text: "What does AWS provide to deploy popular technologies such as IBM MQ on AWS with the least amount of effort and time?",
    options: [
      "A. Amazon Aurora.",
      "B. Amazon CloudWatch.",
      "C. AWS Quick Start reference deployments.",
      "D. AWS OpsWorks.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Quick Start reference deployments provide automated solutions for deploying popular technologies like IBM MQ. [Reference](https://aws.amazon.com/quickstart/)",
  },
  {
    id: uuidv5("aws-question-50", uuidv5.URL),
    text: "An organization has decided to purchase an Amazon EC2 Reserved Instance (RI) for three years in order to reduce costs. It is possible that the application workloads could change during the reservation period. What is the EC2 Reserved Instance (RI) type that will allow the company to exchange the purchased reserved instance for another reserved instance with higher computing power if they need to?",
    options: [
      "A. Elastic RI.",
      "B. Premium RI.",
      "C. Standard RI.",
      "D. Convertible RI.",
    ],
    correctAnswers: [3],
    explanation:
      "Convertible Reserved Instances allow you to modify the instance type, family, and other parameters during the term, offering flexibility. [Reference](https://aws.amazon.com/ec2/pricing/reserved-instances/)",
  },
];

export const exam2: Question[] = [
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
      "AWS Organizations enables you to centrally manage billing, control access, compliance, and security across multiple AWS accounts. Trusted Advisor provides recommendations, IAM User Groups help manage user permissions within a single account, and AWS Config tracks resource configurations but doesn't provide centralized account management. Learn more: https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html",
  },
  {
    id: uuidv5("aws-question-52", uuidv5.URL),
    text: "Which service provides object-level storage in AWS?",
    options: ["Amazon EBS", "Amazon Instance Store", "Amazon EFS", "Amazon S3"],
    correctAnswers: [3],
    explanation:
      "Amazon S3 (Simple Storage Service) provides scalable object storage suitable for storing and retrieving any amount of data at any time. EBS is block storage, Instance Store is ephemeral storage, and EFS is a file storage service. Learn more: https://docs.aws.amazon.com/s3/index.html",
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
      "AWS Auto Scaling helps optimize costs by automatically adjusting the number of EC2 instances based on demand. ELB distributes traffic, Budgets monitors costs, and Cost Explorer provides usage insights, but none of these perform dynamic scaling. Learn more: https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html",
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
      "Amazon S3 Intelligent-Tiering automatically moves data between tiers based on access patterns, making it ideal for unpredictable usage. Glacier Flexible Retrieval is for archival, Standard is for frequent access, and Standard-IA is for infrequent access. Learn more: https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html",
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
      "Amazon DynamoDB is a NoSQL database that uses a key-value and document data model. Aurora and RDS are relational databases, and Redshift is for data warehousing. Learn more: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html",
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
      "There is no start-up fee for EC2 On-demand instances. They are charged based on usage, per second (for Linux), with no long-term commitments. The other statements are correct. Learn more: https://aws.amazon.com/ec2/pricing/on-demand/",
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
      "AWS Trusted Advisor checks for security best practices like IAM policies and S3 permissions. Amazon Inspector automatically assesses applications for vulnerabilities. SNS and CloudWatch are monitoring/notification tools, and the Concierge Support Team is not a technical auditing tool. Learn more: https://docs.aws.amazon.com/inspector/latest/user/getting-started.html and https://docs.aws.amazon.com/awssupport/latest/user/getting-started-with-support.html#trusted-advisor",
  },
  {
    id: uuidv5("aws-question-58", uuidv5.URL),
    text: "What is the AWS feature that provides an additional level of security above the default authentication mechanism of usernames and passwords?",
    options: ["Encrypted keys", "Email verification", "AWS KMS", "AWS MFA"],
    correctAnswers: [3],
    explanation:
      "AWS MFA (Multi-Factor Authentication) adds an extra layer of security by requiring a second factor (like a code from a device) beyond just username and password. KMS handles key management, not user authentication. Learn more: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa.html",
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
      "Infrastructure Event Management (IEM) is a feature of Enterprise Support that helps plan for large-scale events, offering architectural guidance. The Concierge Service helps with billing, the Health Dashboard tracks AWS service status, and Knowledge Center is self-service. Learn more: https://aws.amazon.com/premiumsupport/plans/",
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
      "Amazon RDS (Relational Database Service) automates common administrative tasks such as backups, patching, and replication, allowing DBAs to focus on performance and design. Redshift is for analytics, DynamoDB is NoSQL, and CloudWatch is for monitoring. Learn more: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html",
  },
  {
    id: uuidv5("aws-question-61", uuidv5.URL),
    text: "Which of the below is a best-practice when designing solutions on AWS?",
    options: [
      "Invest heavily in architecting your environment, as it is not easy to change your design later.",
      "Use AWS reservations to reduce costs when testing your production environment.",
      "Automate wherever possible to make architectural (© ) experimentation easier.",
      "Provision a large compute capacity to handle any spikes in load",
    ],
    correctAnswers: [2],
    explanation:
      "Automating architectural changes enables rapid experimentation, consistent deployments, and the ability to roll back easily. AWS promotes this best-practice to allow iterative development and innovation. The other options are either cost-inefficient or incorrect in the context of cloud-native design principles. https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html",
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
      "AWS allows customers to perform penetration testing on a select list of services, including EC2, without prior approval. However, it must be conducted responsibly and only on resources owned by the customer. The other options are either outdated or incorrect. https://aws.amazon.com/security/penetration-testing/",
  },
  {
    id: uuidv5("aws-question-63", uuidv5.URL),
    text: "Which service is used to ensure that messages between software components are not lost if one or more components fail?",
    options: [
      "Amazon SQS.",
      "Amazon SES.",
      "AWS Direct Connect.",
      "Amazon Connect.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon Simple Queue Service (SQS) enables decoupling of components and ensures reliable delivery of messages even if components fail. The other services are unrelated to message queuing or fault tolerance between software components. https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html",
  },
  {
    id: uuidv5("aws-question-64", uuidv5.URL),
    text: "The principle “design for failure and nothing will fail” is very important when designing your AWS Cloud architecture. Which of the following would help adhere to this principle? (Choose TWO)",
    options: [
      "Multi-factor authentication.",
      "Availability Zones.",
      "Elastic Load Balancing.",
      "Penetration testing.",
      "Vertical Scaling.",
    ],
    correctAnswers: [1, 2],
    explanation:
      "Designing for failure involves distributing applications across multiple Availability Zones and using Elastic Load Balancing to route traffic and handle failures. MFA and penetration testing relate to security, and vertical scaling limits fault tolerance. https://docs.aws.amazon.com/whitepapers/latest/reliability-pillar/design-principles.html",
  },
  {
    id: uuidv5("aws-question-65", uuidv5.URL),
    text: "What is the AWS service that provides a virtual network dedicated to your AWS account?",
    options: [
      "AWS VPN.",
      "AWS Subnets.",
      "AWS Dedicated Hosts.",
      "Amazon VPC.",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon Virtual Private Cloud (VPC) provides a logically isolated network for launching AWS resources. Subnets are part of VPC, not a standalone service. The other options are not used to define a full virtual network. https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html",
  },
  {
    id: uuidv5("aws-question-66", uuidv5.URL),
    text: "According to the AWS Shared responsibility model, which of the following are the responsibility of the customer? (Choose TWO)",
    options: [
      "Managing environmental events of AWS data centers.",
      "Protecting the confidentiality of data in transit in Amazon S3.",
      "Controlling physical access to AWS Regions.",
      "Ensuring that the underlying EC2 host is configured properly.",
      "Patching applications installed on Amazon EC2.",
    ],
    correctAnswers: [1, 4],
    explanation:
      "Customers are responsible for securing their data, managing identities, and maintaining their application-level configurations, such as patching EC2-hosted apps and securing data in transit. AWS handles physical infrastructure and host configuration. https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-67", uuidv5.URL),
    text: "Which of the following AWS services can be used as a compute resource? (Choose TWO)",
    options: [
      "Amazon VPC.",
      "Amazon CloudWatch.",
      "Amazon S3.",
      "Amazon EC2.",
      "AWS Lambda.",
    ],
    correctAnswers: [3, 4],
    explanation:
      "Amazon EC2 provides virtual machines, and AWS Lambda provides serverless compute capabilities. The other services are not compute resources: S3 is storage, VPC is networking, and CloudWatch is monitoring. https://aws.amazon.com/compute/",
  },
  {
    id: uuidv5("aws-question-68", uuidv5.URL),
    text: "Your company is designing a new application that will store and retrieve photos and videos. Which of the following services should you recommend as the underlying storage mechanism?",
    options: [
      "Amazon EBS.",
      "Amazon SQS.",
      "Amazon S3.",
      "Amazon Instance store.",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon S3 is highly durable, scalable, and designed to store objects such as photos and videos. EBS and Instance Store are block-level and tied to EC2, while SQS is for message queuing. https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html",
  },
  {
    id: uuidv5("aws-question-69", uuidv5.URL),
    text: "Which of the following is equivalent to a user name and password and is used to authenticate your programmatic access to AWS services and APIs?",
    options: ["Instance Password.", "Key pairs.", "Access Keys.", "MFA."],
    correctAnswers: [2],
    explanation:
      "Access Keys consist of an access key ID and a secret access key and are used to sign API requests. Key pairs are for EC2 instance SSH access, MFA adds extra security, and 'Instance Password' is not an AWS term. https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html",
  },
  {
    id: uuidv5("aws-question-70", uuidv5.URL),
    text: "What does Amazon ElastiCache provide?",
    options: [
      "In-memory caching for read-heavy applications.",
      "An Ehcache compatible in-memory data store.",
      "An online software store that allows Customers to launch pre-configured software with just few clicks.",
      "A domain name system in the cloud.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon ElastiCache is a fully managed in-memory data store, typically used to accelerate applications with read-heavy workloads by reducing database load. The other options describe different services like AWS Marketplace or Route 53. https://docs.aws.amazon.com/elasticache/latest/mem-ug/WhatIs.html",
  },
  {
    id: uuidv5("aws-question-71", uuidv5.URL),
    text: "What is the AWS service that enables you to manage all of your AWS accounts from a single master account?",
    options: [
      "AWS WAF.",
      "AWS Trusted Advisor.",
      "AWS Organizations.",
      "Amazon Config.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Organizations allows you to consolidate and manage multiple AWS accounts under a single master (management) account. It supports centralized billing, access control, and policy-based account management. https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html",
  },
  {
    id: uuidv5("aws-question-72", uuidv5.URL),
    text: "Which of the following EC2 instance purchasing options supports the Bring Your Own License (BYOL) model for almost every BYOL scenario?",
    options: [
      "Dedicated Instances.",
      "Dedicated Hosts.",
      "On-demand Instances.",
      "Reserved Instances.",
    ],
    correctAnswers: [1],
    explanation:
      "Dedicated Hosts provide physical servers fully dedicated to your use, enabling the Bring Your Own License (BYOL) model for software that is licensed per physical host. Other options do not offer the same level of control over the hardware. https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-overview.html",
  },
  {
    id: uuidv5("aws-question-73", uuidv5.URL),
    text: "Which of the following is one of the benefits of moving infrastructure from an on-premises data center to AWS?",
    options: [
      "Free support for all enterprise customers.",
      "Automatic data protection.",
      "Reduced Capital Expenditure (CapEx).",
      "AWS holds responsibility for managing customer applications.",
    ],
    correctAnswers: [2],
    explanation:
      "One major benefit of moving to the cloud is converting Capital Expenditure (CapEx) to Operational Expenditure (OpEx). You pay only for what you use, eliminating the need for large upfront investments in infrastructure. https://aws.amazon.com/blogs/aws/cloud-economics-center/",
  },
  {
    id: uuidv5("aws-question-74", uuidv5.URL),
    text: "Which of the following are important design principles you should adopt when designing systems on AWS? (Choose TWO)",
    options: [
      "Always use Global Services in your architecture rather than Regional Services.",
      "Always choose to pay as you go.",
      "Treat servers as fixed resources.",
      "Automate wherever possible.",
      "Remove single points of failure.",
    ],
    correctAnswers: [3, 4],
    explanation:
      "Automating processes and removing single points of failure are both key AWS architectural principles. These practices improve system reliability, availability, and scalability. https://docs.aws.amazon.com/wellarchitected/latest/framework/general-design-principles.html",
  },
  {
    id: uuidv5("aws-question-75", uuidv5.URL),
    text: "Which AWS Service can be used to establish a dedicated, private network connection between AWS and your datacenter?",
    options: [
      "AWS Direct Connect.",
      "Amazon CloudFront.",
      "AWS Snowball.",
      "Amazon Route 53.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Direct Connect establishes a dedicated network connection from your on-premises data center to AWS, reducing network costs and increasing bandwidth throughput. https://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html",
  },
  {
    id: uuidv5("aws-question-76", uuidv5.URL),
    text: "You are working on two projects that require completely different network configurations. Which AWS service or feature will allow you to isolate resources and network configurations?",
    options: [
      "Internet gateways.",
      "Virtual Private Cloud.",
      "Security Groups.",
      "Amazon CloudFront.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon VPC allows you to create logically isolated virtual networks with different configurations. Each VPC can have its own subnets, route tables, and security settings. https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html",
  },
  {
    id: uuidv5("aws-question-77", uuidv5.URL),
    text: "Which of the following services can help protect your web applications from SQL injection and other vulnerabilities in your application code?",
    options: ["Amazon Cognito.", "AWS IAM.", "Amazon Aurora.", "AWS WAF."],
    correctAnswers: [3],
    explanation:
      "AWS WAF (Web Application Firewall) helps protect your web applications by filtering malicious web traffic and blocking attacks such as SQL injection and cross-site scripting. https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html",
  },
  {
    id: uuidv5("aws-question-78", uuidv5.URL),
    text: "An organization needs to analyze and process a large number of data sets. Which AWS service should they use?",
    options: ["Amazon EMR.", "Amazon MQ.", "Amazon SNS.", "Amazon SQS."],
    correctAnswers: [0],
    explanation:
      "Amazon EMR (Elastic MapReduce) is used to process vast amounts of data using distributed frameworks like Apache Spark and Hadoop, making it ideal for big data analytics. https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-what-is-emr.html",
  },
  {
    id: uuidv5("aws-question-79", uuidv5.URL),
    text: "Based on the AWS Shared Responsibility Model, which of the following are the sole responsibility of AWS? (Choose TWO)",
    options: [
      "Monitoring network performance.",
      "Installing software on EC2 instances.",
      "Creating hypervisors.",
      "Configuring Access Control Lists (ACLs).",
      "Hardware maintenance.",
    ],
    correctAnswers: [2, 4],
    explanation:
      "AWS is responsible for the security 'of' the cloud, including physical infrastructure, hardware, and the hypervisor. Customers are responsible for managing their own configurations and software. https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-80", uuidv5.URL),
    text: "What is the AWS service that provides you the highest level of control over the underlying virtual infrastructure?",
    options: [
      "Amazon Redshift.",
      "Amazon DynamoDB.",
      "Amazon EC2.",
      "Amazon RDS.",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon EC2 offers the highest level of control over the operating system, network, and installed software compared to other managed services like RDS or DynamoDB. https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html",
  },
  {
    id: uuidv5("aws-question-81", uuidv5.URL),
    text: "What are the default security credentials that are required to access the AWS management console for an IAM user account?",
    options: [
      "MFA.",
      "Security tokens.",
      "A user name and password.",
      "Access keys.",
    ],
    correctAnswers: [2],
    explanation:
      "IAM users access the AWS Management Console using a username and password. MFA and access keys are optional and used for enhanced security or programmatic access, respectively. https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_sign-in.html",
  },
  {
    id: uuidv5("aws-question-82", uuidv5.URL),
    text: "In your on-premises environment, you can create as many virtual servers as you need from a single template. What can you use to perform the same in AWS?",
    options: ["IAM.", "An internet gateway.", "EBS Snapshot.", "AMI."],
    correctAnswers: [3],
    explanation:
      "Amazon Machine Images (AMIs) allow you to create virtual servers (EC2 instances) based on a preconfigured template, similar to cloning templates in traditional environments. https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html",
  },
  {
    id: uuidv5("aws-question-83", uuidv5.URL),
    text: "What are two advantages of using Cloud Computing over using traditional data centers? (Choose TWO)",
    options: [
      "Reserved Compute capacity.",
      "Eliminating Single Points of Failure (SPOFs).",
      "Distributed infrastructure.",
      "Virtualized compute resources.",
      "Dedicated hosting.",
    ],
    correctAnswers: [1, 2],
    explanation:
      "Cloud computing provides a distributed infrastructure and the ability to design systems that eliminate single points of failure through redundancy and high availability. https://aws.amazon.com/what-is-cloud-computing/",
  },
  {
    id: uuidv5("aws-question-84", uuidv5.URL),
    text: "Which of the following aspects of security are managed by AWS? (Choose TWO)",
    options: [
      "Encryption of EBS volumes.",
      "VPC security.",
      "Access permissions.",
      "Hardware patching.",
      "Securing global physical infrastructure.",
    ],
    correctAnswers: [3, 4],
    explanation:
      "Under the Shared Responsibility Model, AWS is responsible for the security of the cloud, which includes physical infrastructure and hardware maintenance. https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-85", uuidv5.URL),
    text: "Which statement best describes the operational excellence pillar of the AWS Well-Architected Framework?",
    options: [
      "The ability of a system to recover gracefully from failure.",
      "The efficient use of computing resources to meet requirements.",
      "The ability to monitor systems and improve supporting processes and procedures.",
      "The ability to manage datacenter operations more efficiently.",
    ],
    correctAnswers: [2],
    explanation:
      "The operational excellence pillar emphasizes monitoring systems, automating changes, and continuously improving processes. https://docs.aws.amazon.com/wellarchitected/latest/framework/operational-excellence-pillar.html",
  },
  {
    id: uuidv5("aws-question-86", uuidv5.URL),
    text: "AWS has created a large number of Edge Locations as part of its Global Infrastructure. Which of the following is NOT a benefit of using Edge Locations?",
    options: [
      "Edge locations are used by CloudFront to cache the most recent responses.",
      "Edge locations are used by CloudFront to improve your end users’ experience when uploading files.",
      "Edge locations are used by CloudFront to distribute traffic across multiple instances to reduce latency.",
      "Edge locations are used by CloudFront to distribute content to global users with low latency.",
    ],
    correctAnswers: [2],
    explanation:
      "Edge locations are primarily used to cache content and reduce latency. They are not responsible for distributing traffic across multiple instances; that is typically managed by load balancers. https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html",
  },
  {
    id: uuidv5("aws-question-87", uuidv5.URL),
    text: "What are the change management tools that helps AWS customers audit and monitor all resource changes in their AWS environment? (Choose TWO)",
    options: [
      "AWS CloudTrail.",
      "Amazon Comprehend.",
      "AWS Transit Gateway.",
      "AWS X-Ray.",
      "AWS Config.",
    ],
    correctAnswers: [0, 4],
    explanation:
      "AWS CloudTrail records API activity, while AWS Config tracks configuration changes and compliance over time, both essential for change management. https://docs.aws.amazon.com/cloudtrail/latest/userguide/cloudtrail-user-guide.html | https://docs.aws.amazon.com/config/latest/developerguide/WhatIsConfig.html",
  },
  {
    id: uuidv5("aws-question-88", uuidv5.URL),
    text: "Which of the following services allows you to run containerized applications on a cluster of EC2 instances?",
    options: [
      "Amazon ECS.",
      "AWS Data Pipeline.",
      "AWS Cloud9.",
      "AWS Personal Health Dashboard.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon ECS (Elastic Container Service) is designed to run and scale containerized applications on AWS infrastructure, including EC2 instances. https://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html",
  },
  {
    id: uuidv5("aws-question-89", uuidv5.URL),
    text: "Which of the following services will help businesses ensure compliance in AWS?",
    options: [
      "CloudFront.",
      "CloudEndure Migration.",
      "CloudWatch.",
      "CloudTrail.",
    ],
    correctAnswers: [3],
    explanation:
      "AWS CloudTrail helps with governance, compliance, and auditing by recording API calls and actions taken on your account resources. https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html",
  },
  {
    id: uuidv5("aws-question-90", uuidv5.URL),
    text: "Which of the following procedures will help reduce your Amazon S3 costs?",
    options: [
      "Use the Import/Export feature to move old files automatically to Amazon Glacier.",
      "Use the right combination of storage classes based on different use cases.",
      "Pick the right Availability Zone for your S3 bucket.",
      "Move all the data stored in S3 standard to EBS.",
    ],
    correctAnswers: [1],
    explanation:
      "Using various S3 storage classes like S3 Standard, S3 Infrequent Access, and S3 Glacier helps optimize cost depending on access patterns and data retrieval needs. https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html",
  },
  {
    id: uuidv5("aws-question-91", uuidv5.URL),
    text: "What are the AWS services/features that can help you maintain a highly available and fault-tolerant architecture in AWS? (Choose TWO)",
    options: [
      "AWS Direct Connect.",
      "Amazon EC2 Auto Scaling.",
      "Elastic Load Balancer.",
      "CloudFormation.",
      "Network ACLs.",
    ],
    correctAnswers: [1, 2],
    explanation:
      "Amazon EC2 Auto Scaling ensures enough instances are running to handle application load, and Elastic Load Balancer distributes incoming traffic across instances to improve fault tolerance. https://docs.aws.amazon.com/architecture/high-availability.html",
  },
  {
    id: uuidv5("aws-question-92", uuidv5.URL),
    text: "Which of the following activities may help reduce your AWS monthly costs?",
    options: [
      "Enabling Amazon EC2 Auto Scaling for all of your workloads.",
      "Using the AWS Network Load Balancer (NLB) to load balance the incoming HTTP requests.",
      "Removing all of your Cost Allocation Tags.",
      "Deploying your AWS resources across multiple Availability Zones.",
    ],
    correctAnswers: [0],
    explanation:
      "EC2 Auto Scaling can automatically adjust capacity to maintain performance at the lowest possible cost, helping reduce monthly expenses. https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html",
  },
  {
    id: uuidv5("aws-question-93", uuidv5.URL),
    text: "What is the AWS service/feature that takes advantage of Amazon CloudFront’s globally distributed edge locations to transfer files to S3 with higher upload speeds?",
    options: [
      "S3 Transfer Acceleration.",
      "AWS WAF.",
      "AWS Snowmobile.",
      "AWS Snowball.",
    ],
    correctAnswers: [0],
    explanation:
      "S3 Transfer Acceleration uses CloudFront edge locations to accelerate uploads to S3 over long distances. https://docs.aws.amazon.com/AmazonS3/latest/userguide/transfer-acceleration.html",
  },
  {
    id: uuidv5("aws-question-94", uuidv5.URL),
    text: "Which of the following AWS security features is associated with an EC2 instance and functions to filter incoming traffic requests?",
    options: [
      "AWS X-Ray.",
      "Network ACL.",
      "Security Groups.",
      "VPC Flow logs.",
    ],
    correctAnswers: [2],
    explanation:
      "Security Groups act as virtual firewalls for EC2 instances and control inbound and outbound traffic. https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html",
  },
  {
    id: uuidv5("aws-question-95", uuidv5.URL),
    text: "Which AWS services can be used to improve the performance of a global application and reduce latency for its users? (Choose TWO)",
    options: [
      "AWS KMS.",
      "AWS Global accelerator.",
      "AWS Direct Connect.",
      "AWS Glue.",
      "Amazon CloudFront.",
    ],
    correctAnswers: [1, 4],
    explanation:
      "AWS Global Accelerator and Amazon CloudFront help improve availability and reduce latency by routing traffic to optimal endpoints and caching content close to users. https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html",
  },
  {
    id: uuidv5("aws-question-96", uuidv5.URL),
    text: "Using Amazon RDS falls under the shared responsibility model. Which of the following are customer responsibilities? (Choose TWO)",
    options: [
      "Building the relational database schema.",
      "Performing backups.",
      "Managing the database settings.",
      "Patching the database software.",
      "Installing the database software.",
    ],
    correctAnswers: [0, 2],
    explanation:
      "Customers are responsible for the data, schema, and settings within Amazon RDS. AWS handles backups and software patching. https://docs.aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-97", uuidv5.URL),
    text: "A company has a large amount of structured data stored in their on-premises data center. They are planning to migrate all the data to AWS, what is the most appropriate AWS database option?",
    options: [
      "Amazon DynamoDB.",
      "Amazon SNS.",
      "Amazon RDS.",
      "Amazon ElastiCache.",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon RDS is a managed relational database service suitable for structured data, supporting popular engines like MySQL, PostgreSQL, and SQL Server. https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html",
  },
  {
    id: uuidv5("aws-question-98", uuidv5.URL),
    text: "A company has created a solution that helps AWS customers improve their architectures on AWS. Which AWS program may support this company?",
    options: [
      "APN Consulting Partners.",
      "AWS TAM.",
      "APN Technology Partners.",
      "AWS Professional Services.",
    ],
    correctAnswers: [0],
    explanation:
      "APN Consulting Partners help customers design, architect, and migrate workloads to AWS. https://aws.amazon.com/partners/",
  },
  {
    id: uuidv5("aws-question-99", uuidv5.URL),
    text: "What is the AWS serverless service that allows you to run your applications without any administrative burden?",
    options: [
      "Amazon LightSail.",
      "AWS Lambda.",
      "Amazon RDS instances.",
      "Amazon EC2 instances.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Lambda lets you run code without provisioning or managing servers, making it a fully serverless compute service. https://docs.aws.amazon.com/lambda/latest/dg/welcome.html",
  },
  {
    id: uuidv5("aws-question-100", uuidv5.URL),
    text: "Jessica is managing an e-commerce web application in AWS. The application is hosted on six EC2 instances. One day, three of the instances crashed; but none of her customers were affected. What has Jessica done correctly in this scenario?",
    options: [
      "She has properly built an elastic system.",
      "She has properly built a fault tolerant system.",
      "She has properly built an encrypted system.",
      "She has properly built a scalable system.",
    ],
    correctAnswers: [1],
    explanation:
      "Jessica has built a fault-tolerant system that can continue operating even when some components fail, ensuring user experience is unaffected. https://docs.aws.amazon.com/whitepapers/latest/aws-overview/fault-tolerance.html",
  },
];

export const exam3: Question[] = [
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
    explanation: `- **Amazon EFS** is a cloud file system that provides scalable storage, making it suitable for storing files.
- **Amazon EBS** offers block-level storage volumes that can be formatted and used like virtual disks on EC2 instances; in other words, it supports persistent data storage.
- **Amazon SNS** is a messaging/notification service, not designed for file storage.
- **Amazon ECS** is a container orchestration service and does not provide file storage by itself.
- **Amazon EMR** is a big data processing platform and is not used directly for storing files.
Therefore, only EFS and EBS are persistent data storage services in AWS.`,
  },
  {
    id: uuidv5("aws-question-102", uuidv5.URL),
    text: "Which AWS service can be used to store and reliably deliver messages across distributed systems?",
    options: [
      "Amazon Simple Queue Service",
      "AWS Storage Gateway",
      "Amazon Simple Email Service",
      "Amazon Simple Storage Service",
      "Ninguno de los anteriores",
    ],
    correctAnswers: [0],
    explanation: `- **Amazon Simple Queue Service (SQS)** is a fully managed message queuing service that allows you to decouple distributed systems and ensure reliable message delivery. You can send, store, and receive messages between software components without data loss.
- **AWS Storage Gateway** connects on-premises environments with cloud storage but is not a messaging service.
- **Amazon Simple Email Service (SES)** is for sending email, not for message delivery between applications.
- **Amazon S3** is object storage and not a message queue.
Thus, the correct answer is **A (Amazon SQS)**.`,
  },
  {
    id: uuidv5("aws-question-103", uuidv5.URL),
    text: "Which of the following describes the payment model that AWS makes available for customers that can commit to using Amazon EC2 over a one or 3-year term to reduce their total computing costs?",
    options: [
      "Pay less as AWS grows",
      "Pay as you go",
      "Pay less by using more",
      "Save when you reserve",
      "Ninguno de los anteriores",
    ],
    correctAnswers: [3],
    explanation: `The only option that involves a 1- or 3-year commitment is **“Save when you reserve”**, referring to Reserved Instances. By reserving instances for a long term, you get significant discounts on the cost. The other options don't describe this model: “Pay as you go” refers to on-demand pricing, and “Pay less by using more” or “Pay less as AWS grows” do not apply to Reserved Instances. Thus, **D** is the correct answer.`,
  },
  {
    id: uuidv5("aws-question-104", uuidv5.URL),
    text: "A company is migrating its on-premises database to Amazon RDS. What should the company do to ensure Amazon RDS costs are kept to a minimum?",
    options: [
      "Right-size before and after migration",
      "Use a Multi-Region Active-Passive architecture",
      "Combine On-demand Capacity Reservations with Saving Plans",
      "Use a Multi-Region Active-Active architecture",
      "Ninguno de los anteriores",
    ],
    correctAnswers: [0],
    explanation: `To minimize Amazon RDS costs, the best practice is to right-size resources based on the actual workload. AWS recommends shutting down unused instances and avoiding over-provisioning. The other options increase costs unnecessarily: replicating resources across regions adds replication expenses, and combining Capacity Reservations with Savings Plans is not optimal for this scenario. Thus, **A** is the correct answer.`,
  },
  {
    id: uuidv5("aws-question-105", uuidv5.URL),
    text: "What is the primary storage service used by Amazon RDS database instances?",
    options: [
      "Amazon Glacier",
      "Amazon EBS",
      "Amazon EFS",
      "Amazon S3",
      "Ninguno de los anteriores",
    ],
    correctAnswers: [1],
    explanation: `According to AWS documentation, Amazon RDS database instances use **Amazon EBS** volumes for storing data and logs. Amazon Glacier is for long-term archiving, Amazon EFS is a Linux file system (not used by RDS), and Amazon S3 is object storage—not primary storage for RDS. Therefore, the correct answer is **B (Amazon EBS)**.`,
  },
  {
    id: uuidv5("aws-question-106", uuidv5.URL),
    text: "A company is developing a new application using a microservices framework. The new application is having performance and latency issues. Which AWS Service should be used to troubleshoot these issues?",
    options: [
      "AWS CodePipeline",
      "AWS X-Ray",
      "Amazon Inspector",
      "AWS CloudTrail",
      "Ninguno de los anteriores",
    ],
    correctAnswers: [1],
    explanation: `**AWS X-Ray** is designed to analyze and debug distributed applications (e.g., microservices architectures), helping to identify and resolve performance bottlenecks. The other options are not suited for this case: CodePipeline is for CI/CD, Amazon Inspector is for security assessments, and CloudTrail logs API events but doesn’t analyze performance. Therefore, **B (AWS X-Ray)** is the correct answer.`,
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
    explanation: `**Amazon S3** and **DynamoDB** are designed with Multi-AZ fault tolerance by default. S3 redundantly stores objects across at least three Availability Zones, and DynamoDB automatically replicates data across multiple Availability Zones in a Region for high availability. The other services are not designed with native Multi-AZ capabilities: Redshift does not replicate data across AZs by default, AWS Snowball is a physical device, and EBS is tied to a single AZ. Thus, the correct answers are **C (Amazon S3)** and **E (Amazon DynamoDB)**.`,
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
    explanation: `Amazon RDS improves availability using **Multi-AZ deployments** and **Read Replicas**. A Multi-AZ deployment creates a synchronous standby replica in another AZ for automatic failover. **Read Replicas** are read-only copies that can serve traffic if the primary instance fails. The other options do not enhance availability: Regions are for geographic distribution, patching doesn’t guarantee availability, and Edge Locations are used with CloudFront (not RDS). Thus, **B** and **D** are correct.`,
  },
  {
    id: uuidv5("aws-question-109", uuidv5.URL),
    text: "Sarah has deployed an application in the Northern California (us-west-1) region. After examining the application’s traffic, she notices that about 30% of the traffic is coming from Asia. What can she do to reduce latency for the users in Asia?",
    options: [
      "Replicate the current resources across multiple Availability Zones within the same region",
      "Migrate the application to a hosting provider in Asia",
      "Recreate the website content",
      "Create a CDN using CloudFront, so that content is cached at Edge Locations close to and in Asia",
      "Ninguno de los anteriores",
    ],
    correctAnswers: [3],
    explanation: `To reduce latency for users in Asia, the best option is to use **Amazon CloudFront** (CDN). CloudFront caches content at global edge locations, serving user requests from the nearest edge server. This significantly reduces latency. Other options are ineffective: replicating within the same region doesn’t reduce geographic latency, migrating to another provider is unnecessary, and recreating the website content is not a viable solution. Therefore, **D** is correct.`,
  },
  {
    id: uuidv5("aws-question-110", uuidv5.URL),
    text: "An organization runs many systems and uses many AWS products. Which of the following services enables them to control how each developer interacts with these products?",
    options: [
      "AWS Identity and Access Management",
      "Amazon RDS",
      "Network Access Control Lists",
      "Amazon EMR",
      "Ninguno de los anteriores",
    ],
    correctAnswers: [0],
    explanation: `**AWS IAM (Identity and Access Management)** allows organizations to securely control who can access what resources and perform what actions in AWS. IAM enables creating users, groups, and policies that define permissions per developer. The other options don’t handle access control: Amazon RDS is a database service, NACLs control network traffic, and EMR is for data processing. Therefore, **A** is the correct answer.`,
  },
  {
    id: uuidv5("aws-question-111", uuidv5.URL),
    text: "Using Amazon EC2 falls under which of the following cloud computing models?",
    options: ["Iaas & SaaS.", "IaaS.", "SaaS.", "PaaS."],
    correctAnswers: [1],
    explanation:
      "Amazon EC2 provides virtual servers, which is a typical example of Infrastructure as a Service (IaaS). Users manage the operating system, applications, and data, while AWS manages the underlying infrastructure. SaaS and PaaS involve different levels of abstraction and managed services. Option A is incorrect because EC2 is IaaS, not SaaS. Options C and D are incorrect because EC2 does not abstract the OS or runtime environment as SaaS or PaaS does. Learn more: https://docs.aws.amazon.com/whitepapers/latest/aws-overview/aws-overview.pdf",
  },
  {
    id: uuidv5("aws-question-112", uuidv5.URL),
    text: "Which of the below is a best-practice when building applications on AWS?",
    options: [
      "Strengthen physical security by applying the principle of least privilege.",
      "Ensure that the application runs on hardware from trusted vendors.",
      "Use IAM policies to maintain performance.",
      "Decouple the components of the application so that they run independently.",
    ],
    correctAnswers: [3],
    explanation:
      "A best practice in cloud-native architectures is to decouple application components so they can operate independently, improving scalability, resilience, and manageability. Option A is misleading because the principle of least privilege relates to IAM, not physical security. Option B is irrelevant because AWS handles hardware trust. Option C is incorrect because IAM policies govern permissions, not application performance. Learn more: https://docs.aws.amazon.com/wellarchitected/latest/framework/general-design-principles.html",
  },
  {
    id: uuidv5("aws-question-113", uuidv5.URL),
    text: "Your company is designing a new application that will store and retrieve photos and videos. Which of the following services should you recommend as the underlying storage mechanism?",
    options: [
      "Amazon EBS.",
      "Amazon SQS.",
      "Amazon Instance store.",
      "Amazon S3.",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon S3 is an object storage service ideal for storing and retrieving large amounts of unstructured data such as photos and videos. Amazon EBS is block storage and more suitable for operating systems and low-latency access. Amazon SQS is a messaging service, not storage. Amazon Instance Store is ephemeral and data is lost if the instance stops. Learn more: https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html",
  },
  {
    id: uuidv5("aws-question-114", uuidv5.URL),
    text: "Amazon Glacier is an Amazon S3 storage class that is suitable for storing [...] & [...]. (Choose TWO)",
    options: [
      "Active archives.",
      "Dynamic websites’ assets.",
      "Long-term analytic data.",
      "Active databases.",
      "Cached data.",
    ],
    correctAnswers: [0, 2],
    explanation:
      "Amazon S3 Glacier is designed for infrequently accessed data that requires long-term storage, such as active archives and long-term analytics. It is not appropriate for frequently accessed data like website assets, databases, or cached data. Learn more: https://docs.aws.amazon.com/amazonglacier/latest/dev/introduction.html",
  },
  {
    id: uuidv5("aws-question-115", uuidv5.URL),
    text: "What does Amazon Elastic Beanstalk provide?",
    options: [
      "A PaaS solution to automate application deployment.",
      "A compute engine for Amazon ECS.",
      "A scalable file storage solution for use with AWS and on-premises servers.",
      "A NoSQL database service.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon Elastic Beanstalk is a Platform as a Service (PaaS) that allows quick deployment of applications without managing infrastructure. Option B refers to ECS, not Beanstalk. Option C refers to Amazon FSx or Storage Gateway. Option D refers to DynamoDB. Learn more: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html",
  },
  {
    id: uuidv5("aws-question-116", uuidv5.URL),
    text: "What is the AWS service that performs automated network assessments of Amazon EC2 instances to check for vulnerabilities?",
    options: [
      "Amazon Kinesis.",
      "Security groups.",
      "Amazon Inspector.",
      "AWS Network Access Control Lists.",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon Inspector automatically assesses applications for vulnerabilities and deviations from best practices, particularly on EC2 instances. Kinesis is for data streaming. Security groups and NACLs are security mechanisms but do not perform vulnerability assessments. Learn more: https://docs.aws.amazon.com/inspector/latest/user/what-is-inspector.html",
  },
  {
    id: uuidv5("aws-question-117", uuidv5.URL),
    text: "Under the Shared Responsibility Model, which of the following controls do customers fully inherit from AWS? (Choose TWO)",
    options: [
      "Patch management controls.",
      "Database controls.",
      "Awareness & Training.",
      "Environmental controls.",
      "Physical controls.",
    ],
    correctAnswers: [3, 4],
    explanation:
      "Customers inherit AWS responsibilities for environmental and physical controls since AWS manages the infrastructure. Customers are responsible for patching, training, and managing their data and applications. Learn more: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-118", uuidv5.URL),
    text: "A company needs to host a database in Amazon RDS for at least three years. Which of the following options would be the most cost-effective solution?",
    options: [
      "Reserved instances - No Upfront.",
      "Reserved instances - Partial Upfront.",
      "On-Demand instances.",
      "Spot Instances.",
    ],
    correctAnswers: [1],
    explanation:
      "Reserved Instances with Partial Upfront payment offer a balance between cost savings and lower initial investment, making them cost-effective over long-term usage. No upfront has slightly higher total cost. On-Demand and Spot Instances are more expensive for long-term consistent workloads. Learn more: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/reserved-instances-types.html",
  },
  {
    id: uuidv5("aws-question-119", uuidv5.URL),
    text: "Your application has recently experienced significant global growth, and international users are complaining of high latency. What is the AWS characteristic that can help improve your international users’ experience?",
    options: [
      "Elasticity.",
      "Global reach.",
      "Data durability.",
      "High availability.",
    ],
    correctAnswers: [1],
    explanation:
      "Global reach allows AWS users to deploy applications in multiple geographic locations to reduce latency for international users. Elasticity and high availability are important but not directly related to latency. Data durability ensures data preservation but doesn't affect latency. Learn more: https://docs.aws.amazon.com/whitepapers/latest/aws-overview/global-infrastructure.html",
  },
  {
    id: uuidv5("aws-question-120", uuidv5.URL),
    text: "Savings Plans are available for which of the following AWS compute services? (Choose TWO)",
    options: [
      "AWS Batch.",
      "AWS Outposts.",
      "Amazon Lightsail.",
      "Amazon EC2.",
      "AWS Lambda.",
    ],
    correctAnswers: [3, 4],
    explanation:
      "Savings Plans apply to Amazon EC2 and AWS Lambda, providing flexible pricing based on usage commitment. AWS Batch, Outposts, and Lightsail are not eligible for Savings Plans. Learn more: https://docs.aws.amazon.com/savingsplans/latest/userguide/what-is-savings-plans.html",
  },
  {
    id: uuidv5("aws-question-121", uuidv5.URL),
    text: "A company has business critical workloads hosted on AWS and they are unwilling to accept any downtime. Which of the following is a recommended best practice to protect their workloads in the event of an unexpected natural disaster?",
    options: [
      "Replicate data across multiple Edge Locations worldwide and use Amazon CloudFront to perform automatic failover in the event of an outage.",
      "Deploy AWS resources across multiple Availability Zones within the same AWS Region.",
      "Create point-in-time backups in another subnet and recover this data when a disaster occurs.",
      "Deploy AWS resources to another AWS Region and implement an Active-Active disaster recovery strategy.",
    ],
    correctAnswers: [3],
    explanation:
      "An Active-Active disaster recovery strategy across AWS Regions ensures that workloads remain operational even in the event of a regional failure or disaster. This approach minimizes downtime and allows seamless failover. Edge Locations and CloudFront are for content delivery, not full workload failover. Backups and single-region deployments provide limited protection. Learn more: https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-workloads-on-aws.html",
  },
  {
    id: uuidv5("aws-question-122", uuidv5.URL),
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
      "Many AWS service limits are soft limits that can be increased by submitting a support request. AWS Trusted Advisor can alert users when they approach service limits. Limits are typically account-based, not tied to IAM users. AWS does have service limits, and SES does not monitor usage limits. Learn more: https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html",
  },
  {
    id: uuidv5("aws-question-123", uuidv5.URL),
    text: "What is the AWS tool that enables you to use scripts to manage all AWS services and resources?",
    options: [
      "AWS Console.",
      "AWS Service Catalog.",
      "AWS OpsWorks.",
      "AWS CLI.",
    ],
    correctAnswers: [3],
    explanation:
      "The AWS Command Line Interface (CLI) allows users to script and automate the management of AWS resources and services. The AWS Console is a GUI. OpsWorks is a configuration management service, and Service Catalog is used for managing approved IT services. Learn more: https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html",
  },
  {
    id: uuidv5("aws-question-124", uuidv5.URL),
    text: "What are the connectivity options that can be used to build hybrid cloud architectures? (Choose TWO)",
    options: [
      "AWS Artifact.",
      "AWS Cloud9.",
      "AWS Direct Connect.",
      "AWS CloudTrail.",
      "AWS VPN.",
    ],
    correctAnswers: [2, 4],
    explanation:
      "AWS Direct Connect and AWS VPN are both used to establish secure connections between on-premises data centers and AWS, enabling hybrid architectures. AWS Artifact provides compliance reports, Cloud9 is an IDE, and CloudTrail monitors API calls. Learn more: https://docs.aws.amazon.com/whitepapers/latest/hybrid-cloud-architecture/hybrid-cloud-architecture.html",
  },
  {
    id: uuidv5("aws-question-125", uuidv5.URL),
    text: "A company has deployed a new web application on multiple Amazon EC2 instances. Which of the following should they use to ensure that the incoming HTTP traffic is distributed evenly across the instances?",
    options: [
      "AWS EC2 Auto Recovery.",
      "AWS Auto Scaling.",
      "AWS Network Load Balancer.",
      "AWS Application Load Balancer.",
    ],
    correctAnswers: [3],
    explanation:
      "An Application Load Balancer (ALB) is designed to distribute HTTP and HTTPS traffic across multiple EC2 instances. Auto Scaling helps manage instance count but doesn't handle request distribution. Network Load Balancer is used for TCP/UDP traffic. EC2 Auto Recovery handles health but not traffic routing. Learn more: https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html",
  },
  {
    id: uuidv5("aws-question-126", uuidv5.URL),
    text: "Which of the following AWS offerings is a MySQL-compatible relational database service that can scale capacity automatically based on demand?",
    options: [
      "Amazon Neptune.",
      "Amazon Aurora.",
      "Amazon RDS for SQL Server.",
      "Amazon RDS for PostgreSQL.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon Aurora is a MySQL-compatible relational database service that offers high performance and automatic scaling. Neptune is a graph database. RDS for SQL Server and PostgreSQL do not have the same level of automatic scalability. Learn more: https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html",
  },
  {
    id: uuidv5("aws-question-127", uuidv5.URL),
    text: "Which of the following can help protect your EC2 instances from DDoS attacks? (Choose TWO)",
    options: [
      "AWS CloudHSM.",
      "Security Groups.",
      "AWS Batch.",
      "AWS IAM.",
      "Network Access Control Lists (Network ACLs).",
    ],
    correctAnswers: [1, 4],
    explanation:
      "Security Groups and Network ACLs can help protect EC2 instances by controlling inbound and outbound traffic. IAM is for access management, CloudHSM is for cryptographic operations, and AWS Batch is for batch processing workloads. Learn more: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html",
  },
  {
    id: uuidv5("aws-question-128", uuidv5.URL),
    text: "What is the AWS data warehouse service that supports a high level of query performance on large amounts of datasets?",
    options: [
      "Amazon Redshift.",
      "Amazon Kinesis.",
      "Amazon DynamoDB.",
      "Amazon RDS.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon Redshift is a fully managed, petabyte-scale data warehouse service optimized for complex queries across large datasets. Kinesis is for real-time data streaming, DynamoDB is a NoSQL database, and RDS is for OLTP databases. Learn more: https://docs.aws.amazon.com/redshift/latest/mgmt/welcome.html",
  },
  {
    id: uuidv5("aws-question-129", uuidv5.URL),
    text: "Which of the following should be considered when performing a TCO analysis to compare the costs of running an application on AWS instead of on-premises?",
    options: [
      "Application development.",
      "Market research.",
      "Business analysis.",
      "Physical hardware.",
    ],
    correctAnswers: [3],
    explanation:
      "Physical hardware costs, including servers, storage, and networking, are major components in a Total Cost of Ownership (TCO) analysis when comparing AWS with on-premises infrastructure. Other options are more related to business planning or development, not infrastructure cost comparison. Learn more: https://aws.amazon.com/tco-calculator/",
  },
  {
    id: uuidv5("aws-question-130", uuidv5.URL),
    text: "How are AWS customers billed for Linux-based Amazon EC2 usage?",
    options: [
      "EC2 instances will be billed on one second increments, with a minimum of one minute.",
      "EC2 instances will be billed on one hour increments, with a minimum of one day.",
      "EC2 instances will be billed on one minute increments, with a minimum of one hour.",
      "EC2 instances will be billed on one day increments, with a minimum of one month.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS bills Linux-based On-Demand and Reserved EC2 instances in one-second increments, with a minimum of 60 seconds. This pricing model provides greater cost efficiency for short-lived workloads. Other billing models with longer minimums were phased out. Learn more: https://aws.amazon.com/blogs/aws/new-per-second-billing-for-ec2-instances-and-ebs-volumes/",
  },
  {
    id: uuidv5("aws-question-131", uuidv5.URL),
    text: "Which of the following will impact the price paid for an EC2 instance? (Choose TWO)",
    options: [
      "Instance type.",
      "The Availability Zone where the instance is provisioned.",
      "Load balancing.",
      "Number of buckets.",
      "Number of private IPs.",
    ],
    correctAnswers: [0, 1],
    explanation:
      "The price of an EC2 instance depends on the instance type (e.g., t3.micro, m5.large), as different types offer varying CPU, memory, and storage configurations, which directly affect cost. Additionally, the Availability Zone (AZ) can influence price due to potential differences in regional pricing or spot capacity.\n\nIncorrect options:\n- Load balancing (C) is a separate service (e.g., ELB) with its own cost, not part of EC2 instance pricing.\n- Number of buckets (D) refers to S3 and has no relation to EC2 pricing.\n- Number of private IPs (E) is not charged separately unless Elastic IPs are involved.\n\nReference: https://aws.amazon.com/ec2/pricing/",
  },
  {
    id: uuidv5("aws-question-132", uuidv5.URL),
    text: "A customer spent a lot of time configuring a newly deployed Amazon EC2 instance. After the workload increases, the customer decides to provision another EC2 instance with an identical configuration. How can the customer achieve this?",
    options: [
      "By creating an AWS Config template from the old instance and launching a new instance from it.",
      "By creating an EBS Snapshot of the old instance.",
      "By installing Aurora on EC2 and launching a new instance from it.",
      "By creating an AMI from the old instance and launching a new instance from it.",
    ],
    correctAnswers: [3],
    explanation:
      "Creating an Amazon Machine Image (AMI) from the configured instance allows launching additional EC2 instances with the exact same software and configuration.\n\nIncorrect options:\n- AWS Config (A) tracks configuration changes but doesn’t create launchable templates.\n- EBS Snapshots (B) are used for volume backups, not full instance replication.\n- Aurora (C) is a managed database service, unrelated to EC2 cloning.\n\nReference: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/creating-an-ami.html",
  },
  {
    id: uuidv5("aws-question-133", uuidv5.URL),
    text: "A company uses AWS Organizations to manage all of its AWS accounts. Which of the following allows the company to restrict what services and actions are allowed in each individual account?",
    options: [
      "IAM Principals.",
      "AWS Service Control Policies (SCPs).",
      "IAM policies.",
      "AWS Fargate.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Service Control Policies (SCPs) define the maximum permissions for accounts in an organization. They are used to restrict services and actions even if IAM permissions allow them.\n\nIncorrect options:\n- IAM Principals (A) refer to users, roles, etc., not restriction mechanisms.\n- IAM Policies (C) are account-specific and don’t apply across AWS Organizations.\n- AWS Fargate (D) is a serverless compute engine, unrelated to access control.\n\nReference: https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html",
  },
  {
    id: uuidv5("aws-question-134", uuidv5.URL),
    text: "Which of the following statements describes the AWS Cloud’s agility?",
    options: [
      "AWS allows you to host your applications in multiple regions around the world.",
      "AWS provides customizable hardware at the lowest possible cost.",
      "AWS allows you to provision resources in minutes.",
      "AWS allows you to pay upfront to reduce costs.",
    ],
    correctAnswers: [2],
    explanation:
      "Agility in AWS refers to the rapid provisioning of resources within minutes, which accelerates innovation and reduces deployment time.\n\nIncorrect options:\n- (A) is about global reach, not agility.\n- (B) is incorrect; AWS doesn’t offer fully customizable hardware.\n- (D) relates to pricing strategy, not agility.\n\nReference: https://docs.aws.amazon.com/whitepapers/latest/aws-overview/cloud-computing-benefits.html",
  },
  {
    id: uuidv5("aws-question-135", uuidv5.URL),
    text: "What are the benefits of using the Amazon Relational Database Service? (Choose TWO)",
    options: [
      "Lower administrative burden.",
      "Complete control over the underlying host.",
      "Resizable compute capacity.",
      "Scales automatically to larger or smaller instance types.",
      "Supports the document and key-value data structure.",
    ],
    correctAnswers: [0, 2],
    explanation:
      "Amazon RDS handles routine tasks like backups, patching, and replication, reducing operational overhead. It also allows resizable compute/storage to match workload changes.\n\nIncorrect options:\n- (B) is false; RDS is a managed service and does not provide host-level access.\n- (D) is not fully automatic scaling; you must trigger changes manually or via automation.\n- (E) describes Amazon DynamoDB, not RDS.\n\nReference: https://aws.amazon.com/rds/features/",
  },
  {
    id: uuidv5("aws-question-136", uuidv5.URL),
    text: "What is the connectivity option that uses Internet Protocol Security (IPSec) to establish encrypted connectivity between an on-premises network and the AWS Cloud?",
    options: [
      "Internet Gateway.",
      "AWS IQ.",
      "AWS Direct Connect.",
      "AWS Site-to-Site VPN.",
    ],
    correctAnswers: [3],
    explanation:
      "AWS Site-to-Site VPN establishes encrypted tunnels using IPSec between your data center and AWS VPC over the internet.\n\nIncorrect options:\n- (A) is used for outbound internet access from a VPC.\n- (B) is a platform for hiring AWS experts, not for networking.\n- (C) provides private connectivity, not IPSec encryption.\n\nReference: https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html",
  },
  {
    id: uuidv5("aws-question-137", uuidv5.URL),
    text: "What is the minimum level of AWS support that provides 24x7 access to technical support engineers via phone and chat?",
    options: [
      "Enterprise Support.",
      "Developer Support.",
      "Basic Support.",
      "Business Support.",
    ],
    correctAnswers: [3],
    explanation:
      "AWS Business Support offers 24x7 access to Cloud Support Engineers via phone, chat, and email. It's the minimum plan that includes this feature.\n\nIncorrect options:\n- (A) also offers 24x7 support but is a higher-tier plan.\n- (B) includes only business-hours support.\n- (C) provides access to documentation and forums but no live technical support.\n\nReference: https://aws.amazon.com/premiumsupport/plans/",
  },
  {
    id: uuidv5("aws-question-138", uuidv5.URL),
    text: "Which of the following is used to control network traffic in AWS? (Choose TWO)",
    options: [
      "Network Access Control Lists (NACLs).",
      "Key Pairs.",
      "Access Keys.",
      "IAM Policies.",
      "Security Groups.",
    ],
    correctAnswers: [0, 4],
    explanation:
      "Security Groups act as instance-level firewalls, while NACLs work at the subnet level to control inbound and outbound traffic.\n\nIncorrect options:\n- (B) Key Pairs are for SSH authentication.\n- (C) Access Keys are for programmatic access.\n- (D) IAM Policies control access to AWS resources, not traffic flow.\n\nReference: https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Security.html",
  },
  {
    id: uuidv5("aws-question-139", uuidv5.URL),
    text: "A company has developed a media transcoding application in AWS. The application is designed to recover quickly from hardware failures. Which one of the following types of instance would be the most cost-effective choice to use?",
    options: [
      "Reserved instances.",
      "Spot Instances.",
      "On-Demand instances.",
      "Dedicated instances.",
    ],
    correctAnswers: [1],
    explanation:
      "Spot Instances provide the lowest cost for EC2 compute, ideal for stateless or fault-tolerant workloads like media transcoding.\n\nIncorrect options:\n- (A) Reserved Instances are more cost-effective for steady-state usage, not fault-tolerant jobs.\n- (C) On-Demand Instances are flexible but more expensive.\n- (D) Dedicated Instances are used for compliance, not cost-saving.\n\nReference: https://aws.amazon.com/ec2/spot/",
  },
  {
    id: uuidv5("aws-question-140", uuidv5.URL),
    text: "Which AWS Service provides the current status of all AWS Services in all AWS Regions?",
    options: [
      "AWS Service Health Dashboard.",
      "AWS Management Console.",
      "Amazon CloudWatch.",
      "AWS Personal Health Dashboard.",
    ],
    correctAnswers: [0],
    explanation:
      "The AWS Service Health Dashboard shows real-time and historical data on AWS service availability across all regions.\n\nIncorrect options:\n- (B) is the general UI for AWS services.\n- (C) monitors metrics for user resources, not AWS global health.\n- (D) shows health data specific to your account.\n\nReference: https://health.aws.amazon.com/",
  },
  {
    id: uuidv5("aws-question-141", uuidv5.URL),
    text: "Which AWS service or feature can be used to call AWS Services from different programming languages?",
    options: [
      "AWS Software Development Kit.",
      "AWS Command Line Interface.",
      "AWS CodeDeploy.",
      "AWS Management Console.",
    ],
    correctAnswers: [0],
    explanation:
      "The AWS SDK (Software Development Kit) enables developers to interact with AWS services using popular programming languages such as Python, Java, JavaScript, and more. It provides APIs and libraries that simplify coding against AWS services. Other tools like CLI and Console are used for command-line access or manual management but are not programmatic SDKs.\n\nReference: https://docs.aws.amazon.com/sdkref/latest/guide/overview.html",
  },
  {
    id: uuidv5("aws-question-142", uuidv5.URL),
    text: "Which AWS Service can be used to register a new domain name?",
    options: [
      "Amazon Personalize.",
      "Amazon Route 53.",
      "AWS KMS.",
      "AWS Config.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon Route 53 is a scalable Domain Name System (DNS) web service that also provides domain registration capabilities. Users can register new domain names directly through Route 53.\n\nReference: https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-register.html",
  },
  {
    id: uuidv5("aws-question-143", uuidv5.URL),
    text: "App development companies move their business to AWS to reduce time-to-market and improve customer satisfaction, what are the AWS automation tools that help them deploy their applications faster? (Choose TWO)",
    options: [
      "AWS CloudFormation.",
      "AWS Migration Hub.",
      "AWS IAM.",
      "AWS Elastic Beanstalk.",
      "Amazon Macie.",
    ],
    correctAnswers: [0, 3],
    explanation:
      "AWS CloudFormation automates infrastructure provisioning using templates, while AWS Elastic Beanstalk automates the deployment of applications. Both reduce manual setup and accelerate application rollout. IAM and Macie are for access control and data security respectively, not deployment automation.\n\nReference: https://docs.aws.amazon.com/cloudformation/index.html\nhttps://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html",
  },
  {
    id: uuidv5("aws-question-144", uuidv5.URL),
    text: "Which AWS service provides cost-optimization recommendations?",
    options: [
      "AWS Trusted Advisor.",
      "AWS Pricing Calculator.",
      "Amazon QuickSight.",
      "AWS X-Ray.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Trusted Advisor analyzes AWS accounts and provides recommendations for cost optimization, security, performance, fault tolerance, and service limits. Pricing Calculator is for estimating future costs, not providing optimization advice.\n\nReference: https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html",
  },
  {
    id: uuidv5("aws-question-145", uuidv5.URL),
    text: "A company has hundreds of VPCs in multiple AWS Regions worldwide. What service does AWS offer to simplify the connection management among the VPCs?",
    options: [
      "VPC Peering.",
      "AWS Transit Gateway.",
      "Amazon Connect.",
      "Security Groups.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Transit Gateway enables customers to connect multiple VPCs and on-premises networks through a central hub, reducing complexity. VPC Peering requires many individual connections and doesn’t scale well. Amazon Connect is for customer engagement.\n\nReference: https://docs.aws.amazon.com/vpc/latest/tgw/what-is-transit-gateway.html",
  },
  {
    id: uuidv5("aws-question-146", uuidv5.URL),
    text: "What is one benefit and one drawback of buying a reserved EC2 instance? (Select TWO)",
    options: [
      "Instances can be shut down by AWS at any time with no notification.",
      "Reserved instances require at least a one-year pricing commitment.",
      "There is no additional charge for using dedicated instances.",
      "Reserved instances provide a significant discount compared to on-demand instances.",
      "Reserved instances are best suited for periodic workloads.",
    ],
    correctAnswers: [1, 3],
    explanation:
      "Reserved Instances offer cost savings over time but require a one- or three-year commitment. They are ideal for steady-state workloads, not periodic or unpredictable ones. They are not subject to termination like Spot Instances.\n\nReference: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-reserved-instances.html",
  },
  {
    id: uuidv5("aws-question-147", uuidv5.URL),
    text: "Why does every AWS Region contain multiple Availability Zones?",
    options: [
      "Multiple Availability Zones allows you to build resilient and highly available architectures.",
      "Multiple Availability Zones results in lower total cost compared to deploying in a single Availability Zone.",
      "Multiple Availability Zones allows for data replication and global reach.",
      "Multiple Availability Zones within a region increases the storage capacity available in that region.",
    ],
    correctAnswers: [0],
    explanation:
      "Availability Zones are physically separate locations within a region. Deploying across multiple AZs enhances application availability and resilience against failures, which is critical for fault-tolerant design.\n\nReference: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html",
  },
  {
    id: uuidv5("aws-question-148", uuidv5.URL),
    text: "What is the most cost-effective purchasing option for running a set of EC2 instances that must always be available for a period of two months?",
    options: [
      "On-Demand Instances.",
      "Spot Instances.",
      "Reserved Instances - All Upfront.",
      "Reserved Instances - No Upfront.",
    ],
    correctAnswers: [0],
    explanation:
      "On-Demand Instances are the most flexible for short-term workloads such as a two-month duration. Reserved Instances require a one-year minimum commitment, and Spot Instances can be interrupted, making them unsuitable for workloads that must always be available.\n\nReference: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-pricing.html",
  },
  {
    id: uuidv5("aws-question-149", uuidv5.URL),
    text: "Which of the following is a benefit of running an application in multiple Availability Zones?",
    options: [
      "Allows you to exceed AWS service limits.",
      "Reduces application response time between servers and global users.",
      "Increases available compute capacity.",
      "Increases the availability of your application.",
    ],
    correctAnswers: [3],
    explanation:
      "Running applications in multiple Availability Zones increases their availability and fault tolerance. If one AZ fails, traffic can be redirected to another, ensuring minimal downtime.\n\nReference: https://aws.amazon.com/about-aws/global-infrastructure/regions_az/",
  },
  {
    id: uuidv5("aws-question-150", uuidv5.URL),
    text: "Data security is one of the top priorities of AWS. How does AWS deal with old storage devices that have reached the end of their useful life?",
    options: [
      "AWS sells the old devices to other hosting providers.",
      "AWS destroys the old devices in accordance with industry-standard practices.",
      "AWS sends the old devices for remanufacturing.",
      "AWS stores the old devices in a secure place.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS follows strict security protocols and destroys old storage devices using industry-standard techniques to ensure data cannot be recovered. This is part of their shared responsibility model and compliance programs.\n\nReference: https://aws.amazon.com/compliance/data-center/data-centers/",
  },
];

const exam4: Question[] = [
  {
    id: uuidv5("aws-question-151", uuidv5.URL),
    text: "Which AWS service or feature can be used to call AWS Services from different programming languages?",
    options: [
      "AWS Software Development Kit.",
      "AWS Command Line Interface.",
      "AWS CodeDeploy.",
      "AWS Management Console.",
    ],
    correctAnswers: [0],
    explanation:
      "The AWS Software Development Kit (SDK) allows developers to interact with AWS services using various programming languages like Python, Java, JavaScript, and more. This enables seamless integration of AWS services into custom applications. The other options are tools for deployment (CodeDeploy), interactive management (Console), or command-line usage (CLI), but they are not language SDKs.\n\nMore info: https://docs.aws.amazon.com/sdkref/latest/guide/what-is.html",
  },
  {
    id: uuidv5("aws-question-152", uuidv5.URL),
    text: "Which AWS Service can be used to register a new domain name?",
    options: [
      "Amazon Personalize.",
      "Amazon Route 53.",
      "AWS KMS.",
      "AWS Config.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon Route 53 is a scalable Domain Name System (DNS) web service that includes domain registration capabilities. You can register new domain names directly through it. The other services relate to personalization, key management, or resource configuration, and do not offer domain registration features.\n\nMore info: https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-register.html",
  },
  {
    id: uuidv5("aws-question-153", uuidv5.URL),
    text: "App development companies move their business to AWS to reduce time-to-market and improve customer satisfaction. What are the AWS automation tools that help them deploy their applications faster? (Choose TWO)",
    options: [
      "AWS CloudFormation.",
      "AWS Migration Hub.",
      "AWS IAM.",
      "AWS Elastic Beanstalk.",
      "Amazon Macie.",
    ],
    correctAnswers: [0, 3],
    explanation:
      "AWS CloudFormation allows you to model and provision AWS resources via templates, while AWS Elastic Beanstalk simplifies application deployment and scaling. These automation tools accelerate development workflows. The other options focus on migration tracking (Migration Hub), access control (IAM), or data security (Macie), and are not directly related to deployment speed.\n\nMore info:\n- CloudFormation: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html\n- Elastic Beanstalk: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html",
  },
  {
    id: uuidv5("aws-question-154", uuidv5.URL),
    text: "Which AWS service provides cost-optimization recommendations?",
    options: [
      "AWS Trusted Advisor.",
      "AWS Pricing Calculator.",
      "Amazon QuickSight.",
      "AWS X-Ray.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Trusted Advisor analyzes your AWS environment and provides recommendations for cost optimization, performance, and security. While Pricing Calculator helps estimate future costs, it does not monitor or provide active recommendations. QuickSight is for data visualization, and X-Ray is for debugging.\n\nMore info: https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html",
  },
  {
    id: uuidv5("aws-question-155", uuidv5.URL),
    text: "A company has hundreds of VPCs in multiple AWS Regions worldwide. What service does AWS offer to simplify the connection management among the VPCs?",
    options: [
      "VPC Peering.",
      "AWS Transit Gateway.",
      "Amazon Connect.",
      "Security Groups.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Transit Gateway enables you to connect thousands of VPCs and on-premises networks through a single gateway, simplifying complex network topologies. VPC Peering supports limited, point-to-point connections. Amazon Connect is for customer service, and Security Groups are used for traffic control.\n\nMore info: https://docs.aws.amazon.com/vpc/latest/tgw/what-is-transit-gateway.html",
  },
  {
    id: uuidv5("aws-question-156", uuidv5.URL),
    text: "What is one benefit and one drawback of buying a reserved EC2 instance? (Select TWO)",
    options: [
      "Instances can be shut down by AWS at any time with no notification.",
      "Reserved instances require at least a one-year pricing commitment.",
      "There is no additional charge for using dedicated instances.",
      "Reserved instances provide a significant discount compared to on-demand instances.",
      "Reserved instances are best suited for periodic workloads.",
    ],
    correctAnswers: [1, 3],
    explanation:
      "Reserved Instances require a commitment of at least one year but offer significant savings over On-Demand pricing. This is suitable for steady-state usage. They are not ideal for short-term or unpredictable workloads. The other statements either confuse pricing models or apply to different EC2 types like Spot or Dedicated.\n\nMore info: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/reserved-instances.html",
  },
  {
    id: uuidv5("aws-question-157", uuidv5.URL),
    text: "Why does every AWS Region contain multiple Availability Zones?",
    options: [
      "Multiple Availability Zones allows you to build resilient and highly available architectures.",
      "Multiple Availability Zones results in lower total cost compared to deploying in a single Availability Zone.",
      "Multiple Availability Zones allows for data replication and global reach.",
      "Multiple Availability Zones within a region increases the storage capacity available in that region.",
    ],
    correctAnswers: [0],
    explanation:
      "The primary reason AWS Regions contain multiple Availability Zones (AZs) is to enable high availability and fault-tolerant architectures. AZs are isolated from each other to minimize failure impact. While other answers touch on partial truths, they are not the core design purpose.\n\nMore info: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html",
  },
  {
    id: uuidv5("aws-question-158", uuidv5.URL),
    text: "What is the most cost-effective purchasing option for running a set of EC2 instances that must always be available for a period of two months?",
    options: [
      "On-Demand Instances.",
      "Spot Instances.",
      "Reserved Instances - All Upfront.",
      "Reserved Instances - No Upfront.",
    ],
    correctAnswers: [0],
    explanation:
      "For a short-term need like two months, On-Demand Instances are the most cost-effective choice. Reserved Instances require a minimum one-year commitment, and Spot Instances can be interrupted by AWS, making them unsuitable for always-on workloads.\n\nMore info: https://aws.amazon.com/ec2/pricing/",
  },
  {
    id: uuidv5("aws-question-159", uuidv5.URL),
    text: "Which of the following is a benefit of running an application in multiple Availability Zones?",
    options: [
      "Allows you to exceed AWS service limits.",
      "Reduces application response time between servers and global users.",
      "Increases available compute capacity.",
      "Increases the availability of your application.",
    ],
    correctAnswers: [3],
    explanation:
      "Running in multiple Availability Zones increases application availability and resilience to failure. If one AZ goes down, your application can continue operating in another. The other options either don’t relate to AZs or are incorrect assumptions.\n\nMore info: https://docs.aws.amazon.com/whitepapers/latest/aws-overview/reliability-and-high-availability.html",
  },
  {
    id: uuidv5("aws-question-160", uuidv5.URL),
    text: "Data security is one of the top priorities of AWS. How does AWS deal with old storage devices that have reached the end of their useful life?",
    options: [
      "AWS sells the old devices to other hosting providers.",
      "AWS destroys the old devices in accordance with industry-standard practices.",
      "AWS sends the old devices for remanufacturing.",
      "AWS stores the old devices in a secure place.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS physically destroys decommissioned storage devices in accordance with industry-standard practices to prevent data leakage. This is part of their shared responsibility model and compliance with data security regulations. The other options would pose data security risks.\n\nMore info: https://aws.amazon.com/compliance/data-center/data-centers/",
  },
  {
    id: uuidv5("aws-question-161", uuidv5.URL),
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
      "AWS-managed services abstract much of the infrastructure and operational overhead, allowing customers to deploy solutions faster and with less complexity. These services handle tasks such as patching, scaling, and availability, which accelerates delivery and reduces the operational burden. The incorrect options either describe customer responsibilities (e.g., patching, control over infrastructure) or make incorrect assumptions (like eliminating encryption needs, which is still a shared responsibility).",
  },
  {
    id: uuidv5("aws-question-162", uuidv5.URL),
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
      "Amazon S3 is ideal for hosting static websites and serving media content for distribution through Amazon CloudFront. It's a highly durable, scalable object storage. While it can store logs and data, it is not a replacement for a traditional database. High CPU utilization and stream processing are not suitable for S3 — services like EC2 or Kinesis are more appropriate in those cases.",
  },
  {
    id: uuidv5("aws-question-163", uuidv5.URL),
    text: "What is the AWS’ recommendation regarding access keys?",
    options: [
      "Delete all access keys and use passwords instead.",
      "Only share them with trusted people.",
      "Rotate them regularly.",
      "Save them within your application code.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS recommends rotating access keys regularly to reduce the risk of compromised credentials. Storing access keys in application code or sharing them is insecure and violates AWS security best practices. Passwords are only for console access, not for programmatic use, so they are not a substitute for access keys.",
  },
  {
    id: uuidv5("aws-question-164", uuidv5.URL),
    text: "What is the AWS IAM feature that provides an additional layer of security on top of user-name and password authentication?",
    options: ["Key Pair.", "Access Keys.", "SDK.", "MFA."],
    correctAnswers: [3],
    explanation:
      "Multi-Factor Authentication (MFA) adds an extra layer of security by requiring a second form of verification beyond the username and password. The other options serve different purposes: Key Pairs are for EC2 instance access, Access Keys are for API calls, and SDKs are programming tools.",
  },
  {
    id: uuidv5("aws-question-165", uuidv5.URL),
    text: "What is the benefit of using an API to access AWS Services?",
    options: [
      "It improves the performance of AWS resources.",
      "It reduces the time needed to provision AWS resources.",
      "It reduces the number of developers necessary.",
      "It allows for programmatic management of AWS resources.",
    ],
    correctAnswers: [3],
    explanation:
      "APIs allow developers and systems to interact with AWS services programmatically, which is key for automation and integration. While APIs may contribute indirectly to faster provisioning, their primary benefit is automation and control — not performance or reducing team size.",
  },
  {
    id: uuidv5("aws-question-166", uuidv5.URL),
    text: "A company is planning to migrate a database with high read/write activity to AWS. What is the best storage option to use?",
    options: [
      "AWS Storage Gateway.",
      "Amazon S3.",
      "Amazon EBS.",
      "Amazon Glacier.",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon EBS (Elastic Block Store) is the ideal choice for high-performance block storage, supporting intensive read/write operations. S3 and Glacier are object storage services designed for different use cases (archive and large-scale storage). AWS Storage Gateway is for hybrid environments, not high-throughput databases.",
  },
  {
    id: uuidv5("aws-question-167", uuidv5.URL),
    text: "How can AWS customers track and avoid over-spending on underutilized reserved instances?",
    options: [
      "Customers can add all AWS accounts to an AWS Organization, enable Consolidated Billing, and turn off Reserved Instance sharing.",
      "Customers can use Amazon Neptune to track and analyze their usage patterns, detect underutilized reserved instances, and then sell them on the Amazon EC2 Reserved Instance Marketplace.",
      "Customers can use the AWS Budgets service to track the reserved instances usage and set up alert notifications when their utilization drops below the threshold that they define.",
      "Customers can use Amazon CloudTrail to automatically check for unused reservations and get recommendations to reduce their bill.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Budgets allows customers to track usage and costs, including Reserved Instance utilization. It can alert users when usage drops below a defined threshold. The other services (Neptune, CloudTrail, and Organizations) serve different purposes and are not intended for monitoring cost-efficiency of reserved instances.",
  },
  {
    id: uuidv5("aws-question-168", uuidv5.URL),
    text: "What is the AWS service that provides five times the performance of a standard MySQL database?",
    options: [
      "Amazon Aurora.",
      "Amazon Redshift.",
      "Amazon DynamoDB.",
      "Amazon Neptune.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon Aurora is a relational database service compatible with MySQL and PostgreSQL, offering performance up to five times better than standard MySQL. Redshift is for data warehousing, DynamoDB is a NoSQL service, and Neptune is a graph database — none of which serve as drop-in replacements for MySQL workloads.",
  },
  {
    id: uuidv5("aws-question-169", uuidv5.URL),
    text: "What does AWS Service Catalog provide?",
    options: [
      "It enables customers to quickly find descriptions and use cases for AWS services.",
      "It enables customers to explore the different catalogs of AWS services.",
      "It simplifies organizing and governing commonly deployed IT services.",
      "It allows developers to deploy infrastructure on AWS using familiar programming languages.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Service Catalog allows organizations to manage approved IT service catalogs, ensuring governance and compliance. It's not a discovery or exploration tool — that role is better served by the AWS Console or documentation. It also doesn’t focus on infrastructure as code, which is the domain of CloudFormation or CDK.",
  },
  {
    id: uuidv5("aws-question-170", uuidv5.URL),
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
      "AWS is responsible for the infrastructure and operational tasks in managed services, including OS maintenance and software patching. The customer remains responsible for access control and security configurations, such as IAM policies and credentials. Logging may require enabling services like CloudTrail or CloudWatch, which are customer-managed.",
  },
  {
    id: uuidv5("aws-question-171", uuidv5.URL),
    text: "Which of the following AWS Services helps with planning application migration to the AWS Cloud?",
    options: [
      "AWS Snowball Migration Service.",
      "AWS Application Discovery Service.",
      "AWS DMS.",
      "AWS Migration Hub.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Application Discovery Service helps gather information about on-premises data centers to plan and execute migrations effectively. While Migration Hub centralizes migration tracking, the actual discovery and planning role is provided by Application Discovery Service. Snowball is for data transfer and DMS (Database Migration Service) is focused on database migration, not application-level planning.",
  },
  {
    id: uuidv5("aws-question-172", uuidv5.URL),
    text: "A company is trying to analyze the costs applied to their AWS account recently. Which of the following provides them the most granular data about their AWS costs and usage?",
    options: [
      "Amazon Machine Image.",
      "AWS Cost Explorer.",
      "AWS Cost & Usage Report.",
      "Amazon CloudWatch.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Cost & Usage Report (CUR) provides the most detailed billing data, including resource-level usage. Cost Explorer offers visual summaries but is less granular. CloudWatch is used for monitoring, not billing. Amazon Machine Images are unrelated to cost tracking.",
  },
  {
    id: uuidv5("aws-question-173", uuidv5.URL),
    text: "Which statement best describes the concept of an AWS region?",
    options: [
      "An AWS Region is a geographical location with a collection of Edge locations.",
      "An AWS Region is a virtual network dedicated only to a single AWS customer.",
      "An AWS Region is a geographical location with a collection of Availability Zones.",
      "An AWS Region represents the country where the AWS infrastructure exist.",
    ],
    correctAnswers: [2],
    explanation:
      "An AWS Region is a physical location worldwide that contains multiple Availability Zones (AZs). Edge locations are part of the CDN system (CloudFront), not part of a region. Virtual networks (like VPCs) are customer-configured and not equal to regions. AWS regions can span countries or include multiple AZs in one country.",
  },
  {
    id: uuidv5("aws-question-174", uuidv5.URL),
    text: "A company has discovered that multiple S3 buckets were deleted, but it is unclear who deleted the buckets. Which of the following can the company use to determine the identity that deleted the buckets?",
    options: ["SNS logs.", "SQS logs.", "CloudWatch Logs.", "CloudTrail logs."],
    correctAnswers: [3],
    explanation:
      "AWS CloudTrail logs provide a complete history of AWS API calls, including who made them and from where. SNS and SQS do not provide audit logs. CloudWatch monitors logs but doesn’t automatically track API actions unless integrated with CloudTrail.",
  },
  {
    id: uuidv5("aws-question-175", uuidv5.URL),
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
      "Choosing a database solution depends on performance characteristics (reads/writes) and query patterns (e.g., relational vs NoSQL). Availability Zones and data sovereignty are infrastructure and compliance concerns, not primary database selection criteria. Software bugs are not a valid selection criterion for technology choice.",
  },
  {
    id: uuidv5("aws-question-176", uuidv5.URL),
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
      "Tagging resources allows for effective organization and cost tracking (e.g., by project or department). Tags do not help track API calls (CloudTrail does), identify software solutions (which is done via AWS Marketplace or documentation), or recover deleted resources (which are permanently removed unless backup mechanisms are in place).",
  },
  {
    id: uuidv5("aws-question-177", uuidv5.URL),
    text: "What are AWS shared controls?",
    options: [
      "Controls that are solely the responsibility of the customer based on the application they are deploying within AWS services.",
      "Controls that a customer inherits from AWS.",
      "Controls that apply to both the infrastructure layer and customer layers.",
      "Controls that the customer and AWS collaborate together upon to secure the infrastructure.",
    ],
    correctAnswers: [3],
    explanation:
      "Shared controls refer to security and compliance tasks where both AWS and the customer share responsibility. For example, AWS manages the physical infrastructure, while the customer manages data encryption. Other options describe controls that are either fully customer- or AWS-owned, or misrepresent the shared model.",
  },
  {
    id: uuidv5("aws-question-178", uuidv5.URL),
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
      "Performance efficiency principles in AWS include using serverless to reduce overhead and building architectures that minimize latency, such as multi-region deployments. Security and audit logging are part of the security pillar, not performance efficiency.",
  },
  {
    id: uuidv5("aws-question-179", uuidv5.URL),
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
      "In the shared responsibility model, AWS manages the infrastructure, but the customer is responsible for securing their data and managing installed software. AWS handles patching of the host OS and hardware maintenance. Managed databases are AWS-managed services like RDS.",
  },
  {
    id: uuidv5("aws-question-180", uuidv5.URL),
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
      "AWS provides elasticity (scaling resources up/down on demand) and potential cost savings by avoiding upfront capital expenditure. AWS does not provide free commercial software licenses or on-site audit visits. Support is offered at tiered pricing, not for free by default.",
  },
  {
    id: uuidv5("aws-question-181", uuidv5.URL),
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
      "Amazon Inspector automatically assesses applications for vulnerabilities or deviations from best practices, while AWS Config records configuration changes and enables auditing and compliance. Virtual Private Gateway is a networking component, ECS is a container service, and AWS Batch is for job scheduling and compute management—none of which are focused on compliance or security auditing.",
  },
  {
    id: uuidv5("aws-question-182", uuidv5.URL),
    text: "Which of the following is NOT a characteristic of Amazon Elastic Compute Cloud (Amazon EC2)?",
    options: [
      "Amazon EC2 is considered a Serverless Web Service.",
      "Amazon EC2 eliminates the need to invest in hardware upfront.",
      "Amazon EC2 can launch as many or as few virtual servers as needed.",
      "Amazon EC2 offers scalable computing.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon EC2 is an Infrastructure-as-a-Service (IaaS), not a serverless solution. Serverless services, like AWS Lambda, do not require server provisioning. EC2 does indeed provide scalability and removes the need for upfront hardware investment.",
  },
  {
    id: uuidv5("aws-question-183", uuidv5.URL),
    text: "What is the AWS Compute service that executes code only when triggered by events?",
    options: [
      "AWS Lambda.",
      "Amazon CloudWatch.",
      "AWS Transit Gateway.",
      "Amazon EC2.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Lambda runs code in response to events without provisioning or managing servers, making it an event-driven and serverless service. CloudWatch is a monitoring tool, Transit Gateway manages network routing, and EC2 requires manual instance management.",
  },
  {
    id: uuidv5("aws-question-184", uuidv5.URL),
    text: "Both AWS and traditional IT distributors provide a wide range of virtual servers to meet their customers’ requirements. What is the name of these virtual servers in AWS?",
    options: [
      "Amazon EBS Snapshots.",
      "Amazon VPC.",
      "AWS Managed Servers.",
      "Amazon EC2 Instances.",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon EC2 Instances are AWS's virtual servers. Amazon EBS Snapshots are backups, VPC is a virtual private network, and 'AWS Managed Servers' is not an AWS service term.",
  },
  {
    id: uuidv5("aws-question-185", uuidv5.URL),
    text: "What is the framework created by AWS Professional Services that helps organizations design a road map to successful cloud adoption?",
    options: ["AWS Secrets Manager.", "AWS WAF.", "AWS CAF.", "Amazon EFS."],
    correctAnswers: [2],
    explanation:
      "AWS Cloud Adoption Framework (CAF) helps organizations design a structured cloud adoption strategy. Secrets Manager stores credentials, WAF is for web security, and EFS is a file storage service.",
  },
  {
    id: uuidv5("aws-question-186", uuidv5.URL),
    text: "TYMO Cloud Corp is looking forward to migrating their entire on-premises data center to AWS. What tool can they use to perform a cost-benefit analysis of moving to the AWS Cloud?",
    options: [
      "AWS Cost Explorer.",
      "AWS TCO Calculator.",
      "AWS Budgets.",
      "AWS Pricing Calculator.",
    ],
    correctAnswers: [1],
    explanation:
      "The AWS Total Cost of Ownership (TCO) Calculator compares on-premises environments to AWS to estimate cost savings. Cost Explorer is for analyzing AWS usage and spend, Budgets help track costs, and Pricing Calculator estimates AWS service pricing—not comparisons.",
  },
  {
    id: uuidv5("aws-question-187", uuidv5.URL),
    text: "Which of the following activities supports the Operational Excellence pillar of the AWS Well-Architected Framework?",
    options: [
      "Using AWS Trusted Advisor to find underutilized resources.",
      "Using AWS CloudTrail to record user activities.",
      "Using AWS CloudFormation to manage infrastructure as code.",
      "Deploying an application in multiple Availability Zones.",
    ],
    correctAnswers: [2],
    explanation:
      "Using AWS CloudFormation supports automation and repeatability, which are key to Operational Excellence. Trusted Advisor helps with cost and performance, CloudTrail helps with security and compliance, and multi-AZ deployment relates to reliability.",
  },
  {
    id: uuidv5("aws-question-188", uuidv5.URL),
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
      "AWS enables startups to reduce time-to-market and avoid large upfront capital expenditures by offering pay-as-you-go pricing. AWS does not defer payment until success and doesn’t eliminate operational costs—rather, it reduces capital expenditures by shifting to operating expenses.",
  },
  {
    id: uuidv5("aws-question-189", uuidv5.URL),
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
      "DynamoDB is a fully managed NoSQL database that offers automatic scaling and low-latency performance. It does not use traditional instances, supports only NoSQL (not relational), and does not support third-party engines like CouchDB or MongoDB.",
  },
  {
    id: uuidv5("aws-question-190", uuidv5.URL),
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
      "Versioning helps protect against accidental overwrites or deletions, and IAM policies and bucket permissions ensure access control. Deduplication, decryption, and conversion are not mechanisms AWS provides to protect S3 data at rest.",
  },
  {
    id: uuidv5("aws-question-191", uuidv5.URL),
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
      "MAP uses AWS Partners and AWS Professional Services to help enterprises migrate to the cloud efficiently. AWS Artifact is for compliance documentation, Athena is for querying S3 data, and PinPoint is for user engagement analytics—not migration support.",
  },
  {
    id: uuidv5("aws-question-192", uuidv5.URL),
    text: "AWS recommends some practices to help organizations avoid unexpected charges on their bill. Which of the following is NOT one of these practices?",
    options: [
      "Deleting unused EBS volumes after terminating an EC2instance.",
      "Deleting unused AutoScaling launch configuration.",
      "Deleting unused Elastic Load Balancers.",
      "Releasing unused Elastic IPs after terminating an EC2instance.",
    ],
    correctAnswers: [1],
    explanation:
      "While deleting unused EBS volumes, ELBs, and releasing Elastic IPs helps avoid charges, deleting Auto Scaling launch configurations does not directly reduce costs, as they do not incur ongoing charges if not associated with active resources.",
  },
  {
    id: uuidv5("aws-question-193", uuidv5.URL),
    text: "What is the AWS tool that can help a company visualize their AWS spending in the last few months?",
    options: [
      "AWS Cost Explorer.",
      "AWS Pricing Calculator.",
      "AWS Budgets.",
      "AWS Consolidated Billing.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Cost Explorer provides visualizations of historical spending and usage. Pricing Calculator is for forecasting, Budgets are for setting thresholds, and Consolidated Billing aggregates charges across accounts without visual trends.",
  },
  {
    id: uuidv5("aws-question-194", uuidv5.URL),
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
      "AWS handles data center operations and the security of the cloud infrastructure. Customers are responsible for security *in* the cloud, including penetration testing (with permission), compliance, and resource management like capacity.",
  },
  {
    id: uuidv5("aws-question-195", uuidv5.URL),
    text: "Which AWS service can be used to send promotional text messages (SMS) to more than 200 countries worldwide?",
    options: [
      "Amazon Simple Email Service (Amazon SES).",
      "Amazon Simple Storage Service (Amazon S3).",
      "Amazon Simple Notification Service (Amazon SNS).",
      "Amazon Simple Queue Service (Amazon SQS).",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon SNS supports global SMS delivery for promotional and transactional messaging. SES is for email, S3 is storage, and SQS is for decoupled messaging queues—not direct user communication.",
  },
  {
    id: uuidv5("aws-question-196", uuidv5.URL),
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
      "You can launch RDS instances manually via the AWS Management Console or automatically with CloudFormation templates. CodeDeploy is for app deployment, Quick Starts are reference architectures, and DMS is for data migration—not instance creation.",
  },
  {
    id: uuidv5("aws-question-197", uuidv5.URL),
    text: "One of the major advantages of using AWS is cost savings. What does AWS provide to reduce the cost of running Amazon EC2 instances?",
    options: [
      "Low monthly instance maintenance costs.",
      "Low-cost instance tagging.",
      "Per-second instance billing.",
      "Low instance start-up fees.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS uses per-second billing for EC2 (for most Linux instances), helping reduce costs for short workloads. There's no charge for tagging or instance startup, and maintenance is part of the service—not billed separately.",
  },
  {
    id: uuidv5("aws-question-198", uuidv5.URL),
    text: "Which AWS Group assists customers in achieving their desired business outcomes?",
    options: [
      "AWS Security Team.",
      "AWS Professional Services.",
      "AWS Trusted Advisor.",
      "AWS Concierge Support Team.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Professional Services offers direct guidance to help customers implement AWS solutions and meet business goals. Trusted Advisor provides best practice checks, the Concierge Team handles billing, and the Security Team secures AWS infrastructure.",
  },
  {
    id: uuidv5("aws-question-199", uuidv5.URL),
    text: "Which AWS service or feature is used to manage the keys used to encrypt customer data?",
    options: [
      "AWS KMS.",
      "AWS Service Control Policies (SCPs).",
      "Multi-Factor Authentication (MFA).",
      "Amazon Macie.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Key Management Service (KMS) creates and manages cryptographic keys for data encryption. SCPs restrict actions, MFA adds user security, and Macie discovers and protects sensitive data—but does not manage encryption keys.",
  },
  {
    id: uuidv5("aws-question-200", uuidv5.URL),
    text: "Which AWS Service allows customers to download AWS SOC & PCI reports?",
    options: [
      "AWS Well-Architected Tool.",
      "AWS Artifact.",
      "AWS Glue.",
      "Amazon Chime.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Artifact provides on-demand access to compliance reports such as SOC and PCI. Well-Architected Tool is for best practice assessments, Glue is a data integration service, and Chime is a communication platform.",
  },
];

const exam5: Question[] = [
  {
    id: uuidv5("aws-question-201", uuidv5.URL),
    text: "A company is using EC2 Instances to run their e-commerce site on the AWS platform. If the site becomes unavailable, the company will lose a significant amount of money for each minute the site is unavailable. Which design principle should the company use to minimize the risk of an outage?",
    options: [
      "Least Privilege.",
      "Pilot Light.",
      "Fault Tolerance.",
      "Multi-threading.",
    ],
    correctAnswers: [2],
    explanation:
      "Fault tolerance is the design principle that ensures a system continues to operate properly even if some of its components fail. This is critical for high-availability workloads like e-commerce sites. Least Privilege is a security principle. Pilot Light is a disaster recovery strategy. Multi-threading relates to programming, not system design in this context.\nMás información: https://docs.aws.amazon.com/wellarchitected/latest/framework/fault-tolerance-principle.html",
  },
  {
    id: uuidv5("aws-question-202", uuidv5.URL),
    text: "You decide to buy a reserved instance for a term of one year. Which option provides the largest total discount?",
    options: [
      "All up-front reservation.",
      "All reserved instance payment options provide the same discount level.",
      "Partial up-front reservation.",
      "No up-front reservation.",
    ],
    correctAnswers: [0],
    explanation:
      "All up-front payment for Reserved Instances provides the highest total discount over the term. Partial and no up-front options offer lower savings in exchange for more flexible payment schedules.\nMás información: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/reserved-instances-payment.html",
  },
  {
    id: uuidv5("aws-question-203", uuidv5.URL),
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
      "Access control and data encryption are key AWS features that help protect customer data. Physical MFA devices may help secure accounts but aren't an AWS-provided cloud feature. Unlimited storage and load balancing relate to performance and scalability, not directly to data protection.\nMás información: https://aws.amazon.com/compliance/data-protection/",
  },
  {
    id: uuidv5("aws-question-204", uuidv5.URL),
    text: "An AWS customer has used one Amazon Linux instance for 2 hours, 5 minutes and 9 seconds, and one CentOS instance for 4 hours, 23 minutes and 7 seconds. How much time will the customer be billed for?",
    options: [
      "3 hours for the Linux instance and 5 hours for the CentOS instance.",
      "2 hours, 5 minutes and 9 seconds for the Linux instance and 4 hours, 23 minutes and 7 seconds for the CentOS instance.",
      "2 hours, 5 minutes and 9 seconds for the Linux instance and 5 hours for the CentOS instance.",
      "3 hours for the Linux instance and 4 hours, 23 minutes and 7 seconds for the CentOS instance.",
    ],
    correctAnswers: [2],
    explanation:
      "Per-second billing is available for Linux-based instances, so the customer is charged only for the time used. CentOS (a non-Amazon Linux OS) falls under hourly billing, so it will be rounded up to the next hour.\nMás información: https://aws.amazon.com/ec2/pricing/on-demand/",
  },
  {
    id: uuidv5("aws-question-205", uuidv5.URL),
    text: "What is the AWS Support feature that allows customers to manage support cases programmatically?",
    options: [
      "AWS Trusted Advisor.",
      "AWS Operations Support.",
      "AWS Support API.",
      "AWS Personal Health Dashboard.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Support API allows customers to interact with AWS Support and manage cases via code. Trusted Advisor provides recommendations, Operations Support isn't a standalone feature, and Personal Health Dashboard provides health notifications—not support case management.\nMás información: https://docs.aws.amazon.com/awssupport/latest/user/support-api.html",
  },
  {
    id: uuidv5("aws-question-206", uuidv5.URL),
    text: "Which methods can be used by customers to interact with AWS Identity and Access Management (IAM)? (Choose TWO)",
    options: [
      "AWS CLI.",
      "AWS Security Groups.",
      "AWS SDKs.",
      "AWS Network Access Control Lists.",
      "AWS CodeCommit.",
    ],
    correctAnswers: [0, 2],
    explanation:
      "Customers can use the AWS CLI and SDKs to manage IAM. Security Groups and Network ACLs are used for controlling traffic, and CodeCommit is a source control service unrelated to IAM.\nMás información: https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html",
  },
  {
    id: uuidv5("aws-question-207", uuidv5.URL),
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
      "IAM Roles and IAM Users are IAM identities. IAM Policies are permissions, not identities. AWS Organizations is a service for managing multiple accounts. Resource Groups are for organizing AWS resources, not identities.\nMás información: https://docs.aws.amazon.com/IAM/latest/UserGuide/id.html",
  },
  {
    id: uuidv5("aws-question-208", uuidv5.URL),
    text: "Which of the following Amazon RDS features facilitates offloading of database read activity?",
    options: [
      "Database Snapshots.",
      "Multi-AZ Deployments.",
      "Automated Backups.",
      "Read Replicas.",
    ],
    correctAnswers: [3],
    explanation:
      "Read Replicas allow read traffic to be offloaded from the primary database to improve performance. Snapshots and backups are for recovery, and Multi-AZ is for high availability—not scaling read traffic.\nMás información: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html",
  },
  {
    id: uuidv5("aws-question-209", uuidv5.URL),
    text: "How does AWS notify customers about security and privacy events pertaining to AWS services?",
    options: [
      "Using the AWS ACM service.",
      "Using Security Bulletins.",
      "Using the AWS Management Console.",
      "Using Compliance Resources.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS uses Security Bulletins to inform customers about important security and privacy events. ACM handles SSL/TLS certificates, Compliance Resources are documents, and the Management Console may display some notices, but bulletins are the primary channel.\nMás información: https://aws.amazon.com/security/security-bulletins/",
  },
  {
    id: uuidv5("aws-question-210", uuidv5.URL),
    text: "Which IAM entity can best be used to grant temporary access to your AWS resources?",
    options: ["IAM Users.", "Key Pair.", "IAM Roles.", "IAM Groups."],
    correctAnswers: [2],
    explanation:
      "IAM Roles are designed to grant temporary access to AWS resources. IAM Users are for long-term access. IAM Groups are used to assign permissions to multiple users. Key Pairs are used for EC2 instance login—not access control.\nMás información: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html",
  },
  {
    id: uuidv5("aws-question-211", uuidv5.URL),
    text: "A company has a web application that is hosted on a single EC2 instance and is approaching 100 percent CPU Utilization during peak loads. Rather than scaling the server vertically, the company has decided to deploy three Amazon EC2 instances in parallel and to distribute traffic across the three servers. What AWS Service should the company use to distribute the traffic evenly?",
    options: [
      "AWS Global Accelerator.",
      "AWS Application Load Balancer (ALB).",
      "Amazon CloudFront.",
      "Transit VPC.",
    ],
    correctAnswers: [1],
    explanation:
      "An Application Load Balancer (ALB) automatically distributes incoming application traffic across multiple targets, such as EC2 instances, to improve scalability and fault tolerance. AWS Global Accelerator improves global application performance, CloudFront is a content delivery network (CDN), and Transit VPC is used for networking between VPCs.\nMás información: https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html",
  },
  {
    id: uuidv5("aws-question-212", uuidv5.URL),
    text: "Which of the following approaches will help you eliminate human error and automate the process of creating and updating your AWS environment?",
    options: [
      "Use Software test automation tools.",
      "Use AWS CodeDeploy to build and automate your AWS environment.",
      "Use code to provision and operate your AWS infrastructure.",
      "Migrate all of your applications to a dedicated host.",
    ],
    correctAnswers: [2],
    explanation:
      "Using Infrastructure as Code (IaC), such as AWS CloudFormation or Terraform, helps eliminate human error and automates provisioning. CodeDeploy is for application deployment, not infrastructure provisioning. The other options are unrelated or incorrect.\nMás información: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html",
  },
  {
    id: uuidv5("aws-question-213", uuidv5.URL),
    text: "A company is seeking to better secure its AWS account from unauthorized access. Which of the below options can the customer use to achieve this goal?",
    options: [
      "Restrict any API call made through SDKs or CLI.",
      "Create one IAM account for each department in the company (Development, QA, Production), and share it across all staff in that department.",
      "Require Multi-Factor Authentication (MFA) for all IAM User access.",
      "Set up two login passwords.",
    ],
    correctAnswers: [2],
    explanation:
      "Enabling MFA for IAM users adds a strong layer of security by requiring a second form of verification. Sharing IAM accounts is a security anti-pattern. AWS does not support multiple passwords per user. API call restrictions are better handled via IAM policies.\nMás información: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa.html",
  },
  {
    id: uuidv5("aws-question-214", uuidv5.URL),
    text: "Which AWS Service offers volume discounts based on usage?",
    options: [
      "Amazon VPC.",
      "Amazon S3.",
      "Amazon Lightsail.",
      "AWS Cost Explorer.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon S3 offers tiered pricing, where the more storage you use, the less you pay per GB. Amazon VPC and Lightsail do not offer volume-based discounts. AWS Cost Explorer helps analyze costs, but doesn't apply discounts.\nMás información: https://aws.amazon.com/s3/pricing/",
  },
  {
    id: uuidv5("aws-question-215", uuidv5.URL),
    text: "Which of the following factors should be considered when determining the region in which AWS Resources will be deployed? (Choose TWO)",
    options: [
      "The AWS Region’s security level.",
      "Data sovereignty.",
      "Cost.",
      "The planned number of VPCs.",
      "Geographic proximity to the company's location.",
    ],
    correctAnswers: [1, 2],
    explanation:
      "Data sovereignty (legal and regulatory requirements) and cost are important factors when choosing an AWS Region. While proximity may affect latency, it is less critical than legal or financial considerations. All AWS Regions have high security levels, and the number of VPCs is not typically a determining factor.\nMás información: https://aws.amazon.com/about-aws/global-infrastructure/regions_az/",
  },
  {
    id: uuidv5("aws-question-216", uuidv5.URL),
    text: "You are running a financial services web application on AWS. The application uses a MySQL database to store the data. Which of the following AWS services would improve the performance of your application by allowing you to retrieve information from fast in-memory caches?",
    options: ["Amazon EFS.", "Amazon Neptune.", "Amazon ElastiCache.", "DAX."],
    correctAnswers: [2],
    explanation:
      "Amazon ElastiCache improves performance by caching frequently accessed data in memory, reducing load on the MySQL database. DAX is a caching solution for DynamoDB, not MySQL. EFS is a file storage service, and Neptune is for graph databases.\nMás información: https://aws.amazon.com/elasticache/",
  },
  {
    id: uuidv5("aws-question-217", uuidv5.URL),
    text: "What are the advantages of using Auto Scaling Groups for EC2 instances?",
    options: [
      "Auto Scaling Groups caches the most recent responses at global edge locations to reduce latency and improve performance.",
      "Auto Scaling Groups scales EC2 instances in multiple Availability Zones to increase application availability and fault tolerance.",
      "Auto Scaling Groups scales EC2 instances across multiple regions to reduce latency for global users.",
      "Auto Scaling Groups distributes application traffic across multiple Availability Zones to enhance performance.",
    ],
    correctAnswers: [1],
    explanation:
      "Auto Scaling Groups provide automatic scaling across multiple AZs to maintain availability and fault tolerance. The first option describes CloudFront. The third option is inaccurate—Auto Scaling Groups operate within a region. The fourth option describes a load balancer.\nMás información: https://docs.aws.amazon.com/autoscaling/ec2/userguide/AutoScalingGroup.html",
  },
  {
    id: uuidv5("aws-question-218", uuidv5.URL),
    text: "The TCO gap between AWS infrastructure and traditional infrastructure has widened over the recent years. Which of the following could be the reason for that?",
    options: [
      "AWS helps customers invest more in capital expenditures.",
      "AWS automates all infrastructure operations, so customers save more on human resources costs.",
      "AWS continues to lower the cost of cloud computing for its customers.",
      "AWS secures AWS resources at no additional charge.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS frequently reduces prices as it achieves economies of scale, lowering the total cost of ownership (TCO) for customers. Capital expenditures are avoided, not increased. Automation helps but isn't the primary driver of the widening TCO gap.\nMás información: https://aws.amazon.com/executive-insights/cloud-strategy/benefits-of-cloud-computing/",
  },
  {
    id: uuidv5("aws-question-219", uuidv5.URL),
    text: "Which of the following are examples of the customer’s responsibility to implement “security IN the cloud”? (Choose TWO)",
    options: [
      "Building a schema for an application.",
      "Replacing physical hardware.",
      "Creating a new hypervisor.",
      "Patch management of the underlying infrastructure.",
      "File system encryption.",
    ],
    correctAnswers: [0, 4],
    explanation:
      "Security IN the cloud is the customer's responsibility and includes tasks like application configuration (schemas) and data encryption. AWS manages the infrastructure, including patching and hardware, which are part of “security OF the cloud.”\nMás información: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-220", uuidv5.URL),
    text: "Which of the following is a type of MFA device that customers can use to protect their AWS resources?",
    options: [
      "AWS CloudHSM.",
      "U2F Security Key.",
      "AWS Access Keys.",
      "AWS Key Pair.",
    ],
    correctAnswers: [1],
    explanation:
      "U2F (Universal 2nd Factor) Security Keys are hardware devices used for MFA. AWS CloudHSM is for key management, AWS Access Keys are credentials—not MFA devices—and Key Pairs are used for SSH access, not MFA.\nMás información: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa_enable_physical.html",
  },
  {
    id: uuidv5("aws-question-221", uuidv5.URL),
    text: "A company is seeking to deploy an existing .NET application onto AWS as quickly as possible. Which AWS Service should the customer use to achieve this goal?",
    options: [
      "Amazon SNS",
      "AWS Elastic Beanstalk",
      "AWS Systems Manager",
      "AWS Trusted Advisor",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Elastic Beanstalk is the best choice for quickly deploying a .NET application. It handles the deployment, capacity provisioning, load balancing, auto-scaling, and application health monitoring. The other options are unrelated to application deployment. Amazon SNS is for messaging, Systems Manager is for operational control, and Trusted Advisor provides recommendations but does not handle deployments.\nhttps://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_NET.html",
  },
  {
    id: uuidv5("aws-question-222", uuidv5.URL),
    text: "Which of the following is NOT a factor when estimating the costs of Amazon EC2? (Choose TWO)",
    options: [
      "The amount of time the instances will be running",
      "Number of security groups",
      "Allocated Elastic IP Addresses",
      "Number of Hosted Zones",
      "Number of instances",
    ],
    correctAnswers: [1, 3],
    explanation:
      "The number of security groups and hosted zones are not direct cost factors for EC2 pricing. EC2 costs are based on time the instances are running, the number and type of instances, and additional features like Elastic IPs. Hosted Zones relate to Route 53, not EC2.\nhttps://aws.amazon.com/ec2/pricing/",
  },
  {
    id: uuidv5("aws-question-223", uuidv5.URL),
    text: "Which AWS Service helps enterprises extend their on-premises storage to AWS in a cost-effective manner?",
    options: [
      "AWS Data Pipeline",
      "AWS Storage Gateway",
      "Amazon Aurora",
      "Amazon EFS",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Storage Gateway connects on-premises software appliances with cloud-based storage to provide seamless and secure integration between on-premises IT environments and AWS storage infrastructure. Aurora is a relational database, EFS is a cloud-native NFS file system, and Data Pipeline is for data processing.\nhttps://aws.amazon.com/storagegateway/",
  },
  {
    id: uuidv5("aws-question-224", uuidv5.URL),
    text: "A company is building an online cloud storage platform. They need a storage service that can scale capacity automatically, while minimizing cost. Which AWS storage service should the company use to meet these requirements?",
    options: [
      "Amazon Simple Storage Service",
      "Amazon Elastic Block Store",
      "Amazon Elastic Container Service",
      "AWS Storage Gateway",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon S3 is the best solution for scalable, cost-effective storage. It automatically scales and is designed for durability and availability. EBS is for block storage attached to EC2, ECS is a container orchestration service, and Storage Gateway extends on-prem storage.\nhttps://aws.amazon.com/s3/",
  },
  {
    id: uuidv5("aws-question-225", uuidv5.URL),
    text: "You have just hired a skilled sys-admin to join your team. As usual, you have created a new IAM user for him to interact with AWS services. On his first day, you ask him to create snapshots of all existing Amazon EBS volumes and save them in a new Amazon S3 bucket. However, the new member reports back that he is unable to create neither EBS snapshots nor S3 buckets. What might prevent him from doing this simple task?",
    options: [
      "EBS and S3 are accessible only to the root account owner.",
      "The systems administrator must contact AWS Support first to activate his new IAM account.",
      "There is not enough space in S3 to store the snapshots.",
      "There is a non-explicit deny to all new users.",
    ],
    correctAnswers: [3],
    explanation:
      "By default, new IAM users have no permissions. Unless explicitly granted permissions via policies, they cannot perform any actions. This implicit deny is the root cause here. The other options are incorrect because access is not restricted to root users, support contact is not required, and S3 storage limits are very high.\nhttps://docs.aws.amazon.com/IAM/latest/UserGuide/access_permissions.html",
  },
  {
    id: uuidv5("aws-question-226", uuidv5.URL),
    text: "An external auditor is requesting a log of all accesses to the AWS resources in the company’s account. Which of the following services will provide the auditor with the requested information?",
    options: [
      "AWS CloudTrail",
      "Amazon CloudFront",
      "AWS CloudFormation",
      "Amazon CloudWatch",
    ],
    correctAnswers: [0],
    explanation:
      "AWS CloudTrail provides event history of your AWS account activity, including actions taken through the AWS Management Console, SDKs, CLI, and other services. CloudFront is a CDN, CloudFormation is for infrastructure as code, and CloudWatch is for metrics and logs but does not provide API activity history.\nhttps://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html",
  },
  {
    id: uuidv5("aws-question-227", uuidv5.URL),
    text: "Which of the below options is true of Amazon Cloud Directory?",
    options: [
      "Amazon Cloud Directory allows the organization of hierarchies of data across multiple dimensions.",
      "Amazon Cloud Directory enables the analysis of video and data streams in real time.",
      "Amazon Cloud Directory allows users to access AWS with their existing Active Directory credentials.",
      "Amazon Cloud Directory allows for registration and management of domain names.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon Cloud Directory enables the creation of flexible, cloud-native directories for organizing hierarchies of data across multiple dimensions. Option B refers to Kinesis, option C refers to AWS Directory Service, and option D refers to Route 53.\nhttps://docs.aws.amazon.com/clouddirectory/latest/developerguide/what_is.html",
  },
  {
    id: uuidv5("aws-question-228", uuidv5.URL),
    text: 'A user has opened a "Production System Down" support case to get help from AWS Support after a production system disruption. What is the expected response time for this type of support case?',
    options: ["12 hours", "15 minutes", "24 hours", "One hour"],
    correctAnswers: [3],
    explanation:
      "For Enterprise Support customers, the response time for a 'Production System Down' (Severity 1) case is 1 hour. The 15-minute SLA applies to 'Business-critical system down' issues under Enterprise Support. The other times listed are too long.\nhttps://aws.amazon.com/premiumsupport/plans/",
  },
  {
    id: uuidv5("aws-question-229", uuidv5.URL),
    text: "Which of the below options is a best practice for making your application on AWS highly available?",
    options: [
      "Deploy the application to at least two Availability Zones.",
      "Use Elastic Load Balancing (ELB) across multiple AWS Regions.",
      "Deploy the application code on at least two servers in the same Availability Zone.",
      "Rewrite the application code to handle all incoming requests.",
    ],
    correctAnswers: [0],
    explanation:
      "Deploying across multiple Availability Zones ensures high availability in case one zone goes down. Using ELB across regions is uncommon and adds latency. Having two servers in one AZ does not protect against zone failure. Rewriting code is unrelated to availability.\nhttps://docs.aws.amazon.com/whitepapers/latest/aws-overview/high-availability.html",
  },
  {
    id: uuidv5("aws-question-230", uuidv5.URL),
    text: "Which of the following should be taken into account when performing a TCO analysis regarding the costs of running an application on AWS VS on-premises? (Choose TWO)",
    options: [
      "Labor and IT costs",
      "Cooling and power consumption",
      "Amazon EBS computing power",
      "Software architecture",
      "Software compatibility",
    ],
    correctAnswers: [0, 1],
    explanation:
      "TCO (Total Cost of Ownership) analysis should include operational costs such as labor, hardware, cooling, and electricity. EBS is a cloud resource, not applicable on-prem. Software architecture and compatibility affect design, not cost analysis.\nhttps://aws.amazon.com/tco-calculator/",
  },
  {
    id: uuidv5("aws-question-231", uuidv5.URL),
    text: "Your company requires a response time of less than 15 minutes from support interactions about their business-critical systems that are hosted on AWS if those systems go down. Which AWS Support Plan should this company use?",
    options: [
      "AWS Basic Support",
      "AWS Developer Support",
      "AWS Business Support",
      "AWS Enterprise Support",
    ],
    correctAnswers: [3],
    explanation:
      "The AWS Enterprise Support plan offers a response time of less than 15 minutes for business-critical system outages (severity level 1). Basic and Developer support plans do not provide this level of response time, and Business Support only guarantees a 1-hour response for critical issues. Más información: https://aws.amazon.com/premiumsupport/plans/",
  },
  {
    id: uuidv5("aws-question-232", uuidv5.URL),
    text: "Which of the following AWS offerings are serverless services? (Choose TWO)",
    options: [
      "Amazon EC2",
      "AWS Lambda",
      "Amazon DynamoDB",
      "Amazon EMR",
      "Amazon RDS",
    ],
    correctAnswers: [1, 2],
    explanation:
      "AWS Lambda and Amazon DynamoDB are serverless services. Lambda runs code without provisioning servers, and DynamoDB is a fully managed NoSQL database that does not require server management. EC2, EMR, and RDS require server provisioning and management. Más información: https://aws.amazon.com/serverless/",
  },
  {
    id: uuidv5("aws-question-233", uuidv5.URL),
    text: "Which AWS service enables you to quickly purchase and deploy SSL/TLS certificates?",
    options: ["Amazon GuardDuty", "AWS ACM", "Amazon Detective", "AWS WAF"],
    correctAnswers: [1],
    explanation:
      "AWS Certificate Manager (ACM) allows you to easily provision, manage, and deploy SSL/TLS certificates. It simplifies the process of securing websites and applications. Los otros servicios no manejan certificados. Más información: https://aws.amazon.com/certificate-manager/",
  },
  {
    id: uuidv5("aws-question-234", uuidv5.URL),
    text: "Which AWS Service provides integration with Chef to automate the configuration of EC2 instances?",
    options: [
      "AWS Config",
      "AWS OpsWorks",
      "AutoScaling",
      "AWS CloudFormation",
    ],
    correctAnswers: [1],
    explanation:
      "AWS OpsWorks supports configuration management using Chef or Puppet. It helps automate how servers are configured, deployed, and managed across EC2 instances. CloudFormation automates infrastructure deployment but does not integrate directly with Chef. Más información: https://docs.aws.amazon.com/opsworks/latest/userguide/welcome.html",
  },
  {
    id: uuidv5("aws-question-235", uuidv5.URL),
    text: "A customer is seeking to store objects in their AWS environment and to make those objects downloadable over the internet. Which AWS Service can be used to accomplish this?",
    options: ["Amazon EBS", "Amazon EFS", "Amazon S3", "Amazon Instance Store"],
    correctAnswers: [2],
    explanation:
      "Amazon S3 (Simple Storage Service) is ideal for storing and retrieving any amount of data over the internet. It provides high availability and scalability. EBS and EFS are file and block storage meant for internal use by EC2 instances, and Instance Store is ephemeral storage. Más información: https://aws.amazon.com/s3/",
  },
  {
    id: uuidv5("aws-question-236", uuidv5.URL),
    text: "Which of the following services can be used to monitor the HTTP and HTTPS requests that are forwarded to Amazon CloudFront?",
    options: ["AWS WAF", "Amazon CloudWatch", "AWS Cloud9", "AWS CloudTrail"],
    correctAnswers: [1],
    explanation:
      "Amazon CloudWatch can be used with CloudFront to monitor metrics such as request counts and error rates. AWS WAF filters requests but doesn’t monitor them. CloudTrail tracks API activity, not request-level metrics. Cloud9 is a development environment. Más información: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/monitoring-using-cloudwatch.html",
  },
  {
    id: uuidv5("aws-question-237", uuidv5.URL),
    text: "A company is migrating a web application to AWS. The application’s compute capacity is continually utilized throughout the year. Which of the below options offers the company the most cost-effective solution?",
    options: [
      "On-demand Instances",
      "Dedicated Hosts",
      "Spot Instances",
      "Reserved Instances",
    ],
    correctAnswers: [3],
    explanation:
      "Reserved Instances are the most cost-effective option for workloads with predictable, steady usage. Spot Instances are cheaper but not suitable for continuous workloads due to potential interruptions. On-demand is flexible but more expensive. Dedicated Hosts are generally for licensing compliance. Más información: https://aws.amazon.com/ec2/pricing/reserved-instances/",
  },
  {
    id: uuidv5("aws-question-238", uuidv5.URL),
    text: "A company wants to grant a new employee long-term access to manage Amazon DynamoDB databases. Which of the following is a recommended best-practice when granting these permissions?",
    options: [
      "Create an IAM role and attach a policy with Amazon DynamoDB access permissions.",
      "Create an IAM role and attach a policy with Administrator access permissions.",
      "Create an IAM user and attach a policy with Amazon DynamoDB access permissions.",
      "Create an IAM user and attach a policy with Administrator access permissions.",
    ],
    correctAnswers: [2],
    explanation:
      "Creating an IAM user with permissions scoped specifically to DynamoDB follows the principle of least privilege. Administrator permissions should not be used unless absolutely necessary. IAM roles are ideal for temporary access, not long-term user access. Más información: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html",
  },
  {
    id: uuidv5("aws-question-239", uuidv5.URL),
    text: "When granting permissions to applications running on Amazon EC2 instances, which of the following is considered best practice?",
    options: [
      "Generate new IAM access keys every time you delegate permissions.",
      "Store the required AWS credentials directly within the application code.",
      "Use temporary security credentials (IAM roles) instead of long-term access keys.",
      "Do nothing; Applications that run on Amazon EC2 instances do not need permission to interact with other AWS services or resources.",
    ],
    correctAnswers: [2],
    explanation:
      "Best practice is to assign an IAM role to the EC2 instance. This allows the instance to assume the role and get temporary credentials. Embedding access keys in code or rotating them frequently introduces security risks. Más información: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html",
  },
  {
    id: uuidv5("aws-question-240", uuidv5.URL),
    text: "Which of the following will help AWS customers save on costs when migrating their workloads to AWS?",
    options: [
      "Use servers instead of managed services.",
      "Use existing third-party software licenses on AWS.",
      "Migrate production workloads to AWS edge locations instead of AWS Regions.",
      "Use AWS Outposts to run all workloads in a cost-optimized environment.",
    ],
    correctAnswers: [1],
    explanation:
      "Customers can save on costs by reusing existing licenses under AWS’s Bring Your Own License (BYOL) model, if applicable. Managed services often reduce overhead. Edge locations are not suitable for full workload hosting. AWS Outposts may not be the most cost-effective option. Más información: https://aws.amazon.com/enterprise-on-aws/migration/",
  },
  {
    id: uuidv5("aws-question-241", uuidv5.URL),
    text: "An organization has a legacy application designed using monolithic-based architecture. Which AWS Service can be used to decouple the components of the application?",
    options: [
      "Amazon SQS",
      "Virtual Private Gateway",
      "AWS Artifact",
      "Amazon CloudFront",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon Simple Queue Service (SQS) enables decoupling of application components by allowing asynchronous communication between services. This is especially useful for monolithic applications being refactored into microservices. The other services are not used for decoupling. Más información: https://aws.amazon.com/sqs/",
  },
  {
    id: uuidv5("aws-question-242", uuidv5.URL),
    text: "Which of the following can be used to enable the Virtual Multi-Factor Authentication? (Choose TWO)",
    options: [
      "Amazon Connect",
      "AWS CLI",
      "AWS Identity and Access Management (IAM)",
      "Amazon SNS",
      "Amazon Virtual Private Cloud",
    ],
    correctAnswers: [1, 2],
    explanation:
      "Virtual MFA can be enabled using IAM in the AWS Management Console or through the AWS CLI. Amazon Connect, SNS, and VPC do not manage authentication methods. Más información: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa_enable_virtual.html",
  },
  {
    id: uuidv5("aws-question-243", uuidv5.URL),
    text: "According to best practices, which of the below options is best suited for processing a large number of binary files?",
    options: [
      "Vertically scaling EC2 instances",
      "Running RDS instances in parallel",
      "Vertically scaling RDS instances",
      "Running EC2 instances in parallel",
    ],
    correctAnswers: [3],
    explanation:
      "Running EC2 instances in parallel enables horizontal scaling, which is better suited for high-throughput processing of binary files. Vertical scaling has limitations and RDS is not ideal for binary file processing. Más información: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html",
  },
  {
    id: uuidv5("aws-question-244", uuidv5.URL),
    text: "A company is planning to use Amazon S3 and Amazon CloudFront to distribute its video courses globally. What tool can the company use to estimate the costs of these services?",
    options: [
      "AWS Cost Explorer",
      "AWS Pricing Calculator",
      "AWS Budgets",
      "AWS Cost & Usage Report",
    ],
    correctAnswers: [1],
    explanation:
      "The AWS Pricing Calculator allows you to estimate the costs of AWS services like S3 and CloudFront. Cost Explorer and Budgets are used for monitoring and controlling costs, not estimating them beforehand. Más información: https://calculator.aws.amazon.com/",
  },
  {
    id: uuidv5("aws-question-245", uuidv5.URL),
    text: "What should you do if you see resources, which you don’t remember creating, in the AWS Management Console? (Choose TWO)",
    options: [
      "Stop all running services and open an investigation",
      "Give your root account password to AWS Support so that they can assist in troubleshooting and securing the account",
      "Check the AWS CloudTrail logs and delete all IAM users that have access to your resources",
      "Open an investigation and delete any potentially compromised IAM users",
      "Change your AWS root account password and the passwords of any IAM users",
    ],
    correctAnswers: [3, 4],
    explanation:
      "Changing credentials and deleting compromised IAM users are standard steps in a suspected security breach. Giving away the root password or deleting all IAM users without investigation is risky. Más información: https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html",
  },
  {
    id: uuidv5("aws-question-246", uuidv5.URL),
    text: "A key practice when designing solutions on AWS is to minimize dependencies between components so that the failure of a single component does not impact other components. What is this practice called?",
    options: [
      "Elastic coupling",
      "Loosely coupling",
      "Scalable coupling",
      "Tightly coupling",
    ],
    correctAnswers: [1],
    explanation:
      "Loose coupling ensures that components function independently. This design improves fault tolerance and scalability. Tight coupling, in contrast, increases dependency and risk of failure propagation. Más información: https://docs.aws.amazon.com/wellarchitected/latest/framework/operational-excellence-principle.html",
  },
  {
    id: uuidv5("aws-question-247", uuidv5.URL),
    text: "Which AWS Service offers an NFS file system that can be mounted concurrently from multiple EC2 instances?",
    options: [
      "Amazon Elastic File System",
      "Amazon Simple Storage Service",
      "Amazon Elastic Block Store",
      "AWS Storage Gateway",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon EFS is a scalable NFS file system that can be mounted by multiple EC2 instances. S3 is object storage, EBS is block storage for a single instance, and Storage Gateway is used for hybrid storage integration. Más información: https://aws.amazon.com/efs/",
  },
  {
    id: uuidv5("aws-question-248", uuidv5.URL),
    text: "Availability Zones within a Region are connected over low-latency links. Which of the following is a benefit of these links?",
    options: [
      "Create private connection to your data center",
      "Achieve global high availability",
      "Automate the process of provisioning new compute resources",
      "Make synchronous replication of your data possible",
    ],
    correctAnswers: [3],
    explanation:
      "Low-latency links between Availability Zones support synchronous data replication, which is crucial for high availability and disaster recovery within a region. Global high availability requires multi-region deployment. Más información: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html",
  },
  {
    id: uuidv5("aws-question-249", uuidv5.URL),
    text: "Which of the following are true regarding the languages that are supported on AWS Lambda? (Choose TWO)",
    options: [
      "Lambda only supports Python and Node.js, but third party plugins are available to convert code in other languages to these formats",
      "Lambda natively supports a number of programming languages such as Node.js, Python, and Java",
      "Lambda is AWS’ proprietary programming language for microservices",
      "Lambda doesn’t support programming languages; it is a serverless compute service",
      "Lambda can support any programming language using an API",
    ],
    correctAnswers: [1, 4],
    explanation:
      "AWS Lambda natively supports several languages (e.g., Node.js, Python, Java), and with custom runtimes, it can support any language via API integration. Lambda is not a programming language itself. Más información: https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html",
  },
  {
    id: uuidv5("aws-question-250", uuidv5.URL),
    text: "What are the capabilities of AWS X-Ray? (Choose TWO)",
    options: [
      "Automatically decouples application components",
      "Facilitates tracking of user requests to identify application issues",
      "Helps improve application performance",
      "Deploys applications to Amazon EC2 instances",
      "Deploys applications to on-premises servers",
    ],
    correctAnswers: [1, 2],
    explanation:
      "AWS X-Ray provides tools for debugging and tracing requests in distributed applications, helping identify performance bottlenecks and issues. It does not deploy applications or decouple components. Más información: https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html",
  },
];

const exam6: Question[] = [
  {
    id: uuidv5("aws-question-251", uuidv5.URL),
    text: "Which of the following is true regarding the AWS availability zones and edge locations?",
    options: [
      "Edge locations are located in separate Availability Zones worldwide to serve global customers.",
      "An availability zone exists within an edge location to distribute content globally with low latency.",
      "An Availability Zone is a geographic location where AWS provides multiple, physically separated and isolated edge locations.",
      "An AWS Availability Zone is an isolated location within an AWS Region, however edge locations are located in multiple cities worldwide.",
    ],
    correctAnswers: [3],
    explanation:
      "An AWS Availability Zone is an isolated location within an AWS Region, while edge locations serve content and are located in multiple cities worldwide. Más información: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html",
  },
  {
    id: uuidv5("aws-question-252", uuidv5.URL),
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
      "The AWS Business Support Plan includes 24x7 access to customer service and the Infrastructure Event Management feature for an additional fee. Más información: https://aws.amazon.com/premiumsupport/plans/",
  },
  {
    id: uuidv5("aws-question-253", uuidv5.URL),
    text: "A company is developing a mobile application and wants to allow users to use their Amazon, Apple, Facebook, or Google identities to authenticate to the application. Which AWS Service should the company use for this purpose?",
    options: [
      "Amazon GuardDuty.",
      "Amazon Personalize.",
      "Amazon Cognito.",
      "AWS IAM.",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon Cognito allows users to authenticate using their social identities such as Amazon, Apple, Facebook, and Google. Más información: https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools-social-idp.html",
  },
  {
    id: uuidv5("aws-question-254", uuidv5.URL),
    text: "Which AWS Service allows customers to create a template that programmatically defines policies and configurations of all AWS resources as code and so that the same template can be reused among multiple projects?",
    options: [
      "AWS CloudFormation.",
      "AWS Config.",
      "AWS CloudTrail.",
      "AWS Auto Scaling.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS CloudFormation allows users to create templates to define AWS resources as code. Más información: https://docs.aws.amazon.com/cloudformation/index.html",
  },
  {
    id: uuidv5("aws-question-255", uuidv5.URL),
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
      "Using AWS allows customers to eliminate the need to guess on infrastructure capacity needs and trade capital expenses for operational expenses. Más información: https://aws.amazon.com/what-is-aws/",
  },
  {
    id: uuidv5("aws-question-256", uuidv5.URL),
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
      "Amazon RDS and Amazon EC2 can be used to run Microsoft SQL Server databases on AWS. Más información: https://aws.amazon.com/rds/sqlserver/",
  },
  {
    id: uuidv5("aws-question-257", uuidv5.URL),
    text: "Which AWS Service can perform health checks on Amazon EC2 instances?",
    options: [
      "AWS CloudFormation.",
      "Amazon Route 53.",
      "Amazon Chime.",
      "Amazon Aurora.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon Route 53 can perform health checks on Amazon EC2 instances. Más información: https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover.html",
  },
  {
    id: uuidv5("aws-question-258", uuidv5.URL),
    text: "A company is developing an application that will leverage facial recognition to automate photo tagging. Which AWS Service should the company use for facial recognition?",
    options: [
      "Amazon Comprehend.",
      "AWS IAM.",
      "Amazon Polly.",
      "Amazon Rekognition.",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon Rekognition provides facial recognition capabilities. Más información: https://docs.aws.amazon.com/rekognition/latest/dg/what-is.html",
  },
  {
    id: uuidv5("aws-question-259", uuidv5.URL),
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
      "Amazon Neptune and Amazon RDS for MySQL are examples of AWS-managed databases. Más información: https://aws.amazon.com/products/databases/",
  },
  {
    id: uuidv5("aws-question-260", uuidv5.URL),
    text: "A company’s AWS workflow requires that it periodically perform large-scale image and video processing jobs. The customer is seeking to minimize cost and has stated that the amount of time it takes to process these jobs is not critical, but that cost minimization is the most important factor in designing the solution. Which EC2 instance class is best suited for this processing?",
    options: [
      "EC2 On-Demand Instances.",
      "EC2 Reserved Instances - No Upfront",
      "EC2 Spot Instances.",
      "EC2 Reserved Instances - All Upfront.",
    ],
    correctAnswers: [2],
    explanation:
      "EC2 Spot Instances allow customers to take advantage of unused EC2 capacity at reduced rates. Más información: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-instances.html",
  },
  {
    id: 'uuidv5("aws-question-261", uuidv5.URL)',
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
    id: 'uuidv5("aws-question-262", uuidv5.URL)',
    text: "What is the primary benefit of using Amazon CloudFront?",
    options: [
      "To automatically scale web applications.",
      "To accelerate the distribution of content globally.",
      "To host web applications.",
      "To manage user identities.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon CloudFront is a content delivery network (CDN) that accelerates the distribution of content globally. Más información: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html",
  },
  {
    id: 'uuidv5("aws-question-263", uuidv5.URL)',
    text: "Which of the following services is a serverless service that allows you to run containers without managing servers?",
    options: ["Amazon ECS.", "AWS Batch.", "AWS Lambda.", "AWS Fargate."],
    correctAnswers: [3],
    explanation:
      "AWS Fargate allows users to run containers without managing the underlying servers. Más información: https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html",
  },
  {
    id: 'uuidv5("aws-question-264", uuidv5.URL)',
    text: "What is AWS CloudTrail used for?",
    options: [
      "To monitor the performance of AWS services.",
      "To track user activity and API usage in AWS.",
      "To automate resource provisioning.",
      "To manage IAM users.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS CloudTrail records user activity and API usage across AWS infrastructure. Más información: https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html",
  },
  {
    id: 'uuidv5("aws-question-265", uuidv5.URL)',
    text: "Which AWS service provides the ability to manage and deploy application code in a serverless manner?",
    options: [
      "AWS Elastic Beanstalk.",
      "AWS CodeDeploy.",
      "AWS Lambda.",
      "Amazon EC2.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Lambda allows you to run code in response to events without provisioning or managing servers. Más información: https://docs.aws.amazon.com/lambda/latest/dg/welcome.html",
  },
  {
    id: 'uuidv5("aws-question-266", uuidv5.URL)',
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
    id: 'uuidv5("aws-question-267", uuidv5.URL)',
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
    id: 'uuidv5("aws-question-268", uuidv5.URL)',
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
    id: 'uuidv5("aws-question-269", uuidv5.URL)',
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
    id: 'uuidv5("aws-question-270", uuidv5.URL)',
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
    id: 'uuidv5("aws-question-271", uuidv5.URL)',
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
    id: 'uuidv5("aws-question-272", uuidv5.URL)',
    text: "Which AWS service is best for managing IoT devices?",
    options: ["AWS IoT Core.", "Amazon EC2.", "AWS Lambda.", "Amazon S3."],
    correctAnswers: [0],
    explanation:
      "AWS IoT Core is a managed cloud service that allows connected devices to interact easily and securely with cloud applications.",
  },
  {
    id: 'uuidv5("aws-question-273", uuidv5.URL)',
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
    id: 'uuidv5("aws-question-274", uuidv5.URL)',
    text: "Which AWS service provides a secure way to manage and store credentials?",
    options: ["AWS Secrets Manager.", "Amazon S3.", "AWS Lambda.", "AWS IAM."],
    correctAnswers: [0],
    explanation:
      "AWS Secrets Manager helps you protect access to your applications, services, and IT resources without the upfront investment and on-going maintenance costs.",
  },
  {
    id: 'uuidv5("aws-question-275", uuidv5.URL)',
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
    id: 'uuidv5("aws-question-276", uuidv5.URL)',
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
    id: 'uuidv5("aws-question-277", uuidv5.URL)',
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
    id: 'uuidv5("aws-question-278", uuidv5.URL)',
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
    id: 'uuidv5("aws-question-279", uuidv5.URL)',
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
    id: 'uuidv5("aws-question-280", uuidv5.URL)',
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
    id: 'uuidv5("aws-question-281", uuidv5.URL)',
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
    id: 'uuidv5("aws-question-282", uuidv5.URL)',
    text: "Which service is used for real-time data streaming?",
    options: ["Amazon Kinesis.", "Amazon S3.", "AWS Glue.", "AWS Batch."],
    correctAnswers: [0],
    explanation:
      "Amazon Kinesis is a platform for streaming data on AWS, allowing you to process and analyze data in real-time.",
  },
  {
    id: 'uuidv5("aws-question-283", uuidv5.URL)',
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
    id: 'uuidv5("aws-question-284", uuidv5.URL)',
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
    id: 'uuidv5("aws-question-285", uuidv5.URL)',
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
    id: 'uuidv5("aws-question-286", uuidv5.URL)',
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
    id: 'uuidv5("aws-question-287", uuidv5.URL)',
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
    id: 'uuidv5("aws-question-288", uuidv5.URL)',
    text: "Which service provides distributed denial-of-service (DDoS) protection?",
    options: ["AWS Shield.", "AWS WAF.", "AWS GuardDuty.", "AWS IAM."],
    correctAnswers: [0],
    explanation:
      "AWS Shield is a managed DDoS protection service that safeguards applications running on AWS.",
  },
  {
    id: 'uuidv5("aws-question-289", uuidv5.URL)',
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
    id: 'uuidv5("aws-question-290", uuidv5.URL)',
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
    id: 'uuidv5("aws-question-291", uuidv5.URL)',
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
    id: 'uuidv5("aws-question-292", uuidv5.URL)',
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
    id: 'uuidv5("aws-question-293", uuidv5.URL)',
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
    id: 'uuidv5("aws-question-294", uuidv5.URL)',
    text: "Which AWS service provides a managed environment for running serverless applications?",
    options: ["AWS Lambda.", "Amazon EC2.", "Amazon RDS.", "AWS CodePipeline."],
    correctAnswers: [0],
    explanation:
      "AWS Lambda lets you run code without provisioning or managing servers, providing a serverless environment.",
  },
  {
    id: 'uuidv5("aws-question-295", uuidv5.URL)',
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
    id: 'uuidv5("aws-question-296", uuidv5.URL)',
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
    id: 'uuidv5("aws-question-297", uuidv5.URL)',
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
    id: 'uuidv5("aws-question-298", uuidv5.URL)',
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
    id: 'uuidv5("aws-question-299", uuidv5.URL)',
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
    id: 'uuidv5("aws-question-300", uuidv5.URL)',
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
    id: uuidv5("aws-question-301", uuidv5.URL),
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
      "Amazon S3 provides multiple ways to protect your data. Server-side encryption (Enable S3 Encryption) is a feature that encrypts your data at rest in S3. Additionally, you can encrypt your data before uploading it to S3 (client-side encryption) for an extra layer of security. The other options are either incorrect or could be harmful to your security posture. [Reference](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingEncryption.html)",
  },
  {
    id: uuidv5("aws-question-302", uuidv5.URL),
    text: "Which AWS service helps developers compile and test their code?",
    options: [
      "AWS CodeDeploy",
      "AWS CodeCommit",
      "CloudEndure",
      "AWS CodeBuild",
    ],
    correctAnswers: [3],
    explanation:
      "AWS CodeBuild is a fully managed continuous integration service that compiles source code, runs tests, and produces software packages that are ready to deploy. It eliminates the need to provision, manage, and scale your own build servers. [Reference](https://docs.aws.amazon.com/codebuild/latest/userguide/welcome.html)",
  },
  {
    id: uuidv5("aws-question-303", uuidv5.URL),
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
      "S3 pricing is primarily based on two factors: the storage class you choose (like Standard, Intelligent-Tiering, Glacier, etc.) and the amount of data stored in gigabytes. Other factors like bucket creation/deletion or default encryption don't affect the cost. EBS volumes are a separate service and don't affect S3 pricing. [Reference](https://aws.amazon.com/s3/pricing/)",
  },
  {
    id: uuidv5("aws-question-304", uuidv5.URL),
    text: "What does the Amazon CloudFront service provide? (Choose TWO)",
    options: [
      "Tracks user activity and API usage",
      "Increases application availability by caching at the edge",
      "Enables faster disaster recovery",
      "Stores archived data at very low costs",
      "Delivers content to end users with low latency",
    ],
    correctAnswers: [1, 4],
    explanation:
      "Amazon CloudFront is a content delivery network (CDN) service that increases application availability through edge caching and delivers content to end users with low latency by using a global network of edge locations. [Reference](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)",
  },
  {
    id: uuidv5("aws-question-305", uuidv5.URL),
    text: "You are facing a lot of problems with your current contact center. Which service provides a cloud-based contact center that can deliver a better service for your customers?",
    options: [
      "Amazon Lightsail",
      "Amazon Connect",
      "AWS Direct Connect",
      "AWS Elastic Beanstalk",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon Connect is a cloud-based contact center service that makes it easy to set up and manage a customer contact center and provide reliable customer engagement at any scale. It's an omnichannel cloud contact center designed to provide superior customer service at a lower cost. [Reference](https://aws.amazon.com/connect/)",
  },
  {
    id: uuidv5("aws-question-306", uuidv5.URL),
    text: "You have migrated your application to AWS recently. How can you view the AWS costs applied to your account?",
    options: [
      "Using the AWS Cost & Usage Report",
      "Using the AWS Total Cost of Ownership (TCO) dashboard",
      "Using the AWS CloudWatch logs dashboard",
      "Using the Amazon VPC dashboard",
    ],
    correctAnswers: [0],
    explanation:
      "The AWS Cost & Usage Report is the most comprehensive set of AWS cost and usage data available. It provides detailed information about your AWS costs, including the ability to break down costs by service, resource tags, and time period. [Reference](https://docs.aws.amazon.com/cur/latest/userguide/what-is-cur.html)",
  },
  {
    id: uuidv5("aws-question-307", uuidv5.URL),
    text: "Which of the following are valid Amazon EC2 Reserved Instance types? (Choose TWO)",
    options: ["Convertible", "Expedited", "Bulk", "Spot", "Standard"],
    correctAnswers: [0, 4],
    explanation:
      "Amazon EC2 offers two types of Reserved Instances: Standard and Convertible. Standard RIs provide the highest discount but can only be modified within the same instance family. Convertible RIs provide more flexibility to change the instance family, OS, tenancy, and payment option. Spot and other options listed are not valid RI types. [Reference](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/reserved-instances-types.html)",
  },
  {
    id: uuidv5("aws-question-308", uuidv5.URL),
    text: "Which service gives you access to all AWS auditor-issued reports and certifications?",
    options: [
      "AWS Artifact",
      "AWS Config",
      "Amazon CloudWatch",
      "AWS CloudTrail",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Artifact provides access to AWS's compliance reports, including SOC and PCI, to help customers meet their regulatory requirements. [Reference](https://aws.amazon.com/artifact/)",
  },
  {
    id: uuidv5("aws-question-309", uuidv5.URL),
    text: "You manage a blog on AWS that has different environments: development, testing, and production. What can you use to create a custom console for each environment to view and manage your resources easily?",
    options: [
      "AWS Resource Groups",
      "AWS Placement Groups",
      "AWS Management Console",
      "AWS Tag Editor",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Resource Groups let you organize AWS resources such as EC2 instances, databases, or S3 buckets into groups using tags. This makes it easier to manage, monitor, and automate tasks on large numbers of resources at once. You can create custom consoles for different environments by grouping resources based on their environment tags. [Reference](https://docs.aws.amazon.com/ARG/latest/userguide/welcome.html)",
  },
  {
    id: uuidv5("aws-question-310", uuidv5.URL),
    text: "Which AWS service collects metrics from running EC2 instances?",
    options: [
      "Amazon Inspector",
      "Amazon CloudWatch",
      "AWS CloudFormation",
      "AWS CloudTrail",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon CloudWatch is a monitoring and observability service that provides data and actionable insights for AWS resources. It collects monitoring and operational data in the form of logs, metrics, and events from EC2 instances and other AWS resources, allowing you to detect anomalous behavior in your environments. [Reference](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html)",
  },
  {
    id: uuidv5("aws-question-311", uuidv5.URL),
    text: "Your web application currently faces performance issues and suffers from long load times. Which of the following AWS services could help fix these issues and improve performance?",
    options: [
      "Amazon Detective",
      "AWS X-Ray",
      "AWS Security Hub",
      "AWS Shield",
    ],
    correctAnswers: [1],
    explanation:
      "AWS X-Ray helps developers analyze and debug production, distributed applications. It provides an end-to-end view of requests as they travel through your application, and shows a map of your application's underlying components, helping you identify and troubleshoot the root cause of performance issues and errors. [Reference](https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html)",
  },
  {
    id: uuidv5("aws-question-312", uuidv5.URL),
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
      "Both AWS Fargate and AWS Lambda are serverless compute services. Fargate is a serverless compute engine for containers that works with ECS and EKS. The other options require you to manage servers or instances in some capacity. [Reference](https://aws.amazon.com/serverless/)",
  },
  {
    id: uuidv5("aws-question-313", uuidv5.URL),
    text: "For compliance and regulatory purposes, a government agency requires that their applications must run on hardware that is dedicated to them only. How can you meet this requirement?",
    options: [
      "Use EC2 Dedicated Hosts",
      "Use EC2 Reserved Instances",
      "Use EC2 Spot Instances",
      "Use EC2 On-demand Instances",
    ],
    correctAnswers: [0],
    explanation:
      "EC2 Dedicated Hosts provide physical servers dedicated for your use. They can help you meet compliance requirements and reduce costs by allowing you to use your existing server-bound software licenses. This is ideal for regulatory requirements that may require you to use dedicated hardware. [Reference](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-overview.html)",
  },
  {
    id: uuidv5("aws-question-314", uuidv5.URL),
    text: "Which AWS Cost Governance best practice recommends refining workloads regularly to make the most of existing AWS resources and reduce costs?",
    options: [
      "Tagging Enforcement",
      "Architecture Optimization",
      "Budgeting Processes",
      "Resource Controls",
    ],
    correctAnswers: [1],
    explanation:
      "Architecture Optimization is a best practice that involves regularly reviewing and refining your workloads to ensure they're using AWS resources efficiently. This includes right-sizing resources, choosing the right pricing models, and implementing architectural patterns that maximize efficiency and minimize costs. [Reference](https://docs.aws.amazon.com/wellarchitected/latest/framework/cost-optimization.html)",
  },
  {
    id: uuidv5("aws-question-315", uuidv5.URL),
    text: "An organization needs to build a financial application that requires support for ACID transactions. Which AWS database service is most appropriate in this case?",
    options: ["RedShift", "RDS", "CloudHSM", "DMS"],
    correctAnswers: [1],
    explanation:
      "Amazon RDS (Relational Database Service) is the most appropriate choice for applications requiring ACID (Atomicity, Consistency, Isolation, Durability) transactions. RDS supports various relational database engines like MySQL, PostgreSQL, and Oracle, which all provide ACID compliance necessary for financial applications. [Reference](https://aws.amazon.com/rds/)",
  },
  {
    id: uuidv5("aws-question-316", uuidv5.URL),
    text: "What can you assign permissions directly to an IAM user?",
    options: ["IAM Identity", "IAM Group", "IAM Role", "IAM Policy"],
    correctAnswers: [3],
    explanation:
      "IAM Policies are JSON documents that define permissions and can be attached directly to IAM users, groups, or roles. They are the primary way to define and assign permissions in AWS, specifying what actions are allowed or denied on what AWS resources. [Reference](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html)",
  },
  {
    id: uuidv5("aws-question-317", uuidv5.URL),
    text: "The owner of an E-Commerce application notices that the compute capacity requirements vary heavily from time to time. What makes AWS more economical than traditional data centers for this type of application?",
    options: [
      "AWS allows customers to launch powerful EC2 instances to handle spikes in load",
      "AWS allows customers to pay upfront to get bigger discounts",
      "AWS allows customers to launch and terminate EC2 instances based on demand",
      "AWS allows customers to choose cheaper types of EC2 instances that best fit their needs",
    ],
    correctAnswers: [2],
    explanation:
      "One of the main benefits of AWS is the ability to scale resources up and down based on demand (elasticity). For an E-Commerce application with varying workloads, being able to launch instances when traffic is high and terminate them when traffic is low helps optimize costs compared to traditional data centers where you need to provision for peak capacity. [Reference](https://aws.amazon.com/autoscaling/)",
  },
  {
    id: uuidv5("aws-question-318", uuidv5.URL),
    text: "Which of the following is not one of the database engines supported by Amazon RDS?",
    options: ["PostgreSQL", "Oracle", "Microsoft SQL Server", "Teradata"],
    correctAnswers: [3],
    explanation:
      "Amazon RDS supports six database engines: MySQL, PostgreSQL, MariaDB, Oracle, Microsoft SQL Server, and Amazon Aurora. Teradata is not supported on Amazon RDS. If you need to run a custom or unsupported database engine, EC2 is the appropriate choice. [Reference](https://aws.amazon.com/rds/)",
  },
  {
    id: uuidv5("aws-question-319", uuidv5.URL),
    text: "Which AWS service would help you migrate on-premise databases to AWS?",
    options: [
      "AWS DMS",
      "Amazon S3 Transfer Acceleration",
      "AWS Directory Service",
      "AWS Transit Gateway",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Database Migration Service (DMS) helps you migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database. It supports homogeneous migrations (same database engine) and heterogeneous migrations (different database engines). [Reference](https://aws.amazon.com/dms/)",
  },
  {
    id: uuidv5("aws-question-320", uuidv5.URL),
    text: "For new AWS customers, what is the EASIEST way to launch a simple WordPress website on AWS?",
    options: [
      "Run WordPress on an Amazon Lightsail instance",
      "Install WordPress on an Amazon EC2 instance",
      "Use the Amazon S3 Web hosting feature",
      "Host the website directly on AWS Cloud Development Kit (AWS CDK)",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon Lightsail is the easiest way to get started with AWS for developers, small businesses, students, and other users who need a simple virtual private server (VPS) solution. Lightsail provides everything you need to launch a WordPress website, including a virtual machine, SSD-based storage, data transfer, DNS management, and a static IP address. [Reference](https://aws.amazon.com/lightsail/)",
  },
  {
    id: uuidv5("aws-question-321", uuidv5.URL),
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
      "AWS Key Management Service (KMS) and CloudHSM are both services for managing encryption keys in AWS. KMS is a managed service that makes it easy to create and control encryption keys, while CloudHSM provides hardware security modules (HSMs) for generating and managing cryptographic keys. The other services are not related to encryption key management: AWS Certificate Manager is for managing SSL/TLS certificates, AWS CodeDeploy is for automating application deployments, and AWS CodeCommit is a source control service. [Reference](https://docs.aws.amazon.com/kms/latest/developerguide/overview.html)",
  },
  {
    id: uuidv5("aws-question-322", uuidv5.URL),
    text: "Which service allows you to install and run custom relational database software?",
    options: ["Amazon EC2", "Amazon Cognito", "Amazon RDS", "Amazon Inspector"],
    correctAnswers: [0],
    explanation:
      "Amazon EC2 (Elastic Compute Cloud) provides virtual servers where you can install and run any software, including custom relational database software. While RDS is a managed database service, it only supports specific database engines. Amazon Cognito is for user authentication, and Amazon Inspector is for security assessments, neither of which are related to running custom database software. [Reference](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html)",
  },
  {
    id: uuidv5("aws-question-323", uuidv5.URL),
    text: "Your application requirements for CPU and RAM are changing in an unpredictable way. Which service can be used to dynamically adjust these resources based on load?",
    options: [
      "Auto Scaling",
      "ELB",
      "Amazon Route53",
      "Amazon Elastic Container Service",
    ],
    correctAnswers: [0],
    explanation:
      "Auto Scaling helps you maintain application availability and allows you to automatically add or remove EC2 instances according to conditions you define. ELB (Elastic Load Balancer) distributes traffic but does not scale resources. Amazon Route53 is a DNS service, and Amazon Elastic Container Service is for managing containers, not scaling EC2 instances. [Reference](https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html)",
  },
  {
    id: uuidv5("aws-question-324", uuidv5.URL),
    text: "A company has infrastructure hosted in an on-premises data center. They currently have an operations team that takes care of identity management. If they decide to migrate to the AWS cloud, which of the following services would help them perform the same role in AWS?",
    options: ["AWS IAM", "AWS Outposts", "AWS Federation", "Amazon Redshift"],
    correctAnswers: [0],
    explanation:
      "AWS Identity and Access Management (IAM) allows users to securely manage access to AWS services and resources by defining permissions for individual users or groups. AWS Outposts is for extending AWS infrastructure to on-premises environments, AWS Federation is not a service but a concept for integrating external identity providers, and Amazon Redshift is a data warehouse service. [Reference](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html)",
  },
  {
    id: uuidv5("aws-question-325", uuidv5.URL),
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
      "Two key design principles for cloud systems are loose coupling (which increases flexibility and reduces interdependencies) and treating servers as disposable resources (enabling automation and reducing the impact of failures). Reserved capacity is less flexible, servers instead of managed services reduce scalability, and Multi-AZ deployments focus on availability within a region, not global resilience. [Reference](https://docs.aws.amazon.com/wellarchitected/latest/framework/operational-excellence-pillar.html)",
  },
  {
    id: uuidv5("aws-question-326", uuidv5.URL),
    text: "Where can AWS account owners get a list of all users in their account, including the status of their AWS credentials?",
    options: [
      "AWS CloudTrail Trails",
      "IAM Credential Report",
      "AWS Artifact reports",
      "AWS Cost and Usage Report",
    ],
    correctAnswers: [1],
    explanation:
      "The IAM Credential Report lists all users in your AWS account and the status of their various credentials, including passwords, access keys, and MFA devices. AWS CloudTrail records API activity, AWS Artifact provides compliance reports, and AWS Cost and Usage Report tracks billing data, none of which provide user credential details. [Reference](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_getting-report.html)",
  },
  {
    id: uuidv5("aws-question-327", uuidv5.URL),
    text: "Which service enables you to easily generate and use your own encryption keys in the AWS Cloud?",
    options: [
      "AWS Shield",
      "AWS Certificate Manager",
      "AWS CloudHSM",
      "AWS WAF",
    ],
    correctAnswers: [2],
    explanation:
      "AWS CloudHSM provides hardware security modules (HSMs) in the AWS Cloud. It enables you to easily generate and use your own encryption keys on the AWS Cloud. AWS Shield is for DDoS protection, AWS Certificate Manager manages SSL/TLS certificates, and AWS WAF is a web application firewall, none of which are related to encryption key management. [Reference](https://docs.aws.amazon.com/cloudhsm/latest/userguide/introduction.html)",
  },
  {
    id: uuidv5("aws-question-328", uuidv5.URL),
    text: "Which of the following resources can an AWS customer use to learn more about prohibited uses of the services offered by AWS?",
    options: [
      "AWS Service Control Policies (SCPs)",
      "AWS Artifact",
      "AWS Budgets",
      "AWS Acceptable Use Policy",
    ],
    correctAnswers: [3],
    explanation:
      "The AWS Acceptable Use Policy describes prohibited uses of the web services offered by Amazon Web Services. AWS Service Control Policies (SCPs) manage permissions within AWS Organizations, AWS Artifact provides compliance reports, and AWS Budgets tracks spending, none of which address prohibited uses. [Reference](https://aws.amazon.com/aup/)",
  },
  {
    id: uuidv5("aws-question-329", uuidv5.URL),
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
      "AWS Security Bulletins and the AWS Security Blog are free resources available to all AWS users. AWS TAM (Technical Account Manager) is part of paid support plans, AWS Support API requires a subscription, and AWS Classroom Training is a paid service. [Reference](https://aws.amazon.com/security/security-resources/)",
  },
  {
    id: uuidv5("aws-question-330", uuidv5.URL),
    text: "How can you protect data stored on Amazon S3 from accidental deletion?",
    options: [
      "By enabling S3 Versioning",
      "By configuring S3 Bucket Policies",
      "By configuring S3 Lifecycle Policies",
      "By disabling S3 Cross-Region Replication (CRR)",
    ],
    correctAnswers: [0],
    explanation:
      "S3 Versioning is the feature that helps protect against accidental deletion of objects in S3 buckets. Bucket Policies control access, Lifecycle Policies manage object expiration, and disabling CRR does not prevent accidental deletion. [Reference](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Versioning.html)",
  },
  {
    id: uuidv5("aws-question-331", uuidv5.URL),
    text: "How does AWS help customers achieve compliance in the cloud?",
    options: [
      "It's not possible to meet regulatory compliance requirements in the Cloud",
      "AWS applies the most common Cloud security standards, and is responsible for complying with customers' applicable laws and regulations",
      "AWS has many common assurance certifications such as ISO 9001 and HIPAA",
      "Many AWS services are assessed regularly to comply with local laws and regulations",
    ],
    correctAnswers: [2],
    explanation:
      "AWS maintains many certifications and assurance programs (such as ISO 9001, HIPAA, and others) that help customers achieve their compliance requirements. However, compliance is a shared responsibility, and customers must ensure their specific use of AWS services meets their compliance needs. The other options are incorrect because: (1) Compliance is possible in the cloud; (2) AWS does not take full responsibility for customer compliance; (4) While AWS services are assessed regularly, certifications are the primary assurance mechanism. [Reference](https://aws.amazon.com/compliance/)",
  },
  {
    id: uuidv5("aws-question-332", uuidv5.URL),
    text: "Who is responsible for scaling a DynamoDB database in the AWS Shared Responsibility Model?",
    options: [
      "Your security team",
      "Your development team",
      "AWS",
      "Your internal DevOps team",
    ],
    correctAnswers: [2],
    explanation:
      "Under the AWS Shared Responsibility Model, AWS is responsible for managing and scaling DynamoDB. This is one of the key benefits of using managed services like DynamoDB - AWS handles the underlying infrastructure and scaling operations automatically. The other options are incorrect because scaling is not the responsibility of the customer's security, development, or DevOps teams. [Reference](https://docs.aws.amazon.com/dynamodb/latest/developerguide/Introduction.html)",
  },
  {
    id: uuidv5("aws-question-333", uuidv5.URL),
    text: "You are working as a web app developer. You are currently facing issues in media playback for mobile devices because your media format is not supported. Which of the following AWS services can help you convert your media into another format?",
    options: [
      "Amazon Elastic Transcoder",
      "Amazon Pinpoint",
      "AmazonS3",
      "Amazon Rekognition",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon Elastic Transcoder is designed specifically for converting media files from their source format into versions that will play on various devices. The other options are incorrect because: (1) Amazon Pinpoint is for customer engagement and analytics; (2) Amazon S3 is for object storage, not media conversion; (3) Amazon Rekognition is for image and video analysis, not format conversion. [Reference](https://docs.aws.amazon.com/elastictranscoder/latest/developerguide/what-is.html)",
  },
  {
    id: uuidv5("aws-question-334", uuidv5.URL),
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
      "AWS Organizations provides centralized management of access to AWS services through Service Control Policies (SCPs) and consolidated billing across multiple AWS accounts, which helps organizations better manage and optimize their AWS costs. The other options are incorrect because: (2) Organizations do not directly help with cloud adoption; (3) Payment methods are not managed by Organizations; (4) Business outcomes are not directly influenced by Organizations. [Reference](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html)",
  },
  {
    id: uuidv5("aws-question-335", uuidv5.URL),
    text: "Which AWS service allows you to build a data warehouse in the cloud?",
    options: [
      "AWS Shield",
      "Amazon Redshift",
      "Amazon RDS",
      "Amazon Comprehend",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon Redshift is AWS's fully managed data warehouse service that allows you to run complex queries on structured and semi-structured data efficiently. The other options are incorrect because: (1) AWS Shield is for DDoS protection; (3) Amazon RDS is for relational databases, not data warehousing; (4) Amazon Comprehend is for natural language processing. [Reference](https://docs.aws.amazon.com/redshift/latest/mgmt/welcome.html)",
  },
  {
    id: uuidv5("aws-question-336", uuidv5.URL),
    text: "Which of the following AWS services can help you buy third-party software solutions and services that run on AWS resources?",
    options: [
      "AWS Application Discovery service",
      "Amazon DevPay",
      "AWS Marketplace",
      "Resource Groups",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Marketplace is a digital catalog with thousands of software listings from independent software vendors that makes it easy to find, test, buy, and deploy software that runs on AWS. The other options are incorrect because: (1) Application Discovery Service is for migration planning; (2) Amazon DevPay is for billing; (4) Resource Groups are for organizing AWS resources. [Reference](https://aws.amazon.com/marketplace/)",
  },
  {
    id: uuidv5("aws-question-337", uuidv5.URL),
    text: "Which of the following is NOT a characteristic of Amazon EC2?",
    options: [
      "Amazon EC2 is considered a Serverless Web Service.",
      "Amazon EC2 eliminates the need to invest in hardware upfront.",
      "Amazon EC2 can launch as many or as few virtual servers as needed.",
      "Amazon EC2 offers scalable computing.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon EC2 is not a serverless service. It requires provisioning of servers, which is contrary to the serverless model. The other options are correct characteristics of EC2: (2) EC2 eliminates upfront hardware investment; (3) EC2 allows flexible scaling; (4) EC2 provides scalable computing. [Reference](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html)",
  },
  {
    id: uuidv5("aws-question-338", uuidv5.URL),
    text: "Which service can help you register a new domain name?",
    options: ["Amazon Personalize", "Amazon Route 53", "AWS KMS", "AWS Config"],
    correctAnswers: [1],
    explanation:
      "Amazon Route 53 is AWS’s scalable Domain Name System (DNS) web service that can also be used to register and manage domain names. The other options are incorrect because: (1) Amazon Personalize is for machine learning personalization; (3) AWS KMS is for encryption key management; (4) AWS Config is for resource configuration tracking. [Reference](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/domain-register.html)",
  },
  {
    id: uuidv5("aws-question-339", uuidv5.URL),
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
      "Amazon Inspector and AWS Config help with security analysis and auditing for compliance by analyzing configurations and detecting vulnerabilities. The other options are incorrect because: (2) Virtual Private Gateway is for hybrid networking; (3) AWS Batch is for batch processing; (4) Amazon ECS is for container orchestration. [Reference](https://docs.aws.amazon.com/inspector/latest/user/what-is-inspector.html) [Reference](https://docs.aws.amazon.com/config/latest/developerguide/WhatIsConfig.html)",
  },
  {
    id: uuidv5("aws-question-340", uuidv5.URL),
    text: "Which of the following is NOT one of the database engines supported by Amazon RDS?",
    options: ["PostgreSQL", "Oracle", "Microsoft SQL Server", "Teradata"],
    correctAnswers: [3],
    explanation:
      "Amazon RDS supports six database engines: MySQL, PostgreSQL, MariaDB, Oracle, Microsoft SQL Server, and Amazon Aurora. Teradata is not supported on Amazon RDS. If you need to run a custom or unsupported database engine, EC2 is the appropriate choice. The other options are valid database engines supported by RDS. [Reference](https://aws.amazon.com/rds/)",
  },
  {
    id: uuidv5("aws-question-341", uuidv5.URL),
    text: "Which of the following services can help you migrate on-premise databases to AWS?",
    options: [
      "AWS DMS",
      "Amazon S3 Transfer Acceleration",
      "AWS Directory Service",
      "AWS Transit Gateway",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Database Migration Service (DMS) helps you migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database. It supports homogeneous migrations (same database engine) and heterogeneous migrations (different database engines). The other options are incorrect because: (1) Amazon S3 Transfer Acceleration is for speeding up uploads to S3; (2) AWS Directory Service is for managing directories; (3) AWS Transit Gateway is for connecting VPCs and on-premises networks. [Reference](https://aws.amazon.com/dms/)",
  },
  {
    id: uuidv5("aws-question-342", uuidv5.URL),
    text: "For new AWS customers, what is the EASIEST way to launch a simple WordPress website on AWS?",
    options: [
      "Run WordPress on an Amazon Lightsail instance",
      "Install WordPress on an Amazon EC2 instance",
      "Use the Amazon S3 Web hosting feature",
      "Host the website directly on AWS Cloud Development Kit (AWS CDK)",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon Lightsail is the easiest way to get started with AWS for developers, small businesses, students, and other users who need a simple virtual private server (VPS) solution. Lightsail provides everything you need to launch a WordPress website, including a virtual machine, SSD-based storage, data transfer, DNS management, and a static IP address. The other options are incorrect because: (1) Installing WordPress on EC2 requires more manual setup; (2) S3 is for hosting static websites, not dynamic ones like WordPress; (3) AWS CDK is a development framework, not a hosting solution. [Reference](https://aws.amazon.com/lightsail/)",
  },
  {
    id: uuidv5("aws-question-343", uuidv5.URL),
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
      "AWS Key Management Service (KMS) and CloudHSM are both services for managing encryption keys in AWS. KMS is a managed service that makes it easy to create and control encryption keys, while CloudHSM provides hardware security modules (HSMs) for generating and managing cryptographic keys. The other options are incorrect because: (1) AWS Certificate Manager is for managing SSL/TLS certificates; (2) AWS CodeDeploy is for automating application deployments; (3) AWS CodeCommit is a source control service. [Reference](https://docs.aws.amazon.com/kms/latest/developerguide/overview.html)",
  },
  {
    id: uuidv5("aws-question-344", uuidv5.URL),
    text: "Which service enables you to run containerized applications on a serverless infrastructure?",
    options: [
      "Amazon EC2",
      "AWS Lambda",
      "Amazon ECS with Fargate",
      "AWS Batch",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon ECS with Fargate is a serverless compute engine for containers that allows you to run containerized applications without managing the underlying infrastructure. The other options are incorrect because: (1) Amazon EC2 requires server management; (2) AWS Lambda is for running code, not containers; (3) AWS Batch is for batch processing, not container orchestration. [Reference](https://aws.amazon.com/fargate/)",
  },
  {
    id: uuidv5("aws-question-345", uuidv5.URL),
    text: "Which AWS service helps developers compile and test their code?",
    options: [
      "AWS CodeDeploy",
      "AWS CodeCommit",
      "CloudEndure",
      "AWS CodeBuild",
    ],
    correctAnswers: [3],
    explanation:
      "AWS CodeBuild is a fully managed continuous integration service that compiles source code, runs tests, and produces software packages that are ready to deploy. The other options are incorrect because: (1) AWS CodeDeploy is for deploying applications; (2) AWS CodeCommit is a source control service; (3) CloudEndure is for disaster recovery and migration. [Reference](https://docs.aws.amazon.com/codebuild/latest/userguide/welcome.html)",
  },
  {
    id: uuidv5("aws-question-346", uuidv5.URL),
    text: "What does the Amazon CloudFront service provide? (Choose TWO)",
    options: [
      "Tracks user activity and API usage",
      "Increases application availability by caching at the edge",
      "Enables faster disaster recovery",
      "Stores archived data at very low costs",
      "Delivers content to end users with low latency",
    ],
    correctAnswers: [1, 4],
    explanation:
      "Amazon CloudFront is a content delivery network (CDN) service that increases application availability through edge caching and delivers content to end users with low latency by using a global network of edge locations. The other options are incorrect because: (1) Tracking user activity is done by services like CloudTrail; (2) Disaster recovery is not a primary feature of CloudFront; (3) Storing archived data is done by services like S3 Glacier. [Reference](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)",
  },
  {
    id: uuidv5("aws-question-347", uuidv5.URL),
    text: "You are facing a lot of problems with your current contact center. Which service provides a cloud-based contact center that can deliver a better service for your customers?",
    options: [
      "Amazon Lightsail",
      "Amazon Connect",
      "AWS Direct Connect",
      "AWS Elastic Beanstalk",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon Connect is a cloud-based contact center service that makes it easy to set up and manage a customer contact center and provide reliable customer engagement at any scale. The other options are incorrect because: (1) Amazon Lightsail is for hosting applications; (2) AWS Direct Connect is for network connectivity; (3) AWS Elastic Beanstalk is for deploying applications, not managing contact centers. [Reference](https://aws.amazon.com/connect/)",
  },
  {
    id: uuidv5("aws-question-348", uuidv5.URL),
    text: "You manage a blog on AWS that has different environments: development, testing, and production. What can you use to create a custom console for each environment to view and manage your resources easily?",
    options: [
      "AWS Resource Groups",
      "AWS Placement Groups",
      "AWS Management Console",
      "AWS Tag Editor",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Resource Groups let you organize AWS resources such as EC2 instances, databases, or S3 buckets into groups using tags. This makes it easier to manage, monitor, and automate tasks on large numbers of resources at once. The other options are incorrect because: (1) AWS Placement Groups are for optimizing EC2 instance placement; (2) AWS Management Console is a general interface, not specific to environments; (3) AWS Tag Editor is for editing tags, not creating custom consoles. [Reference](https://docs.aws.amazon.com/ARG/latest/userguide/welcome.html)",
  },
  {
    id: uuidv5("aws-question-349", uuidv5.URL),
    text: "Which AWS service collects metrics from running EC2 instances?",
    options: [
      "Amazon Inspector",
      "Amazon CloudWatch",
      "AWS CloudFormation",
      "AWS CloudTrail",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon CloudWatch is a monitoring and observability service that provides data and actionable insights for AWS resources. It collects monitoring and operational data in the form of logs, metrics, and events from EC2 instances and other AWS resources, allowing you to detect anomalous behavior in your environments. The other options are incorrect because: (1) Amazon Inspector is for security assessments; (2) AWS CloudFormation is for infrastructure as code; (3) AWS CloudTrail logs API activity, not metrics. [Reference](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html)",
  },
  {
    id: uuidv5("aws-question-350", uuidv5.URL),
    text: "Which of the following services allows you to install and run custom relational database software?",
    options: [
      "Amazon EC2.",
      "Amazon Cognito.",
      "Amazon RDS.",
      "Amazon Inspector.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon EC2 is a service that provides scalable computing capacity in the cloud. You can install and run custom relational database software on an EC2 instance, giving you full control over your database environment. The other options are incorrect because: (1) Amazon Cognito is for user authentication; (2) Amazon RDS is a managed database service, not for custom installations; (3) Amazon Inspector is for security assessments. [Reference](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html)",
  },
];

const exam8: Question[] = [
  {
    id: uuidv5("aws-question-351", uuidv5.URL),
    text: "What is the main benefit of attaching security groups to an Amazon RDS instance?",
    options: [
      "Manages user access and encryption keys.",
      "Controls what IP address ranges can connect to your database instance.",
      "Deploys SSL/TLS certificates for use with your database instance.",
      "Distributes incoming traffic across multiple targets.",
    ],
    correctAnswers: [1],
    explanation:
      "Security Groups act as a virtual firewall for your Amazon RDS instance, allowing you to control inbound and outbound traffic by specifying allowed IP ranges and ports. The other options are incorrect: user access and encryption keys are managed differently (A), SSL/TLS certificates are not deployed by security groups (C), and distributing traffic is related to load balancers, not security groups (D). [Learn more](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.RDSSecurityGroups.html)",
  },
  {
    id: uuidv5("aws-question-352", uuidv5.URL),
    text: "A company wants to use Amazon Elastic Container Service (Amazon ECS) to run its containerized applications. For compliance reasons, the company wants to retain complete visibility and control over the underlying server cluster. Which Amazon ECS launch type will satisfy these requirements?",
    options: [
      "EC2 launch type.",
      "Fargate launch type.",
      "Lightsail launch type.",
      "Lambda launch type.",
    ],
    correctAnswers: [0],
    explanation:
      "The EC2 launch type allows the company to manage the underlying EC2 instances that host the containers, providing full visibility and control over the infrastructure. The Fargate launch type abstracts the underlying servers (B), Lightsail is not used for ECS (C), and Lambda is a serverless compute service, not a container hosting solution (D). [Learn more](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html)",
  },
  {
    id: uuidv5("aws-question-353", uuidv5.URL),
    text: "You have multiple standalone AWS accounts and you want to decrease your AWS monthly charges. What should you do?",
    options: [
      "Try to remove unnecessary AWS accounts.",
      "Add the accounts to an AWS Organization and use Consolidated Billing.",
      "Track the AWS charges that are incurred by the member accounts.",
      "Enable AWS tiered-pricing before provisioning resources.",
    ],
    correctAnswers: [1],
    explanation:
      "Using AWS Organizations with Consolidated Billing allows you to combine usage across multiple accounts to benefit from volume pricing discounts and simplify billing. Removing accounts (A) doesn't directly reduce charges, tracking costs (C) doesn't reduce them either, and there is no such feature as enabling 'tiered-pricing' manually (D). [Learn more](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html)",
  },
  {
    id: uuidv5("aws-question-354", uuidv5.URL),
    text: "You have been tasked with auditing the security of your VPC. As part of this process, you need to start by analyzing what inbound and outbound traffic is allowed on your EC2 instances. What two parts of the VPC do you need to check to accomplish this task?",
    options: [
      "Network ACLs and Traffic Manager.",
      "Network ACLs and Subnets.",
      "Security Groups and Internet Gateways.",
      "Security Groups and Network ACLs.",
    ],
    correctAnswers: [3],
    explanation:
      "To analyze allowed inbound and outbound traffic, you need to check both Security Groups and Network ACLs. Security Groups operate at the instance level and control traffic specifically for that instance. Network ACLs operate at the subnet level and provide another layer of traffic control. The other options include components not directly related to traffic rules, such as Traffic Manager (A), or incorrectly combine unrelated items (B, C). [Learn more](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Security.html)",
  },
  {
    id: uuidv5("aws-question-355", uuidv5.URL),
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
      "The AWS 'Business' support plan provides access to the full set of Trusted Advisor checks and the AWS Support API. The other options, such as Concierge Service (B) and Proactive Technical Account Management (E), are part of the 'Enterprise' support plan. Less than 15-minute response time (C) is also exclusive to the 'Enterprise' support plan. [Learn more](https://aws.amazon.com/premiumsupport/plans/business/)",
  },
  {
    id: uuidv5("aws-question-356", uuidv5.URL),
    text: "You have just finished writing your application code. Which service can be used to automate the deployment and scaling of your application?",
    options: [
      "Amazon Simple Storage Service.",
      "AWS Elastic Beanstalk.",
      "AWS CodeCommit.",
      "Amazon Elastic File System.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Elastic Beanstalk provides an easy way to deploy and scale web applications and services. It automates the deployment process, including provisioning the necessary resources and scaling. S3 (A) is for storage, CodeCommit (C) is for version control, and EFS (D) is for file storage. [Learn more](https://aws.amazon.com/elasticbeanstalk/)",
  },
  {
    id: uuidv5("aws-question-357", uuidv5.URL),
    text: "Which statement is true in relation to security in AWS?",
    options: [
      "AWS manages everything related to EC2 operating systems.",
      "AWS customers are responsible for patching any database software running on Amazon EC2.",
      "Server side encryption is the responsibility of AWS.",
      "AWS is responsible for the security of your application.",
    ],
    correctAnswers: [1],
    explanation:
      "According to AWS's Shared Responsibility Model, customers are responsible for managing and patching the database software on their EC2 instances. AWS manages the infrastructure, but the application and its related security are the customer's responsibility. The other options misrepresent the division of responsibilities. [Learn more](https://aws.amazon.com/compliance/shared-responsibility-model/)",
  },
  {
    id: uuidv5("aws-question-358", uuidv5.URL),
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
      "Amazon EC2 improves fault-tolerance by allowing the use of multiple Availability Zones and can be scaled up or down quickly as needed. While seamless remote accessibility (B) and automatic backups (D) are features of other AWS services, they are not unique to EC2. Network security (C) is managed by Security Groups and not specifically tied to EC2’s benefits. [Learn more](https://aws.amazon.com/ec2/faqs/)",
  },
  {
    id: uuidv5("aws-question-359", uuidv5.URL),
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
      "AWS's pricing model includes pay-as-you-go, meaning no upfront fees, and you only pay for the services you use without long-term contracts. However, some third-party software (B) and reserved instances (E) can involve additional costs or commitments, and there are no 'startup fees' for AWS services (D). [Learn more](https://aws.amazon.com/pricing/)",
  },
  {
    id: uuidv5("aws-question-360", uuidv5.URL),
    text: "Which AWS service provides the EASIEST way to set up and manage a secure, well-architected, multi-account AWS environment?",
    options: [
      "AWS Control Tower.",
      "Amazon Macie.",
      "AWS Systems Manager Patch Manager.",
      "AWS Security Hub.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Control Tower simplifies the process of setting up and managing a multi-account AWS environment by providing pre-configured best practices. Macie (B) is for data security and privacy, Patch Manager (C) handles patching, and Security Hub (D) centralizes security alerts but doesn’t directly manage multi-account setups. [Learn more](https://aws.amazon.com/controltower/)",
  },
  {
    id: uuidv5("aws-question-361", uuidv5.URL),
    text: "A company is running a large web application that needs to always be available. The application tends to slow down when CPU usage is greater than 60%. How can they track when CPU usage goes above 60% for any of the EC2 Instances in their account?",
    options: [
      "Use CloudFront to monitor the CPU usage.",
      "Set the AWS Config CPU threshold to 60% to receive a notification when EC2 usage exceeds that value.",
      "Use CloudWatch Alarms to monitor the CPU and alert when the CPU usage is >= 60%.",
      "Use SNS to monitor the utilization of the server.",
    ],
    correctAnswers: [2],
    explanation:
      "La forma correcta de monitorear el uso de CPU en instancias EC2 y recibir alertas cuando supera el 60% es mediante Amazon CloudWatch Alarms, que permite establecer umbrales y notificaciones automáticas. CloudFront (A) es un servicio de entrega de contenido y no monitorea métricas de instancias. AWS Config (B) rastrea cambios de configuración, pero no monitorea métricas de uso de CPU. SNS (D) es un servicio de notificaciones, pero no monitorea métricas directamente, aunque puede ser usado como destino de las alarmas. Más información: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html",
  },
  {
    id: uuidv5("aws-question-362", uuidv5.URL),
    text: "What is the recommended storage option when hosting an often-changing database on an Amazon EC2 instance?",
    options: [
      "Amazon EBS.",
      "Amazon RDS.",
      "You can't run a database inside an Amazon EC2 instance.",
      "Amazon DynamoDB.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon EBS (Elastic Block Store) es la opción recomendada para bases de datos en EC2 porque ofrece almacenamiento de alto rendimiento, durabilidad y permite cambios frecuentes en los datos. RDS (B) y DynamoDB (D) son servicios gestionados de base de datos, pero no se usan directamente como almacenamiento para bases de datos instaladas en EC2. La opción C es incorrecta porque sí se pueden ejecutar bases de datos en EC2. Más información: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html",
  },
  {
    id: uuidv5("aws-question-363", uuidv5.URL),
    text: "You are working as a site reliability engineer (SRE) in an AWS environment, which of the following services helps monitor your applications?",
    options: [
      "Amazon CloudWatch.",
      "Amazon CloudSearch.",
      "Amazon Elastic MapReduce.",
      "Amazon CloudHSM.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon CloudWatch es el servicio de AWS para monitorear aplicaciones, recolectando métricas y logs. CloudSearch (B) es para búsquedas, Elastic MapReduce (C) es para procesamiento de big data y CloudHSM (D) es para módulos de seguridad de hardware, ninguno de estos monitorea aplicaciones. Más información: https://docs.aws.amazon.com/cloudwatch/",
  },
  {
    id: uuidv5("aws-question-364", uuidv5.URL),
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
      "AWS Lambda cobra según el número de solicitudes a tus funciones y el tiempo de cómputo consumido (GB-segundos). El almacenamiento (A), número de volúmenes (C) y placement groups (D) no afectan el costo de Lambda, ya que no son relevantes para funciones serverless. Más información: https://aws.amazon.com/lambda/pricing/",
  },
  {
    id: uuidv5("aws-question-365", uuidv5.URL),
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
      "Un usuario IAM está asociado a una sola persona y tiene credenciales permanentes. Un rol IAM puede ser asumido por diferentes entidades y utiliza credenciales temporales. Las opciones C, D y E son incorrectas porque el costo no varía entre usuarios y roles, y la asociación/credenciales están invertidas o mal explicadas. Más información: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_vs_roles.html",
  },
  {
    id: uuidv5("aws-question-366", uuidv5.URL),
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
      "Eliminar snapshots innecesarios reduce costos porque ocupan almacenamiento, y cambiar el tipo de volumen a uno más económico también puede disminuir gastos. Eliminar buckets (A) aplica a S3, no a EBS. Las reservas (B) no aplican a EBS y distribuir solicitudes (E) no afecta el costo. Más información: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-cost-savings.html",
  },
  {
    id: uuidv5("aws-question-367", uuidv5.URL),
    text: "What does Amazon GuardDuty do to protect AWS accounts and workloads?",
    options: [
      "Notifies AWS customers about abuse events once they are reported.",
      "Continuously monitors AWS infrastructure and helps detect threats such as attacker reconnaissance or account compromise.",
      "Helps AWS customers identify the root cause of potential security issues.",
      "Checks security groups for rules that allow unrestricted access to AWS resources.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon GuardDuty monitorea continuamente la infraestructura AWS para detectar amenazas como reconocimiento de atacantes o compromiso de cuentas. No notifica sobre abusos reportados (A), no realiza análisis de causa raíz (C) ni revisa reglas de grupos de seguridad específicamente (D). Más información: https://docs.aws.amazon.com/guardduty/latest/ug/what-is-guardduty.html",
  },
  {
    id: uuidv5("aws-question-368", uuidv5.URL),
    text: 'Which database service should you use if your application and data schema require "joins" or complex transactions?',
    options: [
      "Amazon RDS.",
      "AWS Outposts.",
      "Amazon DocumentDB.",
      "Amazon DynamoDB.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon RDS es un servicio de base de datos relacional que soporta joins y transacciones complejas. Outposts (B) es infraestructura híbrida, DocumentDB (C) es para documentos y DynamoDB (D) es NoSQL, ninguno de estos soporta joins o transacciones complejas nativamente. Más información: https://aws.amazon.com/rds/",
  },
  {
    id: uuidv5("aws-question-369", uuidv5.URL),
    text: "Which of the following makes it easier for you to categorize, manage and filter your resources?",
    options: [
      "Amazon CloudWatch.",
      "AWS Service Catalog.",
      "AWS Directory Service.",
      "AWS Tagging.",
    ],
    correctAnswers: [3],
    explanation:
      "AWS Tagging permite categorizar y organizar recursos mediante metadatos (tags). CloudWatch (A) es para monitoreo, Service Catalog (B) para gestión de servicios y Directory Service (C) para directorios, ninguno de estos facilita la categorización y filtrado de recursos como los tags. Más información: https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html",
  },
  {
    id: uuidv5("aws-question-370", uuidv5.URL),
    text: "What should you consider when storing data in Amazon Glacier?",
    options: [
      "Amazon Glacier only accepts data in a compressed format.",
      "Glacier can only be used to store frequently accessed data and data archives.",
      "Amazon Glacier does not provide immediate retrieval of data.",
      "Attach Glacier to an EC2 Instance to be able to store data.",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon Glacier está diseñado para archivado a largo plazo y bajo costo, pero la recuperación de datos no es inmediata y puede tardar minutos u horas. No requiere datos comprimidos (A), no es para acceso frecuente (B) y no se adjunta a EC2 (D). Más información: https://docs.aws.amazon.com/amazonglacier/latest/dev/introduction.html",
  },
  {
    id: uuidv5("aws-question-371", uuidv5.URL),
    text: "Engineers are wasting a lot of time and effort managing batch computing software in traditional data centers. Which of the following AWS services allows them to easily run thousands of batch computing jobs?",
    options: ["Amazon EC2.", "AWS Batch.", "Lambda@Edge.", "AWS Fargate."],
    correctAnswers: [1],
    explanation:
      "AWS Batch is a managed service that enables you to efficiently run hundreds or thousands of batch computing jobs without the need to install or manage batch processing software. Amazon EC2 (A) provides compute resources but requires manual management of batch software. Lambda@Edge (C) is for serverless functions at edge locations, not for batch jobs. AWS Fargate (D) is a serverless compute engine for containers, not specifically for batch processing. More info: https://docs.aws.amazon.com/batch/latest/userguide/what-is-batch.html",
  },
  {
    id: uuidv5("aws-question-372", uuidv5.URL),
    text: "How can you increase your application’s fault-tolerance while it is being hosted in AWS?",
    options: [
      "Deploy your application across multiple EC2 instances.",
      "Deploy your application across multiple Availability Zones.",
      "Host your application on one powerful EC2 instance type instead of multiple smaller instances.",
      "Deploy the underlying application resources across multiple subnets.",
    ],
    correctAnswers: [1],
    explanation:
      "Deploying your application across multiple Availability Zones (AZs) increases fault-tolerance because if one AZ fails, the others can continue to serve the application. Deploying across multiple EC2 instances (A) increases availability but does not protect against AZ failure. Using a single powerful instance (C) creates a single point of failure. Deploying across subnets (D) does not guarantee fault-tolerance unless those subnets are in different AZs. More info: https://docs.aws.amazon.com/whitepapers/latest/aws-overview/reliability.html",
  },
  {
    id: uuidv5("aws-question-373", uuidv5.URL),
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
      "The 'Enterprise' and 'Business' support plans provide 24/7 access to AWS Cloud Support Engineers via email and phone. The 'Developer' plan (A) only provides business hours support and does not include phone access. 'Premium' (B) is not an actual AWS support plan. 'Standard' (D) is not a support plan but the default level with no support engineer access. More info: https://aws.amazon.com/premiumsupport/plans/",
  },
  {
    id: uuidv5("aws-question-374", uuidv5.URL),
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
      "IAM users and the AWS account root user both require an access key ID and a secret access key for long-lived programmatic access. IAM groups (A) are collections of users and do not have credentials. IAM roles (C) use temporary credentials, not long-lived ones. TAM (E) stands for Technical Account Manager, which is not an AWS identity. More info: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html",
  },
  {
    id: uuidv5("aws-question-375", uuidv5.URL),
    text: 'Which of the following is a benefit of the "Loose Coupling" architecture principle?',
    options: [
      "It eliminates the need for change management.",
      "It allows for Cross-Region Replication.",
      "It helps AWS customers reduce Privileged Access to AWS resources.",
      "It allows individual application components or services to be modified without affecting other components.",
    ],
    correctAnswers: [3],
    explanation:
      "Loose Coupling allows individual application components or services to be modified, updated, or replaced without impacting other components, increasing flexibility and scalability. It does not eliminate the need for change management (A), does not directly enable cross-region replication (B), and does not specifically reduce privileged access (C). More info: https://docs.aws.amazon.com/wellarchitected/latest/architecture-development/loose-coupling.html",
  },
  {
    id: uuidv5("aws-question-376", uuidv5.URL),
    text: "A company needs to host a big data application on AWS using EC2 instances. Which of the following AWS Storage services would they choose to automatically get high throughput to multiple compute nodes?",
    options: [
      "Amazon Elastic Block Store.",
      "AWS Storage Gateway.",
      "Amazon Elastic File System.",
      "S3.",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon Elastic File System (EFS) provides scalable, high-throughput storage that can be shared across multiple EC2 instances, making it ideal for big data applications. Amazon Elastic Block Store (A) is attached to individual EC2 instances. AWS Storage Gateway (B) is for hybrid cloud storage integration. Amazon S3 (D) is object storage, not optimized for high-throughput shared access by compute nodes. More info: https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html",
  },
  {
    id: uuidv5("aws-question-377", uuidv5.URL),
    text: "Which of the following Cloud Computing deployment models eliminates the need to run and maintain physical data centers?",
    options: ["On-premises.", "IaaS.", "PaaS.", "Cloud."],
    correctAnswers: [3],
    explanation:
      "The Cloud deployment model allows organizations to run applications and services without owning or maintaining physical data centers. On-premises (A) requires physical infrastructure. IaaS (B) and PaaS (C) are service models within the cloud, not deployment models themselves. More info: https://docs.aws.amazon.com/whitepapers/latest/aws-overview/cloud-computing-models.html",
  },
  {
    id: uuidv5("aws-question-378", uuidv5.URL),
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
      "AWS Marketplace offers flexible pricing options and provides software solutions that can run on AWS or other cloud vendors. It does not perform periodic security checks on products (A), does not offer per-second billing (B), and does not provide cheaper EC2 on-demand instances (C). More info: https://aws.amazon.com/marketplace/features/",
  },
  {
    id: uuidv5("aws-question-379", uuidv5.URL),
    text: "What is the benefit of Amazon EBS volumes being automatically replicated within the same availability zone?",
    options: ["Elasticity.", "Durability.", "Traceability.", "Accessibility."],
    correctAnswers: [1],
    explanation:
      "Amazon EBS volumes are automatically replicated within the same Availability Zone to prevent data loss due to hardware failure, ensuring durability. Elasticity (A) refers to scaling resources, Traceability (C) is about monitoring and logging, and Accessibility (D) is about being able to access resources, not about data replication. More info: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html",
  },
  {
    id: uuidv5("aws-question-380", uuidv5.URL),
    text: "You are planning to launch an advertising campaign over the coming weekend to promote a new digital product. It is expected that there will be heavy spikes in load during the campaign period, and you can’t afford any downtime. You need additional compute resources to handle the additional load. What is the most cost-effective EC2 instance purchasing option for this job?",
    options: [
      "Savings Plans.",
      "Spot Instances.",
      "Reserved Instances.",
      "On-Demand Instances.",
    ],
    correctAnswers: [3],
    explanation:
      "On-Demand Instances are the most cost-effective and flexible option for short-term, unpredictable workloads like traffic spikes during a campaign. Spot Instances (B) are cheaper but can be interrupted at any time. Savings Plans (A) and Reserved Instances (C) require long-term commitments and are not ideal for temporary spikes. More info: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-on-demand-instances.html",
  },
  {
    id: uuidv5("aws-question-381", uuidv5.URL),
    text: "Which of the following AWS services integrates with AWS Shield and AWS Web Application Firewall (AWS WAF) to protect against network and application layer DDoS attacks?",
    options: [
      "Amazon EFS.",
      "AWS Secrets Manager.",
      "AWS Systems Manager.",
      "Amazon CloudFront.",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon CloudFront integrates with AWS Shield and AWS WAF to provide protection against DDoS attacks at both the network and application layers. Amazon EFS (A) is a file storage service, AWS Secrets Manager (B) is for managing secrets, and AWS Systems Manager (C) is for operational management, none of which provide DDoS protection. More info: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-awswaf.html",
  },
  {
    id: uuidv5("aws-question-382", uuidv5.URL),
    text: "Which of the following services is used when encrypting EBS volumes?",
    options: ["AWS WAF.", "AWS KMS.", "Amazon Macie.", "Amazon GuardDuty."],
    correctAnswers: [1],
    explanation:
      "AWS Key Management Service (KMS) is used to manage encryption keys and is integrated with EBS to encrypt volumes. AWS WAF (A) is for web application firewall, Amazon Macie (C) is for discovering sensitive data, and Amazon GuardDuty (D) is for threat detection, none of which are used for EBS encryption. More info: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html",
  },
  {
    id: uuidv5("aws-question-383", uuidv5.URL),
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
      "To immediately secure your AWS account, you should rotate all access keys (D) to prevent unauthorized access and change the root account's email, password, and enable MFA (E) to secure the most privileged account. Downloading policies (A) is not a direct security action, deleting all IAM accounts (B) is disruptive, and checking CloudWatch logs (C) is useful for auditing but not an immediate protective measure. More info: https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html",
  },
  {
    id: uuidv5("aws-question-384", uuidv5.URL),
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
      "Amazon ElastiCache provides an in-memory data storage service (A) and improves web application performance (C) by caching frequently accessed data. It does not reduce delivery costs using Edge Locations (B), is not specifically Chef-compatible (D), and does not distribute requests (E). More info: https://docs.aws.amazon.com/elasticache/latest/mem-ug/WhatIs.html",
  },
  {
    id: uuidv5("aws-question-385", uuidv5.URL),
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
      "Using Amazon EC2 Auto Scaling (B) and Serverless Computing (E) allows customers to automatically adjust resources to match demand, reducing costs. Deploying across Availability Zones (A) or regions (C) improves availability but does not directly leverage elasticity. Elastic Load Balancing (D) distributes traffic but does not scale resources automatically. More info: https://aws.amazon.com/autoscaling/ and https://aws.amazon.com/serverless/",
  },
  {
    id: uuidv5("aws-question-386", uuidv5.URL),
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
      "On-Demand EC2 instances allow you to scale capacity up or down based on demand (E) and avoid the need to maintain 'safety net' capacity for traffic spikes (C). They are not free (A), not always cheaper than other options (B), and setup time (D) is not a specific benefit. More info: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-on-demand-instances.html",
  },
  {
    id: uuidv5("aws-question-387", uuidv5.URL),
    text: "Each AWS Region is composed of multiple Availability Zones. Which of the following best describes what an Availability Zone is?",
    options: [
      "It is a data center designed to be completely isolated from other data centers in the same region.",
      "It is a collection of data centers distributed in multiple countries.",
      "It is a logically isolated network of the AWS Cloud.",
      "It is a distinct location within a region that is insulated from failures in other Availability Zones.",
    ],
    correctAnswers: [3],
    explanation:
      "An Availability Zone is a distinct location within a region, insulated from failures in other zones. It is not a single data center (A), not a multi-country collection (B), and not just a logically isolated network (C). More info: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html",
  },
  {
    id: uuidv5("aws-question-388", uuidv5.URL),
    text: "AWS provides disaster recovery capability by allowing customers to deploy infrastructure into multiple [...].",
    options: [
      "Regions.",
      "Transportation devices.",
      "Support plans.",
      "Edge locations.",
    ],
    correctAnswers: [0],
    explanation:
      "Deploying infrastructure across multiple AWS Regions enables disaster recovery by ensuring availability in case of regional failures. Transportation devices (B), support plans (C), and edge locations (D) are not related to disaster recovery. More info: https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-workloads-on-aws.html",
  },
  {
    id: uuidv5("aws-question-389", uuidv5.URL),
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
      "The company must ensure AWS services are configured to meet PCI DSS standards (B) and restrict access to cardholder data and create security policies (C). Not all AWS services are PCI compliant by default (A), customers do not configure underlying AWS infrastructure (D), and AWS is responsible for physical security (E). More info: https://aws.amazon.com/compliance/pci-dss-level-1-faqs/",
  },
  {
    id: uuidv5("aws-question-390", uuidv5.URL),
    text: "What is the maximum amount of data that can be stored in S3 in a single AWS account?",
    options: [
      "100 PetaBytes.",
      "Virtually unlimited storage.",
      "5 TeraBytes.",
      "10 Exabytes.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon S3 provides virtually unlimited storage for objects in a single account. The size limit for a single object is 5 TB (C), but there is no overall storage cap. 100 PB (A) and 10 EB (D) are not actual limits. More info: https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html",
  },
  {
    id: uuidv5("aws-question-391", uuidv5.URL),
    text: "Which pillar of the AWS Well-Architected Framework provides recommendations to help customers select the right compute resources based on workload requirements?",
    options: [
      "Operational Excellence.",
      "Security.",
      "Performance Efficiency.",
      "Reliability.",
    ],
    correctAnswers: [2],
    explanation:
      "The Performance Efficiency pillar focuses on selecting the right compute resources for workloads, optimizing performance and scalability. Operational Excellence (A) is about operations and monitoring, Security (B) is about protecting data and systems, and Reliability (D) is about system recovery and resiliency. More info: https://docs.aws.amazon.com/wellarchitected/latest/framework/performance-efficiency-pillar.html",
  },
  {
    id: uuidv5("aws-question-392", uuidv5.URL),
    text: "Which AWS service delivers data, videos, applications, and APIs to users globally with low latency and high transfer speeds?",
    options: [
      "Amazon Route 53.",
      "Amazon Connect.",
      "Amazon CloudFront.",
      "Amazon EC2.",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon CloudFront is a content delivery network (CDN) that delivers data, videos, applications, and APIs globally with low latency and high transfer speeds. Amazon Route 53 (A) is a DNS service, Amazon Connect (B) is a contact center service, and Amazon EC2 (D) provides virtual servers. More info: https://aws.amazon.com/cloudfront/",
  },
  {
    id: uuidv5("aws-question-393", uuidv5.URL),
    text: "Which of the following steps should be taken by a customer when conducting penetration testing on AWS?",
    options: [
      "Conduct penetration testing using Amazon Inspector, and then notify AWS support.",
      "Request and wait for approval from the customer’s internal security team, and then conduct testing.",
      "Notify AWS support, and then conduct testing immediately.",
      "Request and wait for approval from AWS support, and then conduct testing.",
    ],
    correctAnswers: [3],
    explanation:
      "Customers must request and wait for approval from AWS support before conducting penetration testing. This ensures compliance with AWS policies and avoids service disruptions. The other options either skip AWS approval or incorrectly assume internal approval is sufficient. More info: https://aws.amazon.com/security/penetration-testing/",
  },
  {
    id: uuidv5("aws-question-394", uuidv5.URL),
    text: "Which AWS Cost Management tool allows you to view the most granular data about your AWS bill?",
    options: [
      "AWS Cost Explorer.",
      "AWS Budgets.",
      "AWS Cost and Usage report.",
      "AWS Billing dashboard.",
    ],
    correctAnswers: [2],
    explanation:
      "The AWS Cost and Usage Report provides the most detailed and granular billing data. AWS Cost Explorer (A) is for visualizing costs, AWS Budgets (B) is for setting cost thresholds, and the Billing dashboard (D) provides summaries. More info: https://docs.aws.amazon.com/cur/latest/userguide/what-is-cur.html",
  },
  {
    id: uuidv5("aws-question-395", uuidv5.URL),
    text: "Which element of the AWS global infrastructure consists of one or more discrete data centers each with redundant power networking and connectivity which are housed in separate facilities?",
    options: [
      "AWS Regions.",
      "Availability Zones.",
      "Edge locations.",
      "Amazon CloudFront.",
    ],
    correctAnswers: [1],
    explanation:
      "Availability Zones consist of one or more discrete data centers with redundant power, networking, and connectivity, housed in separate facilities. AWS Regions (A) are geographic areas containing multiple AZs, Edge locations (C) are for content delivery, and Amazon CloudFront (D) is a CDN. More info: https://aws.amazon.com/about-aws/global-infrastructure/regions_az/",
  },
  {
    id: uuidv5("aws-question-396", uuidv5.URL),
    text: "How many Availability Zones should compute resources be provisioned across to achieve high availability?",
    options: [
      "A minimum of one.",
      "A minimum of two.",
      "A minimum of three.",
      "A minimum of four or more.",
    ],
    correctAnswers: [1],
    explanation:
      "Provisioning across at least two Availability Zones ensures high availability and fault tolerance. One AZ (A) is a single point of failure, while three or more (C, D) may be over-provisioning for most use cases. More info: https://docs.aws.amazon.com/whitepapers/latest/aws-overview/reliability.html",
  },
  {
    id: uuidv5("aws-question-397", uuidv5.URL),
    text: "The AWS Cloud’s multiple Regions are an example of:",
    options: [
      "Agility.",
      "Global infrastructure.",
      "Elasticity.",
      "Pay-as-you-go pricing.",
    ],
    correctAnswers: [1],
    explanation:
      "Multiple AWS Regions are part of AWS's global infrastructure, allowing customers to deploy resources worldwide. Agility (A), elasticity (C), and pay-as-you-go pricing (D) are other AWS characteristics but not related to the physical infrastructure. More info: https://aws.amazon.com/about-aws/global-infrastructure/",
  },
  {
    id: uuidv5("aws-question-398", uuidv5.URL),
    text: "Which AWS service can be used to manually launch instances based on resource requirements?",
    options: ["Amazon EBS.", "Amazon S3.", "Amazon EC2.", "Amazon ECS."],
    correctAnswers: [2],
    explanation:
      "Amazon EC2 allows users to manually launch virtual server instances based on their resource needs. Amazon EBS (A) is for storage, Amazon S3 (B) is for object storage, and Amazon ECS (D) is for container orchestration. More info: https://aws.amazon.com/ec2/",
  },
  {
    id: uuidv5("aws-question-399", uuidv5.URL),
    text: "Which is a recommended pattern for designing a highly available architecture on AWS?",
    options: [
      "Ensure that components have low-latency network connectivity.",
      "Run enough Amazon EC2 instances to operate at peak load.",
      "Ensure that the application is designed to accommodate failure of any single component.",
      "Use a monolithic application that handles all operations.",
    ],
    correctAnswers: [2],
    explanation:
      "Designing for failure of any single component ensures high availability by enabling redundancy and failover. Low-latency connectivity (A) and running at peak load (B) do not guarantee high availability. Monolithic applications (D) are less resilient. More info: https://docs.aws.amazon.com/wellarchitected/latest/framework/reliability-pillar.html",
  },
  {
    id: uuidv5("aws-question-400", uuidv5.URL),
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
      "Elasticity allows AWS to scale resources up or down based on demand, and pay-as-you-go pricing ensures you only pay for what you use, making AWS cost effective for dynamic workloads. High availability (A), shared security model (B), and reliability (E) are important but not directly related to cost effectiveness. More info: https://aws.amazon.com/pricing/",
  },
];

const exam9: Question[] = [
  {
    id: uuidv5("aws-question-401", uuidv5.URL),
    text: "An administrator needs to rapidly deploy a popular IT solution and start using it immediately. Where can the administrator find assistance?",
    options: [
      "AWS Well-Architected Framework documentation.",
      "Amazon CloudFront.",
      "AWS CodeCommit.",
      "AWS Quick Start reference deployments.",
    ],
    correctAnswers: [3],
    explanation:
      "AWS Quick Start reference deployments provide pre-configured templates and architectural guidance to help deploy popular IT solutions quickly and easily. The Well-Architected Framework (A) is for best practices, CloudFront (B) is a CDN, and CodeCommit (C) is a source control service. More info: https://aws.amazon.com/quickstart/",
  },
  {
    id: uuidv5("aws-question-402", uuidv5.URL),
    text: "What is one of the advantages of the Amazon Relational Database Service (Amazon RDS)?",
    options: [
      "It simplifies relational database administration tasks.",
      "It provides 99.99999999999% reliability and durability.",
      "It automatically scales databases for loads.",
      "It enables users to dynamically adjust CPU and RAM resources.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon RDS simplifies database administration tasks such as backups, patching, and scaling. While it is reliable, the other options either exaggerate durability, refer to features not unique to RDS, or are not primary advantages. More info: https://aws.amazon.com/rds/features/",
  },
  {
    id: uuidv5("aws-question-403", uuidv5.URL),
    text: "Which of the following AWS Cloud services can be used to run a customer-managed relational database?",
    options: [
      "Amazon EC2.",
      "Amazon Route 53.",
      "Amazon ElastiCache.",
      "Amazon DynamoDB.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon EC2 allows customers to install and manage their own relational database software. Route 53 (B) is DNS, ElastiCache (C) is for caching, and DynamoDB (D) is NoSQL, not relational. More info: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/hosting-applications.html",
  },
  {
    id: uuidv5("aws-question-404", uuidv5.URL),
    text: "A user is planning to launch two additional Amazon EC2 instances to increase availability. Which action should the user take?",
    options: [
      "Launch the instances across multiple Availability Zones in a single AWS Region.",
      "Launch the instances as EC2 Reserved Instances in the same AWS Region and the same Availability Zone.",
      "Launch the instances in multiple AWS Regions but in the same Availability Zone.",
      "Launch the instances as EC2 Spot Instances in the same AWS Region but in different Availability Zones.",
    ],
    correctAnswers: [0],
    explanation:
      "Launching instances across multiple Availability Zones in a single region increases availability and fault tolerance. Reserved Instances (B) and Spot Instances (D) are purchasing options, not deployment strategies, and launching in multiple regions (C) complicates management. More info: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html",
  },
  {
    id: uuidv5("aws-question-405", uuidv5.URL),
    text: "Which of the following can limit Amazon Simple Storage Service (Amazon S3) bucket access to specific users?",
    options: [
      "A public and private key-pair.",
      "Amazon Inspector.",
      "AWS Identity and Access Management (IAM) policies.",
      "Security Groups.",
    ],
    correctAnswers: [2],
    explanation:
      "IAM policies are used to control access to S3 buckets and objects. Key-pairs (A) are for authentication, Inspector (B) is for security assessment, and Security Groups (D) are for network access, not S3 permissions. More info: https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html",
  },
  {
    id: uuidv5("aws-question-406", uuidv5.URL),
    text: "Which AWS service allows companies to connect an Amazon VPC to an on-premises data center? (Select TWO)",
    options: [
      "AWS VPN.",
      "Amazon Redshift.",
      "API Gateway.",
      "Amazon Direct Connect.",
    ],
    correctAnswers: [0, 3],
    explanation:
      "AWS VPN and Amazon Direct Connect both allow secure connections between a VPC and on-premises data centers. Redshift (B) is a data warehouse, and API Gateway (C) is for API management. More info: https://docs.aws.amazon.com/vpc/latest/userguide/vpn-connections.html and https://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html",
  },
  {
    id: uuidv5("aws-question-407", uuidv5.URL),
    text: "Which AWS service or feature can be used to monitor CPU usage?",
    options: [
      "AWS CloudTrail.",
      "VPC Flow Logs.",
      "Amazon CloudWatch.",
      "AWS Config.",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon CloudWatch collects and monitors metrics such as CPU usage. CloudTrail (A) logs API calls, VPC Flow Logs (B) capture network traffic, and Config (D) tracks resource configurations. More info: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html",
  },
  {
    id: uuidv5("aws-question-408", uuidv5.URL),
    text: "Which task is AWS responsible for in the shared responsibility model for security and compliance?",
    options: [
      "Granting access to individuals and services.",
      "Encrypting data in transit.",
      "Updating Amazon EC2 host firmware.",
      "Updating operating systems.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS is responsible for maintaining and updating the infrastructure, including EC2 host firmware. Customers are responsible for access management, data encryption, and OS updates. More info: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-409", uuidv5.URL),
    text: "Which of the following security-related actions are available at no cost?",
    options: [
      "Calling AWS Support.",
      "Contacting AWS Professional Services to request a workshop.",
      "Accessing forums, blogs, and whitepapers.",
      "Attending AWS classes at a local university.",
    ],
    correctAnswers: [2],
    explanation:
      "Access to AWS forums, blogs, and whitepapers is free. AWS Support (A) and Professional Services (B) may incur costs, and university classes (D) are not provided by AWS for free. More info: https://aws.amazon.com/whitepapers/",
  },
  {
    id: uuidv5("aws-question-410", uuidv5.URL),
    text: "Which storage service can be used as a low-cost option for hosting static websites?",
    options: [
      "Amazon Glacier.",
      "Amazon DynamoDB.",
      "Amazon Elastic File System (Amazon EFS).",
      "Amazon Simple Storage Service (Amazon S3).",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon S3 is ideal for hosting static websites due to its low cost, scalability, and ability to serve content over HTTP. Glacier (A) is for archival, DynamoDB (B) is NoSQL, and EFS (C) is for file storage, not static websites. More info: https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html",
  },
  {
    id: uuidv5("aws-question-411", uuidv5.URL),
    text: "According to the AWS shared responsibility model what is the sole responsibility of AWS?",
    options: [
      "Application security.",
      "Edge location management.",
      "Patch management.",
      "Client-side data.",
    ],
    correctAnswers: [1],
    explanation:
      "In the shared responsibility model, AWS is responsible for managing the physical infrastructure, including edge locations, regions, and availability zones. Application security, patch management, and client-side data are the customer's responsibilities. More info: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-412", uuidv5.URL),
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
      "Performance Efficiency and Security are two of the five pillars of the AWS Well-Architected Framework. The other pillars are Operational Excellence, Reliability, and Cost Optimization. The other options are not pillars. More info: https://aws.amazon.com/architecture/well-architected/",
  },
  {
    id: uuidv5("aws-question-413", uuidv5.URL),
    text: "Which AWS service identifies security groups that allow unrestricted access to a user’s AWS resources?",
    options: [
      "AWS Trusted Advisor.",
      "Amazon Inspector.",
      "Amazon CloudWatch.",
      "AWS CloudTrail.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Trusted Advisor checks for security vulnerabilities, including overly permissive security group rules, and provides recommendations to improve resource configuration. Inspector (B) is for automated security assessments, CloudWatch (C) is for monitoring, and CloudTrail (D) is for logging API calls. More info: https://aws.amazon.com/premiumsupport/technology/trusted-advisor/",
  },
  {
    id: uuidv5("aws-question-414", uuidv5.URL),
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
      "Implementing loose coupling and designing for scalability are key cloud architecture principles, enabling flexibility, fault tolerance, and performance. Manual monitoring (A), fixed servers (B), and relying on individual components (D) are not recommended. More info: https://docs.aws.amazon.com/wellarchitected/latest/framework/general-design-principles.html",
  },
  {
    id: uuidv5("aws-question-415", uuidv5.URL),
    text: "When architecting cloud applications, which of the following are a key design principle?",
    options: [
      "Use the largest instance possible.",
      "Provision capacity for peak load.",
      "Use the Scrum development process.",
      "Implement elasticity.",
    ],
    correctAnswers: [3],
    explanation:
      "Implementing elasticity is a key design principle for cloud-native applications, allowing resources to scale automatically based on demand. The other options are not cloud design principles. More info: https://docs.aws.amazon.com/wellarchitected/latest/framework/general-design-principles.html",
  },
  {
    id: uuidv5("aws-question-416", uuidv5.URL),
    text: "A company has deployed several relational databases on Amazon EC2 instances. Every month the database software vendor releases new security patches that need to be applied to the databases. What is the MOST efficient way to apply the security patches?",
    options: [
      "Connect to each database instance on a monthly basis and download and apply the necessary security patches from the vendor.",
      "Enable automate patching for the instances using the Amazon RDS console.",
      "In AWS Config. configure a rule for the instances and the required patch level.",
      "Use AWS Systems Manager to automate database patching according to a schedule.",
    ],
    correctAnswers: [3],
    explanation:
      "AWS Systems Manager allows for automation of repetitive tasks like patch management, enabling administrators to schedule and deploy patches efficiently across multiple EC2 instances. The other options are manual, not applicable, or only for RDS. More info: https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-patch.html",
  },
  {
    id: uuidv5("aws-question-417", uuidv5.URL),
    text: "Which mechanism allows developers to access AWS services from application code?",
    options: [
      "AWS Software Development Kit.",
      "AWS Management Console.",
      "AWS CodePipeline.",
      "AWS Config.",
    ],
    correctAnswers: [0],
    explanation:
      "The AWS Software Development Kit (SDK) provides APIs for developers to integrate AWS services into their application code. The Management Console (B) is for manual management, CodePipeline (C) is for CI/CD, and Config (D) is for resource configuration tracking. More info: https://aws.amazon.com/tools/",
  },
  {
    id: uuidv5("aws-question-418", uuidv5.URL),
    text: "Which AWS feature will reduce the customer’s total cost of ownership (TCO)?",
    options: [
      "Shared responsibility security model.",
      "Single tenancy.",
      "Elastic computing.",
      "Encryption.",
    ],
    correctAnswers: [2],
    explanation:
      "Elastic computing allows resources to scale up or down based on demand, so customers only pay for what they use, reducing TCO. The other options do not directly impact TCO. More info: https://aws.amazon.com/economics/",
  },
  {
    id: uuidv5("aws-question-419", uuidv5.URL),
    text: "Which of the following is a benefit of using the AWS Cloud?",
    options: [
      "Permissive security removes the administrative burden.",
      "Ability to focus on revenue-generating activities.",
      "Control over cloud network hardware.",
      "Choice of specific cloud hardware vendors.",
    ],
    correctAnswers: [1],
    explanation:
      "By offloading infrastructure management to AWS, businesses can focus on innovation and revenue-generating activities. The other options are not benefits of AWS Cloud. More info: https://aws.amazon.com/benefits/",
  },
  {
    id: uuidv5("aws-question-420", uuidv5.URL),
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
      "AWS Trusted Advisor provides insights into areas like Fault Tolerance and Performance. Instance Usage (B), Infrastructure (C), and Storage Capacity (E) are not official categories. More info: https://aws.amazon.com/premiumsupport/technology/trusted-advisor/",
  },
  {
    id: uuidv5("aws-question-421", uuidv5.URL),
    text: "What is Amazon CloudWatch?",
    options: [
      "A code repository with customizable build and team commit features.",
      "A metrics repository with customizable notification thresholds and channels.",
      "A security configuration repository with threat analytics.",
      "A rule repository of a web application firewall with automated vulnerability prevention features.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon CloudWatch is a monitoring service for AWS resources and applications. It collects and tracks metrics, sets alarms, and can automatically react to changes in AWS environments. The other options describe unrelated services or features. More info: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html",
  },
  {
    id: uuidv5("aws-question-422", uuidv5.URL),
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
      "Customers are responsible for encrypting data on the client-side and configuring Network ACLs. AWS manages the underlying infrastructure, including patching RDS OS components, training data center staff, and maintaining environmental controls. More info: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-423", uuidv5.URL),
    text: "Under the shared responsibility model, which of the following is a shared control between a customer and AWS?",
    options: [
      "Physical controls.",
      "Patch management.",
      "Zone security.",
      "Data center auditing.",
    ],
    correctAnswers: [1],
    explanation:
      "Patch management is a shared responsibility: AWS manages patches for the infrastructure, while customers patch their operating systems and applications. Physical controls, zone security, and data center auditing are AWS responsibilities. More info: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-424", uuidv5.URL),
    text: "Which AWS service is used to pay AWS bills, and monitor usage and budget costs?",
    options: [
      "AWS Billing and Cost Management.",
      "Consolidated billing.",
      "Amazon CloudWatch.",
      "Amazon QuickSight.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Billing and Cost Management provides tools to view and pay bills, monitor usage, and create budgets. Consolidated billing (B) is a feature for combining accounts, CloudWatch (C) is for monitoring resources, and QuickSight (D) is for analytics. More info: https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-what-is.html",
  },
  {
    id: uuidv5("aws-question-425", uuidv5.URL),
    text: "How do customers benefit from Amazon’s massive economies of scale?",
    options: [
      "Periodic price reductions as the result of Amazon’s operational efficiencies.",
      "New Amazon EC2 instance types providing the latest hardware.",
      "The ability to scale up and down when needed.",
      "Increased reliability in the underlying hardware of Amazon EC2 instances.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon's economies of scale allow it to reduce prices for customers as operational efficiencies increase. The other options are benefits of AWS, but not direct results of economies of scale. More info: https://aws.amazon.com/economics/",
  },
  {
    id: uuidv5("aws-question-426", uuidv5.URL),
    text: "Which AWS feature allows a company to take advantage of usage tiers for services across multiple member accounts?",
    options: [
      "Service control policies (SCPs).",
      "Consolidated billing.",
      "All Upfront Reserved Instances.",
      "AWS Cost Explorer.",
    ],
    correctAnswers: [1],
    explanation:
      "Consolidated billing allows companies to aggregate usage across accounts and benefit from volume discounts. SCPs (A) are for policy management, Reserved Instances (C) are a purchasing option, and Cost Explorer (D) is for cost analysis. More info: https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html",
  },
  {
    id: uuidv5("aws-question-427", uuidv5.URL),
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
      "AWS Storage Gateway and AWS Direct Connect both extend on-premises environments to AWS. EBS (A) is block storage, Connect (B) is a contact center, and CloudFront (D) is a CDN. More info: https://aws.amazon.com/storagegateway/ and https://aws.amazon.com/directconnect/",
  },
  {
    id: uuidv5("aws-question-428", uuidv5.URL),
    text: "Which of the following services will automatically scale with an expected increase in web traffic?",
    options: [
      "AWS CodePipeline.",
      "Elastic Load Balancing.",
      "Amazon EBS.",
      "AWS Direct Connect.",
    ],
    correctAnswers: [1],
    explanation:
      "Elastic Load Balancing automatically scales to distribute incoming web traffic to multiple targets. CodePipeline (A) is for CI/CD, EBS (C) is storage, and Direct Connect (D) is for network connectivity. More info: https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/how-elastic-load-balancing-works.html",
  },
  {
    id: uuidv5("aws-question-429", uuidv5.URL),
    text: "Which service provides a virtually unlimited amount of online highly durable object storage?",
    options: [
      "Amazon Redshift.",
      "Amazon Elastic File System (Amazon EFS).",
      "Amazon Elastic Container Service (Amazon ECS).",
      "Amazon S3.",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon S3 provides virtually unlimited, highly durable object storage. Redshift (A) is a data warehouse, EFS (B) is file storage, and ECS (C) is for containers. More info: https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html",
  },
  {
    id: uuidv5("aws-question-430", uuidv5.URL),
    text: "Which AWS feature should a customer leverage to achieve high availability of an application?",
    options: [
      "AWS Direct Connect.",
      "Availability Zones.",
      "Data centers.",
      "Amazon Virtual Private Cloud (Amazon VPC).",
    ],
    correctAnswers: [1],
    explanation:
      "Availability Zones provide high availability by isolating applications across physically separate locations. Direct Connect (A) is for network connectivity, data centers (C) are the physical infrastructure, and VPC (D) is for network isolation. More info: https://aws.amazon.com/about-aws/global-infrastructure/regions_az/",
  },
  {
    id: uuidv5("aws-question-431", uuidv5.URL),
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
      "AWS WAF (Web Application Firewall) can block requests from specific IPs or networks at the application layer, and Network ACLs (Access Control Lists) can block or allow traffic at the subnet level. Trusted Advisor (B) provides recommendations, Direct Connect (C) is for network connectivity, and Organizations (D) is for account management. More info: https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html and https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html",
  },
  {
    id: uuidv5("aws-question-432", uuidv5.URL),
    text: "Which of the following is a cloud architectural design principle?",
    options: [
      "Scale up not out.",
      "Loosely couple components.",
      "Build monolithic systems.",
      "Use commercial database software.",
    ],
    correctAnswers: [1],
    explanation:
      "Loosely coupling components is a key cloud design principle, enabling flexibility, scalability, and fault tolerance. Scaling up (A) and building monolithic systems (C) are not recommended, and using commercial databases (D) is not a design principle. More info: https://docs.aws.amazon.com/wellarchitected/latest/framework/general-design-principles.html",
  },
  {
    id: uuidv5("aws-question-433", uuidv5.URL),
    text: "Which service enables risk auditing by continuously monitoring and logging account activity, including user actions in the AWS Management Console and AWS SDKs?",
    options: [
      "Amazon CloudWatch.",
      "AWS CloudTrail.",
      "AWS Config.",
      "AWS Health.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS CloudTrail records user activity and API usage for auditing and compliance. CloudWatch (A) is for monitoring metrics, Config (C) tracks resource configurations, and Health (D) provides health information. More info: https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html",
  },
  {
    id: uuidv5("aws-question-434", uuidv5.URL),
    text: "Where can AWS compliance and certification reports be downloaded?",
    options: [
      "AWS Artifact.",
      "AWS Concierge.",
      "AWS Certificate Manager.",
      "AWS Trusted Advisor.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Artifact provides access to compliance and certification reports. Concierge (B) is for enterprise support, Certificate Manager (C) manages SSL/TLS certificates, and Trusted Advisor (D) gives best practice recommendations. More info: https://aws.amazon.com/artifact/",
  },
  {
    id: uuidv5("aws-question-435", uuidv5.URL),
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
      "AWS reduces TCO by eliminating the need for on-premises hardware and reduces opex with pay-as-you-go pricing. Capex (B) increases with traditional IT, and deferred payment plans (D) and credit lines (E) are not standard AWS benefits. More info: https://aws.amazon.com/economics/",
  },
  {
    id: uuidv5("aws-question-436", uuidv5.URL),
    text: "Which AWS service can serve a static website?",
    options: [
      "Amazon S3.",
      "Amazon Route 53.",
      "Amazon QuickSight.",
      "AWS X-Ray.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon S3 can host static websites by enabling static website hosting on a bucket. Route 53 (B) is DNS, QuickSight (C) is analytics, and X-Ray (D) is for tracing. More info: https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html",
  },
  {
    id: uuidv5("aws-question-437", uuidv5.URL),
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
      "Deploying in multiple AWS Regions and using Amazon CloudFront's global edge locations both reduce latency for global customers. Translate (B) and Comprehend (D) are language services, and ELB (E) does not distribute traffic across regions. More info: https://aws.amazon.com/about-aws/global-infrastructure/ and https://aws.amazon.com/cloudfront/features/",
  },
  {
    id: uuidv5("aws-question-438", uuidv5.URL),
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
      "Regions and Availability Zones are the main components of AWS global infrastructure. Resource groups (A), security groups (C), and AMIs (E) are not infrastructure components. More info: https://aws.amazon.com/about-aws/global-infrastructure/",
  },
  {
    id: uuidv5("aws-question-439", uuidv5.URL),
    text: "What is the AWS customer responsible for according to the AWS shared responsibility model?",
    options: [
      "Physical access controls.",
      "Data encryption.",
      "Secure disposal of storage devices.",
      "Environmental risk management.",
    ],
    correctAnswers: [1],
    explanation:
      "Customers are responsible for data encryption in the shared responsibility model. AWS handles physical access, device disposal, and environmental controls. More info: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-440", uuidv5.URL),
    text: "If each department within a company has its own AWS account, what is one way to enable consolidated billing?",
    options: [
      "Use AWS Budgets on each account to pay only to budget.",
      "Contact AWS Support for a monthly bill.",
      "Create an AWS Organization from the payer account and invite the other accounts to join.",
      "Put all invoices into one Amazon Simple Storage Service (Amazon S3) bucket, load data into Amazon Redshift, and then run a billing report.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Organizations allows consolidated billing by linking multiple accounts under one payer account. Budgets (A) are for cost control, Support (B) does not consolidate bills, and S3/Redshift (D) is not a billing solution. More info: https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html",
  },
  {
    id: uuidv5("aws-question-441", uuidv5.URL),
    text: "What costs are included when comparing AWS Total Cost of Ownership (TCO) with on-premises TCO?",
    options: [
      "Project management.",
      "Antivirus software licensing.",
      "Data center security.",
      "Software development.",
    ],
    correctAnswers: [2],
    explanation:
      "Data center security is included in on-premises TCO because it covers the physical security of the infrastructure, which AWS manages in the cloud. Project management (A) and software development (D) are not infrastructure costs, and antivirus licensing (B) is a software cost. More info: https://aws.amazon.com/tco-calculator/",
  },
  {
    id: uuidv5("aws-question-442", uuidv5.URL),
    text: "What is the benefit of using AWS managed services, such as Amazon ElastiCache and Amazon Relational Database Service (Amazon RDS)?",
    options: [
      "They require the customer to monitor and replace failing instances.",
      "They have better performance than customer-managed services.",
      "They simplify patching and updating underlying OSs.",
      "They do not require the customer to optimize instance type or size selections.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS managed services simplify patching and updating the underlying operating systems, ensuring security and compliance. Customers are still responsible for instance sizing and monitoring. More info: https://aws.amazon.com/managed-services/",
  },
  {
    id: uuidv5("aws-question-443", uuidv5.URL),
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
      "Amazon Route 53 (DNS) and Virtual Private Gateway (VPN connectivity) are both used in hybrid architectures to connect on-premises and AWS resources. Classic Load Balancer (C), Auto Scaling (D), and CloudWatch metrics (E) are not specifically hybrid features. More info: https://aws.amazon.com/architecture/hybrid/",
  },
  {
    id: uuidv5("aws-question-444", uuidv5.URL),
    text: "Which statement best describes Elastic Load Balancing?",
    options: [
      "It translates a domain name into an IP address using DNC.",
      "It distributes incoming application traffic across one or more Amazon EC2 instances.",
      "It collects metrics on connected Amazon EC2 instances.",
      "It automatically adjusts the number of Amazon EC2 instances to support incoming traffic.",
    ],
    correctAnswers: [1],
    explanation:
      "Elastic Load Balancing distributes incoming traffic across multiple EC2 instances for high availability and fault tolerance. It does not translate domain names (A), collect metrics (C), or scale instances (D). More info: https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/how-elastic-load-balancing-works.html",
  },
  {
    id: uuidv5("aws-question-445", uuidv5.URL),
    text: "Which of the following is a fast and reliable NoSQL database service?",
    options: [
      "Amazon Redshift.",
      "Amazon RDS.",
      "Amazon DynamoDB.",
      "Amazon S3.",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon DynamoDB is a fully managed, fast, and reliable NoSQL database service. Redshift (A) is a data warehouse, RDS (B) is relational, and S3 (D) is object storage. More info: https://aws.amazon.com/dynamodb/",
  },
  {
    id: uuidv5("aws-question-446", uuidv5.URL),
    text: "Which AWS service would you use to obtain compliance reports and certificates?",
    options: [
      "AWS Artifact.",
      "AWS Lambda.",
      "Amazon Inspector.",
      "AWS Certificate Manager.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Artifact provides on-demand access to AWS compliance reports and certificates. Lambda (B) is for serverless compute, Inspector (C) is for security assessment, and Certificate Manager (D) manages SSL/TLS certificates. More info: https://aws.amazon.com/artifact/",
  },
  {
    id: uuidv5("aws-question-447", uuidv5.URL),
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
      "Amazon Route 53 (DNS) and Amazon CloudFront (CDN) are global services, available across all regions. EC2 (B), S3 (C), and DynamoDB (E) are regional services. More info: https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html",
  },
  {
    id: uuidv5("aws-question-448", uuidv5.URL),
    text: "How would an AWS customer easily apply common access controls to a large set of users?",
    options: [
      "Apply an IAM policy to an IAM group.",
      "Apply an IAM policy to an IAM role.",
      "Apply the same IAM policy to all IAM users with access to the same workload.",
      "Apply an IAM policy to an Amazon Cognito user pool.",
    ],
    correctAnswers: [0],
    explanation:
      "Applying an IAM policy to an IAM group allows centralized management of permissions for multiple users. Policies on roles (B) are for assumed identities, and Cognito (D) is for federated identities. More info: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups.html",
  },
  {
    id: uuidv5("aws-question-449", uuidv5.URL),
    text: "Which of the following is an important architectural design principle when designing cloud applications?",
    options: [
      "Use multiple Availability Zones.",
      "Use tightly coupled components.",
      "Use open source software.",
      "Provision extra capacity.",
    ],
    correctAnswers: [0],
    explanation:
      "Using multiple Availability Zones ensures high availability and fault tolerance. Tightly coupled components (B) reduce flexibility, open source (C) is a technology choice, and extra capacity (D) can be wasteful. More info: https://docs.aws.amazon.com/wellarchitected/latest/framework/reliability-pillar.html",
  },
  {
    id: uuidv5("aws-question-450", uuidv5.URL),
    text: "Which service allows a company with multiple AWS accounts to combine its usage to obtain volume discounts?",
    options: [
      "AWS Server Migration Service.",
      "AWS Organizations.",
      "AWS Budgets.",
      "AWS Trusted Advisor.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Organizations enables consolidated billing and volume discounts for multiple accounts. Server Migration Service (A) is for migrations, Budgets (C) is for cost control, and Trusted Advisor (D) is for best practice checks. More info: https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html",
  },
];

const exam10: Question[] = [
  {
    id: uuidv5("aws-question-451", uuidv5.URL),
    text: "An administrator needs to rapidly deploy a popular IT solution and start using it immediately. Where can the administrator find assistance?",
    options: [
      "AWS Well-Architected Framework documentation.",
      "Amazon CloudFront.",
      "AWS CodeCommit.",
      "AWS Quick Start reference deployments.",
    ],
    correctAnswers: [3],
    explanation:
      "AWS Quick Start reference deployments help administrators deploy popular IT solutions quickly by providing pre-configured templates. The Well-Architected Framework (A) is for best practices, CloudFront (B) is a CDN, and CodeCommit (C) is a source control service. More info: https://aws.amazon.com/quickstart/",
  },
  {
    id: uuidv5("aws-question-452", uuidv5.URL),
    text: "What is one of the advantages of the Amazon Relational Database Service (Amazon RDS)?",
    options: [
      "It simplifies relational database administration tasks.",
      "It provides 99.99999999999% reliability and durability.",
      "It automatically scales databases for loads.",
      "It enables users to dynamically adjust CPU and RAM resources.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon RDS simplifies relational database administration tasks such as patching, backups, and scaling, allowing users to focus on applications. The other options either exaggerate reliability, refer to features not unique to RDS, or are not primary advantages. More info: https://aws.amazon.com/rds/features/",
  },
  {
    id: uuidv5("aws-question-453", uuidv5.URL),
    text: "Which of the following AWS Cloud services can be used to run a customer-managed relational database?",
    options: [
      "Amazon EC2.",
      "Amazon Route 53.",
      "Amazon ElastiCache.",
      "Amazon DynamoDB.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon EC2 allows customers to run their own relational database software and manage it, including installation, patching, and scaling. Route 53 (B) is DNS, ElastiCache (C) is for caching, and DynamoDB (D) is NoSQL, not relational. More info: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/hosting-applications.html",
  },
  {
    id: uuidv5("aws-question-454", uuidv5.URL),
    text: "A user is planning to launch two additional Amazon EC2 instances to increase availability. Which action should the user take?",
    options: [
      "Launch the instances across multiple Availability Zones in a single AWS Region.",
      "Launch the instances as EC2 Reserved Instances in the same AWS Region and the same Availability Zone.",
      "Launch the instances in multiple AWS Regions but in the same Availability Zone.",
      "Launch the instances as EC2 Spot Instances in the same AWS Region but in different Availability Zones.",
    ],
    correctAnswers: [0],
    explanation:
      "Launching instances across multiple Availability Zones in a single AWS Region ensures high availability and fault tolerance. Reserved Instances (B) and Spot Instances (D) are purchasing options, not deployment strategies, and launching in multiple regions (C) complicates management. More info: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html",
  },
  {
    id: uuidv5("aws-question-455", uuidv5.URL),
    text: "Which of the following can limit Amazon Simple Storage Service (Amazon S3) bucket access to specific users?",
    options: [
      "A public and private key-pair.",
      "Amazon Inspector.",
      "AWS Identity and Access Management (IAM) policies.",
      "Security Groups.",
    ],
    correctAnswers: [2],
    explanation:
      "IAM policies provide fine-grained control over access to Amazon S3 buckets, ensuring that only authorized users can access specific resources. Key-pairs (A) are for authentication, Inspector (B) is for security assessment, and Security Groups (D) are for network access, not S3 permissions. More info: https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html",
  },
  {
    id: uuidv5("aws-question-456", uuidv5.URL),
    text: "Which AWS service allows companies to connect an Amazon VPC to an on-premises data center? (Select TWO)",
    options: [
      "AWS VPN.",
      "Amazon Redshift.",
      "API Gateway.",
      "Amazon Direct Connect.",
    ],
    correctAnswers: [0, 3],
    explanation:
      "AWS VPN and AWS Direct Connect are both services that allow secure connections between an Amazon VPC and an on-premises data center. Redshift (B) is a data warehouse, and API Gateway (C) is for API management. More info: https://docs.aws.amazon.com/vpc/latest/userguide/vpn-connections.html and https://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html",
  },
  {
    id: uuidv5("aws-question-457", uuidv5.URL),
    text: "Which AWS service or feature can be used to monitor CPU usage?",
    options: [
      "AWS CloudTrail.",
      "VPC Flow Logs.",
      "Amazon CloudWatch.",
      "AWS Config.",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon CloudWatch provides metrics to monitor CPU usage, memory, disk activity, and other system-level performance indicators. CloudTrail (A) logs API calls, VPC Flow Logs (B) capture network traffic, and Config (D) tracks resource configurations. More info: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html",
  },
  {
    id: uuidv5("aws-question-458", uuidv5.URL),
    text: "Which task is AWS responsible for in the shared responsibility model for security and compliance?",
    options: [
      "Granting access to individuals and services.",
      "Encrypting data in transit.",
      "Updating Amazon EC2 host firmware.",
      "Updating operating systems.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS is responsible for updating Amazon EC2 host firmware as part of maintaining the security and operation of the cloud infrastructure. Customers are responsible for access management, data encryption, and OS updates. More info: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-459", uuidv5.URL),
    text: "Which of the following security-related actions are available at no cost?",
    options: [
      "Calling AWS Support.",
      "Contacting AWS Professional Services to request a workshop.",
      "Accessing forums, blogs, and whitepapers.",
      "Attending AWS classes at a local university.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS provides free access to forums, blogs, and whitepapers to help users understand and implement security best practices. AWS Support (A) and Professional Services (B) may incur costs, and university classes (D) are not provided by AWS for free. More info: https://aws.amazon.com/whitepapers/",
  },
  {
    id: uuidv5("aws-question-460", uuidv5.URL),
    text: "Which storage service can be used as a low-cost option for hosting static websites?",
    options: [
      "Amazon Glacier.",
      "Amazon DynamoDB.",
      "Amazon Elastic File System (Amazon EFS).",
      "Amazon Simple Storage Service (Amazon S3).",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon S3 offers a cost-effective solution for hosting static websites by storing and serving static content like HTML, CSS, and JavaScript. Glacier (A) is for archival, DynamoDB (B) is NoSQL, and EFS (C) is for file storage, not static websites. More info: https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html",
  },
  {
    id: uuidv5("aws-question-461", uuidv5.URL),
    text: "According to the AWS shared responsibility model what is the sole responsibility of AWS?",
    options: [
      "Application security.",
      "Edge location management.",
      "Patch management.",
      "Client-side data.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS is responsible for the management of edge locations as part of its global infrastructure. Application security, patch management, and client-side data are the customer's responsibilities. More info: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-462", uuidv5.URL),
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
      "Performance efficiency and security are two of the five pillars of the AWS Well-Architected Framework. The other pillars are Operational Excellence, Reliability, and Cost Optimization. The other options are not pillars. More info: https://aws.amazon.com/architecture/well-architected/",
  },
  {
    id: uuidv5("aws-question-463", uuidv5.URL),
    text: "Which AWS service identifies security groups that allow unrestricted access to a user’s AWS resources?",
    options: [
      "AWS Trusted Advisor.",
      "Amazon Inspector.",
      "Amazon CloudWatch.",
      "AWS CloudTrail.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Trusted Advisor checks security groups for overly permissive rules, such as unrestricted access. Inspector (B) is for security assessments, CloudWatch (C) is for monitoring, and CloudTrail (D) is for logging API calls. More info: https://aws.amazon.com/premiumsupport/technology/trusted-advisor/",
  },
  {
    id: uuidv5("aws-question-464", uuidv5.URL),
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
      "Implementing loose coupling and designing for scalability are key principles to improve flexibility and efficiency when re-architecting applications. Manual monitoring (A), fixed servers (B), and relying on individual components (D) are not recommended. More info: https://docs.aws.amazon.com/wellarchitected/latest/framework/general-design-principles.html",
  },
  {
    id: uuidv5("aws-question-465", uuidv5.URL),
    text: "When architecting cloud applications, which of the following are a key design principle?",
    options: [
      "Use the largest instance possible.",
      "Provision capacity for peak load.",
      "Use the Scrum development process.",
      "Implement elasticity.",
    ],
    correctAnswers: [3],
    explanation:
      "Elasticity allows applications to scale resources dynamically based on demand, ensuring cost efficiency and performance. The other options are not cloud design principles. More info: https://docs.aws.amazon.com/wellarchitected/latest/framework/general-design-principles.html",
  },
  {
    id: uuidv5("aws-question-466", uuidv5.URL),
    text: "A company has deployed several relational databases on Amazon EC2 instances. Every month the database software vendor releases new security patches that need to be applied to the databases. What is the MOST efficient way to apply the security patches?",
    options: [
      "Connect to each database instance on a monthly basis and download and apply the necessary security patches from the vendor.",
      "Enable automate patching for the instances using the Amazon RDS console.",
      "In AWS Config, configure a rule for the instances and the required patch level.",
      "Use AWS Systems Manager to automate database patching according to a schedule.",
    ],
    correctAnswers: [3],
    explanation:
      "AWS Systems Manager provides automation capabilities to manage patches across multiple EC2 instances, ensuring efficiency and reducing manual effort. The other options are manual, not applicable, or only for RDS. More info: https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-patch.html",
  },
  {
    id: uuidv5("aws-question-467", uuidv5.URL),
    text: "Which mechanism allows developers to access AWS services from application code?",
    options: [
      "AWS Software Development Kit.",
      "AWS Management Console.",
      "AWS CodePipeline.",
      "AWS Config.",
    ],
    correctAnswers: [0],
    explanation:
      "The AWS SDK provides libraries for various programming languages, enabling developers to integrate AWS services directly into their applications. The Management Console (B) is for manual management, CodePipeline (C) is for CI/CD, and Config (D) is for resource configuration tracking. More info: https://aws.amazon.com/tools/",
  },
  {
    id: uuidv5("aws-question-468", uuidv5.URL),
    text: "Which AWS feature will reduce the customer’s total cost of ownership (TCO)?",
    options: [
      "Shared responsibility security model.",
      "Single tenancy.",
      "Elastic computing.",
      "Encryption.",
    ],
    correctAnswers: [2],
    explanation:
      "Elastic computing allows users to scale resources dynamically, optimizing usage and reducing costs by only paying for what is used. The other options do not directly impact TCO. More info: https://aws.amazon.com/economics/",
  },
  {
    id: uuidv5("aws-question-469", uuidv5.URL),
    text: "Which of the following is a benefit of using the AWS Cloud?",
    options: [
      "Permissive security removes the administrative burden.",
      "Ability to focus on revenue-generating activities.",
      "Control over cloud network hardware.",
      "Choice of specific cloud hardware vendors.",
    ],
    correctAnswers: [1],
    explanation:
      "Using AWS Cloud allows businesses to focus on innovation and revenue-generating activities by offloading operational tasks to AWS. The other options are not benefits of AWS Cloud. More info: https://aws.amazon.com/benefits/",
  },
  {
    id: uuidv5("aws-question-470", uuidv5.URL),
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
      "AWS Trusted Advisor provides insights into key categories such as Fault Tolerance and Performance, helping customers optimize and secure their AWS environment. Instance Usage (B), Infrastructure (C), and Storage Capacity (E) are not official categories. More info: https://aws.amazon.com/premiumsupport/technology/trusted-advisor/",
  },
  {
    id: uuidv5("aws-question-471", uuidv5.URL),
    text: "Which AWS feature allows a company to take advantage of usage tiers for services across multiple member accounts?",
    options: [
      "Service control policies (SCPs).",
      "Consolidated billing.",
      "All Upfront Reserved Instances.",
      "AWS Cost Explorer.",
    ],
    correctAnswers: [1],
    explanation:
      "Consolidated billing allows companies to combine usage from multiple accounts to benefit from volume pricing tiers across AWS services. SCPs (A) are for policy management, Reserved Instances (C) are a purchasing option, and Cost Explorer (D) is for cost analysis. More info: https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html",
  },
  {
    id: uuidv5("aws-question-472", uuidv5.URL),
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
      "AWS Storage Gateway integrates on-premises environments with AWS storage, while AWS Direct Connect provides a dedicated network connection between on-premises data centers and AWS. EBS (A) is block storage, Connect (B) is a contact center, and CloudFront (D) is a CDN. More info: https://aws.amazon.com/storagegateway/ and https://aws.amazon.com/directconnect/",
  },
  {
    id: uuidv5("aws-question-473", uuidv5.URL),
    text: "Which of the following services will automatically scale with an expected increase in web traffic?",
    options: [
      "AWS CodePipeline.",
      "Elastic Load Balancing.",
      "Amazon EBS.",
      "AWS Direct Connect.",
    ],
    correctAnswers: [1],
    explanation:
      "Elastic Load Balancing distributes incoming traffic across multiple targets, scaling automatically to handle increased web traffic. CodePipeline (A) is for CI/CD, EBS (C) is storage, and Direct Connect (D) is for network connectivity. More info: https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/how-elastic-load-balancing-works.html",
  },
  {
    id: uuidv5("aws-question-474", uuidv5.URL),
    text: "Which service provides a virtually unlimited amount of online highly durable object storage?",
    options: [
      "Amazon Redshift.",
      "Amazon Elastic File System (Amazon EFS).",
      "Amazon Elastic Container Service (Amazon ECS).",
      "Amazon S3.",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon S3 offers virtually unlimited storage with high durability and availability, making it ideal for storing a wide range of data types. Redshift (A) is a data warehouse, EFS (B) is file storage, and ECS (C) is for containers. More info: https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html",
  },
  {
    id: uuidv5("aws-question-475", uuidv5.URL),
    text: "Which AWS feature should a customer leverage to achieve high availability of an application?",
    options: [
      "AWS Direct Connect.",
      "Availability Zones.",
      "Data centers.",
      "Amazon Virtual Private Cloud (Amazon VPC).",
    ],
    correctAnswers: [1],
    explanation:
      "Availability Zones provide isolated locations within a region to deploy resources, ensuring high availability by minimizing the impact of failures. Direct Connect (A) is for network connectivity, data centers (C) are the physical infrastructure, and VPC (D) is for network isolation. More info: https://aws.amazon.com/about-aws/global-infrastructure/regions_az/",
  },
  {
    id: uuidv5("aws-question-476", uuidv5.URL),
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
      "AWS WAF (Web Application Firewall) allows users to block specific web requests based on conditions, while Network ACLs (Access Control Lists) provide control over inbound and outbound traffic for subnets. Trusted Advisor (B) provides recommendations, Direct Connect (C) is for connectivity, and Organizations (D) is for account management. More info: https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html and https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html",
  },
  {
    id: uuidv5("aws-question-477", uuidv5.URL),
    text: "Which of the following is a cloud architectural design principle?",
    options: [
      "Scale up not out.",
      "Loosely couple components.",
      "Build monolithic systems.",
      "Use commercial database software.",
    ],
    correctAnswers: [1],
    explanation:
      "Loosely coupling components ensures resilience, scalability, and flexibility in cloud applications, which aligns with best practices in cloud architecture. Scaling up (A) and building monolithic systems (C) are not recommended, and using commercial databases (D) is not a design principle. More info: https://docs.aws.amazon.com/wellarchitected/latest/framework/general-design-principles.html",
  },
  {
    id: uuidv5("aws-question-478", uuidv5.URL),
    text: "Which service enables risk auditing by continuously monitoring and logging account activity, including user actions in the AWS Management Console and AWS SDKs?",
    options: [
      "Amazon CloudWatch.",
      "AWS CloudTrail.",
      "AWS Config.",
      "AWS Health.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS CloudTrail logs all API calls and account activity, providing a comprehensive audit trail to monitor and track changes for compliance purposes. CloudWatch (A) is for metrics, Config (C) is for resource configuration, and Health (D) is for service health. More info: https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html",
  },
  {
    id: uuidv5("aws-question-479", uuidv5.URL),
    text: "Where can AWS compliance and certification reports be downloaded?",
    options: [
      "AWS Artifact.",
      "AWS Concierge.",
      "AWS Certificate Manager.",
      "AWS Trusted Advisor.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Artifact provides on-demand access to AWS compliance reports and certification documentation. Concierge (B) is for enterprise support, Certificate Manager (C) manages SSL/TLS certificates, and Trusted Advisor (D) gives best practice recommendations. More info: https://aws.amazon.com/artifact/",
  },
  {
    id: uuidv5("aws-question-480", uuidv5.URL),
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
      "Using AWS reduces both Total Cost of Ownership (TCO) by eliminating upfront infrastructure investments and operational expenditure (opex) by enabling pay-as-you-go models. Capex (B) increases with traditional IT, and deferred payment plans (D) and credit lines (E) are not standard AWS benefits. More info: https://aws.amazon.com/economics/",
  },
  {
    id: uuidv5("aws-question-481", uuidv5.URL),
    text: "Which AWS service can serve a static website?",
    options: [
      "Amazon S3.",
      "Amazon Route 53.",
      "Amazon QuickSight.",
      "AWS X-Ray.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon S3 is designed to store and retrieve any amount of data, making it ideal for hosting static websites by serving HTML, CSS, and JavaScript files. Route 53 (B) is DNS, QuickSight (C) is analytics, and X-Ray (D) is for tracing. More info: https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html",
  },
  {
    id: uuidv5("aws-question-482", uuidv5.URL),
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
      "Deploying applications in multiple AWS Regions reduces latency for global users, and Amazon CloudFront's global network of edge locations ensures fast delivery of content. Translate (B) and Comprehend (D) are language services, and ELB (E) does not distribute traffic across regions. More info: https://aws.amazon.com/about-aws/global-infrastructure/ and https://aws.amazon.com/cloudfront/features/",
  },
  {
    id: uuidv5("aws-question-483", uuidv5.URL),
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
      "Regions are geographically isolated areas where AWS operates, and each Region contains multiple Availability Zones to provide redundancy and fault tolerance. Resource groups (A), security groups (C), and AMIs (E) are not infrastructure components. More info: https://aws.amazon.com/about-aws/global-infrastructure/",
  },
  {
    id: uuidv5("aws-question-484", uuidv5.URL),
    text: "What is the AWS customer responsible for according to the AWS shared responsibility model?",
    options: [
      "Physical access controls.",
      "Data encryption.",
      "Secure disposal of storage devices.",
      "Environmental risk management.",
    ],
    correctAnswers: [1],
    explanation:
      "Under the AWS shared responsibility model, customers are responsible for securing their data, including encryption and access management, while AWS manages the infrastructure's physical and environmental security. More info: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-485", uuidv5.URL),
    text: "If each department within a company has its own AWS account, what is one way to enable consolidated billing?",
    options: [
      "Use AWS Budgets on each account to pay only to budget.",
      "Contact AWS Support for a monthly bill.",
      "Create an AWS Organization from the payer account and invite the other accounts to join.",
      "Put all invoices into one Amazon Simple Storage Service (Amazon S3) bucket, load data into Amazon Redshift, and then run a billing report.",
    ],
    correctAnswers: [2],
    explanation:
      "Creating an AWS Organization enables consolidated billing, allowing the payer account to manage and combine costs for all member accounts for better financial control. The other options do not provide true consolidated billing. More info: https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html",
  },
  {
    id: uuidv5("aws-question-486", uuidv5.URL),
    text: "What costs are included when comparing AWS Total Cost of Ownership (TCO) with on-premises TCO?",
    options: [
      "Project management.",
      "Antivirus software licensing.",
      "Data center security.",
      "Software development.",
    ],
    correctAnswers: [2],
    explanation:
      "When calculating TCO, AWS includes costs such as data center security, which are often overlooked in on-premises calculations but are covered by AWS as part of its shared responsibility model. Project management (A) and software development (D) are not infrastructure costs, and antivirus licensing (B) is a software cost. More info: https://aws.amazon.com/tco-calculator/",
  },
  {
    id: uuidv5("aws-question-487", uuidv5.URL),
    text: "What is the benefit of using AWS managed services, such as Amazon ElastiCache and Amazon Relational Database Service (Amazon RDS)?",
    options: [
      "They require the customer to monitor and replace failing instances.",
      "They have better performance than customer-managed services.",
      "They simplify patching and updating underlying OSs.",
      "They do not require the customer to optimize instance type or size selections.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Managed Services handle tasks like patching and updating the operating systems, ensuring resources remain secure and minimizing operational overhead for customers. Customers are still responsible for instance sizing and monitoring. More info: https://aws.amazon.com/managed-services/",
  },
  {
    id: uuidv5("aws-question-488", uuidv5.URL),
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
      "Amazon Route 53 provides DNS services that can route traffic between on-premises and AWS environments, and Virtual Private Gateway enables secure connections for hybrid architectures. Classic Load Balancer (C), Auto Scaling (D), and CloudWatch metrics (E) are not specifically hybrid features. More info: https://aws.amazon.com/architecture/hybrid/",
  },
  {
    id: uuidv5("aws-question-489", uuidv5.URL),
    text: "Which statement best describes Elastic Load Balancing?",
    options: [
      "It translates a domain name into an IP address using DNC.",
      "It distributes incoming application traffic across one or more Amazon EC2 instances.",
      "It collects metrics on connected Amazon EC2 instances.",
      "It automatically adjusts the number of Amazon EC2 instances to support incoming traffic.",
    ],
    correctAnswers: [1],
    explanation:
      "Elastic Load Balancing automatically distributes incoming application traffic across multiple targets, such as EC2 instances, containers, and IP addresses, improving fault tolerance. It does not translate domain names (A), collect metrics (C), or scale instances (D). More info: https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/how-elastic-load-balancing-works.html",
  },
  {
    id: uuidv5("aws-question-490", uuidv5.URL),
    text: "Which of the following is a fast and reliable NoSQL database service?",
    options: [
      "Amazon Redshift.",
      "Amazon RDS.",
      "Amazon DynamoDB.",
      "Amazon S3.",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon DynamoDB is a fully managed NoSQL database service known for its speed, scalability, and reliability, making it ideal for applications requiring low-latency access to data. Redshift (A) is a data warehouse, RDS (B) is relational, and S3 (D) is object storage. More info: https://aws.amazon.com/dynamodb/",
  },
  {
    id: uuidv5("aws-question-491", uuidv5.URL),
    text: "Which AWS service would you use to obtain compliance reports and certificates?",
    options: [
      "AWS Artifact.",
      "AWS Lambda.",
      "Amazon Inspector.",
      "AWS Certificate Manager.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Artifact is a service that provides on-demand access to AWS compliance reports and certificates, helping users meet regulatory and compliance requirements. Lambda (B) is for serverless compute, Inspector (C) is for security assessments, and Certificate Manager (D) manages SSL/TLS certificates. More info: https://aws.amazon.com/artifact/",
  },
  {
    id: uuidv5("aws-question-492", uuidv5.URL),
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
      "Amazon Route 53 and Amazon CloudFront are global services. Route 53 provides DNS routing globally, and CloudFront delivers content through a global network of edge locations. EC2 (B), S3 (C), and DynamoDB (E) are regional services. More info: https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html",
  },
  {
    id: uuidv5("aws-question-493", uuidv5.URL),
    text: "How would an AWS customer easily apply common access controls to a large set of users?",
    options: [
      "Apply an IAM policy to an IAM group.",
      "Apply an IAM policy to an IAM role.",
      "Apply the same IAM policy to all IAM users with access to the same workload.",
      "Apply an IAM policy to an Amazon Cognito user pool.",
    ],
    correctAnswers: [0],
    explanation:
      "By applying an IAM policy to an IAM group, users in the group inherit the permissions defined in the policy, simplifying management of access controls. Policies on roles (B) are for assumed identities, and Cognito (D) is for federated identities. More info: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups.html",
  },
  {
    id: uuidv5("aws-question-494", uuidv5.URL),
    text: "Which of the following is an important architectural design principle when designing cloud applications?",
    options: [
      "Use multiple Availability Zones.",
      "Use tightly coupled components.",
      "Use open source software.",
      "Provision extra capacity.",
    ],
    correctAnswers: [0],
    explanation:
      "Using multiple Availability Zones improves the availability and resilience of cloud applications by distributing workloads across physically separate locations. Tightly coupled components (B) reduce flexibility, open source (C) is a technology choice, and extra capacity (D) can be wasteful. More info: https://docs.aws.amazon.com/wellarchitected/latest/framework/reliability-pillar.html",
  },
  {
    id: uuidv5("aws-question-495", uuidv5.URL),
    text: "Which service allows a company with multiple AWS accounts to combine its usage to obtain volume discounts?",
    options: [
      "AWS Server Migration Service.",
      "AWS Organizations.",
      "AWS Budgets.",
      "AWS Trusted Advisor.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Organizations enables consolidated billing, allowing a company to combine usage across multiple accounts to achieve volume discounts. Server Migration Service (A) is for migrations, Budgets (C) is for cost control, and Trusted Advisor (D) is for best practice checks. More info: https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html",
  },
  {
    id: uuidv5("aws-question-496", uuidv5.URL),
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
      "AWS WAF provides application layer protection by blocking specific patterns of requests, while Network ACLs (Access Control Lists) block or allow traffic based on IP addresses at the subnet level. Trusted Advisor (B) provides recommendations, Direct Connect (C) is for connectivity, and Organizations (D) is for account management. More info: https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html and https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html",
  },
  {
    id: uuidv5("aws-question-497", uuidv5.URL),
    text: "Which of the following is a cloud architectural design principle?",
    options: [
      "Scale up not out.",
      "Loosely couple components.",
      "Build monolithic systems.",
      "Use commercial database software.",
    ],
    correctAnswers: [1],
    explanation:
      "Loosely coupling components improves system reliability, scalability, and flexibility, as changes in one part of the system do not directly impact others. Scaling up (A) and building monolithic systems (C) are not recommended, and using commercial databases (D) is not a design principle. More info: https://docs.aws.amazon.com/wellarchitected/latest/framework/general-design-principles.html",
  },
  {
    id: uuidv5("aws-question-498", uuidv5.URL),
    text: "Which service enables risk auditing by continuously monitoring and logging account activity, including user actions in the AWS Management Console and AWS SDKs?",
    options: [
      "Amazon CloudWatch.",
      "AWS CloudTrail.",
      "AWS Config.",
      "AWS Health.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS CloudTrail provides a detailed log of account activity, including actions taken via the AWS Management Console, SDKs, and APIs, supporting compliance and auditing efforts. CloudWatch (A) is for metrics, Config (C) is for resource configuration, and Health (D) is for service health. More info: https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html",
  },
  {
    id: uuidv5("aws-question-499", uuidv5.URL),
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
      "AWS reduces both TCO and operational expenditure by eliminating upfront hardware costs and allowing pay-as-you-go pricing for services. Capex (B) increases with traditional IT, and deferred payment plans (D) and credit lines (E) are not standard AWS benefits. More info: https://aws.amazon.com/economics/",
  },
  {
    id: uuidv5("aws-question-500", uuidv5.URL),
    text: "Which AWS service is used to store data in the cloud?",
    options: [
      "Amazon S3.",
      "Amazon Redshift.",
      "Amazon DynamoDB.",
      "Amazon RDS.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon S3 is a fully managed object storage service that provides a simple way to store and retrieve any amount of data at any time, from anywhere on the web. Redshift (B) is a data warehouse, DynamoDB (C) is NoSQL, and RDS (D) is relational. More info: https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html",
  },
];

const exam11: Question[] = [
  {
    id: uuidv5("aws-question-501", uuidv5.URL),
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
      "AWS CloudFormation can automate the provisioning of resources, including RDS clusters, while the AWS Management Console allows users to launch and manage services manually. Concierge (A) is for enterprise support, S3 (C) is for storage, and EC2 Auto Scaling (D) is for scaling EC2 instances. More info: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CreateDBInstance.html and https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html",
  },
  {
    id: uuidv5("aws-question-502", uuidv5.URL),
    text: "Which of the following Reserved Instance (RI) pricing models provides the highest average savings compared to On-Demand pricing?",
    options: [
      "One-year, No Upfront, Standard RI pricing.",
      "One-year, All Upfront, Convertible RI pricing.",
      "Three-year, All Upfront, Standard RI pricing.",
      "Three-year, No Upfront, Convertible RI pricing.",
    ],
    correctAnswers: [2],
    explanation:
      "The Three-year, All Upfront, Standard RI pricing model offers the highest savings because it combines a long commitment period with full upfront payment. The other options offer less savings due to shorter terms, partial payment, or convertible flexibility. More info: https://aws.amazon.com/ec2/pricing/reserved-instances/",
  },
  {
    id: uuidv5("aws-question-503", uuidv5.URL),
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
      "Amazon CloudWatch Logs provides real-time monitoring of log data and allows users to set adjustable retention periods for log data storage. SNS (A) is for notifications, Elasticsearch analytics (B) is not free, and CloudWatch Logs is not provided at no charge (C). More info: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html",
  },
  {
    id: uuidv5("aws-question-504", uuidv5.URL),
    text: "Which of the following is an AWS-managed compute service?",
    options: ["Amazon SWF.", "Amazon EC2.", "AWS Lambda.", "Amazon Aurora."],
    correctAnswers: [2],
    explanation:
      "AWS Lambda is a managed serverless compute service that allows users to run code without provisioning or managing servers. SWF (A) is for workflows, EC2 (B) is not fully managed, and Aurora (D) is a managed database. More info: https://aws.amazon.com/lambda/",
  },
  {
    id: uuidv5("aws-question-505", uuidv5.URL),
    text: "A company wants to reduce the physical compute footprint that developers use to run code. Which service would meet that need by enabling serverless architectures?",
    options: [
      "Amazon Elastic Compute Cloud (Amazon EC2).",
      "AWS Lambda.",
      "Amazon DynamoDB.",
      "AWS CodeCommit.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Lambda is a serverless compute service that enables developers to run code without provisioning physical or virtual servers, thereby reducing the compute footprint. EC2 (A) requires server management, DynamoDB (C) is a database, and CodeCommit (D) is for source control. More info: https://aws.amazon.com/lambda/",
  },
  {
    id: uuidv5("aws-question-506", uuidv5.URL),
    text: "Which of the following is the customer’s responsibility under the AWS shared responsibility model?",
    options: [
      "Patching underlying infrastructure.",
      "Physical security.",
      "Patching Amazon EC2 instances.",
      "Patching network infrastructure.",
    ],
    correctAnswers: [2],
    explanation:
      "Under the AWS shared responsibility model, customers are responsible for managing and patching the operating systems and applications on their Amazon EC2 instances. AWS handles the underlying infrastructure and physical security. More info: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-507", uuidv5.URL),
    text: "According to the AWS shared responsibility model who is responsible for configuration management?",
    options: [
      "It is solely the responsibility of the customer.",
      "It is solely the responsibility of AWS.",
      "It is shared between AWS and the customer.",
      "It is not part of the AWS shared responsibility model.",
    ],
    correctAnswers: [2],
    explanation:
      "Configuration management is a shared responsibility. AWS manages the infrastructure configuration, while customers are responsible for configuring their applications and systems. More info: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-508", uuidv5.URL),
    text: "Which security service automatically recognizes and classifies sensitive data or intellectual property on AWS?",
    options: [
      "Amazon GuardDuty.",
      "Amazon Macie.",
      "Amazon Inspector.",
      "AWS Shield.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon Macie automatically discovers, classifies, and protects sensitive data using machine learning. GuardDuty (A) is for threat detection, Inspector (C) is for vulnerability assessment, and Shield (D) is for DDoS protection. More info: https://aws.amazon.com/macie/",
  },
  {
    id: uuidv5("aws-question-509", uuidv5.URL),
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
      "AWS operates on a pay-as-you-go pricing model with variable costs based on actual usage, eliminating upfront commitments. Fixed-term (A), colocation (C), and planned (D) are not core AWS pricing models. More info: https://aws.amazon.com/pricing/",
  },
  {
    id: uuidv5("aws-question-510", uuidv5.URL),
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
      "Customers are responsible for securing their data, including encryption, and ensuring their teams are trained to use AWS securely. AWS handles physical security and hardware disposal. More info: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-511", uuidv5.URL),
    text: "A customer is using multiple AWS accounts with separate billing. How can the customer take advantage of volume discounts with minimal impact to the AWS resources?",
    options: [
      "Create one global AWS account and move all AWS resources to that account.",
      "Sign up for three years of Reserved Instance pricing up front.",
      "Use the consolidated billing feature from AWS Organizations.",
      "Sign up for the AWS Enterprise support plan to get volume discounts.",
    ],
    correctAnswers: [2],
    explanation:
      "Consolidated billing through AWS Organizations allows multiple accounts to combine usage to benefit from volume discounts while maintaining separate resources. The other options either require resource migration or do not directly provide volume discounts. More info: https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html",
  },
  {
    id: uuidv5("aws-question-512", uuidv5.URL),
    text: "Which Amazon EC2 pricing model offers the MOST significant discount when compared to On-Demand Instances?",
    options: [
      "A Partial Upfront Reserved Instances for a 1-year term.",
      "All Upfront Reserved instances for a 1-year term.",
      "All Upfront Reserved Instances for a 3-year term.",
      "No Upfront Reserved Instances for a 3-year term.",
    ],
    correctAnswers: [2],
    explanation:
      "The All Upfront Reserved Instances for a 3-year term provides the highest discount because it combines a long commitment period with full upfront payment. Other options offer less savings due to shorter terms or partial payment. More info: https://aws.amazon.com/ec2/pricing/reserved-instances/",
  },
  {
    id: uuidv5("aws-question-513", uuidv5.URL),
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
      "Amazon RDS provides a managed relational database service for constantly changing transactional data, while Amazon EFS is a scalable file storage service suitable for concurrent access and updates. Glacier (A) is for archival, Snowball (C) is for data transfer, and Redshift (D) is for analytics. More info: https://aws.amazon.com/rds/ and https://aws.amazon.com/efs/",
  },
  {
    id: uuidv5("aws-question-514", uuidv5.URL),
    text: "Which AWS service allows users to identify the changes made to a resource over time?",
    options: [
      "Amazon Inspector.",
      "AWS Config.",
      "AWS Service Catalog.",
      "AWS IAM.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Config provides a detailed view of the configuration changes and history of AWS resources over time, enabling compliance auditing and change management. Inspector (A) is for security assessment, Service Catalog (C) is for provisioning, and IAM (D) is for access management. More info: https://docs.aws.amazon.com/config/latest/developerguide/WhatIsConfig.html",
  },
  {
    id: uuidv5("aws-question-515", uuidv5.URL),
    text: "According to best practices, how should an application be designed to run in the AWS Cloud?",
    options: [
      "Use tightly coupled components.",
      "Use loosely coupled components.",
      "Use infrequently coupled components.",
      "Use frequently coupled components.",
    ],
    correctAnswers: [1],
    explanation:
      "Applications in the AWS Cloud should use loosely coupled components to improve scalability, reliability, and fault tolerance. Tightly coupled or frequently coupled components reduce flexibility and resilience. More info: https://docs.aws.amazon.com/wellarchitected/latest/framework/general-design-principles.html",
  },
  {
    id: uuidv5("aws-question-516", uuidv5.URL),
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
      "The AWS Business Support plan offers 24/7 technical assistance and an unlimited number of cases and contacts. A Technical Account Manager (B) and annual reviews (E) are part of the Enterprise plan, and 15-minute response time (D) is for Enterprise critical cases. More info: https://aws.amazon.com/premiumsupport/plans/",
  },
  {
    id: uuidv5("aws-question-517", uuidv5.URL),
    text: "Which of the following is an AWS managed Domain Name System (DNS) web service?",
    options: [
      "Amazon Route 53.",
      "Amazon Neptune.",
      "Amazon SageMaker.",
      "Amazon Lightsail.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon Route 53 is a managed DNS web service that provides domain registration, traffic routing, and health checks. Neptune (B) is a graph database, SageMaker (C) is for machine learning, and Lightsail (D) is for simple cloud hosting. More info: https://aws.amazon.com/route53/",
  },
  {
    id: uuidv5("aws-question-518", uuidv5.URL),
    text: "A user must meet compliance and software licensing requirements that state a workload must be hosted on a physical server. When Amazon EC2 instance pricing option will meet these requirements?",
    options: [
      "Dedicated Hosts.",
      "Dedicated Instances.",
      "Spot Instances.",
      "Reserved Instances.",
    ],
    correctAnswers: [0],
    explanation:
      "Dedicated Hosts provide physical servers fully dedicated to the user's use, which is ideal for meeting compliance and software licensing requirements. Dedicated Instances (B) share hardware, Spot (C) and Reserved (D) are purchasing options. More info: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-overview.html",
  },
  {
    id: uuidv5("aws-question-519", uuidv5.URL),
    text: "Which of the Reserved Instance (RI) pricing models can change the attributes of the RI as long as the exchange results in the creation of RIs of equal or greater value?",
    options: [
      "Dedicated RIs.",
      "Scheduled RIs.",
      "Convertible RIs.",
      "Standard RIs.",
    ],
    correctAnswers: [2],
    explanation:
      "Convertible Reserved Instances allow customers to modify the instance attributes as long as the new RIs are of equal or greater value. Standard RIs (D) do not allow this flexibility. More info: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-modifying.html",
  },
  {
    id: uuidv5("aws-question-520", uuidv5.URL),
    text: "Which service is best for storing common database query results, which helps to alleviate database access load?",
    options: [
      "Amazon Machine Learning.",
      "Amazon SQS.",
      "Amazon ElastiCache.",
      "Amazon EC2 Instance Store.",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon ElastiCache is an in-memory data store that can cache frequently accessed data, such as common database query results, to improve application performance and reduce database load. SQS (B) is for messaging, EC2 Instance Store (D) is ephemeral storage, and Machine Learning (A) is for ML workloads. More info: https://aws.amazon.com/elasticache/",
  },
  {
    id: uuidv5("aws-question-521", uuidv5.URL),
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
      "EC2 Spot Instances are suitable for applications that are flexible and fault-tolerant, such as non-production applications or workloads that can tolerate interruptions. They are not recommended for stateful, sensitive, or interruption-intolerant workloads. More info: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-instances.html",
  },
  {
    id: uuidv5("aws-question-522", uuidv5.URL),
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
      "Cost allocation tags, the AWS Simple Monthly Calculator, and the AWS TCO Calculator are all tools that help estimate and manage AWS costs. Detailed billing reports (A) are for analysis, and Cost Estimator (E) is not an official AWS tool. More info: https://aws.amazon.com/pricing/calculator/ and https://aws.amazon.com/tco-calculator/",
  },
  {
    id: uuidv5("aws-question-523", uuidv5.URL),
    text: "A company wants to focus on business activities instead of managing compute and capacity. Which AWS service can be used to automatically add or remove Amazon EC2 instances based on demand?",
    options: [
      "Elastic Load Balancer.",
      "Amazon EC2 Auto Scaling.",
      "Amazon Route 53.",
      "Amazon CloudFront.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon EC2 Auto Scaling automatically adjusts the number of EC2 instances based on demand, reducing the need for manual capacity management. Elastic Load Balancer (A) distributes traffic, Route 53 (C) is DNS, and CloudFront (D) is a CDN. More info: https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html",
  },
  {
    id: uuidv5("aws-question-524", uuidv5.URL),
    text: "Which is the minimum AWS Support plan that includes Infrastructure Event Management without additional costs?",
    options: ["Enterprise.", "Business.", "Developer.", "Basic."],
    correctAnswers: [0],
    explanation:
      "The Enterprise Support plan includes Infrastructure Event Management at no additional cost. Business, Developer, and Basic plans do not include this feature. More info: https://aws.amazon.com/premiumsupport/plans/",
  },
  {
    id: uuidv5("aws-question-525", uuidv5.URL),
    text: "Access keys in AWS Identity and Access Management (IM1) are used to:",
    options: [
      "Log in to the AWS Management Console.",
      "Make programmatic calls to AWS from AWS APIs.",
      "Log in to Amazon EC2 instances.",
      "Authenticate to AWS CodeCommit repositories.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS access keys are used to make programmatic API calls to AWS services. They are not used for console login, EC2 login, or CodeCommit authentication. More info: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html",
  },
  {
    id: uuidv5("aws-question-526", uuidv5.URL),
    text: "Which AWS service can be used to query stored datasets directly from Amazon S3 using standard SQL?",
    options: [
      "AWS Glue.",
      "AWS Data Pipeline.",
      "Amazon CloudSearch.",
      "Amazon Athena.",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon Athena is a serverless query service that allows users to run SQL queries directly on data stored in Amazon S3. Glue (A) is for ETL, Data Pipeline (B) is for data workflows, and CloudSearch (C) is for search. More info: https://aws.amazon.com/athena/",
  },
  {
    id: uuidv5("aws-question-527", uuidv5.URL),
    text: "How does AWS shorten the time to provision IT resources?",
    options: [
      "It supplies an online IT ticketing platform for resource requests.",
      "It supports automatic code validation services.",
      "It provides the ability to programmatically provision existing resources.",
      "It automates the resource request process from a company’s IT vendor list.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS shortens provisioning time by allowing resources to be provisioned programmatically via APIs and automation tools. The other options are not core AWS features. More info: https://aws.amazon.com/quickstart/",
  },
  {
    id: uuidv5("aws-question-528", uuidv5.URL),
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
      "AWS CloudTrail logs account activity and user actions, while Amazon CloudWatch monitors metrics and logs for various AWS services. CloudFront (A) is a CDN, Cloud9 (B) is an IDE, and CloudHSM (D) is for key management. More info: https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html and https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html",
  },
  {
    id: uuidv5("aws-question-529", uuidv5.URL),
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
      "Amazon S3 is an object store that offers highly durable and scalable storage. It is not a global file system, local file store, or network file system. More info: https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html",
  },
  {
    id: uuidv5("aws-question-530", uuidv5.URL),
    text: "A user wants guidance on possible savings when migrating from on-premises to AWS. Which tool is suitable for this scenario?",
    options: [
      "AWS Budgets.",
      "Cost Explorer.",
      "AWS Total Cost of Ownership (TCO) Calculator.",
      "AWS Well-Architected Tool.",
    ],
    correctAnswers: [2],
    explanation:
      "The AWS Total Cost of Ownership (TCO) Calculator helps users estimate the cost savings of migrating from on-premises infrastructure to AWS. Budgets (A) and Cost Explorer (B) are for cost management, and Well-Architected Tool (D) is for best practices. More info: https://aws.amazon.com/tco-calculator/",
  },
  {
    id: uuidv5("aws-question-531", uuidv5.URL),
    text: "Which of the following services is in the category of AWS serverless platform?",
    options: [
      "Amazon EMR.",
      "Elastic Load Balancing.",
      "AWS Lambda.",
      "AWS Mobile Hub.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Lambda is a serverless compute service that lets you run code without provisioning or managing servers, automatically scaling to meet demand. EMR (A) is for big data, ELB (B) is for load balancing, and Mobile Hub (D) is for mobile app development. More info: https://aws.amazon.com/lambda/",
  },
  {
    id: uuidv5("aws-question-532", uuidv5.URL),
    text: "The use of what AWS feature or service allows companies to track and categorize spending on a detailed level?",
    options: [
      "Cost allocation tags.",
      "Consolidated billing.",
      "AWS Budgets.",
      "AWS Marketplace.",
    ],
    correctAnswers: [0],
    explanation:
      "Cost allocation tags allow companies to categorize and track their AWS spending at a granular level, helping in cost management and analysis. Consolidated billing (B) aggregates costs, Budgets (C) sets limits, and Marketplace (D) is for software procurement. More info: https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html",
  },
  {
    id: uuidv5("aws-question-533", uuidv5.URL),
    text: "Which of the following inspects AWS environments to find opportunities that can save money for users and also improve system performance?",
    options: [
      "AWS Cost Explorer.",
      "AWS Trusted Advisor.",
      "Consolidated billing.",
      "Detailed billing.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Trusted Advisor analyzes AWS environments and provides recommendations on cost savings, security, performance, and fault tolerance. Cost Explorer (A) is for cost analysis, consolidated billing (C) is for billing, and detailed billing (D) is for reporting. More info: https://aws.amazon.com/premiumsupport/technology/trusted-advisor/",
  },
  {
    id: uuidv5("aws-question-534", uuidv5.URL),
    text: "Web servers running on Amazon EC2 access a legacy application running in a corporate data center. What term would describe this model?",
    options: [
      "Cloud-native.",
      "Partner network.",
      "Hybrid architecture.",
      "Infrastructure as a service.",
    ],
    correctAnswers: [2],
    explanation:
      "A hybrid architecture integrates cloud-based resources with on-premises or legacy infrastructure, allowing workloads to run across both environments. Cloud-native (A) is fully cloud, partner network (B) is for AWS partners, and IaaS (D) is a service model. More info: https://aws.amazon.com/architecture/hybrid/",
  },
  {
    id: uuidv5("aws-question-535", uuidv5.URL),
    text: "What technology enables compute capacity to adjust as loads change?",
    options: [
      "Load balancing.",
      "Automatic failover.",
      "Round robin.",
      "Auto Scaling.",
    ],
    correctAnswers: [3],
    explanation:
      "Auto Scaling automatically adjusts the number of Amazon EC2 instances to handle changes in load, ensuring that resources scale efficiently and cost-effectively. Load balancing (A) distributes traffic, failover (B) is for redundancy, and round robin (C) is a routing method. More info: https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html",
  },
  {
    id: uuidv5("aws-question-536", uuidv5.URL),
    text: "Which AWS service is a managed NoSQL database?",
    options: [
      "Amazon Redshift.",
      "Amazon DynamoDB.",
      "Amazon Aurora.",
      "Amazon RDS for ManaDB.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability. Redshift (A) is a data warehouse, Aurora (C) and RDS (D) are relational databases. More info: https://aws.amazon.com/dynamodb/",
  },
  {
    id: uuidv5("aws-question-537", uuidv5.URL),
    text: "Which of the following is a correct relationship between regions, Availability Zones, and edge locations?",
    options: [
      "Data centers contain regions.",
      "Regions contain Availability Zones.",
      "Availability Zones contain edge locations.",
      "Edge locations contain regions.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS regions are made up of multiple Availability Zones, which are designed to provide high availability. Edge locations are used for services like CloudFront and Route 53, but they are not directly inside Availability Zones. More info: https://aws.amazon.com/about-aws/global-infrastructure/",
  },
  {
    id: uuidv5("aws-question-538", uuidv5.URL),
    text: "What approach to transcoding a large number of individual video files adheres to AWS architecture principles?",
    options: [
      "Using many instances in parallel.",
      "Using a single large instance during off-peak hours.",
      "Using dedicated hardware.",
      "Using a large GPU instance type.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS recommends using a distributed approach to transcoding, leveraging parallel processing across many instances to meet scalability and performance requirements. The other options do not scale as efficiently. More info: https://aws.amazon.com/solutions/case-studies/elemental-media-convert/",
  },
  {
    id: uuidv5("aws-question-539", uuidv5.URL),
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
      "Amazon EC2 and Amazon RDS can both host Microsoft SQL Server databases, with RDS providing managed database capabilities for easier maintenance. Aurora (C) is MySQL/PostgreSQL compatible, Redshift (D) is for analytics, and S3 (E) is object storage. More info: https://aws.amazon.com/rds/sqlserver/",
  },
  {
    id: uuidv5("aws-question-540", uuidv5.URL),
    text: "Which AWS IAM feature allows developers to access AWS services through the AWS CLI?",
    options: [
      "API keys.",
      "Access keys.",
      "User names/Passwords.",
      "SSH keys.",
    ],
    correctAnswers: [1],
    explanation:
      "Access keys are used by developers to authenticate programmatic access to AWS services through the AWS CLI and APIs. API keys (A) are for API Gateway, usernames/passwords (C) are for console login, and SSH keys (D) are for EC2 access. More info: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html",
  },
  {
    id: uuidv5("aws-question-541", uuidv5.URL),
    text: "The user is fully responsible for which action when running workloads on AWS?",
    options: [
      "Patching the infrastructure components.",
      "Maintaining the underlying infrastructure components.",
      "Maintaining physical and environmental controls.",
      "Implementing controls to route application traffic.",
    ],
    correctAnswers: [3],
    explanation:
      "In the AWS shared responsibility model, users are responsible for the configuration of application-level traffic routing and other application-level concerns. AWS manages the underlying infrastructure, patching, and physical controls. More info: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-542", uuidv5.URL),
    text: "Which AWS support plan includes a dedicated Technical Account Manager?",
    options: ["Developer.", "Enterprise.", "Business.", "Basic."],
    correctAnswers: [1],
    explanation:
      "The AWS Enterprise support plan includes a dedicated Technical Account Manager (TAM) to provide proactive support and guidance for customers. The other plans do not include a TAM. More info: https://aws.amazon.com/premiumsupport/plans/",
  },
  {
    id: uuidv5("aws-question-543", uuidv5.URL),
    text: "What time-savings advantage is offered with the use of Amazon Rekognition?",
    options: [
      "Amazon Rekognition provides automatic watermarking of images.",
      "Amazon Rekognition provides automatic detection of objects appearing in pictures.",
      "Amazon Recognition provides the ability to resize millions of images automatically.",
      "Amazon Rekognition uses Amazon Mechanical Turk to allow humans to bid on object detection jobs.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon Rekognition automates the detection of objects and scenes in images, which saves time compared to manually tagging or analyzing visual data. The other options are not features of Rekognition. More info: https://aws.amazon.com/rekognition/",
  },
  {
    id: uuidv5("aws-question-544", uuidv5.URL),
    text: "Which AWS service can be used to automatically scale an application up and down without making capacity planning decisions?",
    options: [
      "Amazon AutoScaling.",
      "Amazon Redshift.",
      "AWS CloudTrail.",
      "AWS Lambda.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon AutoScaling automatically adjusts the number of instances running based on demand, eliminating the need for manual capacity planning decisions. Redshift (B) is a data warehouse, CloudTrail (C) is for logging, and Lambda (D) is serverless compute. More info: https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html",
  },
  {
    id: uuidv5("aws-question-545", uuidv5.URL),
    text: "Amazon Relational Database Service (Amazon RDS) offers which of the following benefits over traditional database management?",
    options: [
      "AWS manages the data stored in Amazon RDS tables.",
      "AWS manages the maintenance of the operating system.",
      "AWS automatically scales up instance types on demand.",
      "AWS manages the database type.",
    ],
    correctAnswers: [1],
    explanation:
      "With Amazon RDS, AWS manages tasks such as patching, backups, and maintenance of the underlying operating system, reducing the operational overhead for users. Data management (A) and database type (D) are user responsibilities, and auto-scaling (C) is not automatic for instance types. More info: https://aws.amazon.com/rds/features/",
  },
  {
    id: uuidv5("aws-question-546", uuidv5.URL),
    text: "A company’s web application currently has light dependencies on underlying components so when one component fails the entire web application fails. Applying which AWS Cloud design principle will address the current design issue?",
    options: [
      "Implementing elasticity enabling the application to scale up or scale down as demand changes.",
      "Enabling several EC2 instances to run in parallel to achieve better performance.",
      "Focusing on decoupling components by isolating them and ensuring individual components can function when other components.",
      "Doubling EC2 computing resources to increase system fault tolerance.",
    ],
    correctAnswers: [2],
    explanation:
      "Decoupling components and isolating failures helps ensure that when one component fails, it does not impact the entire application, improving system reliability. The other options do not address the root cause. More info: https://docs.aws.amazon.com/wellarchitected/latest/framework/general-design-principles.html",
  },
  {
    id: uuidv5("aws-question-547", uuidv5.URL),
    text: "A customer would like to design and build a new workload on AWS Cloud but does not have the AWS-related software technical expertise in-house. Which of the following AWS programs can a customer take advantage of to achieve that outcome?",
    options: [
      "AWS Partner Network Technology Partners.",
      "AWS Marketplace.",
      "AWS Partner Network Consulting Partners.",
      "AWS Service Catalog.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Partner Network (APN) Consulting Partners provide professional services, including design, implementation, and ongoing management of AWS workloads for customers. Technology Partners (A) provide software, Marketplace (B) is for software procurement, and Service Catalog (D) is for managing approved products. More info: https://aws.amazon.com/partners/",
  },
  {
    id: uuidv5("aws-question-548", uuidv5.URL),
    text: "Which service stores objects, provides real-time access to those objects, and offers versioning and lifecycle capabilities?",
    options: [
      "Amazon Glacier.",
      "AWS Storage Gateway.",
      "Amazon S3.",
      "Amazon EBS.",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon S3 is a scalable object storage service that provides features such as versioning, lifecycle policies, and real-time access to stored data. Glacier (A) is for archival, Storage Gateway (B) is for hybrid storage, and EBS (D) is block storage. More info: https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html",
  },
  {
    id: uuidv5("aws-question-549", uuidv5.URL),
    text: "Distributing workloads across multiple Availability Zones supports which cloud architecture design principle?",
    options: [
      "Implement automation.",
      "Design for agility.",
      "Design for failure.",
      "Implement elasticity.",
    ],
    correctAnswers: [2],
    explanation:
      "Distributing workloads across multiple Availability Zones ensures fault tolerance and resilience, a key aspect of designing for failure in the cloud. The other options are important but not directly related to this principle. More info: https://docs.aws.amazon.com/wellarchitected/latest/framework/reliability-pillar.html",
  },
  {
    id: uuidv5("aws-question-550", uuidv5.URL),
    text: "Which service should a customer use to consolidate and centrally manage multiple AWS accounts?",
    options: [
      "AWS IAM.",
      "AWS Organizations.",
      "AWS Schema Conversion Tool.",
      "AWS Config.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Organizations allows customers to consolidate billing, manage accounts, and implement policies for multiple AWS accounts in a single organization. IAM (A) is for identity management, Schema Conversion Tool (C) is for database migration, and Config (D) is for resource configuration. More info: https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html",
  },
];

const exam12: Question[] = [
  {
    id: uuidv5("aws-question-551", uuidv5.URL),
    text: "Which of the following components of the AWS Global Infrastructure consists of one or more discrete data centers interconnected through low latency links?",
    options: [
      "Availability Zone",
      "Edge location",
      "Region",
      "Private networking",
    ],
    correctAnswers: [0],
    explanation:
      "An Availability Zone consists of one or more discrete data centers interconnected through low-latency links, providing high availability and fault tolerance. Edge locations (B) are for content delivery, regions (C) are collections of AZs, and private networking (D) is not an infrastructure component. More info: https://aws.amazon.com/about-aws/global-infrastructure/regions_az/",
  },
  {
    id: uuidv5("aws-question-552", uuidv5.URL),
    text: "One benefit of On-Demand Amazon Elastic Compute Cloud (Amazon EC2) pricing is:",
    options: [
      "The ability to bid for a lower hourly cost.",
      "Paying a daily rate regardless of time used.",
      "Paying only for time used.",
      "Pre-paying for instances and paying a lower hourly rate.",
    ],
    correctAnswers: [2],
    explanation:
      "With On-Demand EC2 instances, you pay only for the compute time you use without any long-term commitments, making it flexible and cost-effective for unpredictable workloads. The other options describe Spot, Reserved, or incorrect models. More info: https://aws.amazon.com/ec2/pricing/on-demand/",
  },
  {
    id: uuidv5("aws-question-553", uuidv5.URL),
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
      "AWS Professional Services provides expert guidance for cloud migration, while the AWS Partner Network (APN) includes consulting partners who assist in migrating applications to AWS. Trusted Advisor (A) is for best practices, Systems Manager (C) is for management, and Secrets Manager (E) is for secrets. More info: https://aws.amazon.com/professional-services/ and https://aws.amazon.com/partners/",
  },
  {
    id: uuidv5("aws-question-554", uuidv5.URL),
    text: "A characteristic of edge locations is that they:",
    options: [
      "Host Amazon EC2 instances closer to users.",
      "Help lower latency and improve performance for users.",
      "Cache frequently changing data without reaching the origin server.",
      "Refresh data changes daily.",
    ],
    correctAnswers: [1],
    explanation:
      "Edge locations are part of Amazon CloudFront’s content delivery network (CDN), which helps lower latency and improve performance for end users by caching content closer to them. They do not host EC2 (A), cache frequently changing data (C), or refresh daily (D). More info: https://aws.amazon.com/cloudfront/features/",
  },
  {
    id: uuidv5("aws-question-555", uuidv5.URL),
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
      "AWS services can be accessed using the AWS Command Line Interface (CLI) and Software Development Kits (SDKs), allowing users to interact programmatically and via command-line commands. On-premises (B), SaaS (D), and hybrid (E) are not direct interfaces. More info: https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html and https://aws.amazon.com/tools/",
  },
  {
    id: uuidv5("aws-question-556", uuidv5.URL),
    text: "What is a value proposition of the AWS Cloud?",
    options: [
      "AWS is responsible for security in the AWS Cloud.",
      "No long-term contract is required.",
      "Provision new servers in days.",
      "AWS manages user applications in the AWS Cloud.",
    ],
    correctAnswers: [1],
    explanation:
      "One of the key benefits of AWS is its pay-as-you-go model, which eliminates the need for long-term contracts and upfront commitments. AWS is not responsible for all security (A), provisioning is in minutes (C), and users manage their own applications (D). More info: https://aws.amazon.com/pricing/",
  },
  {
    id: uuidv5("aws-question-557", uuidv5.URL),
    text: "A company is migrating an application that is running non-interruptible workloads for a three-year time frame. Which pricing construct would provide the MOST cost-effective solution?",
    options: [
      "Amazon EC2 Spot Instances.",
      "Amazon EC2 Dedicated Instances.",
      "Amazon EC2 On-Demand Instances.",
      "Amazon EC2 Reserved Instances.",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon EC2 Reserved Instances provide significant cost savings for workloads with predictable usage patterns over a long-term period, such as three years. Spot (A) is for interruptible, Dedicated (B) is for compliance, and On-Demand (C) is for short-term. More info: https://aws.amazon.com/ec2/pricing/reserved-instances/",
  },
  {
    id: uuidv5("aws-question-558", uuidv5.URL),
    text: "Which AWS service is used to track, record, and audit configuration changes made to AWS resources?",
    options: ["AWS Shield.", "AWS Config.", "AWS IAM.", "Amazon Inspector."],
    correctAnswers: [1],
    explanation:
      "AWS Config continuously monitors and records AWS resource configurations and changes, allowing for auditing and compliance tracking. Shield (A) is for DDoS, IAM (C) is for identity, and Inspector (D) is for security assessment. More info: https://docs.aws.amazon.com/config/latest/developerguide/WhatIsConfig.html",
  },
  {
    id: uuidv5("aws-question-559", uuidv5.URL),
    text: "Which feature of the AWS Cloud will support an international company’s requirement for low latency to all of its customers?",
    options: [
      "Fault tolerance.",
      "Global reach.",
      "Pay-as-you-go pricing.",
      "High availability.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Global Infrastructure, including multiple regions and edge locations, provides global reach, ensuring low latency access for customers worldwide. Fault tolerance (A) and high availability (D) are important but not specific to global latency. More info: https://aws.amazon.com/about-aws/global-infrastructure/",
  },
  {
    id: uuidv5("aws-question-560", uuidv5.URL),
    text: "How can one AWS account use Reserved Instances from another AWS account?",
    options: [
      "By using Amazon EC2 Dedicated Instances.",
      "By using AWS Organizations consolidated billing.",
      "By using the AWS Cost Explorer tool.",
      "By using AWS Budgets.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Organizations consolidated billing allows multiple AWS accounts within an organization to share Reserved Instances for cost efficiency. Dedicated Instances (A) are for compliance, Cost Explorer (C) and Budgets (D) are for cost management. More info: https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html",
  },
  {
    id: uuidv5("aws-question-561", uuidv5.URL),
    text: "What are the benefits of developing and running a new application in the AWS Cloud compared to on-premises? (Select TWO)",
    options: [
      "AWS automatically distributes the data globally for higher durability.",
      "AWS will take care of operating the application.",
      "AWS makes it easy to architect for high availability.",
      "AWS can easily accommodate application demand changes.",
      "AWS takes care of application security patching.",
    ],
    correctAnswers: [2, 3],
    explanation:
      "Architecting for high availability (C) is easier in AWS because you can distribute workloads across multiple Availability Zones and Regions without building your own global data centers. Elastic scaling (D) lets you rapidly match capacity to demand—spin resources up or down in minutes instead of weeks—improving agility and cost efficiency. A is incorrect because AWS does not automatically replicate *all* your application data globally; you choose replication services and patterns (for example, S3 Cross-Region Replication, DynamoDB Global Tables). B is incorrect because AWS manages the cloud *infrastructure*, not your specific application operations—you still own deployment, config, and runtime behavior (unless using a fully managed PaaS/SaaS layer you configure). E is incorrect because application-layer security patching remains a customer responsibility under the Shared Responsibility Model; AWS patches the underlying infrastructure for managed services but not arbitrary customer application code.\nReference: https://aws.amazon.com/what-is-cloud-computing/ ; https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html",
  },
  {
    id: uuidv5("aws-question-562", uuidv5.URL),
    text: "Which of the following services falls under the responsibility of the customer to maintain operating system configuration, security patching, and networking?",
    options: [
      "Amazon RDS.",
      "Amazon EC2.",
      "Amazon ElastiCache.",
      "AWS Fargate.",
    ],
    correctAnswers: [1],
    explanation:
      "With Amazon EC2 (B) you manage the guest operating system, installed software, patching, firewall configuration (security groups, host firewall), and networking within the instance. In managed services such as Amazon RDS (A), Amazon ElastiCache (C), and AWS Fargate (D) the underlying OS and platform layer are abstracted—AWS handles most patching and platform maintenance—so the customer’s OS-level responsibilities are reduced or eliminated compared to EC2.\nReference: https://aws.amazon.com/compliance/shared-responsibility-model/ ; https://docs.aws.amazon.com/wellarchitected/latest/security-pillar/shared-responsibility.html",
  },
  {
    id: uuidv5("aws-question-563", uuidv5.URL),
    text: "AWS supports which of the following methods to add security to Identity and Access Management (IAM) users? (Select TWO)",
    options: [
      "Implementing Amazon Rekognition.",
      "Using AWS Shield-protected resources.",
      "Blocking access with Security Groups.",
      "Using Multi-Factor Authentication (MFA).",
      "Enforcing password strength and expiration.",
    ],
    correctAnswers: [3, 4],
    explanation:
      "You can increase IAM user account security by requiring Multi-Factor Authentication (MFA) (D), and by enforcing strong password policies that specify complexity, rotation/expiration, and reuse rules (E). Amazon Rekognition (A) is for image and video analysis, not IAM auth controls. AWS Shield (B) provides DDoS protection for network-facing resources, not user authentication hardening. Security Groups (C) filter network traffic to resources like EC2; they do not secure IAM sign-in credentials.\nReference: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_passwords_account-policy.html ; https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_users-self-manage-mfa-and-creds.html",
  },
  {
    id: uuidv5("aws-question-564", uuidv5.URL),
    text: "Which service provides a hybrid storage service that enables on-premises applications to seamlessly use cloud storage?",
    options: [
      "Amazon Glacier",
      "AWS Snowball",
      "AWS Storage Gateway",
      "Amazon Elastic Block Storage (Amazon EBS)",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Storage Gateway (C) connects on-premises environments to AWS cloud storage, presenting local file, volume, or tape interfaces while storing data durably in AWS (for example, backed by Amazon S3). Amazon Glacier / S3 Glacier (A) is archival object storage, not an on-premises cache/bridge. AWS Snowball (B) is a physical data transfer appliance for bulk migration, not continuous hybrid access. Amazon EBS (D) attaches to EC2 instances in-region; it is not directly presented to on-premises systems.\nReference: https://aws.amazon.com/storagegateway/features/ ; https://aws.amazon.com/products/storage/hybrid-cloud-storage/",
  },
  {
    id: uuidv5("aws-question-565", uuidv5.URL),
    text: "Where should a company go to search software listings from independent software vendors to find, test, buy and deploy software that runs on AWS?",
    options: [
      "AWS Marketplace.",
      "Amazon Lumberyard.",
      "AWS Artifact.",
      "Amazon CloudSearch.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Marketplace (A) is a curated digital catalog of third-party software, data, and services that you can find, test, buy, deploy, and manage in your AWS environment. Amazon Lumberyard (B) is a game engine. AWS Artifact (C) is a portal for AWS compliance reports and security attestations. Amazon CloudSearch (D) is a managed search service for indexing and querying your data—not a software marketplace.\nReference: https://docs.aws.amazon.com/marketplace/latest/userguide/what-is-marketplace.html ; https://aws.amazon.com/organizations/ (Marketplace integration noted under AWS products ecosystem)",
  },
  {
    id: uuidv5("aws-question-566", uuidv5.URL),
    text: "Which of the following is a component of the AWS Global Infrastructure?",
    options: [
      "Amazon Alexa.",
      "AWS Regions.",
      "Amazon Lightsail.",
      "AWS Organizations.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Regions (B) are core geographic partitions of the AWS Global Infrastructure. Each Region contains multiple, isolated Availability Zones. Amazon Alexa (A) is a voice service/product ecosystem, not an infrastructure building block. Amazon Lightsail (C) is a simplified compute and app hosting service that *runs on* AWS infrastructure. AWS Organizations (D) is an account management and governance service; it is not physical infrastructure.\nReference: https://aws.amazon.com/about-aws/global-infrastructure/ ; https://aws.amazon.com/about-aws/global-infrastructure/regions_az/",
  },
  {
    id: uuidv5("aws-question-567", uuidv5.URL),
    text: "Which Amazon EC2 pricing model adjusts based on supply and demand of EC2 instances?",
    options: [
      "On-Demand Instances.",
      "Reserved Instances.",
      "Spot Instances.",
      "Convertible Reserved Instances.",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon EC2 Spot Instances (C) let you use spare AWS capacity at steep discounts; Spot prices are set by Amazon EC2 and adjust over time based on long-term trends in supply and demand for unused capacity. On-Demand (A) pricing is fixed per instance-hour/second usage. Reserved Instances (B) and Convertible RIs (D) provide committed-use discounts but do not fluctuate with capacity supply.\nReference: https://aws.amazon.com/ec2/spot/pricing/ ; https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-instances-history.html",
  },
  {
    id: uuidv5("aws-question-568", uuidv5.URL),
    text: "A company wants to migrate its applications to a VPC on AWS These applications will need to access on-premises resources. What combination of actions will enable the company to accomplish this goals? (Select TWO)",
    options: [
      "Use the AWS Service Catalog to identify a list of on-premises resources that can be migrated",
      "Build a VPN connection between an on-premises device and a virtual private gateway in the new VPC",
      "Use Amazon Athena to query data from the on-premises database servers",
      "Connect the company’s on-premises data center to AWS using AWS Direct Connect",
      "Leverage Amazon CloudFront to restrict access to static web content provided through the company’s on-premises web servers",
    ],
    correctAnswers: [1, 3],
    explanation:
      "To extend a VPC to on-premises resources you typically establish secure network connectivity: (B) create an IPsec Site-to-Site VPN from your on-premises gateway to a Virtual Private Gateway (or AWS Transit Gateway) attached to the VPC, and/or (D) provision AWS Direct Connect for dedicated, lower-latency private network links. AWS Service Catalog (A) inventories and deploys approved AWS products—not a connectivity mechanism. Amazon Athena (C) queries data in S3 (and some federated sources) but does not establish network access to arbitrary on-premises databases. CloudFront (E) is a CDN and access control layer for web content, not general network connectivity into on-premises systems.\nReference: https://docs.aws.amazon.com/vpc/latest/userguide/vpn-connections.html ; https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-direct-connect.html",
  },
  {
    id: uuidv5("aws-question-569", uuidv5.URL),
    text: "A Cloud Practitioner must determine if any security groups in an AWS account have been provisioned to allow unrestricted access for specific ports. What is the SIMPLEST way to do this?",
    options: [
      "Review the inbound rules for each security group in the Amazon EC2 management console to check for port 0.0.0.0/0.",
      "Run AWS Trusted Advisor and review the findings.",
      "Open the AWS IAM console and check the inbound rule filters for open access.",
      "In AWS Config, create a custom rule that invokes an AWS Lambda function to review firewall rules for inbound access.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Trusted Advisor (B) includes a built-in **Security Groups – Specific Ports Unrestricted** check that automatically inspects your account for security groups allowing inbound access from 0.0.0.0/0 on common ports—making it the simplest, quickest option. Manually reviewing each security group (A) is labor-intensive and error-prone. IAM console (C) manages identities, not VPC security groups. Creating a custom AWS Config rule with Lambda (D) works but is more complex than using the existing Trusted Advisor check.\nReference: https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor-check-reference.html ; https://www.amazonaws.cn/en/support/trustedadvisor/best-practices/",
  },
  {
    id: uuidv5("aws-question-570", uuidv5.URL),
    text: "Which of the following security-related services does AWS offer? (Select TWO)",
    options: [
      "Multi-factor authentication physical tokens.",
      "AWS Trusted Advisor security checks.",
      "Data encryption.",
      "Automated penetration testing.",
      "Amazon S3 copyrighted content detection.",
    ],
    correctAnswers: [1, 2],
    explanation:
      "AWS provides (B) AWS Trusted Advisor security checks (including MFA on root, open security groups, exposed S3 buckets, and more) and broad support for (C) data encryption across services—often integrated with AWS Key Management Service (KMS) for key control. Physical MFA token options are available *through* IAM MFA integrations (virtual or hardware) but the answer choice (A) is misleading and not broadly framed as an AWS *service offering* in the exam context. Automated penetration testing (D) is not an AWS service; customers may request permission to conduct certain penetration tests against their own AWS resources. Amazon S3 does not provide a built-in copyrighted content detection service (E).\nReference: https://docs.aws.amazon.com/awssupport/latest/user/security-checks.html ; https://docs.aws.amazon.com/whitepapers/latest/introduction-aws-security/data-encryption.html",
  },
  {
    id: uuidv5("aws-question-571", uuidv5.URL),
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
      "AWS WAF (Web Application Firewall) and Amazon CloudFront help mitigate DDoS attacks by filtering and distributing traffic efficiently. AWS WAF provides rule-based filtering for web traffic, while CloudFront acts as a content delivery network (CDN) that helps absorb and distribute large-scale traffic spikes. The other options do not have built-in DDoS protection. More info: https://aws.amazon.com/shield/ddos-protection/",
  },
  {
    id: uuidv5("aws-question-572", uuidv5.URL),
    text: "Which of the following AWS features enables a user to launch a pre-configured Amazon Elastic Compute Cloud (Amazon EC2) instance?",
    options: [
      "Amazon Elastic Block Store (Amazon EBS)",
      "Amazon Machine Image",
      "Amazon EC2 Systems Manager",
      "Amazon AppStream 2.0",
    ],
    correctAnswers: [1],
    explanation:
      "An Amazon Machine Image (AMI) allows users to launch pre-configured EC2 instances with an operating system, application code, and software settings. EBS (A) is storage, EC2 Systems Manager (C) is for management, and AppStream 2.0 (D) is for application streaming. More info: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html",
  },
  {
    id: uuidv5("aws-question-573", uuidv5.URL),
    text: "A solution that is able to support growth in users, traffic, or data size with no drop in performance aligns with which cloud architecture principle?",
    options: [
      "Think parallel",
      "Implement elasticity",
      "Decouple your components",
      "Design for failure",
    ],
    correctAnswers: [1],
    explanation:
      "Implementing elasticity allows AWS resources to scale up or down dynamically based on demand, ensuring that performance remains consistent as traffic or data volume grows. The other principles focus on different architectural best practices. More info: https://docs.aws.amazon.com/wellarchitected/latest/framework/performance-efficiency-pillar.html",
  },
  {
    id: uuidv5("aws-question-574", uuidv5.URL),
    text: "Which AWS Cloud benefit eliminates the need for users to try estimating future infrastructure usage?",
    options: [
      "Easy and fast deployment of applications in multiple Regions around the world",
      "Security of the AWS Cloud",
      "Elasticity of the AWS Cloud",
      "Lower variable costs due to massive economies of scale",
    ],
    correctAnswers: [2],
    explanation:
      "Elasticity in AWS allows businesses to automatically scale resources based on real-time demand, removing the need for precise forecasting of infrastructure needs. The other options relate to security, cost efficiency, and global availability but do not specifically address infrastructure estimation. More info: https://aws.amazon.com/what-is-cloud-computing/",
  },
  {
    id: uuidv5("aws-question-575", uuidv5.URL),
    text: "What can users access from AWS Artifact?",
    options: [
      "AWS security and compliance documents",
      "A download of configuration management details for all AWS resources",
      "Training materials for AWS services",
      "A security assessment of the applications deployed in the AWS Cloud",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Artifact provides security and compliance documents, such as audit reports and compliance certifications. It does not provide configuration management data, training materials, or specific application security assessments. More info: https://aws.amazon.com/artifact/",
  },
  {
    id: uuidv5("aws-question-576", uuidv5.URL),
    text: "Compared with costs in traditional and virtualized data centers, AWS has:",
    options: [
      "Greater variable costs and greater upfront costs",
      "Fixed usage costs and lower upfront costs",
      "Lower variable costs and greater upfront costs",
      "Lower variable costs and lower upfront costs",
    ],
    correctAnswers: [3],
    explanation:
      "AWS operates on a pay-as-you-go model, reducing upfront costs and offering lower variable costs due to economies of scale. Traditional data centers require large initial investments, while AWS allows businesses to scale resources dynamically, leading to cost efficiency. More info: https://aws.amazon.com/economics/",
  },
  {
    id: uuidv5("aws-question-577", uuidv5.URL),
    text: "Which AWS service would a customer use with a static website to achieve lower latency and high transfer speeds?",
    options: [
      "AWS Lambda",
      "Amazon DynamoDB Accelerator",
      "Amazon Route 53",
      "Amazon CloudFront",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon CloudFront is a content delivery network (CDN) that caches and serves static website content closer to users, reducing latency and improving performance. Lambda (A) is compute, DynamoDB Accelerator (B) is for databases, and Route 53 (C) is DNS. More info: https://aws.amazon.com/cloudfront/",
  },
  {
    id: uuidv5("aws-question-578", uuidv5.URL),
    text: "How do Amazon EC2 Auto Scaling groups help achieve high availability for a web application?",
    options: [
      "They automatically add more instances across multiple AWS Regions based on global demand of the application",
      "They automatically add or replace instances across multiple Availability Zones when the application needs it",
      "They enable the application’s static content to reside closer to end users",
      "They are able to distribute incoming requests across a tier of web server instances",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon EC2 Auto Scaling ensures high availability by adding or replacing instances in different Availability Zones to maintain application performance. The other options either focus on global scaling, content delivery, or load balancing. More info: https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-benefits.html",
  },
  {
    id: uuidv5("aws-question-579", uuidv5.URL),
    text: "Which of the following can limit Amazon Simple Storage Service (Amazon S3) bucket access to specific users?",
    options: [
      "A public and private key-pair",
      "Amazon Inspector",
      "AWS Identity and Access Management (IAM) policies",
      "Security Groups",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Identity and Access Management (IAM) policies allow fine-grained access control to Amazon S3 buckets, ensuring only authorized users can access data. Security groups control access at the network level, and public/private key pairs are used for encryption, not access control. More info: https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html",
  },
  {
    id: uuidv5("aws-question-580", uuidv5.URL),
    text: "How should a customer forecast the future costs for running a new web application?",
    options: [
      "Amazon Aurora Backtrack",
      "Amazon CloudWatch Billing Alarms",
      "AWS Simple Monthly Calculator",
      "AWS Cost and Usage report",
    ],
    correctAnswers: [2],
    explanation:
      "The AWS Simple Monthly Calculator allows customers to estimate costs for running their applications based on selected services and usage patterns. CloudWatch Billing Alarms monitor spending, and the AWS Cost and Usage Report provides historical data rather than forecasts. More info: https://aws.amazon.com/calculator/",
  },
  {
    id: uuidv5("aws-question-581", uuidv5.URL),
    text: "Where are AWS compliance documents, such as an SOC 1 report, located?",
    options: [
      "Amazon Inspector",
      "AWS CloudTrail",
      "AWS Artifact",
      "AWS Certificate Manager",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Artifact provides access to compliance reports such as SOC 1, SOC 2, ISO certifications, and more. CloudTrail (B) logs API activity, Inspector (A) scans workloads for security vulnerabilities, and Certificate Manager (D) manages SSL/TLS certificates but does not store compliance documents. More info: https://aws.amazon.com/artifact/",
  },
  {
    id: uuidv5("aws-question-582", uuidv5.URL),
    text: "Which of the following tasks is the responsibility of AWS?",
    options: [
      "Encrypting client-side data",
      "Configuring AWS Identity and Access Management (IAM) roles",
      "Securing the Amazon EC2 hypervisor",
      "Setting user password policies",
    ],
    correctAnswers: [2],
    explanation:
      "AWS is responsible for securing the EC2 hypervisor as part of its shared responsibility model. Encrypting client-side data, IAM role configuration, and setting user password policies are responsibilities of the customer. More info: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-583", uuidv5.URL),
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
      "Customers are responsible for patching operating systems and configuring security groups. AWS is responsible for hypervisor patching, network infrastructure, and physical security of data centers. More info: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-584", uuidv5.URL),
    text: "A company is looking for a scalable data warehouse solution. Which of the following AWS solutions would meet the company’s needs?",
    options: [
      "Amazon Simple Storage Service (Amazon S3)",
      "Amazon DynamoDB",
      "Amazon Kinesis",
      "Amazon Redshift",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon Redshift is AWS's fully managed, scalable data warehouse solution. S3 is object storage, DynamoDB is a NoSQL database, and Kinesis is for real-time data streaming. More info: https://aws.amazon.com/redshift/",
  },
  {
    id: uuidv5("aws-question-585", uuidv5.URL),
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
      "AWS Direct Connect provides a dedicated network connection from on-premises to AWS, while AWS Storage Gateway enables seamless integration between on-premises storage and AWS Cloud storage. EBS (A) is a block storage service, CloudFront (C) is a CDN, and Amazon Connect (E) is a cloud-based contact center. More info: https://aws.amazon.com/directconnect/ and https://aws.amazon.com/storagegateway/",
  },
  {
    id: uuidv5("aws-question-586", uuidv5.URL),
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
      "AWS allows businesses to scale resources as needed, removing the need to estimate capacity. It also speeds up time to market by providing on-demand infrastructure. AWS does not have fixed monthly costs, increased capital expenditure, or provide physical data center access to customers. More info: https://aws.amazon.com/benefits/",
  },
  {
    id: uuidv5("aws-question-587", uuidv5.URL),
    text: "How can the AWS Cloud increase user workforce productivity after migration from an on-premises data center?",
    options: [
      "Users do not have to wait for infrastructure provisioning",
      "The AWS Cloud infrastructure is much faster than an on-premises data center infrastructure",
      "AWS takes over application configuration management on behalf of users",
      "Users do not need to address security and compliance issues",
    ],
    correctAnswers: [0],
    explanation:
      "AWS provides on-demand provisioning of infrastructure, reducing wait times for resources. However, AWS does not guarantee a faster infrastructure than all on-premises setups, does not configure applications for customers, and customers still need to manage security and compliance within their environment. More info: https://aws.amazon.com/benefits/",
  },
  {
    id: uuidv5("aws-question-588", uuidv5.URL),
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
      "AWS OpsWorks and AWS CodeDeploy both support on-premises deployments. Elastic Beanstalk is for cloud-based applications, AWS Batch is for batch computing, and AWS X-Ray is a tracing tool. More info: https://docs.aws.amazon.com/opsworks/latest/userguide/welcome.html and https://docs.aws.amazon.com/codedeploy/latest/userguide/welcome.html",
  },
  {
    id: uuidv5("aws-question-589", uuidv5.URL),
    text: "What is an example of agility in the AWS Cloud?",
    options: [
      "Access to multiple instance types",
      "Access to managed services",
      "Using Consolidated Billing to produce one bill",
      "Decreased acquisition time for new compute resources",
    ],
    correctAnswers: [3],
    explanation:
      "Agility in AWS means being able to provision new compute resources quickly. While access to instance types and managed services are AWS benefits, they do not directly represent agility. Consolidated Billing relates to cost management rather than agility. More info: https://aws.amazon.com/benefits/",
  },
  {
    id: uuidv5("aws-question-590", uuidv5.URL),
    text: "Which AWS security service protects applications from distributed denial of service attacks with always-on detection and automatic inline mitigations?",
    options: [
      "Amazon Inspector",
      "AWS Web Application Firewall (AWS WAF)",
      "Elastic Load Balancing (ELB)",
      "AWS Shield",
    ],
    correctAnswers: [3],
    explanation:
      "AWS Shield provides DDoS protection with automatic detection and mitigation. AWS WAF helps filter web traffic but does not provide full DDoS protection. Amazon Inspector is for vulnerability assessments, and ELB helps distribute traffic but does not specifically mitigate DDoS attacks. More info: https://aws.amazon.com/shield/",
  },
  {
    id: uuidv5("aws-question-591", uuidv5.URL),
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
    id: uuidv5("aws-question-592", uuidv5.URL),
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
    id: uuidv5("aws-question-601", uuidv5.URL),
    text: "The use of what AWS feature or service allows companies to track and categorize spending on a detailed level?",
    options: [
      "Cost allocation tags",
      "Consolidated billing",
      "AWS Budgets",
      "AWS Marketplace",
    ],
    correctAnswers: [0],
    explanation:
      "Cost allocation tags allow users to categorize and track AWS costs by applying metadata to resources. This helps in detailed cost tracking and reporting. Consolidated billing groups accounts but does not categorize spending, AWS Budgets sets spending limits, and AWS Marketplace is for purchasing software. More info: https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html",
  },
  {
    id: uuidv5("aws-question-602", uuidv5.URL),
    text: "Which service stores objects, provides real-time access to those objects, and offers versioning and lifecycle capabilities?",
    options: [
      "Amazon Glacier",
      "AWS Storage Gateway",
      "Amazon S3",
      "Amazon EBS",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon S3 is an object storage service that supports real-time access, versioning, and lifecycle management. Amazon Glacier is for archival storage with delayed retrieval, AWS Storage Gateway enables hybrid cloud storage, and Amazon EBS is block storage for EC2 instances. More info: https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html",
  },
  {
    id: uuidv5("aws-question-603", uuidv5.URL),
    text: "What AWS team assists customers with accelerating cloud adoption through paid engagements in any of several specialty practice areas?",
    options: [
      "AWS Enterprise Support",
      "AWS Solutions Architects",
      "AWS Professional Services",
      "AWS Account Managers",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Professional Services provides specialized guidance and consulting to help customers accelerate cloud adoption through paid engagements. AWS Enterprise Support offers technical assistance, Solutions Architects provide architecture guidance, and Account Managers focus on customer relationships. More info: https://aws.amazon.com/professional-services/",
  },
  {
    id: uuidv5("aws-question-604", uuidv5.URL),
    text: "A customer would like to design and build a new workload on AWS Cloud but does not have the AWS-related software technical expertise in-house. Which of the following AWS programs can a customer take advantage of to achieve that outcome?",
    options: [
      "AWS Partner Network Technology Partners",
      "AWS Marketplace",
      "AWS Partner Network Consulting Partners",
      "AWS Service Catalog",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Partner Network (APN) Consulting Partners provide expertise and services to help customers design and build workloads on AWS. APN Technology Partners offer software solutions, AWS Marketplace sells third-party software, and AWS Service Catalog helps manage approved cloud products. More info: https://aws.amazon.com/partners/",
  },
  {
    id: uuidv5("aws-question-605", uuidv5.URL),
    text: "Distributing workloads across multiple Availability Zones supports which cloud architecture design principle?",
    options: [
      "Implement automation",
      "Design for agility",
      "Design for failure",
      "Implement elasticity",
    ],
    correctAnswers: [2],
    explanation:
      "Designing for failure ensures resilience by distributing workloads across multiple Availability Zones. This minimizes downtime in case of failures. Implementing automation, agility, and elasticity contribute to performance and efficiency but do not directly address failure tolerance. More info: https://docs.aws.amazon.com/wellarchitected/latest/framework/reliability-pillar.html",
  },
  {
    id: uuidv5("aws-question-606", uuidv5.URL),
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
      "Amazon EC2 allows self-managed SQL Server installations, while Amazon RDS provides a managed SQL Server database service. Amazon Aurora is a different relational database engine, Redshift is for data warehousing, and S3 is object storage. More info: https://aws.amazon.com/rds/sqlserver/",
  },
  {
    id: uuidv5("aws-question-607", uuidv5.URL),
    text: "Which of the following inspects AWS environments to find opportunities that can save money for users and also improve system performance?",
    options: [
      "AWS Cost Explorer",
      "AWS Trusted Advisor",
      "Consolidated billing",
      "Detailed billing",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Trusted Advisor analyzes AWS environments for cost savings, security, and performance improvements. Cost Explorer helps visualize costs, Consolidated Billing manages multiple accounts, and Detailed Billing provides raw billing data. More info: https://aws.amazon.com/premiumsupport/technology/trusted-advisor/",
  },
  {
    id: uuidv5("aws-question-608", uuidv5.URL),
    text: "Which of the following Amazon EC2 pricing models allow customers to use existing server-bound software licenses?",
    options: [
      "Spot Instances",
      "Reserved Instances",
      "Dedicated Hosts",
      "On-Demand Instances",
    ],
    correctAnswers: [2],
    explanation:
      "Dedicated Hosts allow customers to bring their own software licenses by providing a dedicated physical server. Spot and On-Demand Instances do not guarantee dedicated hardware, and Reserved Instances are pricing commitments without license-specific accommodations. More info: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-overview.html",
  },
  {
    id: uuidv5("aws-question-609", uuidv5.URL),
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
      "Elasticity allows AWS to scale resources up or down as needed, optimizing costs, while pay-as-you-go pricing ensures customers pay only for what they use. High availability and reliability improve service uptime but do not directly impact cost efficiency. More info: https://aws.amazon.com/benefits/",
  },
  {
    id: uuidv5("aws-question-610", uuidv5.URL),
    text: "Which service enables risk auditing by continuously monitoring and logging account activity, including user actions in the AWS Management Console and AWS SDKs?",
    options: [
      "Amazon CloudWatch",
      "AWS CloudTrail",
      "AWS Config",
      "AWS Health",
    ],
    correctAnswers: [1],
    explanation:
      "AWS CloudTrail provides a detailed record of AWS account activity, allowing security auditing and compliance monitoring. CloudWatch monitors performance metrics, AWS Config tracks configuration changes, and AWS Health provides service status updates. More info: https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html",
  },
  {
    id: uuidv5("aws-question-611", uuidv5.URL),
    text: "Which of the following are characteristics of Amazon S3? (Select TWO.)",
    options: [
      "A global file system",
      "An object store",
      "A local file store",
      "A network file system",
      "A durable storage system",
    ],
    correctAnswers: [1, 4],
    explanation:
      "Amazon S3 is an object storage service designed for durability (99.999999999%) and scalability, which makes 'An object store' and 'A durable storage system' correct. S3 is not a global file system (A), nor a local file store (C), nor a network file system (D). More info: https://docs.aws.amazon.com/AmazonS3/latest/dev/Introduction.html",
  },
  {
    id: uuidv5("aws-question-612", uuidv5.URL),
    text: "Which services can be used across hybrid AWS Cloud architectures? (Select TWO.)",
    options: [
      "Amazon Route 53",
      "Virtual Private Gateway",
      "Classic Load Balancer",
      "Auto Scaling",
      "Amazon CloudWatch default metrics",
    ],
    correctAnswers: [0, 1],
    explanation:
      "Amazon Route 53 (DNS service) and Virtual Private Gateway enable connectivity and management for hybrid architectures. Classic Load Balancer (C) and Auto Scaling (D) operate only within AWS, and CloudWatch default metrics (E) primarily monitor AWS resources. More info: https://aws.amazon.com/cloudwatch/",
  },
  {
    id: uuidv5("aws-question-613", uuidv5.URL),
    text: "What costs are included when comparing AWS Total Cost of Ownership (TCO) with on-premises TCO?",
    options: [
      "Project management",
      "Antivirus software licensing",
      "Data center security",
      "Software development",
    ],
    correctAnswers: [2],
    explanation:
      "Data center security is a significant cost in on-premises environments and is considered in TCO comparisons. Project management and software development costs exist in both models, and antivirus licensing is a minor software cost. More info: https://media.amazonwebservices.com/AWS_TCO_Web_Applications.pdf",
  },
  {
    id: uuidv5("aws-question-614", uuidv5.URL),
    text: "A company is considering using AWS for a self-hosted database that requires a nightly shutdown for maintenance and cost-saving purposes. Which service should the company use?",
    options: [
      "Amazon Redshift",
      "Amazon DynamoDB",
      "Amazon Elastic Compute Cloud (Amazon EC2) with Amazon EC2 instance store",
      "Amazon EC2 with Amazon Elastic Block Store (Amazon EBS)",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon EC2 with EBS allows persistent storage even when the instance is stopped, making it ideal for workloads that require nightly shutdowns. EC2 instance store loses data when stopped, Redshift is a managed data warehouse, and DynamoDB is a NoSQL service. More info: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AmazonEBS.html",
  },
  {
    id: uuidv5("aws-question-615", uuidv5.URL),
    text: "Which of the following is a correct relationship between regions, Availability Zones, and edge locations?",
    options: [
      "Data centers contain regions.",
      "Regions contain Availability Zones.",
      "Availability Zones contain edge locations.",
      "Edge locations contain regions.",
    ],
    correctAnswers: [1],
    explanation:
      "Regions contain multiple Availability Zones, which are distinct physical locations within a region. Data centers are the smallest unit, and edge locations are separate from AZs and regions. More info: https://aws.amazon.com/about-aws/global-infrastructure/regions_az/",
  },
  {
    id: uuidv5("aws-question-616", uuidv5.URL),
    text: "Which AWS tools assist with estimating costs? (Select three.)",
    options: [
      "Detailed billing report",
      "Cost allocation tags",
      "AWS Simple Monthly Calculator",
      "AWS Total Cost of Ownership (TCO) Calculator",
      "Cost Eliminator",
    ],
    correctAnswers: [1, 2, 3],
    explanation:
      "Cost allocation tags, AWS Simple Monthly Calculator, and AWS TCO Calculator help estimate and allocate costs. Detailed billing report provides historical usage, and Cost Eliminator is not an AWS service. More info: https://aws.amazon.com/premiumsupport/knowledge-center/estimating-aws-resource-costs/",
  },
  {
    id: uuidv5("aws-question-617", uuidv5.URL),
    text: "Which of the following are advantages of AWS consolidated billing? (Select TWO.)",
    options: [
      "The ability to receive one bill for multiple accounts",
      "Service limits increasing by default in all accounts",
      "A fixed discount on the monthly bill",
      "Potential volume discounts, as usage in all accounts is combined",
      "The automatic extension of the master account's AWS support plan to all accounts",
    ],
    correctAnswers: [0, 3],
    explanation:
      "Consolidated billing provides a single bill and potential volume discounts across accounts. Service limits are still per account, discounts are based on usage, and support plan extension does not happen automatically. More info: https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html",
  },
  {
    id: uuidv5("aws-question-618", uuidv5.URL),
    text: "Which of the following Reserved Instance (RI) pricing models provides the highest average savings compared to On-Demand pricing?",
    options: [
      "One-year, No Upfront, Standard RI pricing",
      "One-year, All Upfront, Convertible RI pricing",
      "Three-year, All Upfront, Standard RI pricing",
      "Three-year, No Upfront, Convertible RI pricing",
    ],
    correctAnswers: [2],
    explanation:
      "Three-year, All Upfront, Standard RI pricing offers the deepest discounts. Convertible RIs provide flexibility but less discount. One-year terms offer lower savings than three-year options. More info: https://aws.amazon.com/ec2/pricing/reserved-instances/pricing/",
  },
  {
    id: uuidv5("aws-question-619", uuidv5.URL),
    text: "Compared with costs in traditional and virtualized data centers, AWS has:",
    options: [
      "greater variable costs and greater upfront costs.",
      "fixed usage costs and lower upfront costs.",
      "lower variable costs and greater upfront costs.",
      "lower variable costs and lower upfront costs.",
    ],
    correctAnswers: [3],
    explanation:
      "AWS reduces upfront capital expenses and allows pay-as-you-go pricing, resulting in lower variable and lower upfront costs. The other options do not correctly represent AWS's pricing benefits. More info: https://d1.awsstatic.com/whitepapers/introduction-to-aws-cloud-economics-final.pdf",
  },
  {
    id: uuidv5("aws-question-620", uuidv5.URL),
    text: "A characteristic of edge locations is that they:",
    options: [
      "host Amazon EC2 instances closer to users.",
      "help lower latency and improve performance for users.",
      "cache frequently changing data without reaching the origin server.",
      "refresh data changes daily.",
    ],
    correctAnswers: [1],
    explanation:
      "Edge locations in Amazon CloudFront are used to deliver content closer to users, reducing latency and improving performance. They do not host EC2 instances, cache only frequently changing data, or refresh data daily by default. More info: https://aws.amazon.com/cloudfront/features/",
  },
  {
    id: uuidv5("aws-question-621", uuidv5.URL),
    text: "Which of the following can limit Amazon Storage Service (Amazon S3) bucket access to specific users?",
    options: [
      "A public and private key-pair",
      "Amazon Inspector",
      "AWS Identity and Access Management (IAM) policies",
      "Security Groups",
    ],
    correctAnswers: [2],
    explanation:
      "IAM policies (identity- or resource-based) let you explicitly allow or deny actions on specific S3 buckets to designated IAM principals (users, roles, accounts). A public/private key-pair (A) only provides credentials; by itself it does not restrict which S3 resources can be accessed. Amazon Inspector (B) is a vulnerability assessment service, not an access-control mechanism for S3. Security Groups (D) act at the network level for resources like EC2 instances—not for S3 API access control. More info: https://aws.amazon.com/blogs/security/how-to-restrict-amazon-s3-bucket-access-to-a-specific-iam-role/",
  },
  {
    id: uuidv5("aws-question-622", uuidv5.URL),
    text: "Which of the following security-related actions are available at no cost?",
    options: [
      "Calling AWS Support",
      "Contacting AWS Professional Services to request a workshop",
      "Accessing forums, blogs, and whitepapers",
      "Attending AWS classes at a local university",
    ],
    correctAnswers: [2],
    explanation:
      "AWS provides a wide range of free security guidance resources—documentation, whitepapers, forums, and blog posts—that you can access at no charge. Calling AWS Support (A) may incur costs depending on your support plan level. AWS Professional Services workshops (B) are paid engagements. Local university AWS classes (D) are typically tuition-based or fee-based. More info: https://aws.amazon.com/whitepapers/",
  },
  {
    id: uuidv5("aws-question-623", uuidv5.URL),
    text: "Which of the Reserved Instance (RI) pricing models can change the attributes of the RI as long as the exchange results in the creation of RIs of equal or greater value?",
    options: [
      "Dedicated RIs",
      "Scheduled RIs",
      "Convertible RIs",
      "Standard RIs",
    ],
    correctAnswers: [2],
    explanation:
      "Convertible RIs let you exchange existing reservations for new ones with different instance families, operating systems, or tenancies, provided the exchange results in RIs of equal or greater total value. Dedicated RIs (A) and Scheduled RIs (B) do not offer this broad exchange flexibility. Standard RIs (D) provide larger discounts but are largely fixed in attributes. More info: https://aws.amazon.com/ec2/pricing/reserved-instances/",
  },
  {
    id: uuidv5("aws-question-624", uuidv5.URL),
    text: "Which AWS feature will reduce the customer's total cost of ownership (TCO)?",
    options: [
      "Shared responsibility security model",
      "Single tenancy",
      "Elastic computing",
      "Encryption",
    ],
    correctAnswers: [2],
    explanation:
      "Elastic computing lets you scale resources up or down based on demand, so you pay only for what you use—directly reducing overprovisioning and lowering TCO. The shared responsibility model (A) defines security scope but does not inherently lower infrastructure spend. Single tenancy (B) often costs more than shared tenancy. Encryption (D) is a security control and does not by itself reduce cost. More info: https://aws.amazon.com/blogs/publicsector/tco-cost-optimization-best-practices-for-managing-usage/",
  },
  {
    id: uuidv5("aws-question-625", uuidv5.URL),
    text: "Which of the following services will automatically scale with an expected increase in web traffic?",
    options: [
      "AWS CodePipeline",
      "Elastic Load Balancing",
      "Amazon EBS",
      "AWS Direct Connect",
    ],
    correctAnswers: [1],
    explanation:
      "Elastic Load Balancing automatically scales its load balancer capacity in response to changes in incoming traffic, distributing requests across healthy targets in one or more Availability Zones. CodePipeline (A) is a CI/CD orchestration service and not a traffic-scaling component. Amazon EBS (C) provides block storage volumes and does not auto-scale to handle web request load. AWS Direct Connect (D) is a dedicated network link and does not scale elastically with traffic surges. More info: https://aws.amazon.com/elasticloadbalancing/",
  },
  {
    id: uuidv5("aws-question-626", uuidv5.URL),
    text: "Where are AWS compliance documents, such as an SOC 1 report, located?",
    options: [
      "Amazon Inspector",
      "AWS CloudTrail",
      "AWS Artifact",
      "AWS Certificate Manager",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Artifact is the self-service portal where customers can access AWS compliance reports (including SOC 1, SOC 2, and others) on demand. Amazon Inspector (A) scans for security issues; it does not host compliance reports. AWS CloudTrail (B) records API activity. AWS Certificate Manager (D) manages SSL/TLS certificates. More info: https://aws.amazon.com/compliance/soc-faqs/",
  },
  {
    id: uuidv5("aws-question-627", uuidv5.URL),
    text: "Under the AWS shared responsibility model, which of the following activities are the customer's responsibility? (Select TWO.)",
    options: [
      "Patching operating system components for Amazon Relational Database Server (Amazon RDS)",
      "Encrypting data on the client-side",
      "Training the data center staff",
      "Configuring Network Access Control Lists (ACL)",
      "Maintaining environmental controls within a data center",
    ],
    correctAnswers: [1, 3],
    explanation:
      "Customers are responsible for security *in* the cloud, which includes data protection choices like client-side encryption (B) and configuration of network-layer controls such as VPC Network ACLs (D). AWS manages the infrastructure layer for managed services like Amazon RDS, including underlying OS patching (A). AWS handles physical security and staffing of data centers (C, E), not the customer. More info: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-628", uuidv5.URL),
    text: "Which is a recommended pattern for designing a highly available architecture on AWS?",
    options: [
      "Ensure that components have low-latency network connectivity.",
      "Run enough Amazon EC2 instances to operate at peak load.",
      "Ensure that the application is designed to accommodate failure of any single component.",
      "Use a monolithic application that handles all operations.",
    ],
    correctAnswers: [2],
    explanation:
      "Designing for resiliency means building so that no single component failure takes down the workload—use redundancy, fault isolation, and automated recovery. Low latency (A) is desirable but not the defining HA pattern. Simply running peak-load capacity (B) without fault tolerance does not ensure availability. A monolithic design (D) often concentrates failure risk. More info: https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/design-your-workload-to-withstand-component-failures.html",
  },
  {
    id: uuidv5("aws-question-629", uuidv5.URL),
    text: "According to best practices, how should an application be designed to run in the AWS Cloud?",
    options: [
      "Use tightly coupled components.",
      "Use loosely coupled components.",
      "Use infrequently coupled components.",
      "Use frequently coupled components.",
    ],
    correctAnswers: [1],
    explanation:
      "Loosely coupled components communicate through well-defined, versioned interfaces (often asynchronous), improving resiliency, scalability, and agility—core AWS architectural best practices. Tightly coupled (A), infrequently coupled (C), and frequently coupled (D) are not standard best-practice terms; tight coupling increases blast radius and reduces independent scaling. More info: https://d1.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf",
  },
  {
    id: uuidv5("aws-question-630", uuidv5.URL),
    text: "AWS supports which of the following methods to add security to Identity and Access Management (IAM) users? (Select TWO.)",
    options: [
      "Implementing Amazon Rekognition",
      "Using AWS Shield-protected resources",
      "Blocking access with Security Groups",
      "Using Multi-Factor Authentication (MFA)",
      "Enforcing password strength and expiration",
    ],
    correctAnswers: [3, 4],
    explanation:
      "You can increase IAM user security by requiring Multi-Factor Authentication (MFA) (D) and by enforcing strong account password policies with rotation/expiration (E). Amazon Rekognition (A) is an image/video analysis service unrelated to IAM user auth. AWS Shield (B) protects against DDoS attacks on networked resources, not IAM credentials. Security Groups (C) control network traffic to resources, not IAM sign-in. More info: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa.html",
  },
  {
    id: uuidv5("aws-question-631", uuidv5.URL),
    text: "Which AWS services should be used for read/write of constantly changing data? (Select TWO.)",
    options: [
      "Amazon Glacier",
      "Amazon RDS",
      "AWS Snowball",
      "Amazon Redshift",
      "Amazon EFS",
    ],
    correctAnswers: [1, 4],
    explanation:
      "Amazon RDS is a managed relational database service built for frequent transactional reads/writes. Amazon EFS is an elastic, managed, shared file system that automatically scales and supports read/write access from multiple clients—well suited for changing file data. Amazon Glacier is for long-term archival, not frequent updates. AWS Snowball is a data transfer appliance for bulk migration, not continuous read/write. Amazon Redshift is a data warehouse optimized for analytic (read-heavy, batch) workloads, not constant transactional change. More info: https://aws.amazon.com/rds/ ; https://aws.amazon.com/efs/",
  },
  {
    id: uuidv5("aws-question-632", uuidv5.URL),
    text: "What is one of the advantages of the Amazon Relational Database Service (Amazon RDS)?",
    options: [
      "It simplifies relational database administration tasks.",
      "It provides 99.99999999999% reliability and durability.",
      "It automatically scales databases for loads.",
      "It enabled users to dynamically adjust CPU and RAM resources.",
    ],
    correctAnswers: [0],
    explanation:
      "A key RDS benefit is reduced administrative burden: AWS automates many undifferentiated tasks such as provisioning, backups, patching, and minor version upgrades—simplifying database administration. The extreme durability figure in option B reflects object storage claims (like S3), not RDS. Automatic scaling of database compute for load (C) is not universal across all RDS engines; scaling typically requires instance class changes or read replicas (except specific modes like Aurora Serverless). Users cannot arbitrarily adjust raw host CPU/RAM on demand within a running instance as in D—you choose instance classes. More info: https://aws.amazon.com/rds/",
  },
  {
    id: uuidv5("aws-question-633", uuidv5.URL),
    text: "A customer needs to run a MySQL database that easily scales. Which AWS service should they use?",
    options: [
      "Amazon Aurora",
      "Amazon Redshift",
      "Amazon DynamoDB",
      "Amazon ElastiCache",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon Aurora (compatible with MySQL) is designed for high performance and scalability, offering up to several times the throughput of standard MySQL plus options like Aurora Serverless and read replicas that make scaling easier. Amazon Redshift is a columnar data warehouse for analytics, not a transactional MySQL replacement. DynamoDB is NoSQL, not a relational MySQL engine. ElastiCache is an in-memory cache (Redis/Memcached), not a relational database. More info: https://aws.amazon.com/rds/aurora/ ; https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Performance.html",
  },
  {
    id: uuidv5("aws-question-634", uuidv5.URL),
    text: "Which of the following components of the AWS Global Infrastructure consists of one or more discrete data centers interconnected through low latency links?",
    options: [
      "Availability Zone",
      "Edge location",
      "Region",
      "Private networking",
    ],
    correctAnswers: [0],
    explanation:
      "An Availability Zone (AZ) is one or more discrete data centers with redundant power, networking, and connectivity, linked with low-latency, high-throughput networking within an AWS Region. Edge locations support content delivery (CloudFront) and are separate from AZ constructs. A Region is a geographic area that contains multiple AZs—not the other way around. Private networking is a generic term, not an infrastructure building block in the AWS global model. More info: https://docs.aws.amazon.com/whitepapers/latest/aws-fault-isolation-boundaries/availability-zones.html",
  },
  {
    id: uuidv5("aws-question-635", uuidv5.URL),
    text: "Which of the following is a shared control between the customer and AWS?",
    options: [
      "Providing a key for Amazon S3 client-side encryption",
      "Configuration of an Amazon EC2 instance",
      "Environmental controls of physical AWS data centers",
      "Awareness and training",
    ],
    correctAnswers: [3],
    explanation:
      "In the AWS Shared Responsibility Model, awareness & training is considered a shared control area: AWS trains its staff for secure operations, while customers must train their own personnel in proper cloud usage and security practices. Providing client-side encryption keys is a customer responsibility. Configuring an EC2 instance—OS, applications, security settings—is customer responsibility. Physical environmental controls are AWS responsibility. More info: https://aws.amazon.com/compliance/shared-responsibility-model/ ; https://digitalcloud.training/aws-shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-636", uuidv5.URL),
    text: "How many Availability Zones should compute resources be provisioned across to achieve high availability?",
    options: [
      "A minimum of one",
      "A minimum of two",
      "A minimum of three",
      "A minimum of four or more",
    ],
    correctAnswers: [1],
    explanation:
      "High availability in AWS typically starts by distributing workloads across at least two Availability Zones within a Region so that the failure of one AZ does not take down the entire application. One AZ creates a single point of failure. More than two AZs can further improve resilience but are not the minimum HA recommendation for most workloads. More info: https://aws.amazon.com/blogs/publicsector/best-practices-creating-highly-available-workloads/ ; https://docs.aws.amazon.com/whitepapers/latest/real-time-communication-on-aws/use-multiple-availability-zones.html",
  },
  {
    id: uuidv5("aws-question-637", uuidv5.URL),
    text: "One of the advantages to moving infrastructure from an on-premises data center to the AWS Cloud is:",
    options: [
      "it allows the business to eliminate IT bills.",
      "it allows the business to put a server in each customer's data center.",
      "it allows the business to focus on business activities.",
      "it allows the business to leave servers unpatched.",
    ],
    correctAnswers: [2],
    explanation:
      "By removing the heavy lifting of owning and operating data center hardware, AWS lets organizations shift resources toward activities that differentiate the business (innovation, customer features) rather than infrastructure maintenance. Eliminating IT bills entirely is unrealistic—you still pay for AWS usage. Deploying servers in each customer data center is not an AWS cloud benefit. Leaving servers unpatched is never a best practice and increases risk. More info: https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html ; https://aws.amazon.com/executive-insights/content/business-value-on-aws/",
  },
  {
    id: uuidv5("aws-question-638", uuidv5.URL),
    text: "What is the lowest-cost, durable storage option for retaining database backups for immediate retrieval?",
    options: [
      "Amazon S3",
      "Amazon Glacier",
      "Amazon EBS",
      "Amazon EC2 Instance Store",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon S3 provides highly durable, cost-effective object storage with immediate (millisecond) retrieval—well suited for retaining database backup files that need to be restored quickly. Amazon Glacier is even lower cost but designed for archival with retrieval delays. Amazon EBS block storage is more expensive per GB and typically tied to EC2 instances. Instance Store is ephemeral and not durable for retained backups. More info: https://docs.aws.amazon.com/prescriptive-guidance/latest/backup-recovery/backup-recovery-amazon-s3.html",
  },
  {
    id: uuidv5("aws-question-639", uuidv5.URL),
    text: "Which AWS IAM feature allows developers to access AWS services through the AWS CLI?",
    options: ["API keys", "Access keys", "User names/Passwords", "SSH keys"],
    correctAnswers: [1],
    explanation:
      "Programmatic access to AWS via the CLI uses IAM access keys—an access key ID and secret access key pair that signs API requests. “API keys” is a generic term and not the AWS IAM credential type. Console username/password is for web console sign-in, not CLI calls (unless paired with temporary credentials via SSO/federation). SSH keys are used to connect to EC2 instances at the OS level, not to authenticate AWS API calls. More info: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html ; https://docs.aws.amazon.com/cli/v1/userguide/cli-authentication-user.html",
  },
  {
    id: uuidv5("aws-question-640", uuidv5.URL),
    text: "Which of the following is a fast and reliable NoSQL database service?",
    options: ["Amazon Redshift", "Amazon RDS", "Amazon DynamoDB", "Amazon S3"],
    correctAnswers: [2],
    explanation:
      "Amazon DynamoDB is a fully managed, serverless NoSQL database that delivers single-digit millisecond performance at virtually any scale, making it both fast and highly reliable. Amazon Redshift is a managed data warehouse (SQL, analytic). Amazon RDS is for managed relational databases. Amazon S3 is object storage, not a database. More info: https://aws.amazon.com/dynamodb/ ; https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html",
  },
  {
    id: uuidv5("aws-question-641", uuidv5.URL),
    text: "What is an example of agility in the AWS Cloud?",
    options: [
      "Access to multiple instance types",
      "Access to managed services",
      "Using Consolidated Billing to produce one bill",
      "Decreased acquisition time for new compute resources",
    ],
    correctAnswers: [3],
    explanation:
      "Agility in the cloud context refers to the ability to quickly provision and deploy resources as business needs change. Decreasing the acquisition time for compute resources (D) illustrates this because you can spin up instances in minutes instead of weeks. Access to multiple instance types (A) and managed services (B) are cloud features, but they do not directly capture agility. Consolidated Billing (C) is a financial management feature, unrelated to deployment agility. More info: https://aws.amazon.com/blogs/enterprise-strategy/risk-is-lack-of-agility/",
  },
  {
    id: uuidv5("aws-question-642", uuidv5.URL),
    text: "Which service should a customer use to consolidate and centrally manage multiple AWS accounts?",
    options: [
      "AWS IAM",
      "AWS Organizations",
      "AWS Schema Conversion Tool",
      "AWS Config",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Organizations enables central management of multiple accounts, consolidated billing, and application of policies across accounts. IAM manages permissions within a single account. The Schema Conversion Tool is for migrating databases. AWS Config monitors configurations but does not consolidate accounts. More info: https://aws.amazon.com/organizations/",
  },
  {
    id: uuidv5("aws-question-643", uuidv5.URL),
    text: "What approach to transcoding a large number of individual video files adheres to AWS architecture principles?",
    options: [
      "Using many instances in parallel",
      "Using a single large instance during off-peak hours",
      "Using dedicated hardware",
      "Using a large GPU instance type",
    ],
    correctAnswers: [0],
    explanation:
      "AWS architecture emphasizes scalability and parallel processing. Using many instances in parallel distributes workload, speeds processing, and reduces bottlenecks. Using a single large instance is less efficient and creates a single point of failure. Dedicated hardware is not elastic and does not align with cloud principles. Large GPU instances may help specific workloads but do not scale horizontally as needed for large-scale transcoding. More info: https://aws.amazon.com/solutions/case-studies/encoding/",
  },
  {
    id: uuidv5("aws-question-644", uuidv5.URL),
    text: "For which auditing process does AWS have sole responsibility?",
    options: [
      "AWS IAM policies",
      "Physical security",
      "Amazon S3 bucket policies",
      "AWS CloudTrail Logs",
    ],
    correctAnswers: [1],
    explanation:
      "AWS is responsible for the physical security of its data centers under the Shared Responsibility Model. Customers manage IAM policies, S3 bucket policies, and CloudTrail logs. These are in the customer's domain. More info: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-645", uuidv5.URL),
    text: "Which feature of the AWS Cloud will support an international company's requirement for low latency to all of its customers?",
    options: [
      "Fault tolerance",
      "Global reach",
      "Pay-as-you-go pricing",
      "High availability",
    ],
    correctAnswers: [1],
    explanation:
      "Global reach refers to AWS's worldwide infrastructure of Regions and edge locations that provide low latency access to users globally. Fault tolerance and high availability relate to reliability within a region but not global latency. Pay-as-you-go pricing addresses cost, not performance. More info: https://aws.amazon.com/cloudfront/",
  },
  {
    id: uuidv5("aws-question-646", uuidv5.URL),
    text: "Which of the following is the customer's responsibility under the AWS shared responsibility model?",
    options: [
      "Patching underlying infrastructure",
      "Physical security",
      "Patching Amazon EC2 instances",
      "Patching network infrastructure",
    ],
    correctAnswers: [2],
    explanation:
      "Customers are responsible for patching the guest OS and applications on EC2 instances. AWS handles physical security and infrastructure patching. This distinction is key in the shared responsibility model. More info: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-647", uuidv5.URL),
    text: "A customer is using multiple AWS accounts with separate billing. How can the customer take advantage of volume discounts with minimal impact to the AWS resources?",
    options: [
      "Create one global AWS account and move all AWS resources to that account.",
      "Sign up for three years of Reserved Instance pricing up front.",
      "Use the consolidated billing feature from AWS Organizations.",
      "Sign up for the AWS Enterprise support plan to get volume discounts.",
    ],
    correctAnswers: [2],
    explanation:
      "Using consolidated billing in AWS Organizations allows combined usage for volume discounts without migrating resources. Moving all resources to a single account is complex and risky. Reserved Instances only reduce compute cost, not overall. Enterprise Support provides support benefits, not usage-based discounts. More info: https://aws.amazon.com/answers/account-management/aws-multi-account-billing-strategy/",
  },
  {
    id: uuidv5("aws-question-648", uuidv5.URL),
    text: "Which of the following are features of Amazon CloudWatch Logs? (Select TWO.)",
    options: [
      "Summaries by Amazon Simple Notification Service (Amazon SNS)",
      "Free Amazon Elasticsearch Service analytics",
      "Provided at no charge",
      "Real-time monitoring",
      "Adjustable retention",
    ],
    correctAnswers: [3, 4],
    explanation:
      "Amazon CloudWatch Logs supports real-time monitoring and adjustable retention. SNS notifications can be configured for alarms but are not a native feature of CloudWatch Logs. Elasticsearch integration is optional and incurs charges. CloudWatch Logs itself is not free; charges apply per ingested GB and retention. More info: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html",
  },
  {
    id: uuidv5("aws-question-649", uuidv5.URL),
    text: "Which of the following is an AWS managed Domain Name System (DNS) web service?",
    options: [
      "Amazon Route 53",
      "Amazon Neptune",
      "Amazon SageMaker",
      "Amazon Lightsail",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon Route 53 is AWS's managed DNS service. Neptune is a graph database, SageMaker is for machine learning, and Lightsail is a simplified hosting environment. More info: https://aws.amazon.com/route53/",
  },
  {
    id: uuidv5("aws-question-650", uuidv5.URL),
    text: "A customer is deploying a new application and needs to choose an AWS Region. Which of the following factors could influence the customer's decision? (Select TWO.)",
    options: [
      "Reduced latency to users",
      "The application's presentation in the local language",
      "Data sovereignty compliance",
      "Cooling costs in hotter climates",
      "Proximity to the customer's office for on-site visits",
    ],
    correctAnswers: [0, 2],
    explanation:
      "Choosing an AWS Region depends on latency to end-users and regulatory/data sovereignty requirements. Local language and climate-based cooling costs are irrelevant to customers. On-site visits are rare since AWS is managed infrastructure and does not allow physical access. More info: https://aws.amazon.com/about-aws/global-infrastructure/regions_az/",
  },
];

export const exam14: Question[] = [
  {
    id: uuidv5("aws-question-651", uuidv5.URL),
    text: "Which storage service can be used as a low-cost option for hosting static websites?",
    options: [
      "Amazon Glacier",
      "Amazon DynamoDB",
      "Amazon Elastic File System (Amazon EFS)",
      "Amazon Simple Storage Service (Amazon S3)",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon S3 provides a low-cost, scalable, and highly available solution for hosting static websites. Glacier (A) is for archival storage, DynamoDB (B) is a NoSQL database, and EFS (C) is a file system for EC2, none of which are designed for static website hosting. More info: https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html",
  },
  {
    id: uuidv5("aws-question-652", uuidv5.URL),
    text: "Which Amazon EC2 instance pricing model can provide discounts of up to 90%?",
    options: [
      "Reserved Instances",
      "On-Demand",
      "Dedicated Hosts",
      "Spot Instances",
    ],
    correctAnswers: [3],
    explanation:
      "Spot Instances allow customers to bid on unused EC2 capacity at significantly reduced rates, offering discounts of up to 90%. Reserved Instances (A) offer discounts for long-term commitments but not at such high rates. On-Demand (B) is standard pricing, and Dedicated Hosts (C) are for compliance, not cost efficiency. More info: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-instances.html",
  },
  {
    id: uuidv5("aws-question-653", uuidv5.URL),
    text: "What is the AWS customer responsible for according to the AWS shared responsibility model?",
    options: [
      "Physical access controls",
      "Data encryption",
      "Secure disposal of storage devices",
      "Environmental risk management",
    ],
    correctAnswers: [1],
    explanation:
      "Under the AWS Shared Responsibility Model, AWS is responsible for security of the cloud (e.g., physical access controls, infrastructure security), while customers are responsible for security in the cloud, including data encryption and access management. Secure disposal and environmental risk management are AWS's responsibility. More info: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-654", uuidv5.URL),
    text: "Which of the following AWS Cloud services can be used to run a customer-managed relational database?",
    options: [
      "Amazon EC2",
      "Amazon Route 53",
      "Amazon ElastiCache",
      "Amazon DynamoDB",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon EC2 allows customers to run their own relational database instances, providing full control over configuration, performance, and maintenance. Route 53 (B) is DNS, ElastiCache (C) is for caching, and DynamoDB (D) is NoSQL. More info: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/hosting-applications.html",
  },
  {
    id: uuidv5("aws-question-655", uuidv5.URL),
    text: "A company is looking for a scalable data warehouse solution. Which of the following AWS solutions would meet the company's needs?",
    options: [
      "Amazon Simple Storage Service (Amazon S3)",
      "Amazon DynamoDB",
      "Amazon Kinesis",
      "Amazon Redshift",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon Redshift is AWS's managed data warehouse service, optimized for large-scale data analytics. S3 (A) is object storage, DynamoDB (B) is NoSQL, and Kinesis (C) is for real-time streaming. More info: https://aws.amazon.com/redshift/",
  },
  {
    id: uuidv5("aws-question-656", uuidv5.URL),
    text: "Which statement best describes Elastic Load Balancing?",
    options: [
      "It translates a domain name into an IP address using DNS.",
      "It distributes incoming application traffic across one or more Amazon EC2 instances.",
      "It collects metrics on connected Amazon EC2 instances.",
      "It automatically adjusts the number of Amazon EC2 instances to support incoming traffic.",
    ],
    correctAnswers: [1],
    explanation:
      "Elastic Load Balancing (ELB) distributes traffic across multiple EC2 instances to improve application availability and fault tolerance. DNS translation is performed by Route 53, and autoscaling is handled by Auto Scaling Groups. More info: https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/how-elastic-load-balancing-works.html",
  },
  {
    id: uuidv5("aws-question-657", uuidv5.URL),
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
      "Customers can interact with AWS services through the AWS Command Line Interface (CLI) and Software Development Kits (SDKs). On-premises (B) is a deployment model, SaaS (D) is for software delivery, and Hybrid (E) is a deployment strategy. More info: https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html and https://aws.amazon.com/tools/",
  },
  {
    id: uuidv5("aws-question-658", uuidv5.URL),
    text: "The AWS Cloud's multiple Regions are an example of:",
    options: [
      "Agility",
      "Global infrastructure",
      "Elasticity",
      "Pay-as-you-go pricing",
    ],
    correctAnswers: [1],
    explanation:
      "AWS's multiple Regions provide a globally distributed infrastructure that enhances availability and fault tolerance. Agility (A) is about rapid deployment, elasticity (C) is about scaling, and pay-as-you-go (D) is about billing. More info: https://aws.amazon.com/about-aws/global-infrastructure/",
  },
  {
    id: uuidv5("aws-question-659", uuidv5.URL),
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
      "Amazon S3 provides scalable storage for video files, while Amazon CloudFront is a CDN that caches and delivers content closer to users, reducing latency. Storage Gateway (A) is for hybrid storage, EFS (C) is a file system, and Glacier (D) is for archival. More info: https://aws.amazon.com/cloudfront/ and https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html",
  },
  {
    id: uuidv5("aws-question-660", uuidv5.URL),
    text: "Web servers running on Amazon EC2 access a legacy application running in a corporate data center. What term would describe this model?",
    options: [
      "Cloud-native",
      "Partner network",
      "Hybrid architecture",
      "Infrastructure as a service",
    ],
    correctAnswers: [2],
    explanation:
      "A hybrid architecture combines on-premises infrastructure with cloud resources. Cloud-native (A) is for cloud-built apps, partner network (B) is for AWS partners, and IaaS (D) is a service model. More info: https://aws.amazon.com/architecture/hybrid/",
  },
  {
    id: uuidv5("aws-question-661", uuidv5.URL),
    text: "What is the benefit of using AWS managed services, such as Amazon ElastiCache and Amazon Relational Database Service (Amazon RDS)?",
    options: [
      "They require the customer to monitor and replace failing instances.",
      "They have better performance than customer-managed services.",
      "They simplify patching and updating underlying OSs.",
      "They do not require the customer to optimize instance type or size selections.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS managed services handle infrastructure tasks like patching and updates, freeing customers from these operational burdens. AWS manages instance failures (A), performance (B) depends on configuration, and customers still need to optimize resources (D). More info: https://aws.amazon.com/managed-services/",
  },
  {
    id: uuidv5("aws-question-662", uuidv5.URL),
    text: "Which service provides a virtually unlimited amount of online highly durable object storage?",
    options: [
      "Amazon Redshift",
      "Amazon Elastic File System (Amazon EFS)",
      "Amazon Elastic Container Service (Amazon ECS)",
      "Amazon S3",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon S3 is designed for unlimited object storage with high durability. Redshift (A) is a data warehouse, EFS (B) is a file system, and ECS (C) is for containers. More info: https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html",
  },
  {
    id: uuidv5("aws-question-663", uuidv5.URL),
    text: "Which of the following Identity and Access Management (IAM) entities is associated with an access key ID and secret access key when using AWS Command Line Interface (AWS CLI)?",
    options: ["IAM group", "IAM user", "IAM role", "IAM policy"],
    correctAnswers: [1],
    explanation:
      "IAM users can be assigned long-term access keys for AWS CLI and SDKs. IAM groups (A) are collections of users, IAM roles (C) are temporary credentials, and IAM policies (D) define permissions. More info: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html",
  },
  {
    id: uuidv5("aws-question-664", uuidv5.URL),
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
      "AWS Trusted Advisor helps improve security, and AWS provides encryption tools for data protection. AWS supports MFA but does not provide physical tokens (A), does not conduct automated penetration tests (D), and S3 does not monitor copyrighted content (E). More info: https://aws.amazon.com/premiumsupport/technology/trusted-advisor/ and https://aws.amazon.com/security/",
  },
  {
    id: uuidv5("aws-question-665", uuidv5.URL),
    text: "Which AWS managed service is used to host databases?",
    options: ["AWS Batch", "AWS Artifact", "AWS Data Pipeline", "Amazon RDS"],
    correctAnswers: [3],
    explanation:
      "Amazon RDS is a managed database service for relational databases. AWS Batch (A) is for batch jobs, Artifact (B) is for compliance, and Data Pipeline (C) is for data movement. More info: https://aws.amazon.com/rds/",
  },
  {
    id: uuidv5("aws-question-666", uuidv5.URL),
    text: "Which AWS service provides a simple and scalable shared file storage solution for use with Linux-based AWS and on-premises servers?",
    options: ["Amazon S3", "Amazon Glacier", "Amazon EBS", "Amazon EFS"],
    correctAnswers: [3],
    explanation:
      "Amazon EFS provides a scalable, shared file system for Linux workloads. S3 (A) is object storage, Glacier (B) is for archival, and EBS (C) is block storage. More info: https://aws.amazon.com/efs/",
  },
  {
    id: uuidv5("aws-question-667", uuidv5.URL),
    text: "When architecting cloud applications, which of the following are a key design principle?",
    options: [
      "Use the largest instance possible",
      "Provision capacity for peak load",
      "Use the Scrum development process",
      "Implement elasticity",
    ],
    correctAnswers: [3],
    explanation:
      "Elasticity ensures resources scale dynamically to match demand. Using the largest instance (A) may waste resources, peak provisioning (B) is outdated, and Scrum (C) is a development methodology. More info: https://docs.aws.amazon.com/wellarchitected/latest/framework/general-design-principles.html",
  },
  {
    id: uuidv5("aws-question-668", uuidv5.URL),
    text: "Which AWS service should be used for long-term, low-cost storage of data backups?",
    options: ["Amazon RDS", "Amazon Glacier", "AWS Snowball", "AWS EBS"],
    correctAnswers: [1],
    explanation:
      "Amazon S3 Glacier provides low-cost archival storage. RDS (A) is a database, Snowball (C) is for data transfer, and EBS (D) is block storage. More info: https://aws.amazon.com/glacier/",
  },
  {
    id: uuidv5("aws-question-669", uuidv5.URL),
    text: "Which task is AWS responsible for in the shared responsibility model for security and compliance?",
    options: [
      "Granting access to individuals and services",
      "Encrypting data in transit",
      "Updating Amazon EC2 host firmware",
      "Updating operating systems",
    ],
    correctAnswers: [2],
    explanation:
      "AWS is responsible for updating EC2 host firmware. Customers are responsible for access control (A), encrypting data in transit (B), and OS updates (D). More info: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-670", uuidv5.URL),
    text: "Where should a company go to search software listings from independent software vendors to find, test, buy and deploy software that runs on AWS?",
    options: [
      "AWS Marketplace",
      "Amazon Lumberyard",
      "AWS Artifact",
      "Amazon CloudSearch",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Marketplace provides software listings from vendors. Lumberyard (B) is a game engine, Artifact (C) is for compliance, and CloudSearch (D) is a search service. More info: https://aws.amazon.com/marketplace/",
  },
  {
    id: uuidv5("aws-question-671", uuidv5.URL),
    text: "Which of the following is a benefit of using the AWS Cloud?",
    options: [
      "Permissive security removes the administrative burden.",
      "Ability to focus on revenue-generating activities.",
      "Control over cloud network hardware.",
      "Choice of specific cloud hardware vendors.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS allows businesses to focus on revenue-generating activities by reducing the need for managing infrastructure. AWS does not remove security concerns (A), does not provide control over physical network hardware (C), and does not allow choice of specific hardware vendors (D). More info: https://aws.amazon.com/benefits/",
  },
  {
    id: uuidv5("aws-question-672", uuidv5.URL),
    text: "When performing a cost analysis that supports physical isolation of a customer workload, which compute hosting model should be accounted for in the Total Cost of Ownership (TCO)?",
    options: [
      "Dedicated Hosts",
      "Reserved Instances",
      "On-Demand Instances",
      "No Upfront Reserved Instances",
    ],
    correctAnswers: [0],
    explanation:
      "Dedicated Hosts provide physical isolation by allocating an entire physical server for exclusive use, making them a key consideration in TCO calculations. Reserved Instances (B), On-Demand Instances (C), and No Upfront Reserved Instances (D) do not provide the same level of physical isolation. More info: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-overview.html",
  },
  {
    id: uuidv5("aws-question-673", uuidv5.URL),
    text: "Which AWS service provides the ability to manage infrastructure as code?",
    options: [
      "AWS CodePipeline",
      "AWS CodeDeploy",
      "AWS Direct Connect",
      "AWS CloudFormation",
    ],
    correctAnswers: [3],
    explanation:
      "AWS CloudFormation allows users to define and provision AWS infrastructure as code. CodePipeline (A) is a CI/CD service, CodeDeploy (B) automates application deployment, and Direct Connect (C) is for dedicated network connections. More info: https://aws.amazon.com/cloudformation/",
  },
  {
    id: uuidv5("aws-question-674", uuidv5.URL),
    text: "If a customer needs to audit the change management of AWS resources, which of the following AWS services should the customer use?",
    options: [
      "AWS Config",
      "AWS Trusted Advisor",
      "Amazon CloudWatch",
      "Amazon Inspector",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Config continuously monitors AWS resource configurations and supports auditing. Trusted Advisor (B) provides best practice recommendations, CloudWatch (C) is for monitoring, and Inspector (D) assesses security. More info: https://aws.amazon.com/config/",
  },
  {
    id: uuidv5("aws-question-675", uuidv5.URL),
    text: "What is Amazon CloudWatch?",
    options: [
      "A code repository with customizable build and team commit features.",
      "A metrics repository with customizable notification thresholds and channels.",
      "A security configuration repository with threat analytics.",
      "A rule repository of a web application firewall with automated vulnerability prevention features.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon CloudWatch collects and monitors performance metrics. The other options misrepresent its capabilities. More info: https://aws.amazon.com/cloudwatch/",
  },
  {
    id: uuidv5("aws-question-676", uuidv5.URL),
    text: "Which service allows a company with multiple AWS accounts to combine its usage to obtain volume discounts?",
    options: [
      "AWS Server Migration Service",
      "AWS Organizations",
      "AWS Budgets",
      "AWS Trusted Advisor",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Organizations enables consolidated billing and volume discounts. The other options do not provide this feature. More info: https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html",
  },
  {
    id: uuidv5("aws-question-677", uuidv5.URL),
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
      "AWS OpsWorks and AWS CodeDeploy support on-premises deployments. Elastic Beanstalk (A) is for AWS-based applications, AWS Batch (D) handles batch jobs, and AWS X-Ray (E) is for application tracing. More info: https://docs.aws.amazon.com/opsworks/latest/userguide/welcome.html and https://docs.aws.amazon.com/codedeploy/latest/userguide/welcome.html",
  },
  {
    id: uuidv5("aws-question-678", uuidv5.URL),
    text: "Which Amazon EC2 pricing model adjusts based on supply and demand of EC2 instances?",
    options: [
      "On-Demand Instances",
      "Reserved Instances",
      "Spot Instances",
      "Convertible Reserved Instances",
    ],
    correctAnswers: [2],
    explanation:
      "Spot Instances are priced dynamically based on supply and demand. The other options have fixed or predictable pricing. More info: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-instances.html",
  },
  {
    id: uuidv5("aws-question-679", uuidv5.URL),
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
      "Loose coupling and scalability are key principles in cloud architecture. Manual monitoring (A) and fixed servers (B) reduce flexibility, and relying on individual components (D) is vague and not necessarily a best practice. More info: https://docs.aws.amazon.com/wellarchitected/latest/framework/general-design-principles.html",
  },
  {
    id: uuidv5("aws-question-680", uuidv5.URL),
    text: "Which is the MINIMUM AWS Support plan that allows for one-hour target response time for support cases?",
    options: ["Enterprise", "Business", "Developer", "Basic"],
    correctAnswers: [1],
    explanation:
      "The Business plan is the minimum AWS Support plan that provides a one-hour response time. Developer and Basic plans do not offer this. More info: https://aws.amazon.com/premiumsupport/plans/",
  },
  {
    id: uuidv5("aws-question-681", uuidv5.URL),
    text: "Where can AWS compliance and certification reports be downloaded?",
    options: [
      "AWS Artifact",
      "AWS Concierge",
      "AWS Certificate Manager",
      "AWS Trusted Advisor",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Artifact is your go-to, central resource for compliance-related information that matters to you. It provides on-demand access to AWS's security and compliance reports and select online agreements. Concierge (B) is for enterprise support, Certificate Manager (C) manages SSL/TLS certificates, and Trusted Advisor (D) is for best practice checks. More info: https://aws.amazon.com/artifact/",
  },
  {
    id: uuidv5("aws-question-682", uuidv5.URL),
    text: "Which AWS service provides a customized view of the health of specific AWS services that power a customer's workloads running on AWS?",
    options: [
      "AWS Service Health Dashboard",
      "AWS X-Ray",
      "AWS Personal Health Dashboard",
      "Amazon CloudWatch",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Personal Health Dashboard provides a personalized view of the performance and availability of the AWS services that you are using, along with alerts that are automatically triggered by changes in the health of these services. The Service Health Dashboard (A) is general, X-Ray (B) is for tracing, and CloudWatch (D) is for metrics. More info: https://aws.amazon.com/premiumsupport/phd/",
  },
  {
    id: uuidv5("aws-question-683", uuidv5.URL),
    text: "Which of the following is an advantage of consolidated billing on AWS?",
    options: [
      "Volume pricing qualification",
      "Shared access permissions",
      "Multiple bills per account",
      "Eliminates the need for tagging",
    ],
    correctAnswers: [0],
    explanation:
      "If you have multiple standalone accounts, your charges might decrease if you add the accounts to an organization. AWS combines usage from all accounts in the organization to qualify you for volume pricing discounts. The other options are not benefits of consolidated billing. More info: https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html",
  },
  {
    id: uuidv5("aws-question-684", uuidv5.URL),
    text: "Which of the following steps should be taken by a customer when conducting penetration testing on AWS?",
    options: [
      "Conduct penetration testing using Amazon Inspector, and then notify AWS support.",
      "Request and wait for approval from the customer's internal security team, and then conduct testing.",
      "Notify AWS support, and then conduct testing immediately.",
      "Request and wait for approval from AWS support, and then conduct testing.",
    ],
    correctAnswers: [3],
    explanation:
      "AWS customers are welcome to carry out security assessments or penetration tests against their AWS infrastructure, but for most services, you must request and wait for approval from AWS support before conducting testing. Internal approval (B) is not sufficient, and Inspector (A) is for vulnerability scanning, not penetration testing. More info: https://aws.amazon.com/security/penetration-testing/",
  },
  {
    id: uuidv5("aws-question-685", uuidv5.URL),
    text: "Which of the following AWS features enables a user to launch a pre-configured Amazon Elastic Compute Cloud (Amazon EC2) instance?",
    options: [
      "Amazon Elastic Block Store (Amazon EBS)",
      "Amazon Machine Image",
      "Amazon EC2 Systems Manager",
      "Amazon AppStream 2.0",
    ],
    correctAnswers: [1],
    explanation:
      "To use Amazon EC2, you select a pre-configured Amazon Machine Image (AMI) to get up and running immediately. EBS (A) is storage, EC2 Systems Manager (C) is for management, and AppStream 2.0 (D) is for application streaming. More info: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html",
  },
  {
    id: uuidv5("aws-question-686", uuidv5.URL),
    text: "How would an AWS customer easily apply common access controls to a large set of users?",
    options: [
      "Apply an IAM policy to an IAM group.",
      "Apply an IAM policy to an IAM role.",
      "Apply the same IAM policy to all IAM users with access to the same workload.",
      "Apply an IAM policy to an Amazon Cognito user pool.",
    ],
    correctAnswers: [0],
    explanation:
      "It's more convenient to create IAM groups for job functions and assign policies to those groups. All users in an IAM group inherit the permissions assigned to the group. Policies on roles (B) are for assumed identities, and Cognito (D) is for federated identities. More info: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups.html",
  },
  {
    id: uuidv5("aws-question-687", uuidv5.URL),
    text: "Which AWS Cost Management tool allows you to view the most granular data about your AWS bill?",
    options: [
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Cost and Usage report",
      "AWS Billing dashboard",
    ],
    correctAnswers: [2],
    explanation:
      "The Cost & Usage Report is your one-stop-shop for accessing the most granular data about your AWS costs and usage. Cost Explorer (A) is for visualization, Budgets (B) is for cost control, and Billing dashboard (D) is for summaries. More info: https://docs.aws.amazon.com/cur/latest/userguide/what-is-cur.html",
  },
  {
    id: uuidv5("aws-question-688", uuidv5.URL),
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
      "AWS CloudFormation and the AWS Management Console are tools that allow you to launch and manage AWS resources, including Amazon RDS clusters. Concierge (A) is for enterprise support, S3 (C) is for storage, and EC2 Auto Scaling (D) is for EC2 instances. More info: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CreateDBInstance.html and https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html",
  },
  {
    id: uuidv5("aws-question-689", uuidv5.URL),
    text: "Which of the following is an AWS Cloud architecture design principle?",
    options: [
      "Implement single points of failure.",
      "Implement loose coupling.",
      "Implement monolithic design.",
      "Implement vertical scaling.",
    ],
    correctAnswers: [1],
    explanation:
      "Loose coupling between services can be done through asynchronous integration, decoupling components and introducing resiliency. Single points of failure (A), monolithic design (C), and vertical scaling (D) are not recommended. More info: https://docs.aws.amazon.com/wellarchitected/latest/framework/general-design-principles.html",
  },
  {
    id: uuidv5("aws-question-690", uuidv5.URL),
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
      "Granting least privilege access to IAM users and activating multi-factor authentication (MFA) for privileged users are key security measures to protect access to an AWS account. Sharing IAM users (C) is insecure, CloudTrail (A) is for logging, and CloudFront (D) is a CDN. More info: https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html",
  },
  {
    id: uuidv5("aws-question-691", uuidv5.URL),
    text: "Which service provides a hybrid storage service that enables on-premises applications to seamlessly use cloud storage?",
    options: [
      "Amazon Glacier",
      "AWS Snowball",
      "AWS Storage Gateway",
      "Amazon Elastic Block Storage (Amazon EBS)",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Storage Gateway is a hybrid cloud storage service that gives you on-premises access to virtually unlimited cloud storage. Glacier (A) is for archival, Snowball (B) is for data transfer, and EBS (D) is block storage for EC2. More info: https://aws.amazon.com/storagegateway/",
  },
  {
    id: uuidv5("aws-question-692", uuidv5.URL),
    text: "Which of the following services falls under the responsibility of the customer to maintain operating system configuration, security patching, and networking?",
    options: ["Amazon RDS", "Amazon EC2", "Amazon ElastiCache", "AWS Fargate"],
    correctAnswers: [1],
    explanation:
      "The customer is responsible for managing, supporting, patching, and controlling the guest operating system and networking for Amazon EC2. RDS (A), ElastiCache (C), and Fargate (D) are managed services where AWS handles these tasks. More info: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-693", uuidv5.URL),
    text: "Which of the following is an important architectural design principle when designing cloud applications?",
    options: [
      "Use multiple Availability Zones.",
      "Use tightly coupled components.",
      "Use open source software.",
      "Provision extra capacity.",
    ],
    correctAnswers: [0],
    explanation:
      "Using multiple Availability Zones increases resilience and reduces the impact of failures. Tightly coupled components (B) reduce flexibility, open source (C) is a technology choice, and extra capacity (D) is not cost-effective. More info: https://docs.aws.amazon.com/wellarchitected/latest/framework/reliability-pillar.html",
  },
  {
    id: uuidv5("aws-question-694", uuidv5.URL),
    text: "Which AWS support plan includes a dedicated Technical Account Manager?",
    options: ["Developer", "Enterprise", "Business", "Basic"],
    correctAnswers: [1],
    explanation:
      "The Enterprise support plan includes a dedicated Technical Account Manager (TAM). Developer and Business plans do not include a TAM. More info: https://aws.amazon.com/premiumsupport/plans/",
  },
  {
    id: uuidv5("aws-question-695", uuidv5.URL),
    text: "Amazon Relational Database Service (Amazon RDS) offers which of the following benefits over traditional database management?",
    options: [
      "AWS manages the data stored in Amazon RDS tables.",
      "AWS manages the maintenance of the operating system.",
      "AWS automatically scales up instance types on demand.",
      "AWS manages the database type.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS manages the maintenance of the operating system for Amazon RDS, reducing operational overhead. Data management (A) and database type (D) are user responsibilities, and auto-scaling (C) is not automatic for instance types. More info: https://aws.amazon.com/rds/features/",
  },
  {
    id: uuidv5("aws-question-696", uuidv5.URL),
    text: "Which service is best for storing common database query results, which helps to alleviate database access load?",
    options: [
      "Amazon Machine Learning",
      "Amazon SQS",
      "Amazon ElastiCache",
      "Amazon EC2 Instance Store",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon ElastiCache is an in-memory data store that can cache frequently accessed data, such as common database query results, to improve application performance and reduce database load. SQS (B) is for messaging, EC2 Instance Store (D) is ephemeral, and Machine Learning (A) is for ML workloads. More info: https://aws.amazon.com/elasticache/",
  },
  {
    id: uuidv5("aws-question-697", uuidv5.URL),
    text: "Which of the following is a component of the shared responsibility model managed entirely by AWS?",
    options: [
      "Patching operating system software",
      "Encrypting data",
      "Enforcing multi-factor authentication",
      "Auditing physical data center assets",
    ],
    correctAnswers: [3],
    explanation:
      "AWS is responsible for auditing physical data center assets and resources. Customers are responsible for OS patching (A), data encryption (B), and enforcing MFA (C). More info: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-698", uuidv5.URL),
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
      "AWS Online Tech Talks and AWS Classroom Training provide instructor-led or interactive learning about AWS security. Trusted Advisor (A) is for best practices, Blog (C) and Forums (D) are for self-service learning. More info: https://aws.amazon.com/training/classroom/ and https://aws.amazon.com/events/online-tech-talks/",
  },
  {
    id: uuidv5("aws-question-699", uuidv5.URL),
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
      "Security Groups and Subnets can be configured through the VPC Dashboard. CloudFront (A) is a CDN, Route 53 (B) is DNS, and ELB (E) is for load balancing. More info: https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Dashboard.html",
  },
  {
    id: uuidv5("aws-question-700", uuidv5.URL),
    text: "If each department within a company has its own AWS account, what is one way to enable consolidated billing?",
    options: [
      "Use AWS Budgets on each account to pay only to budget.",
      "Contact AWS Support for a monthly bill.",
      "Create an AWS Organization from the payer account and invite the other accounts to join.",
      "Put all invoices into one Amazon Simple Storage Service (Amazon S3) bucket, load data into Amazon Redshift, and then run a billing report.",
    ],
    correctAnswers: [2],
    explanation:
      "Creating an AWS Organization from the payer account and inviting the other accounts to join enables consolidated billing. The other options do not provide true consolidated billing. More info: https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html",
  },
];

const exam15: Question[] = [
  {
    id: uuidv5("aws-question-701", uuidv5.URL),
    text: "How do customers benefit from Amazon's massive economies of scale?",
    options: [
      "Periodic price reductions as the result of Amazon's operational efficiencies",
      "New Amazon EC2 instance types providing the latest hardware",
      "The ability to scale up and down when needed",
      "Increased reliability in the underlying hardware of Amazon EC2 instances",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon's massive economies of scale enable it to reduce operational costs and pass those savings on to customers in the form of periodic price reductions. The other options refer to other benefits of AWS but do not directly relate to economies of scale. More info: https://aws.amazon.com/economics/",
  },
  {
    id: uuidv5("aws-question-702", uuidv5.URL),
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
      "AWS CloudTrail logs account activity, helping track API calls and actions taken. Amazon CloudWatch provides monitoring and operational insights by collecting and analyzing logs and metrics. The other options do not directly provide account activity tracking. More info: https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html and https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html",
  },
  {
    id: uuidv5("aws-question-703", uuidv5.URL),
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
      "AWS services like RDS automate database patching and backups, freeing up IT resources. Creating a database schema and testing applications remain developer responsibilities, and penetration testing requires additional approval from AWS. More info: https://aws.amazon.com/rds/features/",
  },
  {
    id: uuidv5("aws-question-704", uuidv5.URL),
    text: "In which scenario should Amazon EC2 Spot Instances be used?",
    options: [
      "A company wants to move its main website to AWS from an on-premises web server.",
      "A company has a number of application services whose Service Level Agreement (SLA) requires 99.999% uptime.",
      "A company's heavily used legacy database is currently running on-premises.",
      "A company has a number of infrequent, interruptible jobs that are currently using On-Demand Instances.",
    ],
    correctAnswers: [3],
    explanation:
      "EC2 Spot Instances are ideal for interruptible workloads that can tolerate occasional disruptions, offering cost savings. The other scenarios require stable, high-availability infrastructure that Spot Instances cannot guarantee. More info: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-instances.html",
  },
  {
    id: uuidv5("aws-question-705", uuidv5.URL),
    text: "Which AWS feature should a customer leverage to achieve high availability of an application?",
    options: [
      "AWS Direct Connect",
      "Availability Zones",
      "Data centers",
      "Amazon Virtual Private Cloud (Amazon VPC)",
    ],
    correctAnswers: [1],
    explanation:
      "Availability Zones (AZs) provide redundancy and fault tolerance for applications, ensuring high availability. Direct Connect provides private network connections, VPCs offer isolated networking, and data centers are part of AWS infrastructure but do not ensure high availability on their own. More info: https://aws.amazon.com/about-aws/global-infrastructure/regions_az/",
  },
  {
    id: uuidv5("aws-question-706", uuidv5.URL),
    text: "Which is the minimum AWS Support plan that includes Infrastructure Event Management without additional costs?",
    options: ["Enterprise", "Business", "Developer", "Basic"],
    correctAnswers: [1],
    explanation:
      "The Business Support plan includes Infrastructure Event Management at no additional cost, while Developer and Basic plans do not offer this feature. Enterprise Support also includes it but is a higher-tier plan. More info: https://aws.amazon.com/premiumsupport/plans/",
  },
  {
    id: uuidv5("aws-question-707", uuidv5.URL),
    text: "Which AWS service can serve a static website?",
    options: ["Amazon S3", "Amazon Route 53", "Amazon QuickSight", "AWS X-Ray"],
    correctAnswers: [0],
    explanation:
      "Amazon S3 can host static websites, delivering static content directly to users. Route 53 provides DNS services, QuickSight is a business intelligence tool, and X-Ray is used for application tracing. More info: https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html",
  },
  {
    id: uuidv5("aws-question-708", uuidv5.URL),
    text: "How does AWS shorten the time to provision IT resources?",
    options: [
      "It supplies an online IT ticketing platform for resource requests.",
      "It supports automatic code validation services.",
      "It provides the ability to programmatically provision existing resources.",
      "It automates the resource request process from a company's IT vendor list.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS allows programmatic provisioning of resources using tools like AWS CloudFormation and APIs, reducing manual intervention. The other options do not describe AWS’s primary approach to rapid resource provisioning. More info: https://aws.amazon.com/cloudformation/",
  },
  {
    id: uuidv5("aws-question-709", uuidv5.URL),
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
      "AWS edge locations, used by CloudFront, reduce latency by caching content closer to users and help reduce server traffic by serving cached responses. They do not host applications, run NoSQL databases, or send notifications. More info: https://aws.amazon.com/cloudfront/features/",
  },
  {
    id: uuidv5("aws-question-710", uuidv5.URL),
    text: "Which of the following can limit Amazon Simple Storage Service (Amazon S3) bucket access to specific users?",
    options: [
      "A public and private key-pair",
      "Amazon Inspector",
      "AWS Identity and Access Management (IAM) policies",
      "Security Groups",
    ],
    correctAnswers: [2],
    explanation:
      "IAM policies control access to S3 buckets by defining user permissions. Public-private key pairs are used for encryption, Amazon Inspector is a security assessment tool, and Security Groups control network access but not bucket access. More info: https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html",
  },
  {
    id: uuidv5("aws-question-711", uuidv5.URL),
    text: "A solution that is able to support growth in users, traffic, or data size with no drop in performance aligns with which cloud architecture principle?",
    options: [
      "Think parallel",
      "Implement elasticity",
      "Decouple your components",
      "Design for failure",
    ],
    correctAnswers: [1],
    explanation:
      "Implementing elasticity allows a system to scale with increasing demand while maintaining performance. The other options focus on other architectural best practices but do not specifically address scalability. More info: https://docs.aws.amazon.com/wellarchitected/latest/framework/performance-efficiency-pillar.html",
  },
  {
    id: uuidv5("aws-question-712", uuidv5.URL),
    text: "Which of the following tasks is the responsibility of AWS?",
    options: [
      "Encrypting client-side data",
      "Configuring AWS Identity and Access Management (IAM) roles",
      "Securing the Amazon EC2 hypervisor",
      "Setting user password policies",
    ],
    correctAnswers: [2],
    explanation:
      "AWS is responsible for securing the underlying infrastructure, including the EC2 hypervisor. Customers are responsible for configuring IAM, encrypting data, and setting password policies. More info: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-713", uuidv5.URL),
    text: "One benefit of On-Demand Amazon Elastic Compute Cloud (Amazon EC2) pricing is:",
    options: [
      "The ability to bid for a lower hourly cost.",
      "Paying a daily rate regardless of time used.",
      "Paying only for time used.",
      "Pre-paying for instances and paying a lower hourly rate.",
    ],
    correctAnswers: [2],
    explanation:
      "On-Demand instances allow users to pay only for the time they use, without long-term commitments or upfront costs, making them flexible for varying workloads. More info: https://aws.amazon.com/ec2/pricing/on-demand/",
  },
  {
    id: uuidv5("aws-question-714", uuidv5.URL),
    text: "An administrator needs to rapidly deploy a popular IT solution and start using it immediately. Where can the administrator find assistance?",
    options: [
      "AWS Well-Architected Framework documentation",
      "Amazon CloudFront",
      "AWS CodeCommit",
      "AWS Quick Start reference deployments",
    ],
    correctAnswers: [3],
    explanation:
      "AWS Quick Starts provide pre-configured, automated deployments for popular IT solutions, reducing setup time and complexity. The other options do not provide automated deployment templates. More info: https://aws.amazon.com/quickstart/",
  },
  {
    id: uuidv5("aws-question-715", uuidv5.URL),
    text: "Which of the following services is in the category of AWS serverless platform?",
    options: [
      "Amazon EMR",
      "Elastic Load Balancing",
      "AWS Lambda",
      "AWS Mobile Hub",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Lambda is a core service in AWS's serverless platform, allowing users to run code without provisioning or managing servers. EMR (A) is for big data, ELB (B) is for load balancing, and Mobile Hub (D) is for mobile app development. More info: https://aws.amazon.com/lambda/",
  },
  {
    id: uuidv5("aws-question-716", uuidv5.URL),
    text: "Which services are parts of the AWS serverless platform?",
    options: [
      "Amazon EC2, Amazon S3, Amazon Athena",
      "Amazon Kinesis, Amazon SQS, Amazon EMR",
      "AWS Step Functions, Amazon DynamoDB, Amazon SNS",
      "Amazon Athena, Amazon Cognito, Amazon EC2",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Step Functions, Amazon DynamoDB, and Amazon SNS are serverless services that provide workflow orchestration, database, and messaging capabilities without requiring server management. The other options include non-serverless services. More info: https://aws.amazon.com/serverless/",
  },
  {
    id: uuidv5("aws-question-717", uuidv5.URL),
    text: "Under the shared responsibility model, which of the following is a shared control between a customer and AWS?",
    options: [
      "Physical controls",
      "Patch management",
      "Zone security",
      "Data center auditing",
    ],
    correctAnswers: [1],
    explanation:
      "Patch management is a shared control: AWS patches its infrastructure, while customers are responsible for patching their own OS and applications. Physical controls and data center auditing are AWS's responsibility, and zone security is not a defined shared control. More info: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-718", uuidv5.URL),
    text: "What technology enables compute capacity to adjust as loads change?",
    options: [
      "Load balancing",
      "Automatic failover",
      "Round robin",
      "Auto Scaling",
    ],
    correctAnswers: [3],
    explanation:
      "Auto Scaling automatically adjusts compute resources based on demand, ensuring optimal performance and cost efficiency. Load balancing distributes traffic, failover is for redundancy, and round robin is a routing method. More info: https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html",
  },
  {
    id: uuidv5("aws-question-719", uuidv5.URL),
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
      "Amazon Route 53 and Amazon CloudFront are global services, meaning they are not restricted to specific AWS regions. EC2, S3, and DynamoDB are regional services. More info: https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html",
  },
  {
    id: uuidv5("aws-question-720", uuidv5.URL),
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
      "Edge locations, used by CloudFront, cache content closer to users and reduce the load on origin servers by serving cached responses. They do not host applications, run NoSQL databases, or send notifications. More info: https://aws.amazon.com/cloudfront/features/",
  },
  {
    id: uuidv5("aws-question-721", uuidv5.URL),
    text: "Which AWS service would you use to obtain compliance reports and certificates?",
    options: [
      "AWS Artifact",
      "AWS Lambda",
      "Amazon Inspector",
      "AWS Certificate Manager",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Artifact is the central resource for compliance-related information, providing access to AWS' security and compliance reports and agreements. Lambda (B) is for serverless compute, Inspector (C) is for security assessments, and Certificate Manager (D) manages SSL/TLS certificates. More info: https://aws.amazon.com/artifact/",
  },
  {
    id: uuidv5("aws-question-722", uuidv5.URL),
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
      "Customers are responsible for securing their data and training their users on security best practices. AWS manages the infrastructure, including hardware disposal and physical security of data centers. More info: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-723", uuidv5.URL),
    text: "Which AWS service can be used to manually launch instances based on resource requirements?",
    options: ["Amazon EBS", "Amazon S3", "Amazon EC2", "Amazon ECS"],
    correctAnswers: [2],
    explanation:
      "Amazon EC2 allows users to manually launch instances with customizable compute, storage, and networking options. EBS (A) is block storage, S3 (B) is object storage, and ECS (D) is for container orchestration. More info: https://aws.amazon.com/ec2/",
  },
  {
    id: uuidv5("aws-question-724", uuidv5.URL),
    text: "A company is migrating an application that is running non-interruptible workloads for a three-year time frame. Which pricing construct would provide the MOST cost-effective solution?",
    options: [
      "Amazon EC2 Spot Instances",
      "Amazon EC2 Dedicated Instances",
      "Amazon EC2 On-Demand Instances",
      "Amazon EC2 Reserved Instances",
    ],
    correctAnswers: [3],
    explanation:
      "Reserved Instances offer significant cost savings for long-term, predictable workloads compared to On-Demand and Dedicated Instances. Spot Instances are not suitable for non-interruptible workloads. More info: https://aws.amazon.com/ec2/pricing/reserved-instances/",
  },
  {
    id: uuidv5("aws-question-725", uuidv5.URL),
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
      "AWS helps reduce both TCO and opex by eliminating upfront infrastructure investments and providing a pay-as-you-go model. Capex is reduced rather than increased, and AWS does not directly offer financial credit lines. More info: https://aws.amazon.com/economics/",
  },
  {
    id: uuidv5("aws-question-726", uuidv5.URL),
    text: "Which of the following is entirely the responsibility of AWS, according to the AWS shared responsibility model?",
    options: [
      "Patching of the guest operating system",
      "Security awareness and training",
      "Physical and environmental controls",
      "Development of an IAM password policy",
    ],
    correctAnswers: [2],
    explanation:
      "AWS is responsible for securing its infrastructure, including physical and environmental security. Customers are responsible for OS patching, security training, and IAM policies. More info: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-727", uuidv5.URL),
    text: "Which AWS service allows companies to connect an Amazon VPC to an on-premises data center? (Select TWO)",
    options: [
      "AWS VPN",
      "Amazon Redshift",
      "API Gateway",
      "Amazon Direct Connect",
    ],
    correctAnswers: [0, 3],
    explanation:
      "AWS VPN and Direct Connect enable secure connectivity between on-premises data centers and AWS. Redshift (B) is a data warehouse, and API Gateway (C) is for API management. More info: https://docs.aws.amazon.com/vpc/latest/userguide/vpn-connections.html and https://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html",
  },
  {
    id: uuidv5("aws-question-728", uuidv5.URL),
    text: "A company wants to reduce the physical compute footprint that developers use to run code. Which service would meet that need by enabling serverless architectures?",
    options: [
      "Amazon Elastic Compute Cloud (Amazon EC2)",
      "AWS Lambda",
      "Amazon DynamoDB",
      "AWS CodeCommit",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Lambda allows developers to run code without provisioning or managing servers, reducing physical compute requirements. EC2 (A) requires server management, DynamoDB (C) is a database, and CodeCommit (D) is for source control. More info: https://aws.amazon.com/lambda/",
  },
  {
    id: uuidv5("aws-question-729", uuidv5.URL),
    text: "Which AWS service provides alerts when an AWS event may impact a company's AWS resources?",
    options: [
      "AWS Personal Health Dashboard",
      "AWS Service Health Dashboard",
      "AWS Trusted Advisor",
      "AWS Infrastructure Event Management",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Personal Health Dashboard provides personalized alerts about events that might impact a company's AWS resources. Service Health Dashboard (B) is general, Trusted Advisor (C) is for best practices, and Infrastructure Event Management (D) is for planned events. More info: https://aws.amazon.com/premiumsupport/phd/",
  },
  {
    id: uuidv5("aws-question-730", uuidv5.URL),
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
      "AWS Trusted Advisor provides recommendations in five categories, including Performance and Fault Tolerance. Instance Usage and Storage Capacity are not explicit categories. More info: https://aws.amazon.com/premiumsupport/technology/trusted-advisor/",
  },
  {
    id: uuidv5("aws-question-731", uuidv5.URL),
    text: "Which of the following services falls under the responsibility of the customer to maintain operating system configuration, security patching, and networking?",
    options: ["Amazon RDS", "Amazon EC2", "Amazon ElastiCache", "AWS Fargate"],
    correctAnswers: [1],
    explanation:
      "The customer is responsible for managing, supporting, patching, and controlling the guest operating system and networking for Amazon EC2. RDS, ElastiCache, and Fargate are managed services where AWS handles these tasks. More info: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-732", uuidv5.URL),
    text: "A company will be moving from an on-premises data center to the AWS Cloud. What would be one financial difference after the move?",
    options: [
      "Moving from variable operational expense (opex) to upfront capital expense (capex).",
      "Moving from upfront capital expense (capex) to variable capital expense (capex).",
      "Moving from upfront capital expense (capex) to variable operational expense (opex).",
      "Elimination of upfront capital expense (capex) and elimination of variable operational expense (opex).",
    ],
    correctAnswers: [2],
    explanation:
      "AWS follows a pay-as-you-go model, which moves businesses from a capital expense (CapEx) model to an operational expense (OpEx) model, allowing for variable costs instead of large upfront investments. More info: https://aws.amazon.com/economics/",
  },
  {
    id: uuidv5("aws-question-733", uuidv5.URL),
    text: "How should a customer forecast the future costs for running a new web application?",
    options: [
      "Amazon Aurora Backtrack",
      "Amazon CloudWatch Billing Alarms",
      "AWS Simple Monthly Calculator",
      "AWS Cost and Usage report",
    ],
    correctAnswers: [2],
    explanation:
      "The AWS Simple Monthly Calculator helps customers estimate their future costs by allowing them to model different configurations and usage scenarios. Aurora Backtrack (A) is for database recovery, Billing Alarms (B) monitor spending, and Cost and Usage report (D) provides historical data. More info: https://aws.amazon.com/calculator/",
  },
  {
    id: uuidv5("aws-question-734", uuidv5.URL),
    text: "Which is the MINIMUM AWS Support plan that provides technical support through phone calls?",
    options: ["Enterprise", "Business", "Developer", "Basic"],
    correctAnswers: [1],
    explanation:
      "The Business support plan is the minimum AWS Support plan that provides technical support via phone calls. Developer and Basic plans do not offer phone support. More info: https://aws.amazon.com/premiumsupport/plans/",
  },
  {
    id: uuidv5("aws-question-735", uuidv5.URL),
    text: "According to the AWS shared responsibility model, what is the sole responsibility of AWS?",
    options: [
      "Application security",
      "Edge location management",
      "Patch management",
      "Client-side data",
    ],
    correctAnswers: [1],
    explanation:
      "Client-side data and application security are the customer's responsibility. Patch management is a shared responsibility. AWS is solely responsible for managing edge locations. More info: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-736", uuidv5.URL),
    text: "Which AWS IAM feature is used to associate a set of permissions with multiple users?",
    options: [
      "Multi-factor authentication",
      "Groups",
      "Password policies",
      "Access keys",
    ],
    correctAnswers: [1],
    explanation:
      "IAM Groups allow you to assign permissions to multiple users at once, making permission management more efficient. MFA (A) is for authentication, password policies (C) set password rules, and access keys (D) are for programmatic access. More info: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_groups.html",
  },
  {
    id: uuidv5("aws-question-737", uuidv5.URL),
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
      "Elasticity allows AWS resources to scale up or down as needed, and agility enables businesses to innovate faster and adapt quickly to market demands. Unlimited uptime (A) is not guaranteed, colocation (D) is not a cloud benefit, and capital expenses (E) are reduced, not a benefit. More info: https://aws.amazon.com/benefits/",
  },
  {
    id: uuidv5("aws-question-738", uuidv5.URL),
    text: "Which of the following can a customer use to enable single sign-on (SSO) to the AWS Console?",
    options: [
      "Amazon Connect",
      "AWS Directory Service",
      "Amazon Pinpoint",
      "Amazon Rekognition",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Directory Service provides integration with existing directories, enabling single sign-on (SSO) to the AWS Console. The other services do not provide SSO capabilities. More info: https://aws.amazon.com/directoryservice/",
  },
  {
    id: uuidv5("aws-question-739", uuidv5.URL),
    text: "What are the multiple, isolated locations within an AWS Region that are connected by low-latency networks called?",
    options: [
      "AWS Direct Connects",
      "Amazon VPCs",
      "Edge locations",
      "Availability Zones",
    ],
    correctAnswers: [3],
    explanation:
      "Availability Zones are the isolated locations within an AWS Region, connected by low-latency links to ensure high availability and fault tolerance. More info: https://aws.amazon.com/about-aws/global-infrastructure/regions_az/",
  },
  {
    id: uuidv5("aws-question-740", uuidv5.URL),
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
      "AWS Compliance program helps customers by ensuring workloads comply with compliance frameworks and maintaining compliance documentation. The other options are not direct benefits of the AWS Compliance program. More info: https://aws.amazon.com/compliance/programs/",
  },
  {
    id: uuidv5("aws-question-741", uuidv5.URL),
    text: "Which of the following services provides on-demand access to AWS compliance reports?",
    options: ["AWS IAM", "AWS Artifact", "Amazon GuardDuty", "AWS KMS"],
    correctAnswers: [1],
    explanation:
      "AWS Artifact is a central resource for compliance-related information. It provides on-demand access to AWS' security and compliance reports, including SOC reports, PCI reports, and various certifications. The other options do not provide compliance reports. More info: https://aws.amazon.com/artifact/",
  },
  {
    id: uuidv5("aws-question-742", uuidv5.URL),
    text: "As part of the AWS shared responsibility model, which of the following operational controls do users fully inherit from AWS?",
    options: [
      "Security management of data center",
      "Patch management",
      "Configuration management",
      "User and access management",
    ],
    correctAnswers: [0],
    explanation:
      "AWS is responsible for the security of the cloud, including data center security. Customers are responsible for security in the cloud, which includes user and access management, configuration management, and patching within their environment. More info: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-743", uuidv5.URL),
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
      "When moving from on-premises to AWS, costs such as physical servers and storage hardware are eliminated, as AWS provides these resources. Software development and project management remain separate costs. More info: https://aws.amazon.com/tco-calculator/",
  },
  {
    id: uuidv5("aws-question-744", uuidv5.URL),
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
      "Customers are responsible for securing their applications, which includes managing VPC network ACLs and encrypting data. AWS is responsible for maintaining hardware and infrastructure. More info: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-745", uuidv5.URL),
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
      "Elasticity refers to the ability to scale resources up or down based on demand. Scaling EC2 instances and resizing RDS instances fit this concept, whereas compliance and governance do not. More info: https://docs.aws.amazon.com/wellarchitected/latest/framework/performance-efficiency-pillar.html",
  },
  {
    id: uuidv5("aws-question-746", uuidv5.URL),
    text: "When is it beneficial for a company to use a Spot Instance?",
    options: [
      "When there is flexibility in when an application needs to run.",
      "When there are mission-critical workloads.",
      "When dedicated capacity is needed.",
      "When an instance should not be stopped.",
    ],
    correctAnswers: [0],
    explanation:
      "Spot Instances are ideal for workloads with flexible start and stop times since they can be interrupted when AWS needs capacity. They are not suitable for mission-critical workloads. More info: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-instances.html",
  },
  {
    id: uuidv5("aws-question-747", uuidv5.URL),
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
      "TCO analysis includes costs such as power consumption and labor for hardware replacement, which are eliminated when moving to AWS. Other factors are either unrelated or dependent on application choices. More info: https://aws.amazon.com/tco-calculator/",
  },
  {
    id: uuidv5("aws-question-748", uuidv5.URL),
    text: "How does AWS charge for AWS Lambda?",
    options: [
      "Users bid on the maximum price they are willing to pay per hour.",
      "Users choose a 1-, 3- or 5-year upfront payment term.",
      "Users pay for the required permanent storage on a file system or in a database.",
      "Users pay based on the number of requests and consumed compute resources.",
    ],
    correctAnswers: [3],
    explanation:
      "AWS Lambda pricing is based on the number of requests and the compute time used. There are no upfront commitments or bidding involved. More info: https://aws.amazon.com/lambda/pricing/",
  },
  {
    id: uuidv5("aws-question-749", uuidv5.URL),
    text: "What function do security groups serve related to Amazon EC2 instance security?",
    options: [
      "Act as a virtual firewall for the Amazon EC2 instance.",
      "Secure AWS user accounts with AWS identity and Access Management (IAM) policies.",
      "Provide DDoS protection with AWS Shield.",
      "Use Amazon CloudFront to protect the Amazon EC2 instance.",
    ],
    correctAnswers: [0],
    explanation:
      "Security groups act as a virtual firewall, controlling inbound and outbound traffic for EC2 instances. Other services like IAM, AWS Shield, and CloudFront serve different security purposes. More info: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html",
  },
  {
    id: uuidv5("aws-question-750", uuidv5.URL),
    text: "Which disaster recovery scenario offers the lowest probability of downtime?",
    options: [
      "Backup and restore",
      "Pilot light",
      "Warm standby",
      "Multi-site active-active",
    ],
    correctAnswers: [3],
    explanation:
      "A multi-site active-active setup ensures redundancy and minimizes downtime by running workloads across multiple locations. Other methods have varying degrees of recovery time. More info: https://aws.amazon.com/architecture/disaster-recovery/",
  },
];

export const exam16: Question[] = [
  {
    id: uuidv5("aws-question-751", uuidv5.URL),
    text: "What will help a company perform a cost benefit analysis of migrating to the AWS Cloud?",
    options: [
      "Cost Explorer",
      "AWS Total Cost of Ownership (TCO) Calculator",
      "AWS Simple Monthly Calculator",
      "AWS Trusted Advisor",
    ],
    correctAnswers: [1],
    explanation:
      "AWS TCO calculators allow you to estimate the cost savings when using AWS and provide a detailed set of reports for executive presentations. The calculators also allow you to modify assumptions to best meet your business needs. Cost Explorer (A) is for cost analysis, Simple Monthly Calculator (C) is for monthly estimates, and Trusted Advisor (D) is for best practices. More info: https://aws.amazon.com/tco-calculator/",
  },
  {
    id: uuidv5("aws-question-752", uuidv5.URL),
    text: "Which of the following provides the ability to share the cost benefits of Reserved Instances across AWS accounts?",
    options: [
      "AWS Cost Explorer between AWS accounts",
      "Linked accounts and consolidated billing",
      "Amazon EC2 Reserved Instance Utilization Report",
      "Amazon EC2 Instance Usage Report between AWS accounts",
    ],
    correctAnswers: [1],
    explanation:
      "Reserved Instance discounts apply to accounts in an organization's consolidated billing family if Reserved Instance sharing is enabled. By default, Reserved Instance sharing is on. The other options do not provide this feature. More info: https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html",
  },
  {
    id: uuidv5("aws-question-753", uuidv5.URL),
    text: "A company has multiple AWS accounts and wants to simplify and consolidate its billing process. Which AWS service will achieve this?",
    options: [
      "AWS Cost and Usage Reports",
      "AWS Organizations",
      "AWS Cost Explorer",
      "AWS Budgets",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Organizations provides consolidated billing, allowing companies to manage multiple AWS accounts under a single payment method. The other services do not consolidate billing. More info: https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html",
  },
  {
    id: uuidv5("aws-question-754", uuidv5.URL),
    text: "A company is designing an application hosted in a single AWS Region serving end-users spread across the world. The company wants to provide the end-users low latency access to the application data. Which of the following services will help fulfill this requirement?",
    options: [
      "Amazon CloudFront",
      "AWS Direct Connect",
      "Amazon Route 53 global DNS",
      "Amazon S3 transfer acceleration",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon CloudFront is a content delivery network (CDN) that distributes data globally, providing low-latency access to users. Direct Connect (B) is for private networking, Route 53 (C) is DNS, and S3 transfer acceleration (D) is for faster uploads to S3. More info: https://aws.amazon.com/cloudfront/",
  },
  {
    id: uuidv5("aws-question-755", uuidv5.URL),
    text: "Which of the following deployment models enables customers to fully trade their capital IT expenses for operational expenses?",
    options: ["On-premises", "Hybrid", "Cloud", "Platform as a service"],
    correctAnswers: [2],
    explanation:
      "The cloud model allows businesses to eliminate upfront capital expenses and switch to a pay-as-you-go model. On-premises and hybrid models still require capital investment, and PaaS is a service model, not a deployment model. More info: https://aws.amazon.com/what-is-cloud-computing/",
  },
  {
    id: uuidv5("aws-question-756", uuidv5.URL),
    text: "How is asset management on AWS easier than asset management in a physical data center?",
    options: [
      "AWS provides a Configuration Management Database that users can maintain.",
      "AWS performs infrastructure discovery scans on the customer's behalf.",
      "Amazon EC2 automatically generates an asset report and places it in the customer's specified Amazon S3 bucket.",
      "Users can gather asset metadata reliably with a few API calls.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS centrally manages assets through an inventory system that tracks ownership, status, and maintenance. The other options do not reflect AWS's approach to asset management. More info: https://docs.aws.amazon.com/config/latest/developerguide/resource-inventory.html",
  },
  {
    id: uuidv5("aws-question-757", uuidv5.URL),
    text: "What feature of Amazon RDS helps to create globally redundant databases?",
    options: [
      "Snapshots",
      "Automatic patching and updating",
      "Cross-Region read replicas",
      "Provisioned IOPS",
    ],
    correctAnswers: [2],
    explanation:
      "Cross-Region read replicas allow RDS databases to be replicated across different AWS regions for redundancy and availability. Snapshots (A) are for backups, patching (B) is for maintenance, and Provisioned IOPS (D) is for performance. More info: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReadRepl.html",
  },
  {
    id: uuidv5("aws-question-758", uuidv5.URL),
    text: "Using AWS Identity and Access Management (IAM) to grant access only to the resources needed to perform a task is a concept known as:",
    options: [
      "Restricted access",
      "As-needed access",
      "Least privilege access",
      "Token access",
    ],
    correctAnswers: [2],
    explanation:
      "The principle of least privilege ensures that users and roles are granted only the minimum permissions necessary to perform their tasks. The other options are not standard IAM concepts. More info: https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html",
  },
  {
    id: uuidv5("aws-question-759", uuidv5.URL),
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
      "Creating separate AWS accounts for each department and tagging resources appropriately allows businesses to track costs effectively. MFA (A) and purchase orders (E) do not help with cost allocation, and Reserved Instances (C) are for cost savings, not tracking. More info: https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html",
  },
  {
    id: uuidv5("aws-question-760", uuidv5.URL),
    text: "Under the AWS shared responsibility model, customer responsibilities include which one of the following?",
    options: [
      "Securing the hardware, software, facilities, and networks that run all products and services.",
      "Providing certificates, reports, and other documentation directly to AWS customers under NDA.",
      "Configuring the operating system, network, and firewall.",
      "Obtaining industry certifications and independent third-party attestations.",
    ],
    correctAnswers: [2],
    explanation:
      "Customers are responsible for configuring their operating systems, networks, and firewalls in accordance with AWS security best practices. AWS is responsible for the underlying infrastructure and certifications. More info: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-761", uuidv5.URL),
    text: "Which managed AWS service provides real-time guidance on AWS security best practices?",
    options: [
      "AWS X-Ray",
      "AWS Trusted Advisor",
      "Amazon CloudWatch",
      "AWS Systems Manager",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Trusted Advisor provides real-time guidance to help optimize resources, improve security, and reduce costs. The other options do not provide security best practice recommendations in real time. More info: https://aws.amazon.com/premiumsupport/technology/trusted-advisor/",
  },
  {
    id: uuidv5("aws-question-762", uuidv5.URL),
    text: "Which feature adds elasticity to Amazon EC2 instances to handle the changing demand for workloads?",
    options: [
      "Resource groups",
      "Lifecycle policies",
      "Application Load Balancer",
      "Amazon EC2 Auto Scaling",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon EC2 Auto Scaling dynamically adjusts the number of EC2 instances based on demand, ensuring optimal performance and cost-efficiency. The other options do not directly manage elasticity. More info: https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html",
  },
  {
    id: uuidv5("aws-question-763", uuidv5.URL),
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
      "Customers are responsible for securing their data (encryption management) and configuring firewalls (firewall management). AWS manages the underlying hardware and facilities, while visualization management is not a relevant security responsibility. More info: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-764", uuidv5.URL),
    text: "Which AWS hybrid storage service enables on-premises applications to seamlessly use AWS Cloud storage through standard file-storage protocols?",
    options: [
      "AWS Direct Connect",
      "AWS Snowball",
      "AWS Storage Gateway",
      "AWS Snowball Edge",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Storage Gateway integrates on-premises environments with AWS Cloud storage using standard file-storage protocols. Other options focus on network connectivity (Direct Connect) or physical data transfer (Snowball, Snowball Edge). More info: https://aws.amazon.com/storagegateway/",
  },
  {
    id: uuidv5("aws-question-765", uuidv5.URL),
    text: "What is a responsibility of AWS in the shared responsibility model?",
    options: [
      "Updating the network ACLs to block traffic to vulnerable ports.",
      "Patching operating systems running on Amazon EC2 instances.",
      "Updating the firmware on the underlying EC2 hosts.",
      "Updating the security group rules to block traffic to the vulnerable ports.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS is responsible for maintaining the underlying infrastructure, including updating firmware on EC2 hosts. Customers are responsible for managing security groups, network ACLs, and OS patching. More info: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-766", uuidv5.URL),
    text: "Which architectural principle is used when deploying an Amazon Relational Database Service (Amazon RDS) instance in Multiple Availability Zone mode?",
    options: [
      "Implement loose coupling.",
      "Design for failure.",
      "Automate everything that can be automated.",
      "Use services, not servers.",
    ],
    correctAnswers: [1],
    explanation:
      "Multi-AZ deployments ensure high availability by automatically failing over to a standby instance, embodying the 'Design for failure' principle. More info: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html",
  },
  {
    id: uuidv5("aws-question-767", uuidv5.URL),
    text: "What does it mean to grant least privilege to AWS IAM users?",
    options: [
      "It is granting permissions to a single user only.",
      "It is granting permissions using AWS IAM policies only.",
      "It is granting AdministratorAccess policy permissions to trustworthy users.",
      "It is granting only the permissions required to perform a given task.",
    ],
    correctAnswers: [3],
    explanation:
      "The principle of least privilege ensures users receive only the permissions necessary for their tasks, minimizing security risks. More info: https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html",
  },
  {
    id: uuidv5("aws-question-768", uuidv5.URL),
    text: "What is a benefit of loose coupling as a principle of cloud architecture design?",
    options: [
      "It facilitates low-latency request handling.",
      "It allows applications to have dependent workflows.",
      "It prevents cascading failures between different components.",
      "It allows companies to focus on their physical data center operations.",
    ],
    correctAnswers: [2],
    explanation:
      "Loose coupling ensures components are independent, preventing failures in one from affecting others, improving system resilience. More info: https://docs.aws.amazon.com/wellarchitected/latest/framework/general-design-principles.html",
  },
  {
    id: uuidv5("aws-question-769", uuidv5.URL),
    text: "Which service will facilitate private hybrid connectivity?",
    options: [
      "Amazon VPC NAT Gateway",
      "AWS Direct Connect",
      "Amazon Simple Storage Service (Amazon S3) Transfer Acceleration",
      "AWS Web Application Firewall (AWS WAF)",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Direct Connect provides private, low-latency connections between on-premises environments and AWS, ensuring secure hybrid connectivity. The other options do not provide private hybrid connectivity. More info: https://aws.amazon.com/directconnect/",
  },
  {
    id: uuidv5("aws-question-770", uuidv5.URL),
    text: "A company's web application currently has tight dependencies on underlying components, so when one component fails the entire web application fails. Applying which AWS Cloud design principle will address the current design issue?",
    options: [
      "Implementing elasticity, enabling the application to scale up or scale down as demand changes.",
      "Enabling several EC2 instances to run in parallel to achieve better performance.",
      "Focusing on decoupling components by isolating them and ensuring individual components can function when other components fail.",
      "Doubling EC2 computing resources to increase system fault tolerance.",
    ],
    correctAnswers: [2],
    explanation:
      "Decoupling components ensures that failures in one part of the system do not cascade to others, improving system reliability and availability. More info: https://docs.aws.amazon.com/wellarchitected/latest/framework/general-design-principles.html",
  },
  {
    id: uuidv5("aws-question-771", uuidv5.URL),
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
      "Enabling Multi-Factor Authentication (MFA) adds an extra layer of security by requiring a second factor (such as a hardware device or an app-generated code) in addition to a password. Configuring a strong password policy ensures users create complex and secure passwords, reducing the risk of account compromise. AWS Certificate Manager is for SSL/TLS certificates, Cognito is for app identity, and Organizations is for account management. More info: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa.html and https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_passwords_account-policy.html",
  },
  {
    id: uuidv5("aws-question-772", uuidv5.URL),
    text: "What AWS service would be used to centrally manage AWS access across multiple accounts?",
    options: [
      "AWS Service Catalog",
      "AWS Config",
      "AWS Trusted Advisor",
      "AWS Organizations",
    ],
    correctAnswers: [3],
    explanation:
      "AWS Organizations allows users to centrally manage multiple AWS accounts, apply policies, and enable consolidated billing. The other services do not provide centralized access management. More info: https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html",
  },
  {
    id: uuidv5("aws-question-773", uuidv5.URL),
    text: "Which AWS service can a customer use to set up an alert notification when the account is approaching a particular dollar amount?",
    options: [
      "AWS Cost and Usage reports",
      "AWS Budgets",
      "AWS Cost Explorer",
      "AWS Trusted Advisor",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Budgets allows users to set custom cost and usage budgets, sending alerts when thresholds are exceeded. Cost and Usage Reports (A) provide detailed billing data, Cost Explorer (C) is for cost analysis, and Trusted Advisor (D) is for best practices. More info: https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html",
  },
  {
    id: uuidv5("aws-question-774", uuidv5.URL),
    text: "What can users access from AWS Artifact?",
    options: [
      "AWS security and compliance documents",
      "A download of configuration management details for all AWS resources",
      "Training materials for AWS services",
      "A security assessment of the applications deployed in the AWS Cloud",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Artifact provides security and compliance documents such as ISO certifications and SOC reports. It does not provide configuration details, training materials, or security assessments for deployed applications. More info: https://aws.amazon.com/artifact/",
  },
  {
    id: uuidv5("aws-question-775", uuidv5.URL),
    text: "Which is the MINIMUM AWS Support plan that provides designated Technical Account Managers?",
    options: ["Enterprise", "Business", "Developer", "Basic"],
    correctAnswers: [0],
    explanation:
      "The Enterprise Support plan is the only plan that includes a designated Technical Account Manager (TAM). Business, Developer, and Basic plans do not provide this level of support. More info: https://aws.amazon.com/premiumsupport/plans/",
  },
  {
    id: uuidv5("aws-question-776", uuidv5.URL),
    text: "Which of the following is an AWS Well-Architected Framework design principle related to reliability?",
    options: [
      "Deployment to a single Availability Zone",
      "Ability to recover from failure",
      "Design for cost optimization",
      "Perform operations as code",
    ],
    correctAnswers: [1],
    explanation:
      "Reliability in AWS architecture includes the ability to recover from failure. Using multiple Availability Zones, backups, and automated failover mechanisms contribute to this principle. The other options either do not relate directly to reliability or are counterproductive (such as deploying to a single Availability Zone). More info: https://docs.aws.amazon.com/wellarchitected/latest/framework/reliability-pillar.html",
  },
  {
    id: uuidv5("aws-question-777", uuidv5.URL),
    text: "Which type of AWS storage is ephemeral and is deleted when an instance is stopped or terminated?",
    options: [
      "Amazon EBS",
      "Amazon EC2 instance store",
      "Amazon EFS",
      "Amazon S3",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon EC2 instance store is temporary storage that is lost when an instance is stopped or terminated. Amazon EBS persists across stops, Amazon EFS is a managed file system, and Amazon S3 is for object storage with durability across multiple locations. More info: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html",
  },
  {
    id: uuidv5("aws-question-778", uuidv5.URL),
    text: "What is an advantage of using the AWS Cloud over a traditional on-premises solution?",
    options: [
      "Users do not have to guess about future capacity needs.",
      "Users can utilize existing hardware contracts for purchases.",
      "Users can fix costs no matter what their traffic is.",
      "Users can avoid audits by using reports from AWS.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS offers scalability, allowing users to provision resources on demand rather than estimating future capacity. The other options are incorrect because AWS does not require existing hardware, costs can fluctuate, and audits are still necessary. More info: https://aws.amazon.com/benefits/",
  },
  {
    id: uuidv5("aws-question-779", uuidv5.URL),
    text: "Which of the following is an AWS-managed compute service?",
    options: ["Amazon SWF", "Amazon EC2", "AWS Lambda", "Amazon Aurora"],
    correctAnswers: [2],
    explanation:
      "AWS Lambda is a fully managed compute service that runs code in response to events without provisioning or managing servers. EC2 requires user management, Amazon SWF is for workflow automation, and Amazon Aurora is a managed database service. More info: https://aws.amazon.com/lambda/",
  },
  {
    id: uuidv5("aws-question-780", uuidv5.URL),
    text: "Which of the following is an important architectural principle when designing cloud applications?",
    options: [
      "Store data and backups in the same region.",
      "Design tightly coupled system components.",
      "Avoid multi-threading.",
      "Design for failure",
    ],
    correctAnswers: [3],
    explanation:
      "Cloud applications should be designed for failure by implementing redundancy, failover mechanisms, and distributed architectures. Storing backups in the same region increases risk, tightly coupled components reduce flexibility, and avoiding multi-threading limits scalability. More info: https://docs.aws.amazon.com/wellarchitected/latest/framework/reliability-pillar.html",
  },
  {
    id: uuidv5("aws-question-781", uuidv5.URL),
    text: "Which mechanism allows developers to access AWS services from application code?",
    options: [
      "AWS Software Development Kit",
      "AWS Management Console",
      "AWS CodePipeline",
      "AWS Config",
    ],
    correctAnswers: [0],
    explanation:
      "The AWS Software Development Kit (SDK) allows developers to access AWS services from application code by providing APIs, libraries, and tools. The AWS Management Console is a web interface, AWS CodePipeline is a CI/CD service, and AWS Config is used for compliance and resource tracking, none of which are meant for direct application integration. More info: https://aws.amazon.com/tools/",
  },
  {
    id: uuidv5("aws-question-782", uuidv5.URL),
    text: "Which Amazon EC2 pricing model is the MOST cost efficient for an uninterruptible workload that runs once a year for 24 hours?",
    options: [
      "On-Demand Instances",
      "Reserved Instances",
      "Spot Instances",
      "Dedicated Instances",
    ],
    correctAnswers: [0],
    explanation:
      "On-Demand Instances allow users to pay for compute capacity without long-term commitments, making them ideal for short-term, unpredictable workloads. Reserved Instances require long-term commitments, Spot Instances can be interrupted, and Dedicated Instances are designed for specific compliance or regulatory needs, making them less cost-efficient for this use case. More info: https://aws.amazon.com/ec2/pricing/on-demand/",
  },
  {
    id: uuidv5("aws-question-783", uuidv5.URL),
    text: "Which Amazon Virtual Private Cloud (Amazon VPC) feature enables users to connect two VPCs together?",
    options: [
      "Amazon VPC endpoints",
      "Amazon Elastic Compute Cloud (Amazon EC2) ClassicLink",
      "Amazon VPC peering",
      "AWS Direct Connect",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon VPC Peering allows private network communication between two VPCs, enabling them to act as a single network. VPC endpoints provide secure connections to AWS services, ClassicLink connects EC2-Classic instances to VPCs (but not between VPCs), and AWS Direct Connect establishes a dedicated network connection between on-premises and AWS, not between VPCs. More info: https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html",
  },
  {
    id: uuidv5("aws-question-784", uuidv5.URL),
    text: "Which service's PRIMARY purpose is software version control?",
    options: [
      "Amazon CodeStar",
      "AWS Command Line Interface (AWS CLI)",
      "Amazon Cognito",
      "AWS CodeCommit",
    ],
    correctAnswers: [3],
    explanation:
      "AWS CodeCommit is a managed source control service that provides secure, private Git repositories. CodeStar is a development platform, AWS CLI is a command-line tool for managing AWS resources, and Amazon Cognito handles user authentication and authorization, making them unsuitable for version control. More info: https://aws.amazon.com/codecommit/",
  },
  {
    id: uuidv5("aws-question-785", uuidv5.URL),
    text: "A company is considering migrating its applications to AWS. The company wants to compare the cost of running the workload on-premises to running the equivalent workload on the AWS platform. Which tool can be used to perform this comparison?",
    options: [
      "AWS Simple Monthly Calculator",
      "AWS Total Cost of Ownership (TCO) Calculator",
      "AWS Billing and Cost Management console.",
      "Cost Explorer",
    ],
    correctAnswers: [1],
    explanation:
      "TCO calculator compare the cost of running your applications in an on-premises or colocation environment to AWS. More info: https://awstcocalculator.com",
  },
  {
    id: uuidv5("aws-question-786", uuidv5.URL),
    text: "Which tool can be used to compare the cost of running workloads on-premises vs AWS?",
    options: [
      "AWS Simple Monthly Calculator",
      "AWS Total Cost of Ownership (TCO) Calculator",
      "AWS Billing and Cost Management console",
      "Cost Explorer",
    ],
    correctAnswers: [1],
    explanation:
      "The AWS Total Cost of Ownership (TCO) Calculator helps estimate the cost savings of moving workloads to AWS. The Simple Monthly Calculator estimates AWS costs but does not compare with on-premises costs, Billing and Cost Management tracks expenses, and Cost Explorer helps analyze usage and cost trends. More info: https://aws.amazon.com/tco-calculator/",
  },
  {
    id: uuidv5("aws-question-787", uuidv5.URL),
    text: "Which AWS service provides a secure, fast, and cost-effective way to migrate or transport exabyte-scale datasets into AWS?",
    options: [
      "AWS Batch",
      "AWS Snowball",
      "AWS Migration Hub",
      "AWS Snowmobile",
    ],
    correctAnswers: [3],
    explanation:
      "AWS Snowmobile is designed for exabyte-scale data transfer using a secure, ruggedized container transported by truck. AWS Snowball is for petabyte-scale data, AWS Batch is for batch processing, and AWS Migration Hub helps track migration progress but does not handle direct data transfer. More info: https://aws.amazon.com/snowmobile/",
  },
  {
    id: uuidv5("aws-question-788", uuidv5.URL),
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
      "AWS follows a pay-as-you-go model, where users only pay for the resources they consume. Pricing is also variable, meaning costs fluctuate based on usage. Fixed-term pricing applies to traditional data centers, colocation is a different hosting model, and planned pricing does not describe AWS’s flexible pricing approach. More info: https://aws.amazon.com/pricing/",
  },
  {
    id: uuidv5("aws-question-789", uuidv5.URL),
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
      "Elastic Load Balancing (ELB) supports Classic Load Balancers and Application Load Balancers, along with Network Load Balancers. The other options refer to third-party solutions or unrelated load-balancing features. More info: https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html",
  },
  {
    id: uuidv5("aws-question-790", uuidv5.URL),
    text: "Why should a company choose AWS instead of a traditional data center?",
    options: [
      "AWS provides users with full control over the underlying resources.",
      "AWS does not require long-term contracts and provides a pay-as-you-go model.",
      "AWS offers edge locations in every country, supporting global reach.",
      "AWS has no limits on the number of resources that can be created.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS’s pay-as-you-go model eliminates long-term commitments, making it more flexible than traditional data centers. While AWS offers resource scalability, limits still exist, and full control over underlying resources applies more to on-premises solutions. Edge locations do not exist in every country. More info: https://aws.amazon.com/benefits/",
  },
  {
    id: uuidv5("aws-question-791", uuidv5.URL),
    text: "Which solution provides the FASTEST application response times to frequently accessed data to users in multiple AWS Regions?",
    options: [
      "AWS CloudTrail across multiple Availability Zones",
      "Amazon CloudFront to edge locations",
      "AWS CloudFormation in multiple regions",
      "A virtual private gateway over AWS Direct Connect",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon CloudFront speeds up content delivery by leveraging its global network of edge locations. It caches content closer to users, reducing latency and improving response times. The other options do not serve the same purpose of accelerating content delivery. More info: https://aws.amazon.com/cloudfront/",
  },
  {
    id: uuidv5("aws-question-792", uuidv5.URL),
    text: "Which AWS service provides a self-service portal for on-demand access to AWS compliance reports?",
    options: [
      "AWS Config",
      "AWS Certificate Manager",
      "Amazon Inspector",
      "AWS Artifact",
    ],
    correctAnswers: [3],
    explanation:
      "AWS Artifact provides on-demand access to AWS compliance reports and agreements, such as SOC reports and PCI certifications. The other services focus on security monitoring, configuration management, or certificate management, rather than compliance documentation. More info: https://aws.amazon.com/artifact/",
  },
  {
    id: uuidv5("aws-question-793", uuidv5.URL),
    text: "Which of the following AWS services can be used to run a self-managed database?",
    options: [
      "Amazon Route 53",
      "AWS X-Ray",
      "AWS Snowmobile",
      "Amazon Elastic Compute Cloud (Amazon EC2)",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon EC2 provides virtual machines where users can install and manage their own databases. The other options do not support running self-managed databases: Route 53 is for DNS, X-Ray is for tracing, and Snowmobile is for large-scale data transfer. More info: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/hosting-applications.html",
  },
  {
    id: uuidv5("aws-question-794", uuidv5.URL),
    text: "What exclusive benefit is provided to users with Enterprise Support?",
    options: [
      "Access to a Technical Project Manager",
      "Access to a Technical Account Manager",
      "Access to a Cloud Support Engineer",
      "Access to a Solutions Architect",
    ],
    correctAnswers: [1],
    explanation:
      "The AWS Enterprise Support plan provides customers with a Technical Account Manager (TAM), which is a dedicated resource to help optimize and manage AWS environments. The other options are either available in lower support tiers or not part of Enterprise Support. More info: https://aws.amazon.com/premiumsupport/plans/",
  },
  {
    id: uuidv5("aws-question-795", uuidv5.URL),
    text: "How can a user protect against AWS service disruptions if a natural disaster affects an entire geographic area?",
    options: [
      "Deploy applications across multiple Availability Zones within an AWS Region.",
      "Use a hybrid cloud computing deployment model within the geographic area.",
      "Deploy applications across multiple AWS Regions.",
      "Store application artifacts using AWS Artifact and replicate them across multiple AWS Regions.",
    ],
    correctAnswers: [2],
    explanation:
      "Deploying applications across multiple AWS Regions provides the highest level of resilience against natural disasters, as entire regions can fail. Availability Zones provide redundancy within a region, but may not protect against region-wide failures. More info: https://aws.amazon.com/about-aws/global-infrastructure/regions_az/",
  },
  {
    id: uuidv5("aws-question-796", uuidv5.URL),
    text: "How does AWS MOST effectively reduce computing costs for a growing start-up company?",
    options: [
      "It provides on-demand resources for peak usage.",
      "It automates the provisioning of individual developer environments.",
      "It automates customer relationship management.",
      "It implements a fixed monthly computing budget.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS allows startups to scale cost-effectively by providing on-demand resources. This means they only pay for what they use, avoiding upfront costs. Other options do not directly address cost reduction. More info: https://aws.amazon.com/benefits/",
  },
  {
    id: uuidv5("aws-question-797", uuidv5.URL),
    text: "A startup is working on a new application that needs to go to market quickly. The application requirements may need to be adjusted in the near future. Which of the following is a characteristic of the AWS Cloud that would meet this specific need?",
    options: ["Elasticity", "Reliability", "Performance", "Agility"],
    correctAnswers: [3],
    explanation:
      "Agility is a core advantage of the AWS Cloud, allowing businesses to iterate quickly, adjust resources, and deploy applications rapidly based on evolving needs. More info: https://aws.amazon.com/benefits/",
  },
  {
    id: uuidv5("aws-question-798", uuidv5.URL),
    text: "Which AWS Support plan provides a full set of AWS Trusted Advisor checks?",
    options: [
      "Business and Developer Support",
      "Business and Basic Support",
      "Enterprise and Developer Support",
      "Enterprise and Business Support",
    ],
    correctAnswers: [3],
    explanation:
      "The AWS Enterprise and Business Support plans provide access to all AWS Trusted Advisor checks. Lower-tier support plans have limited access to these checks. More info: https://aws.amazon.com/premiumsupport/technology/trusted-advisor/",
  },
  {
    id: uuidv5("aws-question-799", uuidv5.URL),
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
      "AWS WAF and Amazon CloudFront help mitigate DDoS attacks. AWS WAF provides firewall protection against threats, while CloudFront helps absorb and distribute large-scale attacks. The other options do not have built-in DDoS mitigation capabilities. More info: https://aws.amazon.com/shield/ddos-protection/",
  },
  {
    id: uuidv5("aws-question-800", uuidv5.URL),
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
      "Key elements of AWS TCO include compute costs (e.g., EC2, Lambda), storage costs (e.g., S3, EBS), and data transfer costs (e.g., inter-region transfer fees). The other options are typically managed by AWS rather than the customer. More info: https://aws.amazon.com/tco-calculator/",
  },
];

const exam17: Question[] = [
  {
    id: uuidv5("aws-question-801", uuidv5.URL),
    text: "What time-savings advantage is offered with the use of Amazon Rekognition?",
    options: [
      "Amazon Rekognition provides automatic watermarking of images.",
      "Amazon Rekognition provides automatic detection of objects appearing in pictures.",
      "Amazon Rekognition provides the ability to resize millions of images automatically.",
      "Amazon Rekognition uses Amazon Mechanical Turk to allow humans to bid on object detection jobs.",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon Rekognition is an image recognition service that detects objects, scenes, and faces; extracts text; recognizes celebrities; and identifies inappropriate content in images. The other options do not reflect the core capabilities of Amazon Rekognition. More info: https://aws.amazon.com/rekognition/",
  },
  {
    id: uuidv5("aws-question-802", uuidv5.URL),
    text: "When comparing AWS with on-premises Total Cost of Ownership (TCO), what costs are included?",
    options: [
      "Data center security",
      "Business analysis",
      "Project management",
      "Operating system administration",
    ],
    correctAnswers: [0],
    explanation:
      "AWS TCO includes data center security costs, as AWS is responsible for securing physical infrastructure. The other costs, such as business analysis and project management, are typically internal business expenses not directly covered by AWS. More info: https://aws.amazon.com/tco-calculator/",
  },
  {
    id: uuidv5("aws-question-803", uuidv5.URL),
    text: "According to the AWS shared responsibility model, what is AWS responsible for?",
    options: [
      "Configuring Amazon VPC",
      "Managing application code",
      "Maintaining application traffic",
      "Managing the network infrastructure",
    ],
    correctAnswers: [3],
    explanation:
      "Under the AWS shared responsibility model, AWS is responsible for managing the network infrastructure, including security and maintenance. Customers are responsible for configuring services such as Amazon VPC and managing their own application code. More info: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-804", uuidv5.URL),
    text: "Which service should be used to estimate the costs of running a new project on AWS?",
    options: [
      "AWS TCO Calculator",
      "AWS Simple Monthly Calculator",
      "AWS Cost Explorer API",
      "AWS Budgets",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Cost Explorer is the tool used to estimate and analyze costs. Other tools like AWS TCO Calculator are used for comparing AWS with on-premises costs, and AWS Budgets is for tracking spending. More info: https://aws.amazon.com/aws-cost-management/aws-cost-explorer/",
  },
  {
    id: uuidv5("aws-question-805", uuidv5.URL),
    text: "Which AWS tool will identify security groups that grant unrestricted Internet access to a limited list of ports?",
    options: [
      "AWS Organizations",
      "AWS Trusted Advisor",
      "AWS Usage Report",
      "Amazon EC2 dashboard",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Trusted Advisor checks security groups for configurations that allow unrestricted access, helping users identify potential vulnerabilities. The other tools do not offer this specific functionality. More info: https://aws.amazon.com/premiumsupport/technology/trusted-advisor/",
  },
  {
    id: uuidv5("aws-question-806", uuidv5.URL),
    text: "Which AWS service can be used to generate alerts based on an estimated monthly bill?",
    options: ["AWS Config", "Amazon CloudWatch", "AWS X-Ray", "AWS CloudTrail"],
    correctAnswers: [1],
    explanation:
      "Amazon CloudWatch can monitor estimated AWS charges and generate alerts when certain thresholds are met. Other services focus on configuration management, tracing, and logging, which are unrelated to billing alerts. More info: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html",
  },
  {
    id: uuidv5("aws-question-807", uuidv5.URL),
    text: "Which Amazon EC2 pricing model offers the MOST significant discount when compared to On-Demand Instances?",
    options: [
      "Partial Upfront Reserved Instances for a 1-year term",
      "All Upfront Reserved Instances for a 1-year term",
      "All Upfront Reserved Instances for a 3-year term",
      "No Upfront Reserved Instances for a 3-year term",
    ],
    correctAnswers: [2],
    explanation:
      "All Upfront Reserved Instances for a 3-year term provide the highest discount, as AWS offers the best rates for longer commitments. Other options provide savings but not as significant. More info: https://aws.amazon.com/ec2/pricing/reserved-instances/",
  },
  {
    id: uuidv5("aws-question-808", uuidv5.URL),
    text: "Which of the following is the responsibility of AWS?",
    options: [
      "Setting up AWS Identity and Access Management (IAM) users and groups",
      "Physically destroying storage media at end of life",
      "Patching guest operating systems",
      "Configuring security settings on Amazon EC2 instances",
    ],
    correctAnswers: [1],
    explanation:
      "AWS is responsible for securely decommissioning storage media at the end of its lifecycle, following industry best practices like NIST 800-88. The other tasks are the customer's responsibility. More info: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-809", uuidv5.URL),
    text: "Which of the following is an advantage of using AWS?",
    options: [
      "AWS audits user data.",
      "Data is automatically secure.",
      "There is no guessing on capacity needs.",
      "AWS manages compliance needs.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS provides scalable resources, allowing customers to adjust capacity as needed without overprovisioning. Other options are incorrect because AWS does not audit user data automatically, security requires proper configuration, and compliance management is a shared responsibility. More info: https://aws.amazon.com/benefits/",
  },
  {
    id: uuidv5("aws-question-810", uuidv5.URL),
    text: "Which AWS service would a customer use with a static website to achieve lower latency and high transfer speeds?",
    options: [
      "AWS Lambda",
      "Amazon DynamoDB Accelerator",
      "Amazon Route 53",
      "Amazon CloudFront",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon CloudFront is a CDN service that reduces latency and improves transfer speeds for content delivery. Other services focus on compute, database acceleration, or DNS management, which do not directly impact website performance in the same way. More info: https://aws.amazon.com/cloudfront/",
  },
  {
    id: uuidv5("aws-question-811", uuidv5.URL),
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
      "AWS Elastic Beanstalk automates the deployment of applications, handling provisioning, load balancing, and scaling. AWS CloudFormation allows infrastructure to be defined as code and deployed using templates. CodeCommit (B) is for source control, Data Pipeline (C) is for data workflows, and Config (E) is for configuration tracking. More info: https://aws.amazon.com/elasticbeanstalk/ and https://aws.amazon.com/cloudformation/",
  },
  {
    id: uuidv5("aws-question-812", uuidv5.URL),
    text: "A user wants guidance on possible savings when migrating from on-premises to AWS. Which tool is suitable for this scenario?",
    options: [
      "AWS Budgets",
      "Cost Explorer",
      "AWS Total Cost of Ownership (TCO) Calculator",
      "AWS Well-Architected Tool",
    ],
    correctAnswers: [2],
    explanation:
      "The AWS TCO Calculator provides an estimate of potential cost savings when migrating to AWS. Budgets (A) and Cost Explorer (B) are for cost management, and Well-Architected Tool (D) is for best practices. More info: https://aws.amazon.com/tco-calculator/",
  },
  {
    id: uuidv5("aws-question-813", uuidv5.URL),
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
      "Designing for automated failure recovery and using multiple Availability Zones help ensure application reliability. The other options are not key AWS reliability principles. More info: https://docs.aws.amazon.com/wellarchitected/latest/framework/reliability-pillar.html",
  },
  {
    id: uuidv5("aws-question-814", uuidv5.URL),
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
      "Rotating credentials and contacting AWS Support are critical steps in responding to a compromised AWS account. Removing MFA tokens, moving resources, or deleting CloudTrail logs would not mitigate the issue and could make recovery more difficult. More info: https://aws.amazon.com/premiumsupport/knowledge-center/potential-account-compromise/",
  },
  {
    id: uuidv5("aws-question-815", uuidv5.URL),
    text: "What is an example of high availability in the AWS Cloud?",
    options: [
      "Consulting AWS technical support at any time day or night",
      "Ensuring an application remains accessible, even if a resource fails",
      "Making any AWS service available for use by paying on demand",
      "Deploying in any part of the world using AWS Regions",
    ],
    correctAnswers: [1],
    explanation:
      "High availability ensures an application remains accessible despite failures. AWS support, pricing models, or global deployment do not directly define high availability. More info: https://docs.aws.amazon.com/wellarchitected/latest/framework/reliability-pillar.html",
  },
  {
    id: uuidv5("aws-question-816", uuidv5.URL),
    text: "Which AWS security service protects applications from distributed denial of service attacks with always-on detection and automatic inline mitigations?",
    options: [
      "Amazon Inspector",
      "AWS Web Application Firewall (AWS WAF)",
      "Elastic Load Balancing (ELB)",
      "AWS Shield",
    ],
    correctAnswers: [3],
    explanation:
      "AWS Shield provides always-on DDoS protection with automatic mitigation. AWS WAF protects against web threats, but not DDoS. ELB balances traffic but does not mitigate attacks. Amazon Inspector is a security assessment tool. More info: https://aws.amazon.com/shield/",
  },
  {
    id: uuidv5("aws-question-817", uuidv5.URL),
    text: "A company wants to monitor the CPU usage of its Amazon EC2 resources. Which AWS service should the company use?",
    options: [
      "AWS CloudTrail",
      "Amazon CloudWatch",
      "AWS Cost and Usage report",
      "Amazon Simple Notification Service (Amazon SNS)",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon CloudWatch monitors EC2 instances, including CPU usage. CloudTrail tracks API activity, Cost and Usage reports financial data, and SNS provides notifications. More info: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html",
  },
  {
    id: uuidv5("aws-question-818", uuidv5.URL),
    text: "What is an AWS Identity and Access Management (IAM) role?",
    options: [
      "A user associated with an AWS resource",
      "A group associated with an AWS resource",
      "An entity that defines a set of permissions for use with an AWS resource",
      "An authentication credential associated with a multi-factor authentication (MFA) token",
    ],
    correctAnswers: [2],
    explanation:
      "An IAM role is an entity that defines a set of permissions for AWS resources. It is not a user, group, or MFA credential but provides temporary access permissions. More info: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html",
  },
  {
    id: uuidv5("aws-question-819", uuidv5.URL),
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
      "Reserved Instances offer cost savings and the ability to reserve capacity. They do not provide new instance types, enhanced networking, or automatic upgrades. More info: https://aws.amazon.com/ec2/pricing/reserved-instances/",
  },
  {
    id: uuidv5("aws-question-820", uuidv5.URL),
    text: "How do Amazon EC2 Auto Scaling groups help achieve high availability for a web application?",
    options: [
      "They automatically add more instances across multiple AWS Regions based on global demand of the application.",
      "They automatically add or replace instances across multiple Availability Zones when the application needs it.",
      "They enable the application's static content to reside closer to end users.",
      "They are able to distribute incoming requests across a tier of web server instances.",
    ],
    correctAnswers: [1],
    explanation:
      "EC2 Auto Scaling helps maintain high availability by replacing failing instances and distributing them across multiple Availability Zones. It does not distribute traffic (which is the role of ELB) or manage global demand. More info: https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-benefits.html",
  },
  {
    id: uuidv5("aws-question-821", uuidv5.URL),
    text: "How can one AWS account use Reserved Instances from another AWS account?",
    options: [
      "By using Amazon EC2 Dedicated Instances",
      "By using AWS Organizations consolidated billing",
      "By using the AWS Cost Explorer tool",
      "By using AWS Budgets",
    ],
    correctAnswers: [1],
    explanation:
      "The account that originally purchased the Reserved Instance receives the discount first. If the purchasing account doesn't have any instances that match the terms of the Reserved Instance, the discount for the Reserved Instance is assigned to any matching usage on another account in the organization. AWS Organizations consolidated billing enables this cost-sharing mechanism. More info: https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html",
  },
  {
    id: uuidv5("aws-question-822", uuidv5.URL),
    text: "A customer runs an On-Demand Amazon Linux EC2 instance for 3 hours, 5 minutes, and 6 seconds. For how much time will the customer be billed?",
    options: [
      "3 hours, 5 minutes",
      "3 hours, 5 minutes, and 6 seconds",
      "3 hours, 6 minutes",
      "4 hours",
    ],
    correctAnswers: [1],
    explanation:
      "AWS bills On-Demand EC2 instances per second, with a minimum of 60 seconds. Therefore, the customer will be billed exactly for 3 hours, 5 minutes, and 6 seconds, rather than rounding up to the next full minute or hour. More info: https://aws.amazon.com/ec2/pricing/on-demand/",
  },
  {
    id: uuidv5("aws-question-823", uuidv5.URL),
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
      "AWS Lambda and Amazon ECS provide compute resources. AWS Lambda runs code without provisioning or managing servers, while Amazon ECS allows users to run and manage Docker containers on a cluster of EC2 instances or with AWS Fargate. The other options do not provide compute capabilities. More info: https://aws.amazon.com/lambda/ and https://aws.amazon.com/ecs/",
  },
  {
    id: uuidv5("aws-question-824", uuidv5.URL),
    text: "Which AWS service enables users to deploy infrastructure as code by automating the process of provisioning resources?",
    options: [
      "Amazon GameLift",
      "AWS CloudFormation",
      "AWS Data Pipeline",
      "AWS Glue",
    ],
    correctAnswers: [1],
    explanation:
      "AWS CloudFormation enables infrastructure as code, allowing users to define AWS resources in templates and provision them automatically. The other services do not provide this capability. More info: https://aws.amazon.com/cloudformation/",
  },
  {
    id: uuidv5("aws-question-825", uuidv5.URL),
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
      "AWS Direct Connect provides a dedicated network connection from on-premises to AWS, and AWS Storage Gateway allows integration between on-premises storage and AWS Cloud storage. The other options do not extend on-premises environments to AWS. More info: https://aws.amazon.com/directconnect/ and https://aws.amazon.com/storagegateway/",
  },
  {
    id: uuidv5("aws-question-826", uuidv5.URL),
    text: "Which of the following allows users to provision a dedicated network connection from their internal network to AWS?",
    options: [
      "AWS CloudHSM",
      "AWS Direct Connect",
      "AWS VPN",
      "Amazon Connect",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Direct Connect provides a dedicated physical network connection from an on-premises network to AWS, improving bandwidth and reducing latency. AWS VPN provides encrypted tunnels over the internet but is not a dedicated connection. More info: https://aws.amazon.com/directconnect/",
  },
  {
    id: uuidv5("aws-question-827", uuidv5.URL),
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
      "Amazon CloudFront is a content delivery network that caches content at edge locations to reduce latency. AWS Shield provides DDoS protection at AWS edge locations. The other services do not utilize edge locations. More info: https://aws.amazon.com/cloudfront/ and https://aws.amazon.com/shield/",
  },
  {
    id: uuidv5("aws-question-828", uuidv5.URL),
    text: "Which service would provide network connectivity in a hybrid architecture that includes the AWS Cloud?",
    options: [
      "Amazon VPC",
      "AWS Direct Connect",
      "AWS Directory Service",
      "Amazon API Gateway",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon VPC allows users to create a logically isolated network in AWS, supporting hybrid connectivity using VPN or Direct Connect. While Direct Connect provides a dedicated link, VPC is the core service for hybrid networking. More info: https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html",
  },
  {
    id: uuidv5("aws-question-829", uuidv5.URL),
    text: "Which tool can be used to compare the costs of running a web application in a traditional hosting environment to running it on AWS?",
    options: [
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Cost and Usage report",
      "AWS Total Cost of Ownership (TCO) Calculator",
    ],
    correctAnswers: [3],
    explanation:
      "The AWS Total Cost of Ownership (TCO) Calculator helps users estimate the cost savings of running applications on AWS compared to traditional hosting. The other tools focus on cost monitoring rather than comparisons. More info: https://aws.amazon.com/tco-calculator/",
  },
  {
    id: uuidv5("aws-question-830", uuidv5.URL),
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
      "AWS Marketplace allows users to pay for third-party software based on usage and deploy applications with one click. However, software upgrades are still needed, and users should test software before deployment. More info: https://aws.amazon.com/marketplace",
  },
  {
    id: uuidv5("aws-question-831", uuidv5.URL),
    text: "Which of the following is a cloud architectural design principle?",
    options: [
      "Scale up, not out.",
      "Loosely couple components.",
      "Build monolithic systems.",
      "Use commercial database software.",
    ],
    correctAnswers: [1],
    explanation:
      "Loosely coupled architectures reduce interdependencies, so that a change or failure in a component does not cascade to other components. Scaling up (A) and building monolithic systems (C) reduce flexibility and resilience, and using commercial databases (D) is a technology choice, not a design principle. More info: https://docs.aws.amazon.com/wellarchitected/latest/framework/general-design-principles.html",
  },
  {
    id: uuidv5("aws-question-832", uuidv5.URL),
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
      "Under the shared responsibility model, customers are responsible for patching their operating systems and configuring security groups. AWS manages the infrastructure, including physical security and hypervisor patching. More info: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-833", uuidv5.URL),
    text: "Which service enables customers to audit and monitor changes in AWS resources?",
    options: [
      "AWS Trusted Advisor",
      "Amazon GuardDuty",
      "Amazon Inspector",
      "AWS Config",
    ],
    correctAnswers: [3],
    explanation:
      "AWS Config continuously monitors and records AWS resource configurations, allowing users to audit, assess compliance, and track changes over time. The other services focus on best practices, threat detection, or security assessment. More info: https://aws.amazon.com/config/",
  },
  {
    id: uuidv5("aws-question-834", uuidv5.URL),
    text: "Which AWS service identifies security groups that allow unrestricted access to a user's AWS resources?",
    options: [
      "AWS CloudTrail",
      "AWS Trusted Advisor",
      "Amazon CloudWatch",
      "Amazon Inspector",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Trusted Advisor provides security checks, including identifying security groups with open access to resources. CloudTrail logs API activity, CloudWatch monitors metrics, and Inspector is for security assessments. More info: https://aws.amazon.com/premiumsupport/technology/trusted-advisor/",
  },
  {
    id: uuidv5("aws-question-835", uuidv5.URL),
    text: "According to the AWS shared responsibility model, who is responsible for configuration management?",
    options: [
      "It is solely the responsibility of the customer.",
      "It is solely the responsibility of AWS.",
      "It is shared between AWS and the customer.",
      "It is not part of the AWS shared responsibility model.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS maintains the infrastructure configuration, but customers are responsible for managing their own configurations, including operating systems, databases, and applications. More info: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-836", uuidv5.URL),
    text: "Which AWS service is a content delivery network that securely delivers data, video, and applications to users globally with low latency and high speeds?",
    options: [
      "AWS CloudFormation",
      "AWS Direct Connect",
      "Amazon CloudFront",
      "Amazon Pinpoint",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon CloudFront is AWS's content delivery network (CDN) that provides secure, low-latency delivery of data, videos, and applications to users worldwide. The other services do not provide CDN functionality. More info: https://aws.amazon.com/cloudfront/",
  },
  {
    id: uuidv5("aws-question-837", uuidv5.URL),
    text: "Which benefit of the AWS Cloud supports matching the supply of resources with changing workload demands?",
    options: ["Security", "Reliability", "Elasticity", "High availability"],
    correctAnswers: [2],
    explanation:
      "Elasticity allows AWS resources to scale up or down dynamically, matching workload demands efficiently. Security, reliability, and high availability are important, but elasticity specifically addresses resource scaling. More info: https://aws.amazon.com/benefits/",
  },
  {
    id: uuidv5("aws-question-838", uuidv5.URL),
    text: "A user is running an application on AWS and notices that one or more AWS-owned IP addresses is involved in a distributed denial-of-service (DDoS) attack. Who should the user contact FIRST about this situation?",
    options: [
      "AWS Premium Support",
      "AWS Technical Account Manager",
      "AWS Solutions Architect",
      "AWS Abuse team",
    ],
    correctAnswers: [3],
    explanation:
      "The AWS Abuse team is responsible for handling reports related to DDoS attacks and other malicious activities involving AWS resources. The other options are not the primary contact for abuse incidents. More info: https://aws.amazon.com/premiumsupport/abuse/",
  },
  {
    id: uuidv5("aws-question-839", uuidv5.URL),
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
      "AWS provides pay-as-you-go pricing, eliminating upfront costs. It also allows users to provision resources on demand, ensuring flexibility and scalability. AWS does not manage all security (B), storage is not free or unlimited (D), and users do not control physical infrastructure (E). More info: https://aws.amazon.com/benefits/",
  },
  {
    id: uuidv5("aws-question-840", uuidv5.URL),
    text: "What AWS service would be used to centrally manage AWS access policies across multiple accounts?",
    options: [
      "AWS Service Catalog",
      "AWS Config",
      "AWS Trusted Advisor",
      "AWS Organizations",
    ],
    correctAnswers: [3],
    explanation:
      "AWS Organizations enables centralized governance and management of multiple AWS accounts, including access policies and billing. The other services do not provide centralized policy management. More info: https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html",
  },
  {
    id: uuidv5("aws-question-841", uuidv5.URL),
    text: "What is AWS Trusted Advisor?",
    options: [
      "It is an AWS staff member who provides recommendations and best practices on how to use AWS.",
      "It is a network of AWS partners who provide recommendations and best practices on how to use AWS.",
      "It is an online tool with a set of automated checks that provides recommendations on cost optimization, performance, and security.",
      "It is another name for AWS Technical Account Managers who provide recommendations on cost optimization, performance, and security.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Trusted Advisor is an online tool that provides real-time guidance to help you provision your resources following AWS best practices. It offers recommendations in areas such as cost optimization, security, and performance, helping users improve their AWS environment. The other options incorrectly describe Trusted Advisor. More info: https://aws.amazon.com/premiumsupport/technology/trusted-advisor/",
  },
  {
    id: uuidv5("aws-question-842", uuidv5.URL),
    text: "Which AWS service or feature allows a company to visualize, understand, and manage AWS costs and usage over time?",
    options: [
      "AWS Budgets",
      "AWS Cost Explorer",
      "AWS Organizations",
      "Consolidated billing",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Cost Explorer provides an interface that allows users to visualize, understand, and manage their AWS costs and usage over time. Budgets (A) is for setting cost and usage limits, Organizations (C) is for account management, and Consolidated Billing (D) is for central billing, not visualization. More info: https://aws.amazon.com/aws-cost-management/aws-cost-explorer/",
  },
  {
    id: uuidv5("aws-question-843", uuidv5.URL),
    text: "Which AWS service offers on-demand access to AWS security and compliance reports?",
    options: [
      "AWS CloudTrail",
      "AWS Artifact",
      "AWS Health",
      "Amazon CloudWatch",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Artifact provides on-demand access to AWS security and compliance reports. CloudTrail records API activity, AWS Health provides service health updates, and CloudWatch is for monitoring. More info: https://aws.amazon.com/artifact/",
  },
  {
    id: uuidv5("aws-question-844", uuidv5.URL),
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
      "Deploying applications in multiple AWS Regions and using Amazon CloudFront edge locations help reduce latency for global users. Translate (B) and Comprehend (D) are language services, and ELB (E) does not distribute traffic across regions. More info: https://aws.amazon.com/about-aws/global-infrastructure/ and https://aws.amazon.com/cloudfront/features/",
  },
  {
    id: uuidv5("aws-question-845", uuidv5.URL),
    text: "Which AWS service handles the deployment details of capacity provisioning, load balancing, Auto Scaling, and application health monitoring?",
    options: [
      "AWS Config",
      "AWS Elastic Beanstalk",
      "Amazon Route 53",
      "Amazon CloudFront",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Elastic Beanstalk simplifies application deployment by automatically handling capacity provisioning, load balancing, auto-scaling, and health monitoring. Config (A) is for configuration tracking, Route 53 (C) is DNS, and CloudFront (D) is a CDN. More info: https://aws.amazon.com/elasticbeanstalk/",
  },
  {
    id: uuidv5("aws-question-846", uuidv5.URL),
    text: "Which AWS service provides inbound and outbound network ACLs to harden external connectivity to Amazon EC2?",
    options: ["AWS IAM", "Amazon Connect", "Amazon VPC", "Amazon API Gateway"],
    correctAnswers: [2],
    explanation:
      "Amazon VPC provides network ACLs to control inbound and outbound traffic for EC2 instances. IAM (A) is for identity management, Connect (B) is a contact center, and API Gateway (D) is for APIs. More info: https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html",
  },
  {
    id: uuidv5("aws-question-847", uuidv5.URL),
    text: "When a company provisions web servers in multiple AWS Regions, what is being increased?",
    options: ["Coupling", "Availability", "Security", "Durability"],
    correctAnswers: [1],
    explanation:
      "Deploying web servers in multiple AWS Regions increases availability by reducing the impact of regional failures. It does not necessarily improve security or durability, and coupling refers to system dependencies rather than availability. More info: https://aws.amazon.com/about-aws/global-infrastructure/regions_az/",
  },
  {
    id: uuidv5("aws-question-848", uuidv5.URL),
    text: "The pay-as-you-go pricing model for AWS services:",
    options: [
      "reduces capital expenditures.",
      "requires payment up front for AWS services.",
      "is relevant only for Amazon EC2, Amazon S3, and Amazon RDS.",
      "reduces operational expenditures.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS's pay-as-you-go model reduces capital expenditures (CapEx) by eliminating upfront costs. It does not require upfront payments, applies to many AWS services, and primarily impacts CapEx rather than operational expenditures. More info: https://aws.amazon.com/pricing/",
  },
  {
    id: uuidv5("aws-question-849", uuidv5.URL),
    text: "Under the AWS shared responsibility model, AWS is responsible for which security-related task?",
    options: [
      "Lifecycle management of IAM credentials",
      "Physical security of global infrastructure",
      "Encryption of Amazon EBS volumes",
      "Firewall configuration",
    ],
    correctAnswers: [1],
    explanation:
      "AWS is responsible for the physical security of its global infrastructure under the shared responsibility model. Customers are responsible for IAM credential management, EBS encryption, and firewall configurations. More info: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-850", uuidv5.URL),
    text: "Which AWS service enables users to consolidate billing across multiple accounts?",
    options: [
      "Amazon QuickSight",
      "AWS Organizations",
      "AWS Budgets",
      "Amazon Forecast",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Organizations allows consolidated billing, letting users manage costs across multiple accounts. QuickSight is a BI tool, AWS Budgets helps monitor costs, and Amazon Forecast provides forecasting insights. More info: https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html",
  },
];

export const exam18: Question[] = [
  {
    id: uuidv5("aws-question-851", uuidv5.URL),
    text: "Under the AWS shared responsibility model, which of the following is an example of security in the AWS Cloud?",
    options: [
      "Managing edge locations",
      "Physical security",
      "Firewall configuration",
      "Global infrastructure",
    ],
    correctAnswers: [2],
    explanation:
      "Under the AWS Shared Responsibility Model, security in the cloud is the customer's responsibility. Configuring firewalls, such as security groups and network ACLs, is an example of security in the cloud. AWS is responsible for physical security and global infrastructure, but customers must manage their own firewall rules. More info: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-852", uuidv5.URL),
    text: "How can an AWS user with an AWS Basic Support plan obtain technical assistance from AWS?",
    options: [
      "AWS Senior Support Engineers",
      "AWS Technical Account Managers",
      "AWS Trusted Advisor",
      "AWS Discussion Forums",
    ],
    correctAnswers: [3],
    explanation:
      "Users with AWS Basic Support can access the AWS Discussion Forums for assistance. Other options, like AWS Senior Support Engineers and Technical Account Managers, are available only with higher-tier support plans. Trusted Advisor provides automated checks but not direct technical assistance. More info: https://aws.amazon.com/premiumsupport/plans/",
  },
  {
    id: uuidv5("aws-question-853", uuidv5.URL),
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
      "The AWS Well-Architected Framework consists of five pillars: Operational Excellence, Security, Reliability, Performance Efficiency, and Cost Optimization. Performance Efficiency and Security are part of this framework, while the other options are best practices but not official pillars. More info: https://aws.amazon.com/architecture/well-architected/",
  },
  {
    id: uuidv5("aws-question-854", uuidv5.URL),
    text: "After selecting an Amazon EC2 Dedicated Host reservation, which pricing option would provide the largest discount?",
    options: [
      "No upfront payment",
      "Hourly on-demand payment",
      "Partial upfront payment",
      "All upfront payment",
    ],
    correctAnswers: [3],
    explanation:
      "AWS offers Reserved Instances with different payment options. Paying all upfront provides the largest discount compared to other options. No upfront and partial upfront payments offer less savings. More info: https://aws.amazon.com/ec2/pricing/dedicated-hosts/",
  },
  {
    id: uuidv5("aws-question-855", uuidv5.URL),
    text: "What is an advantage of deploying an application across multiple Availability Zones?",
    options: [
      "There is a lower risk of service failure if a natural disaster causes a service disruption in a given AWS Region.",
      "The application will have higher availability because it can withstand a service disruption in one Availability Zone.",
      "There will be better coverage as Availability Zones are geographically distant and can serve a wider area.",
      "There will be decreased application latency that will improve the user experience.",
    ],
    correctAnswers: [1],
    explanation:
      "Deploying across multiple Availability Zones increases application availability by preventing a single point of failure. If one AZ fails, the application can still run in another AZ. This does not necessarily reduce latency or expand coverage. More info: https://docs.aws.amazon.com/wellarchitected/latest/framework/reliability-pillar.html",
  },
  {
    id: uuidv5("aws-question-856", uuidv5.URL),
    text: "A Cloud Practitioner is asked how to estimate the cost of using a new application on AWS. What is the MOST appropriate response?",
    options: [
      "Inform the user that AWS pricing allows for on-demand pricing.",
      "Direct the user to the AWS Simple Monthly Calculator for an estimate.",
      "Use Amazon QuickSight to analyze current spending on-premises.",
      "Use Amazon AppStream 2.0 for real-time pricing analytics.",
    ],
    correctAnswers: [1],
    explanation:
      "The AWS Simple Monthly Calculator is a tool that helps users estimate the cost of using AWS services. Other options do not provide a direct way to estimate costs for a new application. More info: https://calculator.aws.amazon.com/",
  },
  {
    id: uuidv5("aws-question-857", uuidv5.URL),
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
      "To enable access to on-premises resources, companies can use AWS Direct Connect for a dedicated connection or establish a VPN connection with a virtual private gateway. Other options are unrelated to hybrid connectivity. More info: https://docs.aws.amazon.com/vpc/latest/userguide/vpn-connections.html and https://aws.amazon.com/directconnect/",
  },
  {
    id: uuidv5("aws-question-858", uuidv5.URL),
    text: "A web application running on AWS has been spammed with malicious requests from a recurring set of IP addresses. Which AWS service can help secure the application and block the malicious traffic?",
    options: [
      "AWS IAM",
      "Amazon GuardDuty",
      "Amazon Simple Notification Service (Amazon SNS)",
      "AWS WAF",
    ],
    correctAnswers: [3],
    explanation:
      "AWS WAF is a web application firewall that helps protect applications from malicious traffic. IAM is for identity management, GuardDuty detects threats but does not block them, and SNS is a messaging service. More info: https://aws.amazon.com/waf/",
  },
  {
    id: uuidv5("aws-question-859", uuidv5.URL),
    text: "Treating infrastructure as code in the AWS Cloud allows users to:",
    options: [
      "automate migration of on-premises hardware to AWS data centers.",
      "let a third party automate an audit of the AWS infrastructure.",
      "turn over application code to AWS so it can run on the AWS infrastructure.",
      "automate the infrastructure provisioning process.",
    ],
    correctAnswers: [3],
    explanation:
      "Infrastructure as Code (IaC) automates infrastructure provisioning using code, improving consistency and efficiency. It does not migrate hardware or involve third-party audits. More info: https://aws.amazon.com/cloudformation/",
  },
  {
    id: uuidv5("aws-question-860", uuidv5.URL),
    text: "A company requires a dedicated network connection between its on-premises servers and the AWS Cloud. Which AWS service should be used?",
    options: [
      "AWS VPN",
      "AWS Direct Connect",
      "Amazon API Gateway",
      "Amazon Connect",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Direct Connect provides a dedicated, high-bandwidth network connection between on-premises environments and AWS. AWS VPN is an alternative but is not a dedicated connection. More info: https://aws.amazon.com/directconnect/",
  },
  {
    id: uuidv5("aws-question-861", uuidv5.URL),
    text: "Which AWS service can be used to query stored datasets directly from Amazon S3 using standard SQL?",
    options: [
      "AWS Glue",
      "AWS Data Pipeline",
      "Amazon CloudSearch",
      "Amazon Athena",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon S3 using standard SQL. Glue (A) is for ETL, Data Pipeline (B) is for data workflows, and CloudSearch (C) is for search, not SQL queries. More info: https://aws.amazon.com/athena/",
  },
  {
    id: uuidv5("aws-question-862", uuidv5.URL),
    text: "AWS CloudFormation is designed to help the user:",
    options: [
      "model and provision resources.",
      "update application code.",
      "set up data lakes.",
      "create reports for billing.",
    ],
    correctAnswers: [0],
    explanation:
      "AWS CloudFormation provides a common language for modeling and provisioning AWS and third-party resources in an automated and secure manner. The other options are not the primary purpose of CloudFormation. More info: https://aws.amazon.com/cloudformation/",
  },
  {
    id: uuidv5("aws-question-863", uuidv5.URL),
    text: "Which of the following is an AWS database service?",
    options: [
      "Amazon Redshift",
      "Amazon Elastic Block Store (Amazon EBS)",
      "Amazon S3 Glacier",
      "AWS Snowball",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon Redshift is a cloud data warehouse service that is part of AWS's database services. EBS (B) is block storage, S3 Glacier (C) is for archival, and Snowball (D) is for data transfer. More info: https://aws.amazon.com/redshift/",
  },
  {
    id: uuidv5("aws-question-864", uuidv5.URL),
    text: "A Cloud Practitioner must determine if any security groups in an AWS account have been provisioned to allow unrestricted access for specific ports. What is the SIMPLEST way to do this?",
    options: [
      "Review the inbound rules for each security group in the Amazon EC2 management console to check for port 0.0.0.0/0.",
      "Run AWS Trusted Advisor and review the findings.",
      "Open the AWS IAM console and check the inbound rule filters for open access.",
      "In AWS Config, create a custom rule that invokes an AWS Lambda function to review rules for inbound access.",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Trusted Advisor provides security checks, including identifying security groups with unrestricted access. The other options are more manual or not directly related. More info: https://aws.amazon.com/premiumsupport/technology/trusted-advisor/",
  },
  {
    id: uuidv5("aws-question-865", uuidv5.URL),
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
      "AWS allows for high availability architecture and easily accommodates demand changes, making applications more scalable and resilient. The other options are not direct benefits or are customer responsibilities. More info: https://aws.amazon.com/benefits/",
  },
  {
    id: uuidv5("aws-question-866", uuidv5.URL),
    text: "A user needs an automated security assessment report that will identify unintended network access to Amazon EC2 instances and vulnerabilities on those instances. Which AWS service will provide this assessment report?",
    options: [
      "EC2 security groups",
      "AWS Config",
      "Amazon Macie",
      "Amazon Inspector",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon Inspector is an automated security assessment service that evaluates applications for vulnerabilities and exposure. Security groups (A) are for access control, Config (B) is for configuration tracking, and Macie (C) is for data security. More info: https://aws.amazon.com/inspector/",
  },
  {
    id: uuidv5("aws-question-867", uuidv5.URL),
    text: "How can a company isolate the costs of production and non-production workloads on AWS?",
    options: [
      "Create IAM roles for production and non-production workloads.",
      "Use different accounts for production and non-production expenses.",
      "Use Amazon EC2 for non-production workloads and other services for production workloads.",
      "Use Amazon CloudWatch to monitor the use of services.",
    ],
    correctAnswers: [1],
    explanation:
      "Using separate AWS accounts for production and non-production environments allows for clear cost allocation. The other options do not provide true cost isolation. More info: https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts.html",
  },
  {
    id: uuidv5("aws-question-868", uuidv5.URL),
    text: "Where can users find a catalog of AWS-recognized providers of third-party security solutions?",
    options: [
      "AWS Service Catalog",
      "AWS Marketplace",
      "AWS Quick Start",
      "AWS CodeDeploy",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Marketplace provides a catalog of third-party security solutions that are recognized by AWS. The other options do not provide a security solutions catalog. More info: https://aws.amazon.com/marketplace",
  },
  {
    id: uuidv5("aws-question-869", uuidv5.URL),
    text: "A Cloud Practitioner needs to store data for 7 years to meet regulatory requirements. Which AWS service will meet this requirement at the LOWEST cost?",
    options: [
      "Amazon S3",
      "AWS Snowball",
      "Amazon Redshift",
      "Amazon S3 Glacier",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon S3 Glacier provides low-cost long-term storage designed for archival and regulatory requirements. S3 (A) is more expensive for long-term storage, Snowball (B) is for data transfer, and Redshift (C) is a data warehouse. More info: https://aws.amazon.com/glacier/",
  },
  {
    id: uuidv5("aws-question-870", uuidv5.URL),
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
      "AWS replaces capital expenses with variable costs and increases agility by allowing rapid scaling and innovation. The other options are not immediate benefits or are customer responsibilities. More info: https://aws.amazon.com/benefits/",
  },
  {
    id: uuidv5("aws-question-871", uuidv5.URL),
    text: "Which security service automatically recognizes and classifies sensitive data or intellectual property on AWS?",
    options: [
      "Amazon GuardDuty",
      "Amazon Macie",
      "Amazon Inspector",
      "AWS Shield",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon Macie is a security service that uses machine learning to automatically discover, classify, and protect sensitive data in AWS. GuardDuty (A) is for threat detection, Inspector (C) is for vulnerability assessment, and Shield (D) is for DDoS protection. More info: https://aws.amazon.com/macie/",
  },
  {
    id: uuidv5("aws-question-872", uuidv5.URL),
    text: "What is the purpose of AWS Storage Gateway?",
    options: [
      "It ensures on-premises data storage is 99.999999999% durable.",
      "It transports petabytes of data to and from AWS.",
      "It connects to multiple Amazon EC2 instances.",
      "It connects on-premises data storage to the AWS Cloud.",
    ],
    correctAnswers: [3],
    explanation:
      "AWS Storage Gateway is a hybrid storage service that enables on-premises applications to use AWS cloud storage seamlessly. The other options do not describe the primary purpose of Storage Gateway. More info: https://aws.amazon.com/storagegateway/",
  },
  {
    id: uuidv5("aws-question-873", uuidv5.URL),
    text: "What should users do if they want to install an application in geographically isolated locations?",
    options: [
      "Install the application using multiple internet gateways.",
      "Deploy the application to an Amazon VPC.",
      "Deploy the application to multiple AWS Regions.",
      "Configure the application using multiple NAT gateways.",
    ],
    correctAnswers: [2],
    explanation:
      "Deploying an application across multiple AWS Regions ensures that it is available in geographically isolated locations, providing redundancy and disaster recovery capabilities. The other options do not provide true geographic isolation. More info: https://aws.amazon.com/about-aws/global-infrastructure/regions_az/",
  },
  {
    id: uuidv5("aws-question-874", uuidv5.URL),
    text: "A system in the AWS Cloud is designed to withstand the failure of one or more components. What is this an example of?",
    options: ["Elasticity", "High Availability", "Scalability", "Agility"],
    correctAnswers: [1],
    explanation:
      "High Availability refers to designing a system that can continue operating even when one or more components fail. Elasticity is about scaling, scalability is about handling growth, and agility is about rapid change. More info: https://docs.aws.amazon.com/wellarchitected/latest/framework/reliability-pillar.html",
  },
  {
    id: uuidv5("aws-question-875", uuidv5.URL),
    text: "A Cloud Practitioner needs a consistent and dedicated connection between AWS resources and an on-premises system. Which AWS service can fulfill this requirement?",
    options: [
      "AWS Direct Connect",
      "AWS VPN",
      "Amazon Connect",
      "AWS Data Pipeline",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Direct Connect provides a dedicated private connection between on-premises data centers and AWS, offering higher bandwidth and lower latency compared to a traditional VPN. More info: https://aws.amazon.com/directconnect/",
  },
  {
    id: uuidv5("aws-question-876", uuidv5.URL),
    text: "Within the AWS shared responsibility model, who is responsible for security and compliance?",
    options: [
      "The customer is responsible.",
      "AWS is responsible.",
      "AWS and the customer share responsibility.",
      "AWS shares responsibility with the relevant governing body.",
    ],
    correctAnswers: [2],
    explanation:
      "Security and Compliance is a shared responsibility between AWS and the customer. AWS manages the infrastructure security, while customers are responsible for securing their applications and data. More info: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-877", uuidv5.URL),
    text: "To use the AWS CLI, users are required to generate:",
    options: [
      "a password policy.",
      "an access/secret key.",
      "a managed policy.",
      "an API key.",
    ],
    correctAnswers: [1],
    explanation:
      "The AWS CLI requires an access key ID and a secret access key for authentication when making API requests to AWS services. More info: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html",
  },
  {
    id: uuidv5("aws-question-878", uuidv5.URL),
    text: "Which AWS service is used to provide encryption for Amazon EBS?",
    options: [
      "AWS Certificate Manager",
      "AWS Systems Manager",
      "AWS KMS",
      "AWS Config",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Key Management Service (AWS KMS) is used to create and manage cryptographic keys for encrypting Amazon EBS volumes, ensuring data security. More info: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html",
  },
  {
    id: uuidv5("aws-question-879", uuidv5.URL),
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
      "AWS Lambda pricing is based on two factors: the number of requests made and the duration of execution time for each request. The other options do not affect Lambda pricing. More info: https://aws.amazon.com/lambda/pricing/",
  },
  {
    id: uuidv5("aws-question-880", uuidv5.URL),
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
      "AWS has more edge locations than Regions because they are used for caching content and delivering services globally. Additionally, each AWS Region consists of multiple Availability Zones to provide high availability. More info: https://aws.amazon.com/about-aws/global-infrastructure/",
  },
  {
    id: uuidv5("aws-question-881", uuidv5.URL),
    text: "What does AWS Shield Standard provide?",
    options: [
      "WAF rules",
      "DDoS protection",
      "Identity and Access Management (IAM) permissions and access to resources",
      "Data encryption",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Shield Standard provides DDoS protection for all AWS customers at no additional charge, defending against the most common network and transport layer DDoS attacks. WAF rules (A) are managed by AWS WAF, not Shield. IAM permissions (C) and data encryption (D) are unrelated to DDoS protection. More info: https://aws.amazon.com/shield/",
  },
  {
    id: uuidv5("aws-question-882", uuidv5.URL),
    text: "A company wants to build its new application workloads in the AWS Cloud instead of using on-premises resources. What expense can be reduced using the AWS Cloud?",
    options: [
      "The cost of writing custom-built Java or Node.js code",
      "Penetration testing for security",
      "Hardware required to support new applications",
      "Writing specific test cases for third-party applications.",
    ],
    correctAnswers: [2],
    explanation:
      "By using AWS Cloud, companies eliminate the need for large capital investments in hardware, as AWS provides scalable, pay-as-you-go resources. The cost of writing code (A) and test cases (D) are still required regardless of infrastructure. Penetration testing (B) may still be necessary for security compliance. More info: https://aws.amazon.com/what-is-cloud-computing/",
  },
  {
    id: uuidv5("aws-question-883", uuidv5.URL),
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
      "AWS Marketplace enables users to buy and sell software and services that run on AWS. Selling unused EC2 Spot Instances (A) is not possible; Spot Instances are managed by AWS. Purchasing compliance documents (D) is done via AWS Artifact, not Marketplace. Ordering AWS Snowball (E) is done through the AWS Management Console. More info: https://aws.amazon.com/marketplace/",
  },
  {
    id: uuidv5("aws-question-884", uuidv5.URL),
    text: "What does it mean if a user deploys a hybrid cloud architecture on AWS?",
    options: [
      "All resources run using on-premises infrastructure.",
      "Some resources run on-premises and some run in a colocation center.",
      "All resources run in the AWS Cloud.",
      "Some resources run on-premises and some run in the AWS Cloud.",
    ],
    correctAnswers: [3],
    explanation:
      "A hybrid cloud architecture means some resources are on-premises and some are in the AWS Cloud, allowing integration between both environments. All on-premises (A) or all in AWS (C) are not hybrid. Colocation centers (B) are not the same as cloud resources. More info: https://aws.amazon.com/hybrid/",
  },
  {
    id: uuidv5("aws-question-885", uuidv5.URL),
    text: "Which AWS service allows users to identify the changes made to a resource over time?",
    options: [
      "Amazon Inspector",
      "AWS Config",
      "AWS Service Catalog",
      "AWS IAM",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Config provides a detailed view of the configuration of AWS resources over time, tracking changes and compliance. Inspector (A) is for security assessments, Service Catalog (C) manages product catalogs, and IAM (D) manages access. More info: https://aws.amazon.com/config/",
  },
  {
    id: uuidv5("aws-question-886", uuidv5.URL),
    text: "How can a company reduce its Total Cost of Ownership (TCO) using AWS?",
    options: [
      "By minimizing large capital expenditures",
      "By having no responsibility for third-party license costs",
      "By having no operational expenditures",
      "By having AWS manage applications",
    ],
    correctAnswers: [0],
    explanation:
      "AWS reduces TCO by eliminating large upfront hardware costs and allowing businesses to scale as needed. Third-party license costs (B) and operational expenditures (C) may still apply. AWS does not manage customer applications by default (D). More info: https://aws.amazon.com/economics/",
  },
  {
    id: uuidv5("aws-question-887", uuidv5.URL),
    text: "Which activity is a customer responsibility in the AWS Cloud according to the AWS shared responsibility model?",
    options: [
      "Ensuring network connectivity from AWS to the internet",
      "Patching and fixing flaws within the AWS Cloud infrastructure",
      "Ensuring the physical security of cloud data centers",
      "Ensuring Amazon EBS volumes are backed up",
    ],
    correctAnswers: [3],
    explanation:
      "Customers are responsible for data protection and backups, such as ensuring Amazon EBS volumes are backed up. AWS manages physical security (C) and infrastructure patching (B). Network connectivity (A) is managed by AWS. More info: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-888", uuidv5.URL),
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
      "AWS provides scalability (no need to guess capacity) and agility (increased speed to market). Fixed monthly costs (A) and physical access (E) are not AWS advantages. Upfront capital expenditure (D) is reduced, not increased. More info: https://aws.amazon.com/benefits/",
  },
  {
    id: uuidv5("aws-question-889", uuidv5.URL),
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
      "TCO includes hardware (B) and administrative costs (C) for managing infrastructure. Credit card fees (A), penetration testing (D), and advertising (E) are not core infrastructure costs. More info: https://aws.amazon.com/tco-calculator/",
  },
  {
    id: uuidv5("aws-question-890", uuidv5.URL),
    text: "Which AWS feature allows a company to take advantage of usage tiers for services across multiple member accounts?",
    options: [
      "Service control policies (SCPs)",
      "Consolidated billing",
      "All Upfront Reserved Instances",
      "AWS Cost Explorer",
    ],
    correctAnswers: [1],
    explanation:
      "Consolidated billing enables organizations to aggregate usage and take advantage of volume pricing across multiple AWS accounts. SCPs (A) are for policy management, Reserved Instances (C) are for EC2 pricing, and Cost Explorer (D) is for cost analysis. More info: https://aws.amazon.com/organizations/",
  },
  {
    id: uuidv5("aws-question-891", uuidv5.URL),
    text: "What is one of the customer's responsibilities according to the AWS shared responsibility model?",
    options: [
      "Virtualization infrastructure",
      "Network infrastructure",
      "Application security",
      "Physical security of hardware",
    ],
    correctAnswers: [2],
    explanation:
      "Customers are responsible for securing their applications in the AWS Cloud, including code security, access management, and proper configuration. AWS manages the underlying infrastructure, including virtualization (A), network (B), and physical security (D). More info: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-892", uuidv5.URL),
    text: "What helps a company provide a lower latency experience to its users globally?",
    options: [
      "Using an AWS Region that is central to all users",
      "Using a second Availability Zone in the AWS Region that is being used",
      "Enabling caching in the AWS Region that is being used",
      "Using edge locations to put content closer to all users",
    ],
    correctAnswers: [3],
    explanation:
      "Edge locations, provided by Amazon CloudFront, cache content closer to users worldwide, reducing latency and improving user experience. Central regions (A) and additional AZs (B) do not address global latency. Caching in a single region (C) does not help users far from that region. More info: https://aws.amazon.com/cloudfront/features/",
  },
  {
    id: uuidv5("aws-question-893", uuidv5.URL),
    text: "How can the AWS Cloud increase user workforce productivity after migration from an on-premises data center?",
    options: [
      "Users do not have to wait for infrastructure provisioning.",
      "The AWS Cloud infrastructure is much faster than an on-premises data center infrastructure.",
      "AWS takes over application configuration management on behalf of users.",
      "Users do not need to address security and compliance issues.",
    ],
    correctAnswers: [0],
    explanation:
      "With AWS, resources can be provisioned instantly, eliminating long wait times for hardware procurement and setup, which increases productivity. AWS infrastructure speed (B) depends on configuration, not inherent speed. Application management (C) and security (D) remain customer responsibilities. More info: https://aws.amazon.com/benefits/",
  },
  {
    id: uuidv5("aws-question-894", uuidv5.URL),
    text: "Which AWS service provides a quick and automated way to create and manage AWS accounts?",
    options: [
      "AWS QuickSight",
      "Amazon Lightsail",
      "AWS Organizations",
      "Amazon Connect",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Organizations allows centralized management and automation of AWS account creation, governance, and billing. QuickSight (A) is for analytics, Lightsail (B) is for simple cloud hosting, and Connect (D) is for contact centers. More info: https://aws.amazon.com/organizations/",
  },
  {
    id: uuidv5("aws-question-895", uuidv5.URL),
    text: "Which Amazon RDS feature can be used to achieve high availability?",
    options: [
      "Multiple Availability Zones",
      "Amazon Reserved Instances",
      "Provisioned IOPS storage",
      "Enhanced monitoring",
    ],
    correctAnswers: [0],
    explanation:
      "Multi-AZ deployments in Amazon RDS provide high availability by automatically replicating data to a standby instance in a different Availability Zone. Reserved Instances (B) are for cost savings, Provisioned IOPS (C) is for performance, and Enhanced monitoring (D) is for metrics. More info: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html",
  },
  {
    id: uuidv5("aws-question-896", uuidv5.URL),
    text: "Where should users report that AWS resources are being used for malicious purposes?",
    options: [
      "AWS Abuse team",
      "AWS Shield",
      "AWS Support",
      "AWS Developer Forums",
    ],
    correctAnswers: [0],
    explanation:
      "The AWS Abuse team handles reports of AWS resources being used for malicious or abusive activities. AWS Shield (B) is for DDoS protection, Support (C) is for technical issues, and Developer Forums (D) are for community discussions. More info: https://aws.amazon.com/premiumsupport/abuse-case-reporting/",
  },
  {
    id: uuidv5("aws-question-897", uuidv5.URL),
    text: "Which AWS service needs to be enabled to track all user account changes within the AWS Management Console?",
    options: [
      "AWS CloudTrail",
      "Amazon Simple Notification Service (Amazon SNS)",
      "VPC Flow Logs",
      "AWS CloudHSM",
    ],
    correctAnswers: [0],
    explanation:
      "AWS CloudTrail records all API activity and user actions in the AWS account, enabling governance, compliance, and auditing. SNS (B) is for notifications, VPC Flow Logs (C) track network traffic, and CloudHSM (D) is for hardware security modules. More info: https://aws.amazon.com/cloudtrail/",
  },
  {
    id: uuidv5("aws-question-898", uuidv5.URL),
    text: "What is an AWS Cloud design best practice?",
    options: [
      "Tight coupling of components",
      "Single point of failure",
      "High availability",
      "Overprovisioning of resources",
    ],
    correctAnswers: [2],
    explanation:
      "High availability is a best practice in AWS Cloud design, ensuring services remain operational even during failures by distributing workloads. Tight coupling (A) and single points of failure (B) reduce reliability, and overprovisioning (D) increases costs. More info: https://aws.amazon.com/architecture/well-architected/",
  },
  {
    id: uuidv5("aws-question-899", uuidv5.URL),
    text: "Why is AWS more economical than traditional data centers for applications with varying compute workloads?",
    options: [
      "Amazon Elastic Compute Cloud (Amazon EC2) costs are billed on a monthly basis.",
      "Customers retain full administrative access to their Amazon EC2 instances.",
      "Amazon EC2 instances can be launched on-demand when needed.",
      "Customers can permanently run enough instances to handle peak workloads.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS allows dynamic scaling with EC2 instances, enabling cost savings by launching instances only when needed. Monthly billing (A) is not the default, full admin access (B) is unrelated to cost, and running instances permanently (D) is not economical. More info: https://aws.amazon.com/ec2/",
  },
  {
    id: uuidv5("aws-question-900", uuidv5.URL),
    text: "Which AWS service would simplify migration of a database to AWS?",
    options: [
      "AWS Storage Gateway",
      "AWS Database Migration Service (AWS DMS)",
      "Amazon Elastic Compute Cloud (Amazon EC2)",
      "Amazon AppStream 2.0",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Database Migration Service (AWS DMS) helps migrate databases to AWS with minimal downtime by supporting continuous data replication. Storage Gateway (A) is for hybrid storage, EC2 (C) is for compute, and AppStream 2.0 (D) is for application streaming. More info: https://aws.amazon.com/dms/",
  },
];

export const exam19: Question[] = [
  {
    id: uuidv5("aws-question-901", uuidv5.URL),
    text: "Which AWS offering enables customers to find, buy, and immediately start using software solutions in their AWS environment?",
    options: ["AWS Config", "AWS OpsWorks", "AWS SDK", "AWS Marketplace"],
    correctAnswers: [3],
    explanation:
      "AWS Marketplace allows customers to find, buy, and immediately start using software solutions in their AWS environment. AWS Config (A) is for resource configuration tracking, OpsWorks (B) is for configuration management, and the AWS SDK (C) is for application development, not for buying software. More info: https://aws.amazon.com/marketplace/",
  },
  {
    id: uuidv5("aws-question-902", uuidv5.URL),
    text: "Which AWS networking service enables a company to create a virtual network within AWS?",
    options: [
      "AWS Config",
      "Amazon Route 53",
      "AWS Direct Connect",
      "Amazon Virtual Private Cloud (Amazon VPC)",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon VPC enables a company to create a virtual network within AWS. AWS Config (A) is for configuration tracking, Route 53 (B) is DNS, and Direct Connect (C) is for dedicated network connections, not for creating virtual networks. More info: https://aws.amazon.com/vpc/",
  },
  {
    id: uuidv5("aws-question-903", uuidv5.URL),
    text: "Which of the following is AWS's responsibility under the AWS shared responsibility model?",
    options: [
      "Configuring third-party applications",
      "Maintaining physical hardware",
      "Securing application access and data",
      "Managing custom Amazon Machine Images (AMIs)",
    ],
    correctAnswers: [1],
    explanation:
      "AWS is responsible for maintaining physical hardware as part of its shared responsibility model. Configuring third-party applications (A), securing application access and data (C), and managing custom AMIs (D) are customer responsibilities. More info: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-904", uuidv5.URL),
    text: "Which component of AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?",
    options: [
      "AWS Regions",
      "AWS edge locations",
      "AWS Availability Zones",
      "Amazon Virtual Private Cloud (Amazon VPC)",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon CloudFront uses AWS edge locations to ensure low-latency delivery. Regions (A) and Availability Zones (C) are broader infrastructure components, and VPC (D) is for networking, not content delivery. More info: https://aws.amazon.com/cloudfront/",
  },
  {
    id: uuidv5("aws-question-905", uuidv5.URL),
    text: "How would a system administrator add an additional layer of login security to a user's AWS Management Console?",
    options: [
      "Use AWS Cloud Directory",
      "Audit AWS Identity and Access Management (IAM) roles",
      "Enable Multi-Factor Authentication",
      "Enable AWS CloudTrail",
    ],
    correctAnswers: [2],
    explanation:
      "Enabling Multi-Factor Authentication (MFA) adds an additional layer of security to AWS Management Console logins. Cloud Directory (A) is for directory management, auditing IAM roles (B) does not add login security, and CloudTrail (D) is for logging API calls. More info: https://aws.amazon.com/iam/features/mfa/",
  },
  {
    id: uuidv5("aws-question-906", uuidv5.URL),
    text: "Which service can identify the user that made the API call when an Amazon Elastic Compute Cloud (Amazon EC2) instance is terminated?",
    options: [
      "Amazon CloudWatch",
      "AWS CloudTrail",
      "AWS X-Ray",
      "AWS Identity and Access Management (AWS IAM)",
    ],
    correctAnswers: [1],
    explanation:
      "AWS CloudTrail records API calls and can identify the user that made a request, such as terminating an EC2 instance. CloudWatch (A) is for monitoring, X-Ray (C) is for tracing application requests, and IAM (D) manages permissions but does not log API calls. More info: https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html",
  },
  {
    id: uuidv5("aws-question-907", uuidv5.URL),
    text: "Which service would you use to send alerts based on Amazon CloudWatch alarms?",
    options: [
      "Amazon Simple Notification Service (Amazon SNS)",
      "AWS CloudTrail",
      "AWS Trusted Advisor",
      "Amazon Route 53",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon SNS is used to send alerts based on Amazon CloudWatch alarms. CloudTrail (B) is for logging, Trusted Advisor (C) is for best practices, and Route 53 (D) is DNS. More info: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html",
  },
  {
    id: uuidv5("aws-question-908", uuidv5.URL),
    text: "Where can a customer find information about prohibited actions on AWS infrastructure?",
    options: [
      "AWS Trusted Advisor",
      "AWS Identity and Access Management (IAM)",
      "AWS Billing Console",
      "AWS Acceptable Use Policy",
    ],
    correctAnswers: [3],
    explanation:
      "AWS Acceptable Use Policy (AUP) provides details about prohibited actions on AWS infrastructure. Trusted Advisor (A) is for best practices, IAM (B) is for access management, and the Billing Console (C) is for billing information. More info: https://aws.amazon.com/aup/",
  },
  {
    id: uuidv5("aws-question-909", uuidv5.URL),
    text: "Which of the following is an example of how moving to the AWS Cloud reduces upfront cost?",
    options: [
      "By replacing large variable costs with lower capital investments",
      "By replacing large capital investments with lower variable costs",
      "By allowing the provisioning of compute and storage at a fixed level to meet peak demand",
      "By replacing the repeated scaling of virtual servers with a simpler fixed-scale model",
    ],
    correctAnswers: [1],
    explanation:
      "AWS replaces large capital investments with lower variable costs, allowing users to pay only for what they use. The other options either reverse the cost model or do not address the pay-as-you-go benefit. More info: https://aws.amazon.com/economics/",
  },
  {
    id: uuidv5("aws-question-910", uuidv5.URL),
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
      "AWS Auto Scaling (A) ensures that the number of EC2 instances can increase or decrease based on demand, improving availability. Distributing resources across multiple Availability Zones (C) ensures that if one zone fails, the application remains available. VPC subnet ACLs (B) are for network security, not availability. AWS SMS (D) is for migration, not high availability. Distributing across points of presence (E) is for content delivery, not application availability. More info: https://d1.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf",
  },
  {
    id: uuidv5("aws-question-911", uuidv5.URL),
    text: "Which cloud design principle aligns with AWS Cloud best practices?",
    options: [
      "Create fixed dependencies among application components",
      "Aggregate services on a single instance",
      "Deploy applications in a single Availability Zone",
      "Distribute the compute load across multiple resources",
    ],
    correctAnswers: [3],
    explanation:
      "Distributing the compute load across multiple resources is a core AWS best practice, improving availability, scalability, and fault tolerance. Fixed dependencies (A), aggregating services (B), and single AZ deployment (C) all increase risk and reduce resilience. More info: https://d1.awsstatic.com/whitepapers/architecture/AWS_Well-Architected_Framework.pdf",
  },
  {
    id: uuidv5("aws-question-912", uuidv5.URL),
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
      "Requiring periodic password changes and preventing password reuse are IAM best practices that help protect against compromised credentials. Using the same password elsewhere (C), storing passwords in raw text (D), and disabling MFA (E) all weaken security. More info: https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html",
  },
  {
    id: uuidv5("aws-question-913", uuidv5.URL),
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
      "AWS Professional Services and APN Partners provide hands-on migration support. AWS Marketplace (A) is for software, AWS Support (B) does not provide hands-on migration, and Amazon Connect (E) is a contact center service, not a migration tool. More info: https://aws.amazon.com/solutions/aws-landing-zone/",
  },
  {
    id: uuidv5("aws-question-914", uuidv5.URL),
    text: "How does the AWS Enterprise Support Concierge team help users?",
    options: [
      "Supporting application development",
      "Providing architecture guidance",
      "Answering billing and account inquires",
      "Answering questions regarding technical support cases",
    ],
    correctAnswers: [2],
    explanation:
      "The AWS Enterprise Support Concierge team specializes in billing and account inquiries. Application development (A), architecture guidance (B), and technical support (D) are handled by other AWS teams. More info: https://aws.amazon.com/premiumsupport/plans/enterprise/",
  },
  {
    id: uuidv5("aws-question-915", uuidv5.URL),
    text: "An application designed to span multiple Availability Zones is described as:",
    options: [
      "being highly available",
      "having global reach",
      "using an economy of scale",
      "having elasticity",
    ],
    correctAnswers: [0],
    explanation:
      "Spanning multiple Availability Zones makes an application highly available, as it can withstand failures in one zone. Global reach (B) refers to multi-region, economy of scale (C) is about cost, and elasticity (D) is about scaling. More info: https://aws.amazon.com/about-aws/global-infrastructure/availability-zones/",
  },
  {
    id: uuidv5("aws-question-916", uuidv5.URL),
    text: "A new service using AWS must be highly available. Yet, due to regulatory requirements, all of its Amazon EC2 instances must be located in a single geographic area. According to best practices, to meet these requirements, the EC2 instances must be placed in at least two:",
    options: [
      "AWS Regions",
      "Availability Zones",
      "subnets",
      "placement groups",
    ],
    correctAnswers: [1],
    explanation:
      "To achieve high availability within a single geographic area, EC2 instances should be distributed across multiple Availability Zones in one region. Multiple regions (A) would violate the geographic restriction, subnets (C) and placement groups (D) do not guarantee fault isolation. More info: https://aws.amazon.com/ec2/faqs/",
  },
  {
    id: uuidv5("aws-question-917", uuidv5.URL),
    text: "Which AWS tool is used to compare the cost of running an application on-premises to running the application in the AWS Cloud?",
    options: [
      "AWS Trusted Advisor",
      "AWS Simple Monthly Calculator",
      "AWS Pricing Calculator",
      "Cost Explorer",
    ],
    correctAnswers: [2],
    explanation:
      "The AWS Pricing Calculator (formerly TCO Calculator) helps compare on-premises and AWS costs. Trusted Advisor (A) is for best practices, Simple Monthly Calculator (B) is deprecated, and Cost Explorer (D) is for analyzing AWS spend. More info: https://aws.amazon.com/tco-calculator/",
  },
  {
    id: uuidv5("aws-question-918", uuidv5.URL),
    text: "A company has multiple AWS accounts within AWS Organizations and wants to apply the Amazon EC2 Reserved Instances benefit to a single account only. Which action should be taken?",
    options: [
      "Purchase the Reserved Instances from the master payer account and turn off Reserved Instance sharing.",
      "Enable billing alerts in the AWS Billing and Cost Management console.",
      "Purchase the Reserved Instances in individual linked accounts and turn off Reserved Instance sharing from the payer level.",
      "Enable Reserved Instance sharing in the AWS Billing and Cost Management console.",
    ],
    correctAnswers: [0],
    explanation:
      "To restrict Reserved Instance benefits to a single account, purchase from the master payer and disable sharing. The other options either do not restrict sharing or are unrelated to Reserved Instance allocation. More info: https://aws.amazon.com/premiumsupport/knowledge-center/ec2-ri-consolidated-billing/",
  },
  {
    id: uuidv5("aws-question-919", uuidv5.URL),
    text: "Which situation should be reported to the AWS Abuse team?",
    options: [
      "An Availability Zone has a service disruption",
      "An intrusion attempt is made from an AWS IP address",
      "A user has trouble accessing an Amazon S3 bucket from an AWS IP address",
      "A user needs to change payment methods due to a compromise",
    ],
    correctAnswers: [1],
    explanation:
      "Intrusion attempts originating from AWS IP addresses should be reported to the AWS Abuse team. Service disruptions (A) are handled by AWS support, S3 access issues (C) are not abuse, and payment method changes (D) are a billing issue. More info: https://aws.amazon.com/premiumsupport/knowledge-center/report-aws-abuse/",
  },
  {
    id: uuidv5("aws-question-920", uuidv5.URL),
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
      "AWS Global Accelerator and Amazon CloudFront both help deliver content globally with low latency. Global Accelerator routes users to optimal endpoints, and CloudFront caches content at edge locations. Application Load Balancer (A) is for distributing traffic within a region, Direct Connect (C) is for private connectivity, and Lambda (E) is for compute, not content delivery. More info: https://aws.amazon.com/cloudfront/faqs/",
  },
  {
    id: uuidv5("aws-question-921", uuidv5.URL),
    text: "Which AWS service or resource is serverless?",
    options: [
      "AWS Lambda",
      "Amazon EC2 instances",
      "Amazon Lightsail",
      "Amazon ElastiCache",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Lambda is a serverless compute service that allows users to run code without provisioning or managing servers. EC2 (B), Lightsail (C), and ElastiCache (D) all require server management. More info: https://aws.amazon.com/lambda/",
  },
  {
    id: uuidv5("aws-question-922", uuidv5.URL),
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
      "Amazon VPC includes subnets, which segment the network, and internet gateways, which provide internet access. Objects (A) and buckets (C) are S3 concepts, and access keys (E) are for authentication. More info: https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Components.html",
  },
  {
    id: uuidv5("aws-question-923", uuidv5.URL),
    text: "AWS Budgets can be used to:",
    options: [
      "prevent a given user from creating a resource",
      "send an alert when the utilization of Reserved Instances drops below a certain percentage",
      "set resource limits in AWS accounts to prevent overspending",
      "split an AWS bill across multiple forms of payment",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Budgets helps users monitor and set cost limits to prevent overspending. It does not prevent resource creation (A), send RI utilization alerts (B), or split bills (D). More info: https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html",
  },
  {
    id: uuidv5("aws-question-924", uuidv5.URL),
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
      "Enabling MFA and enforcing password policies both enhance AWS Management Console security. Secrets Manager (A) is for storing secrets, Certificate Manager (B) is for SSL/TLS, and security groups (D) are for network security. More info: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa_enable_virtual.html",
  },
  {
    id: uuidv5("aws-question-925", uuidv5.URL),
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
      "Trusted Advisor checks S3 bucket permissions and whether MFA is enabled for the root user. It does not check for outages (B), software patches (D), or user count (E). More info: https://aws.amazon.com/premiumsupport/technology/trusted-advisor/best-practice-checklist/",
  },
  {
    id: uuidv5("aws-question-926", uuidv5.URL),
    text: "Which functions can users perform using AWS KMS?",
    options: [
      "Create and manage AWS access keys for the AWS account root user",
      "Create and manage AWS access keys for an AWS account IAM user",
      "Create and manage keys for encryption and decryption of data",
      "Create and manage keys for multi-factor authentication",
    ],
    correctAnswers: [2],
    explanation:
      "AWS KMS is used to create and manage cryptographic keys for encrypting and decrypting data. Access keys (A, B) are managed in IAM, and MFA keys (D) are not managed by KMS. More info: https://docs.aws.amazon.com/kms/latest/developerguide/overview.html",
  },
  {
    id: uuidv5("aws-question-927", uuidv5.URL),
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
      "Trusted Advisor provides cost optimization and security recommendations, such as identifying overly permissive access. It does not identify software vulnerabilities (A), auto-correct issues (D), or alert on EC2 compromise (E). More info: https://aws.amazon.com/premiumsupport/technology/trusted-advisor/best-practice-checklist/",
  },
  {
    id: uuidv5("aws-question-928", uuidv5.URL),
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
      "AWS manages infrastructure maintenance and capacity planning for physical servers, freeing customers from hardware management. Application security (B), app development (D), and cost planning (E) are customer responsibilities. More info: https://aws.amazon.com/compliance/data-center/controls/",
  },
  {
    id: uuidv5("aws-question-929", uuidv5.URL),
    text: "A user deploys an Amazon RDS DB instance in multiple Availability Zones. This strategy involves which pillar of the AWS Well-Architected Framework?",
    options: [
      "Performance efficiency",
      "Reliability",
      "Cost optimization",
      "Security",
    ],
    correctAnswers: [1],
    explanation:
      "Deploying RDS across multiple Availability Zones increases reliability by providing redundancy and failover. Performance efficiency (A), cost optimization (C), and security (D) are not the primary focus. More info: https://aws.amazon.com/architecture/well-architected/",
  },
  {
    id: uuidv5("aws-question-930", uuidv5.URL),
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
      "AWS VPN and AWS Direct Connect both provide secure connectivity between on-premises networks and AWS. Amazon Connect (B) is a contact center, Cognito (C) is for authentication, and Managed Services (E) is for operations. More info: https://aws.amazon.com/directconnect/ and https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html",
  },
  {
    id: uuidv5("aws-question-931", uuidv5.URL),
    text: "Which AWS service is used to pay AWS bills, and monitor usage and budget costs?",
    options: [
      "AWS Billing and Cost Management",
      "Consolidated billing",
      "Amazon CloudWatch",
      "Amazon QuickSight",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Billing and Cost Management is the service for handling payments, monitoring usage, and setting budget alerts. Consolidated billing (B) is a feature for combining accounts, CloudWatch (C) is for monitoring resources, and QuickSight (D) is for data visualization. More info: https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-what-is.html",
  },
  {
    id: uuidv5("aws-question-932", uuidv5.URL),
    text: "Which element of the AWS global infrastructure consists of one or more discrete data centers, each with redundant power, networking, and connectivity, which are housed in separate facilities?",
    options: [
      "AWS Regions",
      "Availability Zones",
      "Edge locations",
      "Amazon CloudFront",
    ],
    correctAnswers: [1],
    explanation:
      "Availability Zones consist of one or more discrete data centers with redundancy. Regions (A) are collections of AZs, edge locations (C) are for content delivery, and CloudFront (D) is a CDN service. More info: https://docs.aws.amazon.com/whitepapers/latest/aws-overview/global-infrastructure.html",
  },
  {
    id: uuidv5("aws-question-933", uuidv5.URL),
    text: "Which Amazon VPC feature enables users to capture information about the IP traffic that reaches Amazon EC2 instances?",
    options: [
      "Security groups",
      "Elastic network interfaces",
      "Network ACLs",
      "VPC Flow Logs",
    ],
    correctAnswers: [3],
    explanation:
      "VPC Flow Logs capture IP traffic information for analysis. Security groups (A) and network ACLs (C) control traffic but do not log it, and elastic network interfaces (B) provide connectivity. More info: https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html",
  },
  {
    id: uuidv5("aws-question-934", uuidv5.URL),
    text: "Which AWS service can be used to automatically scale an application up and down without making capacity planning decisions?",
    options: [
      "Amazon AutoScaling",
      "Amazon Redshift",
      "AWS CloudTrail",
      "AWS Lambda",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon AutoScaling automatically adjusts EC2 capacity based on demand. Redshift (B) is a data warehouse, CloudTrail (C) is for logging, and Lambda (D) is serverless but not for instance-based auto-scaling. More info: https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html",
  },
  {
    id: uuidv5("aws-question-935", uuidv5.URL),
    text: "AWS Enterprise Support users have access to which service or feature that is not available to users with other AWS Support plans?",
    options: [
      "AWS Trusted Advisor",
      "AWS Support case",
      "Concierge team",
      "Amazon Connect",
    ],
    correctAnswers: [2],
    explanation:
      "The Concierge team is exclusive to Enterprise Support. Trusted Advisor (A) and support cases (B) are available in other plans, and Amazon Connect (D) is a contact center service. More info: https://aws.amazon.com/premiumsupport/plans/",
  },
  {
    id: uuidv5("aws-question-936", uuidv5.URL),
    text: "A company wants to migrate a MySQL database to AWS but does not have the budget for Database Administrators to handle routine tasks including provisioning, patching, and performing backups. Which AWS service will support this use case?",
    options: [
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon DocumentDB",
      "Amazon ElastiCache",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon RDS automates database management tasks for MySQL and other engines. DynamoDB (B) is NoSQL, DocumentDB (C) is for JSON, and ElastiCache (D) is for caching. More info: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html",
  },
  {
    id: uuidv5("aws-question-937", uuidv5.URL),
    text: "A company wants to expand from one AWS Region into a second AWS Region. What does the company need to do to start supporting the new Region?",
    options: [
      "Contact an AWS Account Manager to sign a new contract",
      "Move an Availability Zone to the new Region",
      "Begin deploying resources in the second Region",
      "Download the AWS Management Console for the new Region",
    ],
    correctAnswers: [2],
    explanation:
      "To use a new AWS Region, simply deploy resources there. No new contract (A), moving AZs (B), or new console (D) is required. More info: https://docs.aws.amazon.com/general/latest/gr/rande.html",
  },
  {
    id: uuidv5("aws-question-938", uuidv5.URL),
    text: "A user must meet compliance and software licensing requirements that state a workload must be hosted on a physical server. Which Amazon EC2 instance pricing option will meet these requirements?",
    options: [
      "Dedicated Hosts",
      "Dedicated Instances",
      "Spot Instances",
      "Reserved Instances",
    ],
    correctAnswers: [0],
    explanation:
      "Dedicated Hosts provide physical servers for a single customer, meeting compliance and licensing needs. Dedicated Instances (B) do not guarantee physical isolation, Spot (C) and Reserved (D) are for pricing, not physical control. More info: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-overview.html",
  },
  {
    id: uuidv5("aws-question-939", uuidv5.URL),
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
      "AWS KMS and AWS CloudHSM both generate and manage encryption keys. Macie (A) is for data classification, Certificate Manager (B) is for SSL/TLS, and Secrets Manager (D) is for storing secrets. More info: https://docs.aws.amazon.com/kms/latest/developerguide/overview.html and https://docs.aws.amazon.com/cloudhsm/latest/userguide/what-is.html",
  },
  {
    id: uuidv5("aws-question-940", uuidv5.URL),
    text: "A company is planning to migrate from on-premises to the AWS Cloud. Which AWS tool or service provides detailed reports on estimated cost savings after migration?",
    options: [
      "AWS Total Cost of Ownership (TCO) Calculator",
      "Cost Explorer",
      "AWS Budgets",
      "AWS Migration Hub",
    ],
    correctAnswers: [0],
    explanation:
      "The AWS TCO Calculator estimates cost savings from migration. Cost Explorer (B) analyzes AWS usage, Budgets (C) sets cost alerts, and Migration Hub (D) tracks migration progress. More info: https://aws.amazon.com/tco-calculator/",
  },
  {
    id: uuidv5("aws-question-941", uuidv5.URL),
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
      "AWS Professional Services provides migration guidance and best practices, while the AWS Partner Network (APN) connects customers with certified partners for migration support. Trusted Advisor (A) and Systems Manager (C) focus on optimization and management, not migration evaluation. Secrets Manager (E) is for credential storage. More info: https://aws.amazon.com/professional-services/",
  },
  {
    id: uuidv5("aws-question-942", uuidv5.URL),
    text: "Which AWS service helps users meet contractual and regulatory compliance requirements for data security by using dedicated hardware appliances within the AWS Cloud?",
    options: [
      "AWS Secrets Manager",
      "AWS CloudHSM",
      "AWS Key Management Service (AWS KMS)",
      "AWS Directory Service",
    ],
    correctAnswers: [1],
    explanation:
      "AWS CloudHSM provides dedicated hardware security modules for secure key management, meeting compliance requirements. KMS (C) is managed key management but not dedicated hardware. Secrets Manager (A) stores credentials, and Directory Service (D) manages identities. More info: https://aws.amazon.com/cloudhsm/faqs/",
  },
  {
    id: uuidv5("aws-question-943", uuidv5.URL),
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
      "Customers are responsible for configuring security groups and ACLs, and for patching the OS of EC2 instances. AWS manages physical infrastructure, RDS OS patching, and decommissioning storage devices. More info: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-944", uuidv5.URL),
    text: "Which AWS service is suitable for an event-driven workload?",
    options: [
      "Amazon EC2",
      "AWS Elastic Beanstalk",
      "AWS Lambda",
      "Amazon Lumberyard",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Lambda is designed for event-driven workloads, running code in response to triggers without server management. EC2 (A) requires manual scaling, Elastic Beanstalk (B) is for web app deployment, and Lumberyard (D) is a game engine. More info: https://aws.amazon.com/lambda/",
  },
  {
    id: uuidv5("aws-question-945", uuidv5.URL),
    text: "What is a value proposition of the AWS Cloud?",
    options: [
      "AWS is responsible for security in the AWS Cloud",
      "No long-term contract is required",
      "Provision new servers in days",
      "AWS manages user applications in the AWS Cloud",
    ],
    correctAnswers: [1],
    explanation:
      "A key value proposition of AWS is pay-as-you-go pricing with no long-term contracts. Security is shared responsibility (A), provisioning is near-instant (C), and AWS does not manage user applications (D). More info: https://d1.awsstatic.com/whitepapers/aws-whitepaper-business-value-of-aws.pdf",
  },
  {
    id: uuidv5("aws-question-946", uuidv5.URL),
    text: "What is a characteristic of Amazon S3 cross-region replication?",
    options: [
      "Both source and destination S3 buckets must have versioning disabled",
      "The source and destination S3 buckets cannot be in different AWS Regions",
      "S3 buckets configured for cross-region replication can be owned by a single AWS account or by different accounts",
      "The source S3 bucket owner must have the source and destination AWS Regions disabled for their account",
    ],
    correctAnswers: [2],
    explanation:
      "S3 cross-region replication supports buckets owned by different accounts. Versioning must be enabled (A is incorrect), buckets must be in different regions (B is incorrect), and regions must be enabled (D is incorrect). More info: https://docs.aws.amazon.com/AmazonS3/latest/dev/replication.html",
  },
  {
    id: uuidv5("aws-question-947", uuidv5.URL),
    text: "What is a user responsible for when running an application in the AWS Cloud?",
    options: [
      "Managing physical hardware",
      "Updating the underlying hypervisor",
      "Providing a list of users approved for data center access",
      "Managing application software updates",
    ],
    correctAnswers: [3],
    explanation:
      "Users are responsible for managing application software updates. AWS manages physical hardware, hypervisors, and data center access. More info: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-948", uuidv5.URL),
    text: "A company that does business online needs to quickly deliver new functionality in an iterative manner, minimizing the time to market. Which AWS Cloud feature can provide this?",
    options: ["Elasticity", "High availability", "Agility", "Reliability"],
    correctAnswers: [2],
    explanation:
      "Agility enables fast iteration and deployment of new features. Elasticity (A) is about scaling, high availability (B) is about uptime, and reliability (D) is about system dependability. More info: https://aws.amazon.com/devops/partner-solutions/",
  },
  {
    id: uuidv5("aws-question-949", uuidv5.URL),
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
      "AWS Cost and Usage reports provide detailed cost data, and CloudWatch billing alerts help track expenses. Product pages (B) provide information, the Simple Monthly Calculator (C) estimates costs, and the Price List API (E) retrieves pricing data. More info: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html",
  },
  {
    id: uuidv5("aws-question-950", uuidv5.URL),
    text: "Amazon Route 53 enables users to:",
    options: [
      "Encrypt data in transit",
      "Register DNS domain names",
      "Generate and manage SSL certificates",
      "Establish a dedicated network connection to AWS",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon Route 53 is a DNS service that allows users to register and manage domain names. It does not provide encryption, SSL certificate management, or dedicated networking. More info: https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html",
  },
];

const exam20: Question[] = [
  {
    id: uuidv5("aws-question-951", uuidv5.URL),
    text: "Which AWS service helps identify malicious or unauthorized activities in AWS accounts and workloads?",
    options: [
      "Amazon Rekognition",
      "AWS Trusted Advisor",
      "Amazon GuardDuty",
      "Amazon CloudWatch",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon GuardDuty is a threat detection service that continuously monitors for malicious or unauthorized behavior to help protect your AWS accounts and workloads. Amazon Rekognition (A) is for image and video analysis, not security monitoring. AWS Trusted Advisor (B) provides recommendations for cost optimization and security best practices, but does not actively detect threats. Amazon CloudWatch (D) is for monitoring metrics and logs, not specifically for threat detection. More info: https://aws.amazon.com/guardduty/",
  },
  {
    id: uuidv5("aws-question-952", uuidv5.URL),
    text: "A company wants to try a third-party ecommerce solution before deciding to use it long term. Which AWS service or tool will support this effort?",
    options: [
      "AWS Marketplace",
      "AWS Partner Network (APN)",
      "AWS Managed Services",
      "AWS Service Catalog",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Marketplace is a curated digital catalog that makes it easy for customers to find, test, buy, and deploy third-party software that runs on AWS. The AWS Partner Network (B) connects customers with partners but does not provide direct trial access. AWS Managed Services (C) helps with operational support, not software trials. AWS Service Catalog (D) is for managing approved products, not for testing third-party solutions. More info: https://aws.amazon.com/marketplace/",
  },
  {
    id: uuidv5("aws-question-953", uuidv5.URL),
    text: "Which AWS service is a managed NoSQL database?",
    options: [
      "Amazon Redshift",
      "Amazon DynamoDB",
      "Amazon Aurora",
      "Amazon RDS for MariaDB",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon DynamoDB is a fully managed NoSQL database service. Amazon Redshift (A) is a data warehouse, not a NoSQL database. Amazon Aurora (C) and Amazon RDS for MariaDB (D) are managed relational databases, not NoSQL. More info: https://aws.amazon.com/dynamodb/",
  },
  {
    id: uuidv5("aws-question-954", uuidv5.URL),
    text: "Which AWS service should be used to create a billing alarm?",
    options: [
      "AWS Trusted Advisor",
      "AWS CloudTrail",
      "Amazon CloudWatch",
      "Amazon QuickSight",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon CloudWatch allows you to create billing alarms based on your estimated charges. AWS Trusted Advisor (A) provides optimization insights, not billing alarms. AWS CloudTrail (B) logs API calls, not billing events. Amazon QuickSight (D) is for data visualization, not billing alarms. More info: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html",
  },
  {
    id: uuidv5("aws-question-955", uuidv5.URL),
    text: "A company is hosting a web application in a Docker container on Amazon EC2. AWS is responsible for which of the following tasks?",
    options: [
      "Scaling the web application and services developed with Docker",
      "Provisioning or scheduling containers to run on clusters and maintain their availability",
      "Performing hardware maintenance in the AWS facilities that run the AWS Cloud",
      "Managing the guest operating system, including updates and security patches",
    ],
    correctAnswers: [2],
    explanation:
      "AWS is responsible for the hardware maintenance of the infrastructure running EC2 instances. Scaling (A), container orchestration (B), and OS management (D) are the customer's responsibility when using EC2. More info: https://aws.amazon.com/compute/ec2/",
  },
  {
    id: uuidv5("aws-question-956", uuidv5.URL),
    text: "Users are reporting latency when connecting to a website with a global customer base. Which AWS service will improve the customer experience by reducing latency?",
    options: [
      "Amazon CloudFront",
      "AWS Direct Connect",
      "Amazon EC2 Auto Scaling",
      "AWS Transit Gateway",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon CloudFront is a content delivery network (CDN) that helps deliver data with low latency to users worldwide. AWS Direct Connect (B) is for dedicated network connections, not global content delivery. EC2 Auto Scaling (C) manages compute resources, not latency. AWS Transit Gateway (D) is for network management, not content delivery. More info: https://aws.amazon.com/cloudfront/",
  },
  {
    id: uuidv5("aws-question-957", uuidv5.URL),
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
      "Best practices for AWS IAM include configuring a strong password policy to enhance account security and rotating access keys regularly to minimize exposure if compromised. Sharing credentials (B), using access keys for console login (C), and avoiding IAM roles (E) are insecure and against AWS best practices. More info: https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html",
  },
  {
    id: uuidv5("aws-question-958", uuidv5.URL),
    text: "Which AWS feature or service can be used to capture information about incoming and outgoing traffic in an AWS VPC infrastructure?",
    options: [
      "AWS Config",
      "VPC Flow Logs",
      "AWS Trusted Advisor",
      "AWS CloudTrail",
    ],
    correctAnswers: [1],
    explanation:
      "VPC Flow Logs capture information about IP traffic going to and from network interfaces in your VPC. AWS Config (A) tracks configuration changes, not network traffic. AWS Trusted Advisor (C) offers best-practice checks, not traffic monitoring. AWS CloudTrail (D) records API calls, not network traffic. More info: https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html",
  },
  {
    id: uuidv5("aws-question-959", uuidv5.URL),
    text: "A company wants to use an AWS service to monitor the health of application endpoints, with the ability to route traffic to healthy regional endpoints to improve application availability. Which service will support these requirements?",
    options: [
      "Amazon Inspector",
      "Amazon CloudWatch",
      "AWS Global Accelerator",
      "Amazon CloudFront",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Global Accelerator monitors the health of your endpoints and routes traffic to healthy regional endpoints to improve availability and performance. Amazon Inspector (A) is for security assessment, not traffic routing. Amazon CloudWatch (B) provides metrics and monitoring, not endpoint health-based routing. Amazon CloudFront (D) is a CDN, not a global traffic manager. More info: https://aws.amazon.com/global-accelerator/",
  },
  {
    id: uuidv5("aws-question-960", uuidv5.URL),
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
      "Maintaining an inventory of AWS resources with AWS Config (A) and recording API calls with AWS CloudTrail (C) are key change management steps for reliability. Service limits (B) restrict resource creation, not change management. AWS Certificate Manager (D) is for SSL/TLS certificates, not resource whitelisting. Amazon GuardDuty (E) is for threat detection, not configuration validation. More info: https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html",
  },
  {{
    id: uuidv5("aws-question-961", uuidv5.URL),
    text: "Which service can be used to monitor and receive alerts for AWS account root user AWS Management Console sign-in events?",
    options: [
      "Amazon CloudWatch",
      "AWS Config",
      "AWS Trusted Advisor",
      "AWS IAM",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon CloudWatch can be configured to monitor and send alerts for root user AWS Management Console sign-in events by setting up metrics and alarms. This helps enhance account security by notifying administrators of potentially risky activity. AWS Config (B) tracks resource configuration changes, not sign-in events. AWS Trusted Advisor (C) provides best practice recommendations, not sign-in monitoring. AWS IAM (D) manages identities and permissions but does not provide alerting for sign-in events. More info: https://aws.amazon.com/blogs/mt/monitor-and-notify-on-aws-account-root-user-activity/",
  },
  {
    id: uuidv5("aws-question-962", uuidv5.URL),
    text: "Which design principle should be considered when architecting in the AWS Cloud?",
    options: [
      "Think of servers as non-disposable resources",
      "Use synchronous integration of services",
      "Design loosely coupled components",
      "Implement the least permissive rules for security groups",
    ],
    correctAnswers: [2],
    explanation:
      "Designing loosely coupled components ensures that individual components can fail or change without affecting the entire system, improving flexibility and scalability. Treating servers as non-disposable (A) is against cloud best practices, synchronous integration (B) reduces resilience, and least permissive security group rules (D) are important for security but not a core design principle. More info: https://aws.amazon.com/architecture/well-architected/",
  },
  {
    id: uuidv5("aws-question-963", uuidv5.URL),
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
      "AWS Snowball is used for large-scale data transfer by physically shipping secure devices, while AWS Database Migration Service (AWS DMS) helps migrate databases from on-premises to AWS with minimal downtime. AWS Lambda (B) is for serverless compute, ElastiCache (C) is for caching, and API Gateway (E) is for API management, none of which are designed for data migration. More info: https://aws.amazon.com/snowball/ and https://aws.amazon.com/dms/",
  },
  {
    id: uuidv5("aws-question-964", uuidv5.URL),
    text: "A batch workload takes 5 hours to finish on an Amazon EC2 instance. The amount of data to be processed doubles monthly and the processing time is proportional. What is the best cloud architecture to address this consistently growing demand?",
    options: [
      "Run the application on a bigger EC2 instance size.",
      "Switch to an EC2 instance family that better matches batch requirements.",
      "Distribute the application across multiple EC2 instances and run the workload in parallel.",
      "Run the application on a bare metal EC2 instance.",
    ],
    correctAnswers: [2],
    explanation:
      "Distributing the application across multiple EC2 instances and running workloads in parallel provides horizontal scaling, which effectively addresses exponential data growth. Increasing instance size (A) or changing instance family (B) has limits and won't scale indefinitely. Bare metal instances (D) do not solve the scaling problem. More info: https://aws.amazon.com/architecture/well-architected/",
  },
  {
    id: uuidv5("aws-question-965", uuidv5.URL),
    text: "Each department within a company has its own independent AWS account and its own payment method. New company leadership wants to centralize departmental governance and consolidate payments. How can this be achieved using AWS services or features?",
    options: [
      "Forward monthly invoices for each account. Then create IAM roles to allow cross-account access.",
      "Create a new AWS account. Then configure AWS Organizations and invite all existing accounts to join.",
      "Configure AWS Organizations in each of the existing accounts. Then link all accounts together.",
      "Use Cost Explorer to combine costs from all accounts. Then replicate IAM policies across accounts.",
    ],
    correctAnswers: [1],
    explanation:
      "Creating a new AWS account and configuring AWS Organizations allows centralized management of billing, accounts, and governance. Forwarding invoices (A) and replicating IAM policies (D) do not provide centralized control. Configuring AWS Organizations in each account (C) is not the recommended approach; a single organization should be used. More info: https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts.html",
  },
  {
    id: uuidv5("aws-question-966", uuidv5.URL),
    text: "The ability to horizontally scale Amazon EC2 instances based on demand is an example of which concept in the AWS Cloud value proposition?",
    options: ["Economy of scale", "Elasticity", "High availability", "Agility"],
    correctAnswers: [1],
    explanation:
      "Elasticity refers to the ability to scale resources up or down automatically based on demand, a core AWS benefit. Economy of scale (A) relates to cost savings, high availability (C) is about uptime, and agility (D) is about speed of change. More info: https://aws.amazon.com/what-is-cloud-computing/",
  },
  {
    id: uuidv5("aws-question-967", uuidv5.URL),
    text: "An ecommerce company anticipates a huge increase in web traffic for two very popular upcoming shopping holidays. Which AWS service or feature can be configured to dynamically adjust resources to meet this change in demand?",
    options: [
      "AWS CloudTrail",
      "Amazon EC2 Auto Scaling",
      "Amazon Forecast",
      "AWS Config",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon EC2 Auto Scaling dynamically adjusts resources to meet changes in demand, ensuring application availability and cost efficiency. CloudTrail (A) logs API activity, Forecast (C) predicts future demand but does not scale resources, and Config (D) tracks resource configuration. More info: https://aws.amazon.com/autoscaling/",
  },
  {
    id: uuidv5("aws-question-968", uuidv5.URL),
    text: "Which AWS service enables users to securely connect to AWS resources over the public internet?",
    options: [
      "Amazon VPC peering",
      "AWS Direct Connect",
      "AWS VPN",
      "Amazon Pinpoint",
    ],
    correctAnswers: [2],
    explanation:
      "AWS VPN allows secure connections to AWS resources over the public internet, enabling encrypted communication. VPC peering (A) is for private network connections between VPCs, Direct Connect (B) is a dedicated private connection, and Pinpoint (D) is for user engagement analytics. More info: https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html",
  },
  {
    id: uuidv5("aws-question-969", uuidv5.URL),
    text: "Which tool is used to forecast AWS spending?",
    options: [
      "AWS Trusted Advisor",
      "AWS Organizations",
      "Cost Explorer",
      "Amazon Inspector",
    ],
    correctAnswers: [2],
    explanation:
      "Cost Explorer allows users to visualize, analyze, and forecast AWS spending, helping with budget planning. Trusted Advisor (A) provides best practice checks, Organizations (B) manages accounts, and Inspector (D) is for security assessment. More info: https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-forecast.html",
  },
  {
    id: uuidv5("aws-question-970", uuidv5.URL),
    text: "A company is running an ecommerce application hosted in Europe. To decrease latency for users who access the website from other parts of the world, the company would like to cache frequently accessed static content closer to the users. Which AWS service will support these requirements?",
    options: [
      "Amazon ElastiCache",
      "Amazon CloudFront",
      "Amazon Elastic File System (Amazon EFS)",
      "Amazon Elastic Block Store (Amazon EBS)",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon CloudFront uses a global network of edge locations and regional edge caches to cache static content closer to users, reducing latency and improving performance. ElastiCache (A) is for in-memory caching within AWS, EFS (C) and EBS (D) are storage services, not global content delivery networks. More info: https://aws.amazon.com/cloudfront/faqs/",
  },
  {
    id: uuidv5("aws-question-971", uuidv5.URL),
    text: "Which of the following is a component of the AWS Global Infrastructure?",
    options: [
      "Amazon Alexa",
      "AWS Regions",
      "Amazon Lightsail",
      "AWS Organizations",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Regions are fundamental components of the AWS Global Infrastructure, consisting of multiple, physically separated, and isolated Availability Zones. Amazon Alexa (A) and Amazon Lightsail (C) are AWS services, not infrastructure components. AWS Organizations (D) is an account management service, not part of the infrastructure. More info: https://aws.amazon.com/about-aws/global-infrastructure/",
  },
  {
    id: uuidv5("aws-question-972", uuidv5.URL),
    text: "Which AWS service will help users determine if an application running on an Amazon EC2 instance has sufficient CPU capacity?",
    options: [
      "Amazon CloudWatch",
      "AWS Config",
      "AWS CloudTrail",
      "Amazon Inspector",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon CloudWatch allows monitoring of AWS resources and applications in real-time, including CPU utilization metrics for EC2 instances. AWS Config (B) tracks configuration changes, CloudTrail (C) logs API calls, and Inspector (D) assesses security, but none provide direct resource monitoring metrics. More info: https://aws.amazon.com/ec2/faqs/",
  },
  {
    id: uuidv5("aws-question-973", uuidv5.URL),
    text: "Why is it beneficial to use Elastic Load Balancers with applications?",
    options: [
      "They allow for the conversion from Application Load Balancers to Classic Load Balancers.",
      "They are capable of handling constant changes in network traffic patterns.",
      "They automatically adjust capacity.",
      "They are provided at no charge to users.",
    ],
    correctAnswers: [1],
    explanation:
      "Elastic Load Balancers are designed to handle varying network traffic patterns and distribute incoming traffic efficiently across multiple targets, maintaining application availability and performance. The other options are incorrect: ELBs do not convert between types (A), do not automatically adjust capacity (C), and are not free (D). More info: https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html",
  },
  {
    id: uuidv5("aws-question-974", uuidv5.URL),
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
      "Customers are responsible for configuration management of their applications and security group settings. Infrastructure access (A), hardware lifecycle (B), and networking infrastructure protection (D) are managed by AWS. More info: https://cloudacademy.com/blog/aws-shared-responsibility-model-security/",
  },
  {
    id: uuidv5("aws-question-975", uuidv5.URL),
    text: "IT systems should be designed to reduce interdependencies, so that a change or failure in one component does not cascade to other components. This is an example of which principle of cloud architecture design?",
    options: [
      "Scalability",
      "Loose coupling",
      "Automation",
      "Automatic scaling",
    ],
    correctAnswers: [1],
    explanation:
      "Loose coupling refers to designing systems with minimal dependencies between components, allowing for better fault isolation and easier updates. Scalability (A), automation (C), and automatic scaling (D) are important principles but do not specifically address interdependencies. More info: https://d1.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf",
  },
  {
    id: uuidv5("aws-question-976", uuidv5.URL),
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
      "AWS WAF allows you to filter and block malicious web traffic at the application layer, and Network ACLs can control inbound and outbound traffic at the subnet level. Trusted Advisor (B) provides recommendations, Direct Connect (C) is for dedicated network connections, and Organizations (D) is for account management. More info: https://aws.amazon.com/waf/ and https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html",
  },
  {
    id: uuidv5("aws-question-977", uuidv5.URL),
    text: "An application runs on multiple Amazon EC2 instances that access a shared file system simultaneously. Which AWS storage service should be used?",
    options: ["Amazon EBS", "Amazon EFS", "Amazon S3", "AWS Artifact"],
    correctAnswers: [1],
    explanation:
      "Amazon EFS (Elastic File System) allows multiple EC2 instances to access the same file system simultaneously with shared access, making it ideal for applications requiring concurrent file system access. EBS (A) is for single-instance block storage, S3 (C) is object storage, and AWS Artifact (D) is for compliance reports. More info: https://aws.amazon.com/efs/",
  },
  {
    id: uuidv5("aws-question-978", uuidv5.URL),
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
      "AWS is responsible for protecting against IP spoofing and for maintaining the security of managed services like RDS, including patching the underlying infrastructure. Running virus scans (A), encrypting communication (D), and configuring security groups/NACLs (E) are customer responsibilities. More info: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-979", uuidv5.URL),
    text: "What is the benefit of elasticity in the AWS Cloud?",
    options: [
      "Ensure web traffic is automatically spread across multiple AWS Regions.",
      "Minimize storage costs by automatically archiving log data.",
      "Enable AWS to automatically select the most cost-effective services.",
      "Automatically adjust the required compute capacity to maintain consistent performance.",
    ],
    correctAnswers: [3],
    explanation:
      "Elasticity allows AWS to automatically scale resources up or down based on demand, ensuring consistent performance and cost efficiency. The other options do not reflect the core concept of elasticity. More info: https://aimconsulting.com/insights/blog/the-elastic-cloud-opportunity/",
  },
  {
    id: uuidv5("aws-question-980", uuidv5.URL),
    text: "The continual reduction of AWS Cloud pricing is due to:",
    options: [
      "pay-as-you go pricing",
      "the AWS global infrastructure",
      "economies of scale",
      "reserved storage pricing",
    ],
    correctAnswers: [2],
    explanation:
      "The reduction in AWS pricing over time is largely due to economies of scale, allowing AWS to pass on cost savings to customers. Pay-as-you-go (A) and reserved pricing (D) are pricing models, and the global infrastructure (B) enables scale but is not the direct reason for price reductions. More info: https://aws.amazon.com/economies-of-scale/",
  },
  {
    id: uuidv5("aws-question-981", uuidv5.URL),
    text: "A company needs an Amazon S3 bucket that cannot have any public objects due to compliance requirements. How can this be accomplished?",
    options: [
      "Enable S3 Block Public Access from the AWS Management Console.",
      "Hold a team meeting to discuss the importance if only uploading private S3 objects.",
      "Require all S3 objects to be manually approved before uploading.",
      "Create a service to monitor all S3 uploads and remove any public uploads.",
    ],
    correctAnswers: [0],
    explanation:
      "The correct way to prevent public access to S3 buckets is by enabling S3 Block Public Access. This setting blocks public access to buckets and objects across an entire AWS account or at the bucket level, ensuring compliance. The other options rely on manual processes or after-the-fact monitoring, which are not secure or reliable. Reference: https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html",
  },
  {
    id: uuidv5("aws-question-982", uuidv5.URL),
    text: "A Cloud Practitioner identifies a billing issue after examining the AWS Cost and Usage report in the AWS Management Console. Which action can be taken to resolve this?",
    options: [
      "Open a detailed case related to billing and submit it to AWS Support for help.",
      "Upload data describing the issue to a new object in a private Amazon S3 bucket.",
      "Create a pricing application and deploy it to a right-sized Amazon EC2 instance for more information.",
      "Proceed with creating a new dashboard in Amazon QuickSight.",
    ],
    correctAnswers: [0],
    explanation:
      "If a billing issue is identified, the correct approach is to open a detailed billing case with AWS Support, who can investigate and resolve the issue. Uploading data to S3 (B), building a pricing app (C), or creating a QuickSight dashboard (D) do not address the billing problem directly. Reference: https://docs.aws.amazon.com/awssupport/latest/user/case-management.html",
  },
  {
    id: uuidv5("aws-question-983", uuidv5.URL),
    text: "What does the AWS Simple Monthly Calculator do?",
    options: [
      "Compares on-premises costs to colocation environments",
      "Estimates monthly billing based on projected usage",
      "Estimates power consumption at existing data centers",
      "Estimates CPU utilization",
    ],
    correctAnswers: [1],
    explanation:
      "The AWS Simple Monthly Calculator allows users to estimate their monthly AWS bill based on expected usage of services. It does not compare on-premises costs, estimate power consumption, or CPU utilization. Reference: https://aws.amazon.com/blogs/aws/estimate-your-c/",
  },
  {
    id: uuidv5("aws-question-984", uuidv5.URL),
    text: "Who is responsible for patching the guest operating system for Amazon RDS?",
    options: [
      "The AWS Product team",
      "The customer Database Administrator",
      "Managed partners",
      "AWS Support",
    ],
    correctAnswers: [1],
    explanation:
      "Under the shared responsibility model, patching and maintaining the guest operating system, including databases, is the customer's responsibility for Amazon RDS. AWS manages the underlying infrastructure, but customers must patch the OS and database. Reference: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-985", uuidv5.URL),
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
      "AWS Auto Scaling can be used to automatically adjust capacity for both EC2 instances and DynamoDB throughput. S3 (C), Route 53 (D), and Redshift (E) are not directly managed by AWS Auto Scaling. Reference: https://aws.amazon.com/autoscaling/faqs/",
  },
  {
    id: uuidv5("aws-question-986", uuidv5.URL),
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
      "AWS Global Accelerator improves application availability by routing traffic to healthy endpoints and decreases latency by using the AWS global network. It does not directly reduce costs, increase data durability, or enhance data security. Reference: https://aws.amazon.com/global-accelerator/faqs/",
  },
  {
    id: uuidv5("aws-question-987", uuidv5.URL),
    text: "A user who wants to get help with billing and reactivate a suspended account should submit an account and billing request to:",
    options: [
      "the AWS Support forum",
      "AWS Abuse",
      "an AWS Solutions Architect",
      "AWS Support",
    ],
    correctAnswers: [3],
    explanation:
      "To resolve account suspension and billing issues, users should submit an account and billing request to AWS Support. The forum (A) and AWS Abuse (B) are not for billing/account issues, and Solutions Architects (C) do not handle account reactivation. Reference: https://aws.amazon.com/premiumsupport/knowledge-center/reactivate-suspended-account/",
  },
  {
    id: uuidv5("aws-question-988", uuidv5.URL),
    text: "Which AWS Cloud best practice uses the elasticity and agility of cloud computing?",
    options: [
      "Provision capacity based on past usage and theoretical peaks",
      "Dynamically and predictively scale to meet usage demands",
      "Build the application and infrastructure in a data center that grants physical access",
      "Break apart the application into loosely coupled components",
    ],
    correctAnswers: [1],
    explanation:
      "Dynamically and predictively scaling to meet demand is a key cloud best practice that takes advantage of AWS elasticity and agility. The other options either do not use cloud features or are unrelated to scaling. Reference: https://aws.amazon.com/architecture/well-architected/",
  },
  {
    id: uuidv5("aws-question-989", uuidv5.URL),
    text: "Which method helps to optimize costs of users moving to the AWS Cloud?",
    options: [
      "Paying only for what is used",
      "Purchasing hardware before it is needed",
      "Manually provisioning cloud resources",
      "Purchasing for the maximum possible load",
    ],
    correctAnswers: [0],
    explanation:
      "A key cost optimization benefit of AWS is that users pay only for what they use, reducing unnecessary expenditures. The other options lead to overprovisioning and higher costs. Reference: https://www.cloudmanagementinsider.com/ways-to-optimize-aws-cost/",
  },
  {
    id: uuidv5("aws-question-990", uuidv5.URL),
    text: "Under the AWS shared responsibility model, which of the following is a customer responsibility?",
    options: [
      "Installing security patches for the Xen and KVM hypervisors",
      "Installing operating system patches for Amazon DynamoDB",
      "Installing operating system security patches for Amazon EC2 database instances",
      "Installing operating system security patches for Amazon RDS database instances",
    ],
    correctAnswers: [2],
    explanation:
      "The customer is responsible for installing operating system security patches for EC2 instances, including database instances that run on EC2. AWS manages the hypervisor and managed services like DynamoDB and RDS. Reference: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-991", uuidv5.URL),
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
      "AWS Cost Management tools allow users to break down costs by day, service, and account, and to create budgets with notifications when thresholds are exceeded. They do not terminate resources (A), automatically switch instance types (D), or move S3 data to cheaper storage classes (E). Reference: https://aws.amazon.com/aws-cost-management/",
  },
  {
    id: uuidv5("aws-question-992", uuidv5.URL),
    text: "Under the AWS shared responsibility model, the security and patching of the guest operating system is the responsibility of:",
    options: [
      "AWS Support",
      "the customer",
      "AWS Systems Manager",
      "AWS Config",
    ],
    correctAnswers: [1],
    explanation:
      "According to the AWS shared responsibility model, patching and securing the guest operating system is the customer's responsibility. AWS manages the infrastructure, but customers must secure and patch their OS. Reference: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-993", uuidv5.URL),
    text: "Which AWS service makes it easy to create and manage AWS users and groups, and provide them with secure access to AWS resources at no charge?",
    options: [
      "AWS Direct Connect",
      "Amazon Connect",
      "AWS Identity and Access Management (IAM)",
      "AWS Firewall Manager",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Identity and Access Management (IAM) allows users to securely manage users and groups and grant permissions at no cost. The other services are for networking, contact centers, or firewall management. Reference: https://aws.amazon.com/iam/",
  },
  {
    id: uuidv5("aws-question-994", uuidv5.URL),
    text: "Which AWS service provides on-demand access to AWS security and compliance documentation?",
    options: [
      "AWS Directory Service",
      "AWS Artifact",
      "AWS Trusted Advisor",
      "Amazon Inspector",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Artifact is the on-demand portal for AWS security and compliance reports and documentation. The other services are for directory management, best practice checks, or security assessments. Reference: https://aws.amazon.com/artifact/",
  },
  {
    id: uuidv5("aws-question-995", uuidv5.URL),
    text: "Which AWS service can be used to turn text into life-like speech?",
    options: [
      "Amazon Polly",
      "Amazon Transcribe",
      "Amazon Rekognition",
      "Amazon Lex",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon Polly converts text to life-like speech using advanced deep learning technologies. Transcribe (B) is for speech-to-text, Rekognition (C) is for image/video analysis, and Lex (D) is for conversational interfaces. Reference: https://aws.amazon.com/polly/",
  },
  {
    id: uuidv5("aws-question-996", uuidv5.URL),
    text: "What is one of the core principles to follow when designing a highly available application in the AWS Cloud?",
    options: [
      "Design using a serverless architecture",
      "Assume that all components within an application can fail",
      "Design AWS Auto Scaling into every application",
      "Design all components using open-source code",
    ],
    correctAnswers: [1],
    explanation:
      "A key principle in designing highly available systems is to assume all components can fail and design for resiliency. Serverless (A), Auto Scaling (C), and open-source code (D) are not core principles for high availability. Reference: https://d1.awsstatic.com/whitepapers/architecture/AWS_Well-Architected_Framework.pdf",
  },
  {
    id: uuidv5("aws-question-997", uuidv5.URL),
    text: "A user needs to generate a report that outlines the status of key security checks in an AWS account, including S3 permissions, root MFA status, and unrestricted security groups. Where can this information be found in one location?",
    options: [
      "Amazon QuickSight dashboard",
      "AWS CloudTrail trails",
      "AWS Trusted Advisor report",
      "IAM credential report",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Trusted Advisor provides checks and recommendations for security, including S3 bucket permissions, root account MFA, and open security groups. QuickSight (A) is for analytics, CloudTrail (B) is for API logging, and IAM credential report (D) is limited to credential details. Reference: https://aws.amazon.com/premiumsupport/technology/trusted-advisor/best-practice-checklist/#Security",
  },
  {
    id: uuidv5("aws-question-998", uuidv5.URL),
    text: "Which Amazon EC2 pricing model should be used to comply with per-core software license requirements?",
    options: [
      "Dedicated Hosts",
      "On-Demand Instances",
      "Spot Instances",
      "Reserved Instances",
    ],
    correctAnswers: [0],
    explanation:
      "Dedicated Hosts allow you to use your own software licenses that are bound to specific physical cores, meeting per-core licensing requirements. The other options do not provide dedicated physical servers. Reference: https://aws.amazon.com/ec2/dedicated-hosts/pricing/",
  },
  {
    id: uuidv5("aws-question-999", uuidv5.URL),
    text: "Which part of the AWS global infrastructure is used to cache copies of content for faster delivery to users across the globe?",
    options: [
      "AWS Regions",
      "Availability Zones",
      "Edge locations",
      "Data centers",
    ],
    correctAnswers: [2],
    explanation:
      "Edge locations are part of AWS's global content delivery network (CDN) and cache content to improve response times globally. Regions (A) and Availability Zones (B) are for resource deployment, and data centers (D) are physical facilities. Reference: https://aws.amazon.com/caching/",
  },
  {
    id: uuidv5("aws-question-1000", uuidv5.URL),
    text: "Using AWS Config to record, audit, and evaluate changes to AWS resources to enable traceability is an example of which AWS Well-Architected Framework pillar?",
    options: [
      "Security",
      "Operational excellence",
      "Performance efficiency",
      "Cost optimization",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Config helps ensure security by providing audit trails and resource configuration change tracking, which aligns with the Security pillar of the AWS Well-Architected Framework. The other pillars focus on different aspects of architecture. Reference: https://d1.awsstatic.com/whitepapers/architecture/AWS_Well-Architected_Framework.pdf",
  },
];

const exam21: Question[] = [
  {
    id: uuidv5("aws-question-1001", uuidv5.URL),
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

const exam23: Question[] = [
  {
    id: uuidv5("aws-question-1462", uuidv5.URL),
    text: "A user is planning to migrate an application workload to the AWS Cloud. Which control becomes the responsibility of AWS once the migration is complete?",
    options: [
      "Patching the guest operating system",
      "Maintaining physical and environmental controls",
      "Protecting communications and maintaining zone security",
      "Patching specific applications",
    ],
    correctAnswers: [1],
    explanation:
      "Under the AWS Shared Responsibility Model, AWS is responsible for the security of the cloud, which includes maintaining physical and environmental controls. The customer is responsible for security in the cloud, such as patching operating systems and applications. More details: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-1463", uuidv5.URL),
    text: "Which services can be used to deploy applications on AWS? (Choose two.)",
    options: [
      "AWS Elastic Beanstalk",
      "AWS Config",
      "AWS OpsWorks",
      "AWS Application Discovery Service",
      "Amazon Kinesis",
    ],
    correctAnswers: [0, 2],
    explanation:
      "AWS Elastic Beanstalk and AWS OpsWorks are services that help deploy and manage applications. AWS Config is for compliance tracking, AWS Application Discovery Service is for migration assessment, and Amazon Kinesis is for data streaming. More details: https://d0.awsstatic.com/whitepapers/overview-of-deployment-options-on-aws.pdf",
  },
  {
    id: uuidv5("aws-question-1464", uuidv5.URL),
    text: "Which AWS service can be used to provide an on-demand, cloud-based contact center?",
    options: [
      "AWS Direct Connect",
      "Amazon Connect",
      "AWS Support Center",
      "AWS Managed Services",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon Connect is a cloud-based contact center solution that enables businesses to set up customer service operations quickly. More details: https://aws.amazon.com/connect/customers/",
  },
  {
    id: uuidv5("aws-question-1465", uuidv5.URL),
    text: "What tool enables customers without an AWS account to estimate costs for almost all AWS services?",
    options: [
      "Cost Explorer",
      "TCO Calculator",
      "AWS Budgets",
      "AWS Pricing Calculator",
    ],
    correctAnswers: [3],
    explanation:
      "The AWS Pricing Calculator allows customers to estimate costs for AWS services without needing an AWS account. More details: https://calculator.aws/#/",
  },
  {
    id: uuidv5("aws-question-1466", uuidv5.URL),
    text: "Which component must be attached to a VPC to enable inbound Internet access?",
    options: [
      "NAT gateway",
      "VPC endpoint",
      "VPN connection",
      "Internet gateway",
    ],
    correctAnswers: [3],
    explanation:
      "An Internet gateway is required to allow inbound and outbound traffic between a VPC and the internet. More details: https://d1.awsstatic.com/whitepapers/aws-security-whitepaper.pdf",
  },
  {
    id: uuidv5("aws-question-1467", uuidv5.URL),
    text: "Which pricing model would result in maximum Amazon Elastic Compute Cloud (Amazon EC2) savings for a database server that must be online for one year?",
    options: [
      "Spot Instance",
      "On-Demand Instance",
      "Partial Upfront Reserved Instance",
      "No Upfront Reserved Instance",
    ],
    correctAnswers: [2],
    explanation:
      "Partial Upfront Reserved Instances offer significant cost savings for workloads that require continuous usage over a period, such as database servers. More details: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-reserved-instances.html",
  },
  {
    id: uuidv5("aws-question-1468", uuidv5.URL),
    text: "A company has a MySQL database running on a single Amazon EC2 instance. The company now requires higher availability in the event of an outage. Which set of tasks would meet this requirement?",
    options: [
      "Add an Application Load Balancer in front of the EC2 instance",
      "Configure EC2 Auto Recovery to move the instance to another Availability Zone",
      "Migrate to Amazon RDS and enable Multi-AZ",
      "Enable termination protection for the EC2 instance to avoid outages",
    ],
    correctAnswers: [2],
    explanation:
      "Amazon RDS with Multi-AZ deployment provides automatic failover and higher availability for databases. More details: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html",
  },
  {
    id: uuidv5("aws-question-1469", uuidv5.URL),
    text: "A company wants to ensure that AWS Management Console users are meeting password complexity requirements. How can the company configure password complexity?",
    options: [
      "Using an AWS IAM user policy",
      "Using an AWS Organizations service control policy (SCP)",
      "Using an AWS IAM account password policy",
      "Using an AWS Security Hub managed insight",
    ],
    correctAnswers: [2],
    explanation:
      "An AWS IAM account password policy allows administrators to enforce password complexity requirements. More details: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_passwords_account-policy.html",
  },
  {
    id: uuidv5("aws-question-1470", uuidv5.URL),
    text: "Under the AWS shared responsibility model, which of the following is the customer's responsibility?",
    options: [
      "Patching guest OS and applications",
      "Patching and fixing flaws in the infrastructure",
      "Physical and environmental controls",
      "Configuration of AWS infrastructure devices",
    ],
    correctAnswers: [0],
    explanation:
      "Under the shared responsibility model, customers are responsible for security in the cloud, including patching the guest operating system and applications. AWS is responsible for infrastructure security. More details: https://aws.amazon.com/compliance/shared-responsibility-model/",
  },
  {
    id: uuidv5("aws-question-1471", uuidv5.URL),
    text: "Which of the following tasks is required to deploy a PCI-compliant workload on AWS?",
    options: [
      "Use any AWS service and implement PCI controls at the application layer",
      "Use an AWS service that is in-scope for PCI compliance and raise an AWS support ticket to enable PCI compliance at the application layer",
      "Use any AWS service and raise an AWS support ticket to enable PCI compliance on that service",
      "Use an AWS service that is in scope for PCI compliance and apply PCI controls at the application layer",
    ],
    correctAnswers: [3],
    explanation:
      "To deploy a PCI-compliant workload, customers must use AWS services that are in-scope for PCI compliance and apply the necessary PCI controls at the application layer. More details: https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-pci-controls.html",
  },
  {
    id: "aws-question-1472",
    text: "A company is building an application that requires the ability to send, store, and receive messages between application components. The company has another requirement to process messages in first-in, first-out (FIFO) order. Which AWS service should the company use?",
    options: [
      "AWS Step Functions",
      "Amazon Simple Notification Service (Amazon SNS)",
      "Amazon Kinesis Data Streams",
      "Amazon Simple Queue Service (Amazon SQS)",
    ],
    correctAnswers: [3],
    explanation:
      "Amazon SQS provides a managed message queuing service that supports FIFO queues, ensuring messages are processed in the exact order they are sent. Reference: https://aws.amazon.com/sqs/faqs/",
  },
  {
    id: "aws-question-1473",
    text: "AnyCompany recently purchased Example Corp. Both companies use AWS resources, and AnyCompany wants a single aggregated bill. Which option allows AnyCompany to receive a single bill?",
    options: [
      "Example Corp. must submit a request to its AWS solutions architect or AWS technical account manager to link the accounts and consolidate billing.",
      "AnyCompany must create a new support case in the AWS Support Center requesting that both bills be combined.",
      "Send an invitation to join the organization from AnyCompany's AWS Organizations master account to Example Corp.",
      "Migrate the Example Corp. VPCs, Amazon EC2 instances, and other resources into the AnyCompany AWS account.",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Organizations allows companies to consolidate multiple AWS accounts under one billing structure, providing a single bill. Reference: https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/awsaccountbilling-aboutv2.pdf",
  },
  {
    id: "aws-question-1474",
    text: "Which tool can be used to create alerts when the actual or forecasted cost of AWS services exceeds a certain threshold?",
    options: [
      "Cost Explorer",
      "AWS Budgets",
      "AWS Cost and Usage Report",
      "AWS CloudTrail",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Budgets enables users to set custom cost and usage budgets with alerts when they exceed thresholds. Reference: https://aws.amazon.com/getting-started/hands-on/control-your-costs-free-tier-budgets/",
  },
  {
    id: "aws-question-1475",
    text: "A user has limited knowledge of AWS services, but wants to quickly deploy a scalable Node.js application in the AWS Cloud. Which service should be used to deploy the application?",
    options: [
      "AWS CloudFormation",
      "AWS Elastic Beanstalk",
      "Amazon EC2",
      "AWS OpsWorks",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Elastic Beanstalk is a Platform as a Service (PaaS) solution that simplifies the deployment and scaling of applications. Reference: https://aws.amazon.com/elasticbeanstalk/",
  },
  {
    id: "aws-question-1476",
    text: "Which AWS Trusted Advisor check is available to all AWS users?",
    options: [
      "Core checks",
      "All checks",
      "Cost optimization checks",
      "Fault tolerance checks",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Trusted Advisor provides core security and performance-related checks for all AWS users, while full checks are available to Business and Enterprise Support plans. Reference: https://www.amazonaws.cn/en/support/trustedadvisor/faq/#checks",
  },
  {
    id: "aws-question-1477",
    text: "A web developer is concerned that a DDoS attack could target an application. Which AWS services or features can help protect against such an attack? (Choose two.)",
    options: [
      "AWS Shield",
      "AWS CloudTrail",
      "Amazon CloudFront",
      "AWS Support Center",
      "AWS Service Health Dashboard",
    ],
    correctAnswers: [0, 2],
    explanation:
      "AWS Shield provides DDoS protection, while Amazon CloudFront helps mitigate attacks by caching content at edge locations. Reference: https://aws.amazon.com/shield/",
  },
  {
    id: "aws-question-1478",
    text: "Which AWS service gives users on-demand, self-service access to AWS compliance control reports?",
    options: [
      "AWS Config",
      "Amazon GuardDuty",
      "AWS Trusted Advisor",
      "AWS Artifact",
    ],
    correctAnswers: [3],
    explanation:
      "AWS Artifact provides access to AWS compliance reports, agreements, and certifications. Reference: https://aws.amazon.com/artifact",
  },
  {
    id: "aws-question-1479",
    text: "A company wants to provide one of its employees with access to Amazon RDS. The company also wants to limit the interaction to only the AWS CLI and AWS software development kits (SDKs). Which combination of actions should the company take to meet these requirements while following the principles of least privilege? (Choose two.)",
    options: [
      "Create an IAM user and provide AWS Management Console access only.",
      "Create an IAM user and provide programmatic access only.",
      "Create an IAM role and provide AWS Management Console access only.",
      "Create an IAM policy with administrator access and attach it to the IAM user.",
      "Create an IAM policy with Amazon RDS access and attach it to the IAM user.",
    ],
    correctAnswers: [1, 4],
    explanation:
      "Programmatic access should be granted to interact with AWS CLI and SDKs, while a least-privilege IAM policy with Amazon RDS access should be attached. Reference: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html",
  },
  {
    id: "aws-question-1480",
    text: "A company has a compliance requirement to record and evaluate configuration changes, as well as perform remediation actions on AWS resources. Which AWS service should the company use?",
    options: [
      "AWS Config",
      "AWS Secrets Manager",
      "AWS CloudTrail",
      "AWS Trusted Advisor",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Config tracks AWS resource configuration changes and enables compliance auditing. Reference: https://aws.amazon.com/config/",
  },
  {
    id: "aws-question-1481",
    text: "What are the advantages of deploying an application with Amazon EC2 instances in multiple Availability Zones? (Choose two.)",
    options: [
      "Preventing a single point of failure",
      "Reducing the operational costs of the application",
      "Allowing the application to serve cross-region users with low latency",
      "Increasing the availability of the application",
      "Increasing the load of the application",
    ],
    correctAnswers: [0, 3],
    explanation:
      "Deploying across multiple Availability Zones improves fault tolerance and availability by preventing a single point of failure. Reference: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-increase-availability.html",
  },
  {
    id: uuidv5("aws-question-1482", uuidv5.URL),
    text: "A workload on AWS will run for the foreseeable future by using a consistent number of Amazon EC2 instances. What pricing model will minimize cost while ensuring that compute resources remain available?",
    options: [
      "Dedicated Hosts",
      "On-Demand Instances",
      "Spot Instances",
      "Reserved Instances",
    ],
    correctAnswers: [3],
    explanation:
      "Reserved Instances provide significant cost savings for workloads with predictable usage patterns. They offer a lower price compared to On-Demand Instances and ensure that the required compute capacity remains available. [Reference](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-reserved-instances.html).",
  },
  {
    id: uuidv5("aws-question-1483", uuidv5.URL),
    text: "Which tool can be used to identify scheduled changes to the AWS infrastructure?",
    options: [
      "AWS Personal Health Dashboard",
      "AWS Trusted Advisor",
      "Billing Dashboard",
      "AWS Config",
    ],
    correctAnswers: [0],
    explanation:
      "AWS Personal Health Dashboard provides alerts and remediation guidance when AWS is experiencing events that may impact your environment. It includes scheduled changes such as maintenance updates. [Reference](https://aws.amazon.com/premiumsupport/technology/personal-health-dashboard/).",
  },
  {
    id: uuidv5("aws-question-1484", uuidv5.URL),
    text: "Which of the following is the customer's responsibility when using Amazon RDS?",
    options: [
      "Patching the operating system of underlying hardware",
      "Controlling traffic to and from the database through security groups",
      "Running backups that enable point-in-time recovery of a DB instance",
      "Replacing failed DB instances",
    ],
    correctAnswers: [1],
    explanation:
      "Customers are responsible for managing security groups and access control for their RDS instances. AWS handles the underlying infrastructure, backups (if enabled), and automated failover in Multi-AZ deployments. [Reference](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.html).",
  },
  {
    id: uuidv5("aws-question-1485", uuidv5.URL),
    text: "What is the customer's responsibility when using AWS Lambda?",
    options: [
      "Operating system configuration",
      "Application management",
      "Platform management",
      "Code encryption",
    ],
    correctAnswers: [1],
    explanation:
      "AWS manages the infrastructure and runtime environment for Lambda. Customers are responsible for managing their application logic and ensuring their code functions as expected. [Reference](https://aws.amazon.com/lambda/security-overview-of-aws-lambda/).",
  },
  {
    id: uuidv5("aws-question-1486", uuidv5.URL),
    text: "A company wants to be notified when its AWS Cloud costs or usage exceed defined thresholds. Which AWS service will support these requirements?",
    options: ["AWS Budgets", "Cost Explorer", "AWS CloudTrail", "Amazon Macie"],
    correctAnswers: [0],
    explanation:
      "AWS Budgets allows users to set custom cost and usage budgets and receive alerts when thresholds are exceeded. [Reference](https://aws.amazon.com/aws-cost-management/aws-budgets/).",
  },
  {
    id: uuidv5("aws-question-1487", uuidv5.URL),
    text: "Which AWS service provides the ability to host a NoSQL database in the AWS Cloud?",
    options: [
      "Amazon Aurora",
      "Amazon DynamoDB",
      "Amazon RDS",
      "Amazon Redshift",
    ],
    correctAnswers: [1],
    explanation:
      "Amazon DynamoDB is a fully managed NoSQL database service that supports key-value and document-based data models. [Reference](https://aws.amazon.com/nosql/).",
  },
  {
    id: uuidv5("aws-question-1488", uuidv5.URL),
    text: "Which AWS service allows customers to purchase unused Amazon EC2 capacity at an often discounted rate?",
    options: [
      "Reserved Instances",
      "On-Demand Instances",
      "Dedicated Instances",
      "Spot Instances",
    ],
    correctAnswers: [3],
    explanation:
      "Spot Instances allow customers to purchase unused EC2 capacity at a lower price compared to On-Demand pricing, making them cost-effective for flexible, fault-tolerant applications. [Reference](https://aws.amazon.com/ec2/spot/).",
  },
  {
    id: uuidv5("aws-question-1489", uuidv5.URL),
    text: "Which AWS service or feature requires an internet service provider (ISP) and a colocation facility to be implemented?",
    options: [
      "AWS VPN",
      "Amazon Connect",
      "AWS Direct Connect",
      "Internet gateway",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Direct Connect enables dedicated network connections between AWS and on-premises environments, requiring an ISP and a colocation facility. [Reference](https://aws.amazon.com/directconnect/partners/).",
  },
  {
    id: uuidv5("aws-question-1490", uuidv5.URL),
    text: "Which AWS services offer compute capabilities? (Choose two.)",
    options: [
      "Amazon EC2",
      "Amazon S3",
      "Amazon Elastic Block Store (Amazon EBS)",
      "Amazon Cognito",
      "AWS Lambda",
    ],
    correctAnswers: [0, 4],
    explanation:
      "Amazon EC2 provides scalable compute capacity in the cloud, while AWS Lambda allows users to run code without provisioning servers. [Reference](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/compute-services.html).",
  },
  {
    id: uuidv5("aws-question-1491", uuidv5.URL),
    text: "Which AWS service can be used to privately store and manage versions of source code?",
    options: [
      "AWS CodeBuild",
      "AWS CodeCommit",
      "AWS CodePipeline",
      "AWS CodeStar",
    ],
    correctAnswers: [1],
    explanation:
      "AWS CodeCommit is a managed source control service that allows users to store and manage Git repositories securely. [Reference](https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html).",
  },
  {
    id: "aws-question-1492",
    text: "Which AWS service should a cloud practitioner use to identify security vulnerabilities of an AWS account?",
    options: [
      "AWS Secrets Manager",
      "Amazon Cognito",
      "Amazon Macie",
      "AWS Trusted Advisor",
    ],
    correctAnswers: [3],
    explanation:
      "AWS Trusted Advisor helps users identify security vulnerabilities in an AWS account by providing security checks and best practice recommendations. More details: https://www.coalfire.com/the-coalfire-blog/march-2019/aws-trusted-advisor-for-security-compliance",
  },
  {
    id: "aws-question-1493",
    text: "A company wants to ensure its infrastructure is designed for fault tolerance and business continuity in the event of an environmental disruption. Which AWS infrastructure component should the company replicate across?",
    options: [
      "Edge locations",
      "Availability Zones",
      "Regions",
      "Amazon Route 53",
    ],
    correctAnswers: [1],
    explanation:
      "Replicating workloads across multiple Availability Zones (AZs) ensures fault tolerance and high availability within a single AWS Region. More details: https://d36cz9buwru1tt.cloudfront.net/AWS_Building_Fault_Tolerant_Applications.pdf",
  },
  {
    id: "aws-question-1494",
    text: "Which AWS service or feature is used to send both text and email messages from distributed applications?",
    options: [
      "Amazon Simple Notification Service (Amazon SNS)",
      "Amazon Simple Email Service (Amazon SES)",
      "Amazon CloudWatch alerts",
      "Amazon Simple Queue Service (Amazon SQS)",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon SNS enables applications to send messages via SMS and email. More details: https://aws.amazon.com/sns/faqs/",
  },
  {
    id: "aws-question-1495",
    text: "Which AWS Cloud design principles can help increase reliability? (Choose two.)",
    options: [
      "Using monolithic architecture",
      "Measuring overall efficiency",
      "Testing recovery procedures",
      "Adopting a consumption model",
      "Automatically recovering from failure",
    ],
    correctAnswers: [2, 4],
    explanation:
      "Testing recovery procedures and automatically recovering from failure increase system reliability. More details: https://wa.aws.amazon.com/wat.pillar.reliability.en.html",
  },
  {
    id: "aws-question-1496",
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
      "AWS Global Accelerator and Amazon CloudFront improve performance and reduce latency for global users. More details: https://aws.amazon.com/cloudfront/faqs/",
  },
  {
    id: "aws-question-1497",
    text: "A company wants to connect to AWS over a private, low-latency connection from its remote office. What is the recommended method to meet these requirements?",
    options: [
      "Create a VPN tunnel",
      "Connect across the public internet",
      "Use VPC peering to create a connection.",
      "Use AWS Direct Connect.",
    ],
    correctAnswers: [3],
    explanation:
      "AWS Direct Connect provides private, low-latency connections to AWS. More details: https://aws.amazon.com/getting-started/projects/connect-data-center-to-aws/",
  },
  {
    id: "aws-question-1498",
    text: "Which AWS service can be used to retrieve compliance reports on demand?",
    options: [
      "AWS Secrets Manager",
      "AWS Artifact",
      "AWS Security Hub",
      "AWS Certificate Manager",
    ],
    correctAnswers: [1],
    explanation:
      "AWS Artifact provides access to compliance reports and agreements. More details: https://aws.amazon.com/artifact/",
  },
  {
    id: "aws-question-1499",
    text: "A company has an AWS-hosted website located behind an Application Load Balancer. The company wants to safeguard the website from SQL injection or cross-site scripting. Which AWS service should the company use?",
    options: [
      "Amazon GuardDuty",
      "AWS WAF",
      "AWS Trusted Advisor",
      "Amazon Inspector",
    ],
    correctAnswers: [1],
    explanation:
      "AWS WAF (Web Application Firewall) helps protect web applications against SQL injection and cross-site scripting. More details: https://aws.amazon.com/waf/faq/",
  },
  {
    id: "aws-question-1500",
    text: "How should a web application be deployed to ensure high availability in the AWS Cloud?",
    options: [
      "Deploy multiple instances of the application in multiple Availability Zones.",
      "Deploy multiple instances of the application in a single Availability Zone.",
      "Deploy the application to a compute-optimized Amazon EC2 instance in a single Availability Zone.",
      "Deploy the application in one Amazon EC2 instance in an Auto Scaling group.",
    ],
    correctAnswers: [0],
    explanation:
      "Deploying instances in multiple Availability Zones ensures high availability. More details: https://www.betsol.com/blog/how-to-make-high-availability-web-applications-on-amazon-web-services/",
  },
  {
    id: "aws-question-1501",
    text: "A company is running a self-managed Oracle database directly on Amazon EC2 for its steady-state database. The company wants to reduce compute costs. Which option should the company use to maximize savings over a 3-year term?",
    options: [
      "EC2 Dedicated Instances",
      "EC2 Spot Instances",
      "EC2 Reserved Instances",
      "EC2 On-Demand Instances",
    ],
    correctAnswers: [2],
    explanation:
      "EC2 Reserved Instances provide significant savings for long-term workloads. More details: https://aws.amazon.com/choosing-a-cloud-platform/",
  },
  {
    id: "aws-question-1502",
    text: "An external auditor has requested that a company provide a list of all its IAM users, including the status of users' credentials and access keys. What is the SIMPLEST way to provide this information?",
    options: [
      "Create an IAM user account for the auditor, granting the auditor administrator permissions.",
      "Take a screenshot of each user's page in the AWS Management Console, then provide the screenshots to the auditor.",
      "Download the IAM credential report, then provide the report to the auditor.",
      "Download the AWS Trusted Advisor report, then provide the report to the auditor.",
    ],
    correctAnswers: [2],
    explanation:
      "The IAM credential report provides a detailed list of all IAM users and their credentials, including access keys and password status. This is the most efficient and secure way to provide this information. [Reference](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_getting-report.html).",
  },
  {
    id: "aws-question-1503",
    text: "What are the benefits of consolidated billing for AWS Cloud services? (Choose two.)",
    options: [
      "Volume discounts",
      "A minimal additional fee for use",
      "One bill for multiple accounts",
      "Installment payment options",
      "Custom cost and usage budget creation",
    ],
    correctAnswers: [0, 2],
    explanation:
      "Consolidated billing allows organizations to manage multiple AWS accounts under a single bill and benefit from volume discounts. [Reference](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html).",
  },
  {
    id: "aws-question-1504",
    text: "A company is expecting a short-term spike in internet traffic for its application. During the traffic increase, the application cannot be interrupted. The company also needs to minimize cost and maximize flexibility. Which Amazon EC2 instance type should the company use to meet these requirements?",
    options: [
      "On-Demand Instances",
      "Spot Instances",
      "Reserved Instances",
      "Dedicated Hosts",
    ],
    correctAnswers: [0],
    explanation:
      "On-Demand Instances are best suited for applications with unpredictable workloads that cannot tolerate interruptions. They offer flexibility without long-term commitments. [Reference](https://aws.amazon.com/ec2/faqs/).",
  },
  {
    id: "aws-question-1505",
    text: "A company wants to track AWS resource configuration changes for compliance reasons. Which AWS feature can be used to meet this requirement?",
    options: [
      "AWS Cost and Usage Report",
      "AWS Organizations service control policies (SCPs)",
      "AWS Config rules",
      "VPC Flow Logs",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Config tracks AWS resource configuration changes and compliance status, making it ideal for compliance monitoring. [Reference](https://aws.amazon.com/config/).",
  },
  {
    id: "aws-question-1506",
    text: "A company is building an application that needs to deliver images and videos globally with minimal latency. Which approach can the company use to accomplish this in a cost-effective manner?",
    options: [
      "Deliver the content through Amazon CloudFront.",
      "Store the content on Amazon S3 and enable S3 cross-region replication.",
      "Implement a VPN across multiple AWS Regions.",
      "Deliver the content through AWS PrivateLink.",
    ],
    correctAnswers: [0],
    explanation:
      "Amazon CloudFront is a global content delivery network (CDN) that caches content closer to users to reduce latency and improve speed. [Reference](https://aws.amazon.com/cloudfront/faqs/).",
  },
  {
    id: "aws-question-1507",
    text: "The AWS IAM best practice for granting least privilege is to:",
    options: [
      "Apply an IAM policy to an IAM group and limit the size of the group.",
      "Require multi-factor authentication (MFA) for all IAM users.",
      "Require each IAM user who has different permissions to have multiple passwords.",
      "Apply an IAM policy only to IAM users who require it.",
    ],
    correctAnswers: [3],
    explanation:
      "Following the principle of least privilege, IAM policies should be assigned only to users who require them, minimizing unnecessary permissions. [Reference](https://kirkpatrickprice.com/blog/best-practices-for-privilege-management-in-aws/).",
  },
  {
    id: "aws-question-1508",
    text: "Which cloud computing benefit does AWS demonstrate with its ability to offer lower variable costs as a result of high purchase volumes?",
    options: [
      "Pay-as-you-go pricing",
      "High availability",
      "Global reach",
      "Economies of scale",
    ],
    correctAnswers: [3],
    explanation:
      "AWS benefits from economies of scale by purchasing infrastructure at large volumes, which allows it to reduce costs for customers. [Reference](https://innovationtactics.com/amazon-business-model-amazon-web-services/).",
  },
  {
    id: "aws-question-1509",
    text: "A pharmaceutical company operates its infrastructure in a single AWS Region. The company has thousands of VPCs in various AWS accounts that it wants to interconnect. Which AWS service or feature should the company use to help simplify management and reduce operational costs?",
    options: [
      "VPC endpoint",
      "AWS Direct Connect",
      "AWS Transit Gateway",
      "VPC peering",
    ],
    correctAnswers: [2],
    explanation:
      "AWS Transit Gateway enables organizations to efficiently connect multiple VPCs and simplify network management. [Reference](https://d1.awsstatic.com/whitepapers/building-a-scalable-and-secure-multi-vpc-aws-network-infrastructure.pdf).",
  },
  {
    id: "aws-question-1510",
    text: "How can AWS enable a company to control expenses as an application's usage changes unpredictably?",
    options: [
      "AWS will refund the cost difference if a customer moves to larger servers.",
      "The application can be built to scale up or down automatically as resources are needed.",
      "Spot instances will automatically be used if the price is lower than on-demand instances.",
      "Amazon CloudWatch will automatically predict what resources are needed.",
    ],
    correctAnswers: [1],
    explanation:
      "Auto Scaling allows applications to scale up or down based on demand, optimizing costs and performance. [Reference](https://aws.amazon.com/autoscaling/).",
  },
  {
    id: "aws-question-1511",
    text: "Which AWS service or feature can be used to prevent SQL injection attacks?",
    options: ["Security groups", "Network ACLs", "AWS WAF", "IAM policy"],
    correctAnswers: [2],
    explanation:
      "AWS WAF helps protect web applications from SQL injection attacks and other common vulnerabilities. [Reference](https://docs.aws.amazon.com/waf/latest/developerguide/classic-web-acl-sql-conditions.html).",
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
  {
    id: 23,
    title: "Practice Exam 23",
    slug: "aws",
    subtitle: `${exam23.length} Questions`,
    description: "Test your knowledge of AWS management services.",
    categoryId: "aws-management",
    category: "AWS Management",
    exam: exam23,
  },
];
