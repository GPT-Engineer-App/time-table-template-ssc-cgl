import { useState } from "react";
import { Container, VStack, HStack, Text, Checkbox, Input, Button, Box, IconButton } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const topics = ["Quantitative Aptitude", "General Awareness", "English Comprehension", "General Intelligence and Reasoning", "Current Affairs", "Data Interpretation", "Geometry", "Trigonometry", "Algebra", "Mensuration"];

const Index = () => {
  const [timeAllocations, setTimeAllocations] = useState({});
  const [customTopic, setCustomTopic] = useState("");
  const [customTopics, setCustomTopics] = useState([]);

  const handleTimeChange = (topic, time) => {
    setTimeAllocations((prev) => ({ ...prev, [topic]: time }));
  };

  const handleAddCustomTopic = () => {
    if (customTopic.trim()) {
      setCustomTopics((prev) => [...prev, customTopic.trim()]);
      setCustomTopic("");
    }
  };

  const handleRemoveCustomTopic = (topic) => {
    setCustomTopics((prev) => prev.filter((t) => t !== topic));
    setTimeAllocations((prev) => {
      const newAllocations = { ...prev };
      delete newAllocations[topic];
      return newAllocations;
    });
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl" fontWeight="bold">
          SSC CGL Exam Time Table
        </Text>
        {topics.map((topic) => (
          <HStack key={topic} width="100%" justifyContent="space-between">
            <Checkbox>{topic}</Checkbox>
            <Input placeholder="Time (in hours)" width="30%" value={timeAllocations[topic] || ""} onChange={(e) => handleTimeChange(topic, e.target.value)} />
          </HStack>
        ))}
        {customTopics.map((topic) => (
          <HStack key={topic} width="100%" justifyContent="space-between">
            <Checkbox>{topic}</Checkbox>
            <Input placeholder="Time (in hours)" width="30%" value={timeAllocations[topic] || ""} onChange={(e) => handleTimeChange(topic, e.target.value)} />
            <IconButton aria-label="Remove topic" icon={<FaTrash />} size="sm" onClick={() => handleRemoveCustomTopic(topic)} />
          </HStack>
        ))}
        <HStack width="100%">
          <Input placeholder="Add custom topic" value={customTopic} onChange={(e) => setCustomTopic(e.target.value)} />
          <IconButton aria-label="Add topic" icon={<FaPlus />} onClick={handleAddCustomTopic} />
        </HStack>
        <Button colorScheme="blue" onClick={() => console.log(timeAllocations)}>
          Save Time Table
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
