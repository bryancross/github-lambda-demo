aws s3api list-buckets --query "Buckets[].Name" | grep temp-serverless | tr -d '"' | tr -d ',' | tr -d ' ' > deadbuckets.txt
while read line
do
	awscmd="aws s3 rb --force "\""s3://${line}"\"""
	eval $awscmd
done < deadbuckets.txt
if [ -e deadbuckets.txt ]
then
	rm deadbuckets.txt
fi


